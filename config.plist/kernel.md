# Kernel

Kernel（內核）是指操作系統中首先載入的部分。 它控制和監視記憶體、CPU 處理器分配和磁碟等硬體資源。由於 hackintosh 的性質，我們需要注入 (**K**ernel **Ext**ensions) 來修補 macOS 以確保能正確啟動。

與 ACPI 不同，這些補丁很大程度上只適用於 macOS。

此部分允許在 Apple Kernel (XNU) 上套用不同類型的內核空間修改。目前可用的的修改包括驅動程式 (kext) 注入、內核和驅動程式修補以及阻止驅動程式執行。

內核和 kext 修改會循以下順序執行：

* 處理 `Block`
* 處理 `Add` 和 `Force`
* 處理 `Emulate` 和 `Quirks`
* 處理 `Patch`

## Add

在這裡，我們將指定要載入哪些 kext，載入的次序，及 kext 適用的架構。預設情況下，我們建議保留 ProperTree 所做的操作，但對於 32 位元 CPU，請參見以下内容：

::: details 更深入的資訊

你需要記住的主要事項：

* 載入次序
  * 請記住，任何插件都應該在其依賴項**以後**才載入
  * 這意味著像 Lilu 這樣的 kext 必須出現在 VirtualSMC、AppleALC、WhateverGreen 等插件之前

