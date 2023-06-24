# UEFI

UEFI（統一可延伸韌體介面，Unified Extensible Firmware Interface）是用來定義作業系統與系統韌體之間的軟件介面。

OpenCore 運行在 UEFI 環境中，因此需要 UEFI 驅動程式來確保一些硬體如 NVME 磁碟及鍵盤等能在 OpenCore 選擇器中運作。在這個部分中，我們會設定 OpenCore 會載入的 UEFI 驅動程式及其相關的設定。

**ConnectDrivers**: YES

* 強制 .efi 驅動，更改為 NO 將自動連接新增的 UEFI 驅動。这可以使稍微加快開機速度，但不是所有驅動程式都連接自己。例如某些檔案系統驅動程式可能無法載入。

## APFS

預設情況下，OpenCore 只會載入 macOS Big Sur 及更新版本的 APFS 驅動程式。如果你要啟動 macOS Catalina 或更舊版本，你可能需要設定新的最低版本或日期。
不設定這個選項可能導致 OpenCore 無法找到你的 macOS 磁碟區！

macOS Sierra 及更舊版本使用 HFS 而非 APFS。如果要啟動舊版 macOS，你可以略過這個章節。

::: tip APFS 版本

如果要修改最小版本，需要同時設定 MinVersion 和 MinDate。

| macOS 版本 | 最低版本（MinVersion） | 最低日期（MinDate） |
| :------------ | :---------- | :------- |
| High Sierra (`10.13.6`) | `748077008000000` | `20180621` |
| Mojave (`10.14.6`) | `945275007000000` | `20190820` |
| Catalina (`10.15.4`) | `1412101001000000` | `20200306` |
| 無限制 | `-1` | `-1` |

## Input

用於 FileVault 和熱鍵支援的 boot.efi 鍵盤直連相關的設定。

這部分對於大多數用戶來說是沒有用處的，因此大多數的設定都應該保留預設值。

但是，對於使用傳統 BIOS 的用戶來說，請更改下列設定：

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| KeySupport | NO | 如果你的 BIOS 支援 UEFI，則可以啟用 |

### Audio

針對 AudioDxe 的設定，我們可以略過這個章節（保留預設值）。這與 macOS 的音訊支援無關。

* 有關 AudioDxe 和音訊章節的進一步使用，請參見安裝後完善指南的：[增設 GUI 和開機聲音](https://eason329.github.io/OpenCore-Post-Install/)

## Drivers

在這裡加入你的 .efi 驅動程式。

必須要放入下列的驅動程式：

* HfsPlusLegacy.efi
* OpenRuntime.efi
* OpenUsbKbDxe.efi（如果你的韌體不支援 UEFI）

::: details 更深入的資訊

| Key | Type | 說明 |
| :--- | :--- | :--- |
| Path | String | 檔案在 `OC/Drivers` 目錄的路徑 |
| LoadEarly | Boolean | 在設定 NVRAM 前先行載入驅動程式，如果系統使用舊版 NVRAM，應該只在 `OpenRuntime.efi` 和 `OpenVariableRuntimeDxe.efi` 啟用 |
| Arguments | String | 有些驅動程式接受這裡指定的其他參數。 |

:::

## Output

與 OpenCore 的視訊輸出有關的設定，這些選項對我們來說沒有作用，因此請保留預設值。

::: details 更深入的資訊

| Output | Value | 說明 |
| :--- | :--- | :--- |
| UIScale | `0` | `0` 根據解析度自動調整<br/>`-1` 保持不變<br/>`1` 1x 縮放，適用於一般顯示器<br/>`2` 2x 縮放，適用於 HiDPI 顯示器 |

:::

### ProtocolOverrides

主要適用於虛擬機器、舊 Mac 和 FileVault 用戶。詳細訊息請見：[安全與 FileVault](https://eason329.github.io/OpenCore-Post-Install/)

## Quirks

::: tip 資訊
與 UEFI 環境有關的設定，我們將會更改以下選項：

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| IgnoreInvalidFlexRatio | YES | 如果你使用舊版 BIOS，請停用這選項 |
| UnblockFsConnect | NO | 主要用於 HP 主版 |

:::

::: details 更深入的資訊

* **IgnoreInvalidFlexRatio**: YES
  * 修復 MSR_FLEX_RATIO (0x194) 無法在 BIOS 停用的問題，所有比 Skylake 舊的平台的電腦均需要啟用

* **DisableSecurityPolicy**: NO
  * 停用韌體的平台安全策略，建議用於有問題的韌體（例如：停用安全開機會導致第三方韌體驅動程式無法載入）。
  * 如果是 Microsoft Surface 裝置，則建議啟用這個選項

* **RequestBootVarRouting**: YES
  * 將 AptioMemoryFix 從 `EFI_GLOBAL_VARIABLE_GUID` 重定向至 `OC_VENDOR_VARIABLE_GUID`。當韌體嘗試刪除啟動項時則需要啟用，建議在所有系統上啟用，以確保正確地安裝更新，啟動磁碟控制台的功能等等。

* **UnblockFsConnect**: NO
  * 某些韌體的按驅動程式模式會在磁碟分割控制代碼阻止它們工作，這將導致檔案系統協議無法安裝。主要適用於沒有列出磁碟的 HP 電腦

:::

### ReservedMemory

用於將某些記憶體區域從操作系統中移除，避免它們被使用。這主要與 Sandy Bridge iGPU 或具有錯誤記憶體的系統有關。本指南中不會有涉及這個選項的用法

# 完成以後，我們需要編輯額外的值。請前往[蘋果安全開機](../config.plist/security.md)頁面
