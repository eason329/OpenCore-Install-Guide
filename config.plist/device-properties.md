# DeviceProperties

裝置配置通過一個名為 `EfiDevicePathPropertyDatabase` 的專用緩衝區提供給 macOS。此緩衝區是 DevicePaths 到屬性名稱及其值的映射的序列化映射。

裝置屬性是 macOS I/O 註冊表的 `IODeviceTree (gIODT)` 平面的一部分。此平面有幾個與平台初始化相關的建造階段。雖然早期構建階段是由 XNU 內核在 `IODeviceTreeAlloc` 方法中執行的，但大部分構建是由平台專家執行的，並在 `AppleACPIPlatformExpert.kext` 中實現。

目前，我們將主要使用此部分來修補 Intel CPU 的 iGPU。請不要嘗試注入你不知道的值。

::: warning 注意
下面列出的大多數影格緩衝修補是讓 iGPU 和硬體加速正常工作的最低配置。如果你的顯示輸出無法正常工作，你可能需要更改 `AAPL,ig-platform-id` 和／或使用 Hackintool 加入顯示連接器數據並遵循一般的[影格緩衝修補指南](https://www.tonymacx86.com/threads/guide-general-framebuffer-patching-guide-hdmi-black-screen-problem.269149/)。

有關更多影格緩衝選項，請參閱 WhateverGreen 的 [**Intel HD 常見問題解答**](https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.IntelHD.en.md)。但請注意，這些常見問題解答中的影格緩衝資料是以 Big Endian 形式提供的，你不能按原樣使用它 – 因為你必須首先[**將其轉換為 Little Endian**](https://www.save-editor.com/tools/wse_hex.html#littleendian)！

:::

[[toc]]

## Add

從映射中設定裝置屬性。請根據你使用的平台進行設定。

當你設定 iGPU 參數時，請參閱下面對一些參數的解釋:

* **AAPL,ig-platform-id**
  * 這是用於在系統內設定 iGPU
  * 在 Sandy Bridge 中，你應該設定 `AAPL,snb-platform-id`
* **類型**
  * 表示該值是否推薦用於筆記型電腦（有內置顯示器）或英特爾 NUC（一個盒子，類似 Mac mini）

**註**：如果你在啟動後沒有圖形加速（7MB VRAM 和底座的純色背景），那麼您可能需要嘗試不同的 `AAPL,ig-platform-id` 參數，加入圖形記憶體修補，甚至加入 `device-id` 屬性。

::: tip 注意

VGA 在一般情況下都是 **不支援** 的。（除非它是通過內置 DP 轉 VGA 適配器運行的，顯然只有極少數裝置會將其視為 DP 而不是 VGA，這完全是在碰運氣。）

:::

### 通用

::: tip PciRoot(0x0)/Pci(0x1b,0x0)

`layout-id`

* 用於 AppleALC 的音訊硬體資訊的注入，你需要找出你的主板使用的編解碼器，並將其與 AppleALC 的佈局匹配。[查看 AppleALC 支援的編解碼器](https://github.com/acidanthera/AppleALC/wiki/Supported-codecs).
* 現在，我們會使用開機參數 `alcid=xxx` 來完成此操作。`alcid` 將覆蓋這個 layout-ID 屬性。
* 因此，你可以直接刪除這個屬性，我們還沒有需要使用它。

更多訊息請參閱[安裝後完善指南](https://eason329.github.io/OpenCore-Post-Install/)

:::

::: tip PciRoot(0x0)/Pci(0x2,0x0)

macOS 需要至少 64MB 的 DVMT 才能正常開機。但許多電腦的預設 DVMT 只有 32MB，在這種情況下，系統可能會出現內核錯誤。如果你的系統無法從 UEFI BIOS 設定中更改 iGPU 圖形記憶體和 DVMT 等相關設定，你需要在這個屬性中加入 `framebuffer-patch-enable`、`framebuffer-stolenmem` 和 `framebuffer-fbmem` 參數（但不是所有電腦都需要加入全部參數）。詳情請見下表：

| Key | Type | Value |
| :--- | :--- | :--- |
| framebuffer-patch-enable | Data | `01000000` |
| framebuffer-stolenmem | Data | `00003001` |
| framebuffer-fbmem | Data | `00009000` |

* **注意**：使用 dGPU 或 AMD Vega iGPU 驅動顯示器（即 Headless framebuffer）便不需要設定這些參數。

示例：

| Key | Type | Value |
| :--- | :--- | :--- |
| AAPL,ig-platform-id | Data | `00001219` |
| framebuffer-patch-enable | Data | `01000000` |
| framebuffer-stolenmem | Data | `00003001` |
| framebuffer-fbmem | Data | `00009000` |
| device-id | Data | `1B190000` |

（這是一個桌面平台的 HD P530，沒有使用 dGPU，和未在 BIOS 設定 iGPU 記憶體的例子）

:::

### Intel 桌面平台

#### Yonah, Conroe 和 Penryn

::: tip PciRoot(0x0)/Pci(0x2,0x0)

這些平台的 iGPU 設定由[另一個指南](https://eason329.github.io/OpenCore-Post-Install/gpu-patching/legacy-intel/)指供。這些用戶應該暫時略過這裡。

:::

#### Lynnfield 和 Clarkdale

::: tip PciRoot(0x0)/Pci(0x2,0x0)

不幸地，macOS 不支援這些平台使用的 Iron Lake iGPU。這些用戶應該略過這裡。

:::

#### Sandy Bridge

::: tip PciRoot(0x0)/Pci(0x2,0x0)

macOS 於此平台使用 `AAPL,snb-platform-id` 來確定 iGPU 驅動程式如何與我們的系統交互，可以選擇的兩個值如下：

| AAPL,snb-platform-id | 說明 |
| :--- | :--- |
| **`10000300`** | 以桌面 iGPU 來驅動顯示器時使用 |
| **`00000500`** | 以桌面 iGPU 來進行計算任務而不驅動顯示器時使用 |

我們還需要一個支援的 device-id，就像上面的表一樣，你需要與你的硬體配置匹配：

| device-id | 說明 |
| :--- | :--- |
| **`26010000`** | 以桌面 iGPU 來驅動顯示器時使用 |
| **`02010000`** | 以桌面 iGPU 來進行計算任務而不驅動顯示器時使用 |

最後，你應該有類似下表的內容：

| Key | Type | Value |
| :--- | :--- | :--- |
| AAPL,snb-platform-id | Data | `00000500` |
| device-id | Data | `26010000` |

（這是一個桌面平台的 HD 3000，並使用 dGPU 作為輸出的例子）

:::

::: tip PciRoot(0x0)/Pci(0x16,0x0)

如果你在 7 系列主板（如：B75, Q75, Z75, H77, Q77, Z77）使用 Sandy Bridge CPU 的話便需要設定這個屬性。因為需要利用 IMEI 裝置來欺騙系統，使你的硬體組合可被支援。無論有沒有 SSDT-IMEI，你也必須要設定本屬性。

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `3A1C0000` |

**註**：如果你使用 6 系列主板（如：H61, B65, Q65, P67, H67, Q67, Z68）則無需加入

:::

#### Ivy Bridge

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | 說明 |
| :--- | :--- |
| **`0A006601`** | 以桌面 iGPU 來驅動顯示器時使用 |
| **`07006201`** | 以桌面 iGPU 來進行計算任務而不驅動顯示器時使用 |

示例：

| Key | Type | Value |
| :--- | :--- | :--- |
| AAPL,ig-platform-id | Data | `0A006601` |

（這是一個桌面平台的 HD 4000，而沒有使用 dGPU 的例子）

:::

::: tip PciRoot(0x0)/Pci(0x16,0x0)

如果你在 6 系列主板（如：H61, B65, Q65, P67, H67, Q67, Z68）使用 Ivy Bridge CPU 的話便需要設定這個屬性。因為需要利用 IMEI 裝置來欺騙系統，使你的硬體組合可被支援。無論有沒有 SSDT-IMEI，你也必須要設定本屬性。

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `3A1E0000` |

**註**：如果你使用 7 系列主板（如：B75, Q75, Z75, H77, Q77, Z77）則無需加入

:::

#### Haswell 和 Broadwell

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們可以按需要，使用以下其中一個的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | 說明 |
| :--- | :--- |
| **`0300220D`** | 以桌面 Haswell iGPU 來驅動顯示器時使用 |
| **`04001204`** | 以桌面 Haswell iGPU 來進行計算任務而不驅動顯示器時使用 |
| **`07002216`** | 以桌面 Broadwell iGPU 來驅動顯示器時使用 |

對於使用 macOS 不支援的 HD 4600 用戶，你需要加入以下 device-id：

| device-id | 說明 |
| :--- | :--- |
| **`12040000`** | 使用 macOS 不支援的 HD 4600 時使用 |

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

:::

#### Skylake

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們可以按需要，使用以下其中一個的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | 說明 |
| :--- | :--- |
| **`00001219`** | 以桌面 iGPU 來驅動顯示器時使用 |
| **`01001219`** | 以桌面 iGPU 來進行計算任務而不驅動顯示器時使用 |

對於使用 macOS 不支援的 P530 用戶，你需要加入以下 device-id：

| device-id | 說明 |
| :--- | :--- |
| **`1B190000`** | 使用 macOS 不支援的 P530 時使用 |

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

:::

#### Kaby Lake

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們可以按需要，使用以下其中一個的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | 說明 |
| :--- | :--- |
| **`00001259`** | 以桌面 iGPU 來驅動顯示器時使用 |
| **`03001259`** | 以桌面 iGPU 來進行計算任務而不驅動顯示器時使用 |

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

* 註：在本系統中，你無需設定 `framebuffer-fbmem` 參數。

:::

#### Coffee Lake

::: tip PciRoot(0x0)/Pci(0x2,0x0)

**如果你使用的是帶 `-F` 後綴的 CPU，則你的 CPU 沒有 iGPU。因此，你可以略過這裡。**

我們可以按需要，使用以下其中一個的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | 說明 |
| :--- | :--- |
| **`07009B3E`** | 以桌面 iGPU 來驅動顯示器時使用 |
| **`00009B3E`** | `07009B3E` 無法正常工作時的替代 |
| **`0300913E`** | 以桌面 iGPU 來進行計算任務而不驅動顯示器時使用 |

* **Note**: 在 macOS 10.15.5 和更新版本中，`07009B3E` 可能會導致黑畫面問題，如果你遇到相似問題，則可以嘗試轉用 `00009B3E`

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

* 註：在本系統中，你無需設定 `framebuffer-fbmem` 參數。

:::

#### Comet Lake

::: tip PciRoot(0x0)/Pci(0x2,0x0)

**如果你使用的是帶 `-F` 後綴的 CPU，則你的 CPU 沒有 iGPU。因此，你可以略過這裡。**

我們可以按需要，使用以下其中一個的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | 說明 |
| :--- | :--- |
| **`07009B3E`** | 以桌面 iGPU 來驅動顯示器時使用 |
| **`00009B3E`** | `07009B3E` 無法正常工作時的替代 |
| **`0300913E`** | 以桌面 iGPU 來進行計算任務而不驅動顯示器時使用 |

* **Note**: 在 macOS 10.15.5 和更新版本中，`07009B3E` 可能會導致黑畫面問題，如果你遇到相似問題，則可以嘗試轉用 `00009B3E`

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

* 註：在本系統中，你無需設定 `framebuffer-fbmem` 參數。

:::

### Intel 高端桌面平台（HEDT）

![DeviceProperties](../images/config/config-universal/DP-no-igpu.png)

#### Sandy Bridge-E 和 Ivy Bridge-E

::: tip PciRoot(0x0)/Pci(0x1,0x1)/Pci(0x0,0x0)

這一條目是關於可在許多 Intel 和 Supermicro 服務器主板，以及一些 Intel 服務器 PCIe 適配器找到的 Intel I350 控制器。這裡我們要做的就是讓蘋果的 I210 驅動程式支援我們的 I350 網絡控制器：

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `33150000` |

* **備註 1**：如果你的主板沒有內置I350 NIC，則不需要加入此條目。
* **備註 2**：如果 AppleIntelI210Ethernet kext 出現內核錯誤，或者不是所有的適配器都顯示出來，你可能需要為每個適配器編輯或加入額外的 PciRoot 屬性。

:::

#### 其他（未列出的）系統

這些屬性目前對這些系統沒有作用，你應該刪除這裡的所有屬性。

### Intel 筆記型電腦平台

#### Clarksfield 和 Arrandale

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的值：

| Property | Type | Value |
| :--- | :--- | :--- |
| framebuffer-patch-enable | Data | `01000000` |
| framebuffer-singlelink | Data | `01000000` |

* **注意**: 蘋果的 Iron Lake 驅動程式只支援 LVDS 顯示，不支援 eDP

:::

#### Sandy Bridge

::: tip PciRoot(0x0)/Pci(0x2,0x0)

macOS 於此平台使用 `AAPL,snb-platform-id` 來確定 iGPU 驅動程式如何與我們的系統交互，可以選擇的兩個值如下：

| AAPL,snb-platform-id | 類型 | 說明 |
| :--- | :--- |
| **`00000100`** | 筆記型電腦 | 用於筆記型電腦 |
| **`10000300`** | NUC | 用於 Intel NUC |

* 注意: 不支援 HD 2000 系列

對於解析度為 1600x900 或更高的筆記型電腦顯示屏，有必要增加一個額外條目，讓 macOS 知道我們正在使用 DualLink 顯示屏。

| Key | Type | Value |
| :--- | :--- | :--- |
| AAPL00,DualLink | Data | `01000000` |

:::

::: tip PciRoot(0x0)/Pci(0x16,0x0)

這個時代的一些筆記型電腦配備了混合芯片組，例如使用 Sandy Bridge CPU 和 Ivy Bridge 芯片組，這會導致 macOS 出現問題，因為它需要某個 [IMEI](https://en.wikipedia.org/wiki/Intel_Management_Engine) ID，如果系統找不到，則會在啟動時卡住（因為蘋果的 iGPU 驅動程式需要 [IMEI 裝置](https://en.wikipedia.org/wiki/Intel_Management_Engine)），要解決此問題，我們需要為這些型號偽造 IMEI ID。

* 註：如要知道你是否受影響，你可以在一些如 AIDA64 的工具程式中檢查你的 CPU 是否為 Intel Core ix-3xxx，而芯片組卻是 Hx6x（如：一部配備 HM65 或 HM67 芯片組和 Core i3-3110M CPU 的筆記型電腦）。

現在，請在你的配置中加入一個名為 `PciRoot(0x0)/Pci(0x16,0x0)` 的新 PciRoot 設備。

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `3A1C0000` |

:::

#### Ivy Bridge

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | 類型 | 說明 |
| ------------------- | ---- | ------- |
| **`03006601`** | 筆記型電腦 | 適用於 **1366 by 768** 或以下解析度的顯示屏 |
| **`04006601`** | 筆記型電腦 | 適用於 **1600 by 900** 或以上解析度的顯示屏<br/>你需要加入下面的**額外修補**部分 |
| **`09006601`** | 筆記型電腦 | 適用於連接至 `eDP` 顯示器的裝置（有別於傳統的 LVDS）<br/>在使用這個值前，必須先測試 **03006601** 和 **04006601**。 |
| **`0B006601`** | NUC | 適用於 Intel NUC |

:::

::: tip 額外修補

如果你打算使用 `04006601` 作為 ig-platform-id，你可能需要加入以下參數。這些是用於修正外置顯示的問題，否則你只會有一個輸出。（感謝 Rehabman）

| Key | Type | Value | 說明 |
| :--- | :--- | :--- | :--- |
| `framebuffer-patch-enable` | Number | `1`         | *原理上啟用語義修補*（來自 WhateverGreen 手冊） |
| `framebuffer-memorycount`  | Number | `2`         | 將 FBMemoryCount 匹配到 `03006601` 上的值（`04` 為 1，`03` 為 2） |
| `framebuffer-pipecount`    | Number | `2`         | 將 PipeCount 匹配到 `03006601` 上的值（`04` 為 3，`03` 為 2） |
| `framebuffer-portcount`    | Number | `4`         | 將 PortCount 匹配到 `03006601` 上的端口（`04` 為 1，`03` 為 4） |
| `framebuffer-stolenmem`    | Data   | `00000004`  | 將圖形記憶體設定為 64MB（0x04000000，從十六進制到十進制字節）並匹配到 `03006601` 的記憶體<br />查看[這裡](https://www.tonymacx86.com/threads/guide-alternative-to-the-minstolensize-patch-with-32mb-dvmt-prealloc.221506/)了解更多資訊。 |
| `framebuffer-con1-enable`  | Number | `1`         | 在驅動程式的 *連接器 1* 上啟用修補。(指 con0 以後的第二個連接器，一般是 eDP/LVDS 連接器) |
| `framebuffer-con1-alldata` | Data | `02050000 00040000 07040000 03040000 00040000 81000000 04060000 00040000 81000000` | 當使用連接器的 `all data` 時，要麼提供該連接器的所有資訊（port-bused-type-flag），要麼提供該連接埠及其後面的資訊，就像本例一樣。<br />這種情况下，`04` 中的連接埠被限制為 `1`:<br />`05030000 02000000 30020000`（對應連接埠 5，即 LVDS）<br />但是在 `03` 上有 3 個額外的連接埠:<br />`05030000 02000000 30000000` (LVDS, con0，類似於 `04`)<br/>`02050000 00040000 07040000` (DP, con1)<br/>`03040000 00040000 81000000` (DP, con2)<br/>`04060000 00040000 81000000` (DP, con3)<br />由於我們要將平台上 PortCount 的數量從只有 1 更改為 `4`，這意味著我們需要定義其他 3 個（要從 con1 開始直到結束)。 |

:::

::: tip PciRoot(0x0)/Pci(0x16,0x0)

這個時代的一些筆記型電腦配備了混合芯片組，例如使用 Sandy Bridge CPU 和 Ivy Bridge 芯片組，這會導致 macOS 出現問題，因為它需要某個 [IMEI](https://en.wikipedia.org/wiki/Intel_Management_Engine) ID，如果系統找不到，則會在啟動時卡住（因為蘋果的 iGPU 驅動程式需要 [IMEI 裝置](https://en.wikipedia.org/wiki/Intel_Management_Engine)），要解決此問題，我們需要為這些型號偽造 IMEI ID。

* 註：如要知道你是否受影響，你可以在一些如 AIDA64 的工具程式中檢查你的 CPU 是否為 Intel Core ix-3xxx，而芯片組卻是 Hx6x（如：一部配備 HM65 或 HM67 芯片組和 Core i3-3110M CPU 的筆記型電腦）。

現在，請在你的配置中加入一個名為 `PciRoot(0x0)/Pci(0x16,0x0)` 的新 PciRoot 設備。

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `3A1C0000` |

:::

#### Haswell

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | Type | Comment |
| ------------------- | ---- | ------- |
| **`0500260A`** | 筆記型電腦 | 主要用於 HD 5000, HD 5100 and HD 5200 |
| **`0600260A`** | 筆記型電腦 | 主要用於 HD 4200, HD 4400 and HD 4600<br/>請同時參閱下面 `device-id` 部分 |
| **`0300220D`** | NUC | 主要用於所有 Haswell NUC<br/>HD 4200/4400/4600 用戶請同時參閱下面 `device-id` 部分 |

除了 AAPL,ig-platform-id，你可能需要加入游標位元組大小的修補（從 6MB (00006000) 到 9MB），用來解決一些故障：

| Key | Type | Value |
| :--- | :--- | :--- |
| framebuffer-patch-enable | Data | `01000000` |
| framebuffer-cursormem | Data | `00009000` |

* HD 4200, HD 4400 和 HD 4600 的用戶**需要**加入以下 `device-id`：

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `12040000` |

:::

#### Broadwell

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | Type | Comment |
| ------------------- | ---- | ------- |
| **`06002616`** | 筆記型電腦 | 用於 Broadwell 筆記型電腦的建議值 |
| **`02001616`** | NUC | 用於 Broadwell NUC 的建議值 |

* HD 5600 的用戶**需要**加入以下 `device-id`：

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | data | 26160000

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

:::

#### Skylake

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | Type | 說明 |
| ------------------- | ---- | ------- |
| **`00001619`** | 筆記型電腦 | 用於 HD 515, HD 520, HD 530, HD 540, HD 550 和 P530 的建議值 |
| **`00001E19`** | 筆記型電腦 | 用於 HD 515 的替代值（如上面的值會造成問題） |
| **`00001B19`** | 筆記型電腦 | 用於 HD 510 的建議值 |
| **`00001E19`** | NUC | 用於 HD 515 的建議值 |
| **`02001619`** | NUC | 用於 20/530 的建議值 |
| **`02002619`** | NUC | 用於 HD 540/550 的建議值 |
| **`05003B19`** | NUC | 用於 HD 580 的建議值 |

* HD 510 的用戶**需要**加入以下 `device-id`：
  
| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `02190000` |

* HD 550 和 P530 的用戶**需要**加入以下 `device-id`：
  * 所有 HD P 系列 iGPU 的用戶都可能需要。

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `16190000` |

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

:::

#### Kaby Lake

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | Type | 說明 |
| ------------------- | ---- | ------- |
| **`00001B59`** | 筆記型電腦 | 用於 HD 615, HD 620, HD 630, HD 640 and HD 650 的建議值 |
| **`00001659`** | 筆記型電腦 | `00001B59` 的替代值（如果有硬體加速問題）<br/>用於 HD 和 UHD 620 NUC 的建議值 |
| **`0000C087`** | 筆記型電腦 | 用於 Amber Lake 的 UHD 617 和 Kaby Lake-R 的 UHD 620 的建議值 |
| **`00001E59`** | NUC | 用於 HD 615 的建議值 |
| **`00001B59`** | NUC | 用於 HD 630 的建議值 |
| **`02002659`** | NUC | 用於 HD 640/650 的建議值 |

* UHD 620（Kaby Lake-R）的用戶**需要**加入以下 `device-id`：

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `16590000` |

* HD 6xx 用戶（不包括 UHD 6xx）可能會遇到一些輸出問題，其中插入外置顯示器可能导致電腦當機（發生內核錯誤）；這裡有一些修補可以緩解這種情況（感謝 RehabMan）。如果你遇到相關的當機問題，可以试试下面的修補方法（兩種都要試，但一次只能嘗試一組）：
  * con1 as 105, con2 as 204, both HDMI

    | Key | Type | Value |
    | :--- | :--- | :--- |
    | framebuffer-con1-enable | Data | `01000000` |
    | framebuffer-con1-alldata | Data | `01050A00 00080000 87010000` |
    | framebuffer-con2-enable | Data | `01000000` |
    | framebuffer-con2-alldata | Data | `02040A00 00080000 87010000` |

  * con1 as 105, con2 as 306, HDMI and DP

    | Key | Type | Value |
    | :--- | :--- | :--- |
    | framebuffer-con1-enable | Data | `01000000` |
    | framebuffer-con1-alldata | Data | `01050A00 00080000 87010000` |
    | framebuffer-con2-enable | Data | `01000000` |
    | framebuffer-con2-alldata | Data | `03060A00 00040000 87010000` |

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

::: details 詳細解釋

讓我們考慮這兩個常見的 framebuffer：

* `00001B59` 包含以下 BusID 資訊：

  ```
  [0] busId: 0x00, pipe: 8, type: 0x00000002, flags: 0x00000098 - ConnectorLVDS
  [2] busId: 0x04, pipe: 10, type: 0x00000800, flags: 0x00000187 - ConnectorHDMI
  [3] busId: 0x06, pipe: 10, type: 0x00000400, flags: 0x00000187 - ConnectorDP
  00000800 02000000 98000000
  02040A00 00080000 87010000
  03060A00 00040000 87010000
  ```

* `00001659` 包含以下 BusID 資訊：

  ```
  [0] busId: 0x00, pipe: 8, type: 0x00000002, flags: 0x00000098 - ConnectorLVDS
  [1] busId: 0x05, pipe: 9, type: 0x00000400, flags: 0x00000187 - ConnectorDP
  [2] busId: 0x04, pipe: 10, type: 0x00000800, flags: 0x00000187 - ConnectorHDMI
  00000800 02000000 98000000
  01050900 00040000 87010000
  02040A00 00080000 87010000
  ```

它們乍看之下很相似，直到您看到像 Port ID 這樣的小細節（每個十六進制列的前 2 位數字）。這兩個 framebuffer 都是有效的，但不是所有 OEM 在所有筆記型電腦上都提供相同的連接埠配置(有些電腦的內置顯示使用了 eDP，有些則配置 HDMI 而不是 DP 連接埠，有些則有 VGA 等等)。

對於任何一個 framebuffer，第一個連接埠（連接埠 00）都是 ConnectorLVDS（表示內部顯示器），這在兩種配置上是相同的，這就是在 macOS 取得顯示的方式。不同之處在於其他兩個連接埠:

* `00001B59`

```
02040A00 00080000 87010000 -->
[2] busId: 0x04, pipe: 10, type: 0x00000800, flags: 0x00000187 - ConnectorHDMI

03060A00 00040000 87010000 -->
[3] busId: 0x06, pipe: 10, type: 0x00000400, flags: 0x00000187 - ConnectorDP
```

* `00001659`

```
01050900 00040000 87010000 -->
[1] busId: 0x05, pipe: 9, type: 0x00000400, flags: 0x00000187 - ConnectorDP

02040A00 00080000 87010000 -->
[2] busId: 0x04, pipe: 10, type: 0x00000800, flags: 0x00000187 - ConnectorHDMI
```

這些修補會帶來以下效果：

* 修補組合 1：
  * 將連接埠的第二個連接器轉換為 0105，這是 HDMI 連接器的類型
  * 將連接埠的第三個連接器轉換為 0204，這是 HDMI 連接器的類型
* 修補組合 2：
  * 將連接埠的第二個連接器轉換為 0105，這是 HDMI 連接器的類型
  * 將連接埠的第三個連接器轉換為 0306，這是 DP 連接器的類型

根據你的實際硬體配置，你可能要改變上述參數，但通常對於大多數筆記型電腦來說，你可能需要使用兩個修補組合的其中一個，如果你的輸出可以正常使用，且沒有問題或崩潰，那麼你就不需要這些修補。

::: details 如何讀取 BusID

十六進制字串的位元值會按以下方式讀取：

（以 `01050900 00040000 87010000` 為例）

| Bit | 名稱 | 值 |
| :--- | :--- | :--- |
| Bit 1 | Port | `01` |
| Bit 2 | Bus ID | `05` |
| Bit 3-4 | Pipe Number | `0900` |
| Bit 5-8 | Connector Type | `00040000` |
| Bit 9-12 | Flags | `87010000` |

:::

#### Coffee Lake 和 Whiskey Lake

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | Type | 說明 |
| ------------------- | ---- | ------- |
| **`0900A53E`** | 筆記型電腦 | 用於 UHD 630 |
| **`00009B3E`** | 筆記型電腦 | 用於 UHD 620 |
| **`07009B3E`** | NUC | 用於 620/630 |
| **`0000A53E`** | NUC | 用於 UHD 655 |

內置 UHD 620 的 Coffee Lake CPU，或者硬體 ID 不是 `0x3E9B` 的 UHD 630 **需要**加入以下 device-id：

* 如果你不肯定你的 iGPU 型號，可以在 Windows 的裝置管理員中檢查。開啟「內容」頁面，按 "詳情" 標籤頁，再按 "硬體 ID" 欄位來查閱。

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `9B3E0000` |

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

:::

#### Coffee Lake Plus 和 Comet Lake

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | 類型 | 說明 |
| ------------------- | ---- | ------- |
| **`0900A53E`** | 筆記型電腦 | 用於 UHD 630 |
| **`00009B3E`** | 筆記型電腦 | 用於 UHD 620 |
| **`07009B3E`** | NUC | 用於 UHD 620/630 |
| **`0000A53E`** | NUC | 用於 UHD 655 |

內置 UHD 620 的 Comet Lake CPU，或者硬體 ID 不是 `0x3E9B` 的 UHD 630 **需要**加入以下 device-id：

* 如果你不肯定你的 iGPU 型號，可以在 Windows 的裝置管理員中檢查。開啟「內容」頁面，按 "詳情" 標籤頁，再按 "硬體 ID" 欄位來查閱。

| Key | Type | Value |
| :--- | :--- | :--- |
| device-id | Data | `9B3E0000` |

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

:::

#### Icelake

::: tip PciRoot(0x0)/Pci(0x2,0x0)

我們會使用以下的 `AAPL,ig-platform-id`：

| AAPL,ig-platform-id | Port Count | 說明 |
| ------------------- | ---------- | ------- |
| **`0000528A`** | 6 | 建議用於的 G4/G7 的值 |

另外，你需要在 UEFI BIOS 設定中將預分配的 DVMT 更改為 64MB，如果你無法更改，請參閱[這個教學](#通用)。

:::

### AMD 平台

這些屬性目前對 AMD 平台沒有作用，你應該刪除這裡的所有屬性。

## Delete

這裡將移除某些裝置屬性。我們會略過這部分。

# 完成此部分後，請[編輯 Kernel 部分](kernel.md)
