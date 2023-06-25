# NVRAM

NVRAM（非揮發性隨機存取記憶體，nonvolatile random-access memory）是 Mac 用於儲存某些設定並快速存取它們的記憶體。

OpenCore 使用 NVRAM 進行某些設定，例如 UI 縮放和啟動參數。這些設定可以幫助你解決啟動問題。

## Add

::: tip 4D1EDE05-38C7-4A6A-9CC6-4BCCA8B38C14

用於 OpenCore 的 UI 縮放，保留預設值就可以了。更多訊息請參閱下方的更深入資訊

:::

::: details 更深入的資訊

開機程式路徑，主要用於修改 UI

* **DefaultBackgroundColor**：boot.efi 使用的背景顏色
  * `00000000`: Syrah Black
  * `BFBFBF00`: Light Gray

:::

::: tip 4D1FDA02-38C7-4A6A-9CC6-4BCCA8B30102

OpenCore 的 NVRAM GUID，主要針對 RTCMemoryFixup 用戶

:::

::: details 更深入的資訊

* **rtc-blacklist**: <>
  * 與 RTCMemoryFixup 一起使用，請參閱這裡以取得更多訊息：[修復 RTC 寫入問題](https://dortania.github.io/OpenCore-Post-Install/misc/rtc.html#finding-our-bad-rtc-region)
  * 大多數用戶可以略過這一節

:::

::: tip 7C436110-AB2A-4BBB-A880-FE41995C9F82

系統完整性保護位元遮罩碼

* **一般的 boot-arg**：
| boot-args | 說明 |
| :--- | :--- |
| **-v** | 啟用詳細模式，在你啟動時以滾動方式顯示所有後台文字，而不是蘋果 logo 和進度條。它對任何黑蘋果用戶來說都是無價的，因為它可以讓你深入了解開機過程，並可以幫助你識別問題、找出問題 kext 等等。 |
| **debug=0x100** | 停用 macOS 的 watchdog 功能，它有助於防止在內核出現嚴重錯誤時重新啟動。這樣你就*有希望*收集到一些有用的訊息並按照提示來解決問題。 |
| **keepsyms=1** | 這是 debug=0x100 的配套設定，它告訴操作系統在內核出現故障時也打印出這些符號。這可以提供一些更有用的見解，以瞭解造成錯誤的成因。 |
| **alcid=1** | 用於設定 AppleALC 的 layout-id，請參閱[支援的編解碼器](https://github.com/acidanthera/applealc/wiki/supported-codecs)，以確定針對你的系統會使用到的布局。更多訊息會在[安裝後完善指南](https://dortania.github.io/OpenCore-Post-Install/)提供 |

* **GPU 專用 boot-arg**：
| boot-args | 說明 |
| :--- | :--- |
| **agdpmod=pikera** | 用於在一些 Navi GPU（RX 5000 & 6000 系列）上停用 board ID 檢查，否則將會出現黑屏。**如果你沒有 Navi 顯示卡，請不要使用**（如：Polaris 和 Vega 顯示卡就不應使用這個參數） |
| **-radcodec** | 用於允許官方不支援的 AMD GPU（以欺騙方式）使用硬體視訊編碼器 |
| **radpg=15** | 用於停用一些電源開關模式，有助於正確初始化基於 Cape Verde 的 AMD GPU |
| **unfairgva=1** | 用於在支援的 AMD GPU 上修復硬體 DRM 支援 |
| **nvda_drv_vrl=1** | 讓 Maxwell 和 Pascal 顯示卡在 macOS Sierra 和 High Sierra 上啟用 NVIDIA 的 Web 驅動程式 |
| **-wegnoegpu** | 關閉除 Intel iGPU 以外所有的 GPU，對於一些想更新 macOS 版本卻發現其獨立 GPU 不支援的用戶來說很有用 |

* **網路卡專用 boot-args**：
| boot-args | 說明 |
| :--- | :--- |
| **e1000=0** | 阻止 `com.apple.DriverKit-AppleEthernetE1000`（Apple 的 DEXT 驅動程式）與高端 Comet Lake 主板上的 Intel I225-V 以太網控制器匹配，導致改為載入 Apple 的 I225 kext 驅動程式。<br/>這個參數在大多數主板上都是可選的，因為它們與 DEXT 驅動程序相容。但是，技嘉和某些其他品牌的主板上，由於 DEXT 驅動程序會導致當機，它們只能使用 kext 驅動程式，就需要加入這個參數。<br/>如果您的主板沒有 I225-V NIC，則不需要它。<br/>用於 macOS 12.2.2 和更新版本。 |
| **dk.e1000=0** | 與 `e1000=0` 的工作模式相同，但用於 macOS 12.2.1 和更舊版本。 |

* **csr-active-config**: `00000000`
  * 「系統完整性保護」 (SIP) 的設定。通常建議通過恢復模式使用 `csrutil` 進行更改。
  * 預設情況下，csr-active-config 會設定為 `00000000`，以啓用系統完整性保護。你可以選擇許多不同的值，但總的來說，為了最佳安全實踐，我們建議啟用此選項。更多訊息可以在我們的除錯頁面中找到：[停用 SIP](../troubleshooting/extended/post-issues.md#disabling-sip)

* **run-efi-updater**: `No`
  * 這用於防止蘋果的韌體更新包安裝的時候破壞開機順序；這很重要，因為這些韌體更新（用於真正的 Mac）無法在黑蘋果電腦工作。

* **prev-lang:kbd**: <>
  * 用於非拉丁文鍵盤（格式為：`lang-COUNTRY:keyboard`），儘管你可以指定它，但建議保持空白（**示例配置檔案中的預設值是俄文**):
  * 繁體中文（使用倉頡鍵盤）：`zh-Hant:16899`（十六進制值是 `7a682d48616e743a3136383939`）
  * 繁體中文（使用注音鍵盤）：`zh-Hant:16900`（十六進制值是 `7a682d48616e743a3136393030`）
  * 完整列表可前往 [AppleKeyboardLayouts.txt](https://github.com/acidanthera/OpenCorePkg/blob/master/Utilities/AppleKeyboardLayouts/AppleKeyboardLayouts.txt)
  * 提示：`prev-lang:kbd` 可以被轉換成字串，所以你可以直接輸入 `en-US:0`，而不需要轉換至十六進制值。然而，有用戶反映這個做法已經無效。如要解決，可直接轉換至十六進制值。
  * 提示 2：`prev-lang:kbd` 可以設定為一個空白變量（eg：`<>`），這將強制在首次啟動時顯示語言選擇器。

| Key | Type | Value |
| :--- | :--- | :--- |
| prev-lang:kbd | String | 7a682d48616e743a3136393030 |

:::

### Delete

::: tip 資訊

強制重寫 NVRAM 變量，請注意，`Add` **不會覆蓋** NVRAM 中已經存在的值，所以像 `boot-args` 這樣的值應該保持不變。對我們來說，我們將更改以下內容：

| 選項值 | 是否啟用 |
| :--- | :--- |
| WriteFlash | YES |

:::

::: details 更深入的資訊

* **LegacySchema**
  * 用於賦予 NVRAM 變量，與 `OpenVariableRuntimeDxe.efi` 一起使用。只適用於沒有原生 NVRAM 的系統

* **WriteFlash**: YES
  * 允許所有新增的變量寫入快閃記憶體。

:::