提醒：[ProperTree](https://github.com/corpnewt/ProperTree) 用戶可以執行 **Cmd/Ctrl + Shift + R** 以正確的次序加入所有 kext 而無需手動輸入。

* **Arch**
  * Kext 支援的架構
  * 目前支援的值包括 `Any`、`i386`（32 位元）及 `x86_64`（64位元）
* **BundlePath**
  * Kext 的名稱
  * 例：`Lilu.kext`
* **Enabled**
  * 不必多做解釋了，就是啟用或停用 kext
* **ExecutablePath**
  * 隱藏在 kext 中的實際可執行文件的路徑，您可以通過點擊右鍵並選擇`顯示套裝內容`來查看 kext 的路徑。它們一般都是 `Contents/MacOS/Kext`，但有些 kext 將可執行文件隱藏在 `Plugin` 資料夾下。注意，只包含 plist 的 kext 不需要填寫該屬性。
  * 例：`Contents/MacOS/Lilu`
* **MinKernel**
  * Kext 可被注入的最低内核版本，有關可用的值，請參見下表
  * 例：`12.00.00`（OS X 10.8）
* **MaxKernel**
  * Kext 可被注入的最高内核版本，有關可用的值，請參見下表
  * 例：`11.99.99`（OS X 10.7）
* **PlistPath**
  * 隱藏在 kext 中的 info.Plist 的路徑
  * 例：`Contents/Info.plist`

### ::: details Kernel 版本號列表

| OS X 版本 | MinKernel | MaxKernel |
| :--- | :--- | :--- |
| 10.4 | 8.0.0 | 8.99.99 |
| 10.5 | 9.0.0 | 9.99.99 |
| 10.6 | 10.0.0 | 10.99.99 |
| 10.7 | 11.0.0 | 11.99.99 |
| 10.8 | 12.0.0 | 12.99.99 |
| 10.9 | 13.0.0 | 13.99.99 |
| 10.10 | 14.0.0 | 14.99.99 |
| 10.11 | 15.0.0 | 15.99.99 |
| 10.12 | 16.0.0 | 16.99.99 |
| 10.13 | 17.0.0 | 17.99.99 |
| 10.14 | 18.0.0 | 18.99.99 |
| 10.15 | 19.0.0 | 19.99.99 |
| 11 | 20.0.0 | 20.99.99 |
| 12 | 21.0.0 | 21.99.99 |
| 13 | 22.0.0 | 22.99.99 |

:::

## Emulate

用於隱藏不支援的 CPU 的資訊（如：Pentium 和 Celeron）來欺騙系統。

* 對於 Intel 平台，我們會保留預設值（或不用填寫）。

* 對於 AMD 平台，我們要啟用以下選項值：

| 選項值 | 是否啟用 |
| :--- | :--- |
| DummyPowerManagement | YES |

::: details 更深入的資訊

* **Cpuid1Mask**: 不用填寫
  * 欺騙 CPUID 的遮罩
* **Cpuid1Data**: 不用填寫
  * 欺騙 CPUID 的條目
* **DummyPowerManagement**: YES
  * NullCPUPowerManagement 最新的替代品，所有基於 AMD CPU 的電腦都需要啟用，因為 macOS 沒有針對 AMD CPU 的原生電源管理。
* **MinKernel**: 不用填寫
  * 可被注入的最低内核版本，如果沒有指定任何值則注入至所有 macOS 版本。有關可用的值，請參見[此列表](#kernel-版本號列表)
  * ex. `12.00.00`（OS X 10.8）
* **MaxKernel**: 不用填寫
  * 可被注入的最高内核版本，如果沒有指定任何值則注入至所有 macOS 版本。有關可用的值，請參見[此列表](#kernel-版本號列表)
  * ex. `11.99.99`（OS X 10.7）

:::

## Force

用於從系統磁碟區中載入 kext，只適用於某些在緩存中沒有特定 kext 的老舊操作系統（如：10.16 中的 IONetworkingFamily）。

對於我們來說，我們可以略過它。

## Block

這裡將阻止載入某些 kext，而我們目前無需理會這裡。

## Patch

同時修補內核和 kext。

* 對於 Intel 平台，我們會保留預設值（或不用填寫）。

* 對於 AMD 平台，這裡就是 AMD 內核修補表演的地方。請注意，如果你從 Clover 轉換至 OpenCore，則 Clover 的 `KernelToPatch` 和 `MatchOS` 在 OpenCore 會變為 `Kernel` 和 `MinKernel`/`MaxKernel`。

最新的 AMD 内核修補方案可以在 [AMD Vanilla GitHub 儲存庫](https://github.com/AMD-OSX/AMD_Vanilla)中找到。

現在，請將儲存庫下載至電腦。你會利用到儲存庫中的 patches.plist 檔案。

修補程序：

* 同時開啟 config.plist 及 patches.plist
* 刪除原本在 config.plist 的 `Kernel -> Patch` 部分
* 從 patches.plist 中複製 `Kernel -> Patch` 部分
* 貼上至 config.plist 中原有修補所在的位置

![](../images/config/AMD/kernel.gif)

接下來，你需要還需要修改四個補丁，它們都被命名為 `algrey - Force cpuid_cores_per_package`。你只需要改變以下 `Replace` 的值：

* `B8000000 0000` => `B8 <core count> 0000 0000`
* `BA000000 0000` => `BA <core count> 0000 0000`
* `BA000000 0090` => `BA <core count> 0000 0090`
* `BA000000 00` => `BA <core count> 0000 00`

其中 `<core count>` 應被替換為十六進制的 CPU **物理核心**數量。例如，一個 8 核的 5800X 處理器的數值是：

* `B8 08 0000 0000`
* `BA 08 0000 0000`
* `BA 08 0000 0090`
* `BA 08 0000 00`

::: details 核心數量 => 十六進制轉換表

| 核心數 | 十六進制值 |
| :--------- | :---------- |
| 2 Core | `02` |
| 4 Core | `04` |
| 6 Core | `06` |
| 8 Core | `08` |
| 12 Core | `0C` |
| 16 Core | `10` |
| 24 Core | `18` |
| 32 Core | `20` |
| 64 Core | `40` |

## Quirks

與內核相關的設定，我們將要根據平台啟用特定選項：

### Intel Desktop

#### Penryn, Clarkdale

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| AppleCpuPmCfgLock | NO | |
| AppleXcpmCfgLock | NO | |
| DisableIoMapper | YES | 如果在 BIOS 中停用了 `VT-D` 則可以停用 |
| LapicKernelPanic | NO | HP 品牌電腦則需要啟用這個選項 |
| PanicNoKextDump | YES | 10.12 及更新版本則不需要啟用 |
| PowerTimeoutKernelPanic | YES | 10.14 及更新版本則不需要啟用 |
| XhciPortLimit | YES | 如果你的主板沒有 USB 3.0，則可以停用它<br/>11.3 及更新版本則需要停用 |

#### Sandy Bridge, Ivy Bridge

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| AppleCpuPmCfgLock | YES | 如果在 BIOS 中停用了 `CFG-Lock` 則可以停用 |
| DisableIoMapper | YES | 如果在 BIOS 中停用了 `VT-D` 則可以停用 |
| LapicKernelPanic | NO | HP 品牌電腦則需要啟用這個選項 |
| PanicNoKextDump | YES | |
| PowerTimeoutKernelPanic | YES | |
| XhciPortLimit | YES | 如果你的主板沒有 USB 3.0，則可以停用它<br/>11.3 及更新版本則需要停用 |

#### Haswell 或更新平台

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| AppleXcpmCfgLock | YES | 如果在 BIOS 中停用了 `CFG-Lock` 則可以停用 |
| DisableIoMapper | YES | 如果在 BIOS 中停用了 `VT-D` 則可以停用 |
| LapicKernelPanic | NO | HP 品牌電腦則需要啟用這個選項 |
| PanicNoKextDump | YES | |
| PowerTimeoutKernelPanic | YES | |
| XhciPortLimit | YES | 11.3 及更新版本則需要停用 |

### Intel Laptop

#### Clarksfield, Arrandale, Sandy Bridge, Ivy Bridge

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| AppleCpuPmCfgLock |YES | 如果在 BIOS 中停用了 `CFG-Lock` 則可以停用 |
| DisableIoMapper | YES | 如果在 BIOS 中停用了 `VT-D` 則可以停用 |
| LapicKernelPanic | NO | HP 品牌電腦則需要啟用這個選項 |
| PanicNoKextDump | YES | |
| PowerTimeoutKernelPanic | YES | |
| XhciPortLimit | YES | 如果你的主板沒有 USB 3.0，則可以停用它<br/>11.3 及更新版本則需要停用 |

#### Haswell 或更新平台

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| AppleXcpmCfgLock | YES | 如果在 BIOS 中停用了 `CFG-Lock` 則可以停用 |
| DisableIoMapper | YES | 如果在 BIOS 中停用了 `VT-D` 則可以停用 |
| LapicKernelPanic | NO | HP 品牌電腦則需要啟用這個選項 |
| PanicNoKextDump | YES | |
| PowerTimeoutKernelPanic | YES | |
| XhciPortLimit | YES | 11.3 及更新版本則需要停用 |

### AMD

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| PanicNoKextDump | YES | |
| PowerTimeoutKernelPanic | YES | |
| ProvideCurrentCpuInfo | YES | |
| XhciPortLimit | YES | 11.3 及更新版本則需要停用 |

::: details 更深入的資訊

* **AppleCpuPmCfgLock**: YES
  * 只有無法從 BIOS 停用 CFG-Lock 的時候才需要
  * 只適用於 Ivy Bridge 或更老舊平台
    * 註：Broadwell 或更老舊平台在運行 10.10 或更老舊版本時需要啟用
* **AppleXcpmCfgLock**: YES
  * 只有無法從 BIOS 停用 CFG-Lock 的時候才需要
  * 只適用於 Haswell 或更新平台
    * 註：Ivy Bridge-E 平台也包括在內，因為該平台支援 XCPM
* **CustomSMBIOSGuid**: NO
  * 在 UpdateSMBIOSMode 設為 `Custom` 時進行 GUID 修補。通常與 Dell 筆記型電腦有關
  * 在 UpdateSMBIOSMode 自訂模式下啟用此選項時，可以同時將 SMBIOS 注入到「非蘋果」操作系統的功能停用，但我們不支持這種方法，因為它會破壞了 Bootcamp 的相容性。使用風險自負
* **DisableIoMapper**: YES
  * 如果在 BIOS 中無法停用或其他操作系統需要啟用 VT-D，則需要繞過 VT-D，這是比 `dart=0` 更好的替代方案，因為 SIP 可以在 Catalina 維持啟用
* **DisableLinkeditJettison**: YES
  * 允許 Lilu 和其他 kext 在不需要 `keepsyms=1` 的情況下擁有更可靠的性能
* **DisableRtcChecksum**: NO
  * 防止 AppleRTC 寫入主校驗碼 (0x58-0x59)，這對於接收到 BIOS 重置或在重新開機/關機後進入安全模式的用戶是必需的
* **ExtendBTFeatureFlags** NO
  * 對於那些非蘋果或非 fenvi 卡有連接問題的人很有幫助
* **LapicKernelPanic**: NO
  * 在 AP 核心 lapic 中斷上停用內核錯誤，一般 HP 系統需要啟用。相當於 Clover 的 Kernel LAPIC
* **LegacyCommpage**: NO
  * 解決了 macOS 中 64 位元 CPU 的 SSSE3 要求，主要適用於 64 位元 Pentium 4 CPU（即 Prescott）
* **PanicNoKextDump**: YES
  * 允許在發生內核嚴重故障時讀取內核嚴重故障日誌
* **PowerTimeoutKernelPanic**: YES
  * 幫助修復 macOS Catalina 中與蘋果驅動程式權限變化相關的內核錯誤，尤其是與數字音訊有關的問題。
* **SetApfsTrimTimeout**: `-1`
  * 為 SSD 上的 APFS 檔案系統設定以微秒為單位的 TRIM 超時時間，只適用於 macOS 10.14 及更新版本和有相關問題的 SSD。
* **XhciPortLimit**: YES
  * 這是 15 個連接埠限制的修補程式，不要依賴它，因為它不是一個保證修復 USB 連接埠的解決方案。如果可以的話，請建立一個[USB 映射表](https://dortania.github.io/OpenCore-Post-Install/usb/)。
  * 在 macOS 11.3 及更新版本中, [XhciPortLimit 可能無法正常工作](https://github.com/dortania/bugtracker/issues/162)。我們建議用戶在升級前停用此選項值並進行映射，或是[從 Windows 映射](https://github.com/USBToolBox/tool)。你也可以安裝 macOS 11.2.3 或更舊的版本。

:::

## Scheme

與傳統 BIOS 開機（如：10.4-10.6）相關的設定，大多數的用戶都可以略過。但對於計劃啟動老舊操作系統的人，你可以查看以下内容：

::: details 更深入的資訊

* **FuzzyMatch**: True
  * 用於略過 kernelcache 的校驗碼，而不是選擇可用的最新緩存。可以幫助提高許多使用 10.6 系統的電腦的啟動性能
* **KernelArch**: x86_64
  * 設定內核的架構類型, 你可以在 `Auto`, `i386`（32 位元）和 `x86_64`（64 位元）之間選擇。
  * 如果你要啟動需要 32 位元的舊版操作系統（如：10.4 和 10.5），我們建議將其設置為 `Auto`，讓 macOS 根據您的 SMBIOS 決定。支援的值請見下表：
    * 10.4-10.5 — `x86_64`, `i386` 或 `i386-user32`
      * `i386-user32` 代表 32 位元用戶空間，32 位元（或缺少 SSSE3 支援）的 CPU 必須使用這個
      * `x86_64` 仍然使用 32 位元內核空間，但在 10.4/5 中會保留 64 位元用戶空間
    * 10.6 — `i386`, `i386-user32`, 或 `x86_64`
    * 10.7 — `i386` 或 `x86_64`
    * 10.8 或更新 — `x86_64`

* **KernelCache**: Auto
  * 設定內核緩存類型，主要用於除錯，因此我們建議使用 `Auto` 以取得最佳支援

:::

# 完成此部分後，請[編輯 Misc 部分](misc.md)
