# BIOS 設定

你已經完成建構 config.plist。在你開始安裝 macOS 前，請進入 BIOS 設定選單，並將韌體設定為與 hackintosh 相容的設置。

* 注意：並不是所有選項都能在你的韌體中找到，我們建議設定應儘可能匹配。如果這些選項在你的 BIOS 中沒有出現，你亦不要太擔心

## Intel 主板

### 停用

* 快速啟動
* 安全開機
* Serial/COM 連接埠
* Parallel 連接埠
* VT-d（如果你已將 `DisableIoMapper` 設為 YES，則可以啟用）
* Compatibility Support Module（CSM）（**在大多數情況下，你必須關閉此選項，當該選項啟用時，像 `gIO` 等等的 GPU 錯誤或停頓會很常見**）
* Thunderbolt（在初始安裝的時候需要停用，因為一旦設定不當會造成 Thunderbolt 出現問題）
* Intel SGX
* Intel Platform Trust
* CFG Lock（MSR 0xE2 寫入保護）（**必須關閉這個功能，如果你無法在 BIOS 找到這個功能，請在 Kernel -> Quirks 啟用 `AppleCpuPmCfgLock`。你的系統無法在 CFG Lock 啟用的情況下啟動**）

### 啟用

* VT-x
* Above 4G Decoding（**這是必須啟用的選項。如果你找不到這個選項，請在 boot-args 加入 `npci=0x3000` 參數。但請不要既啟用這個選項，又加入 npci 參數。**）
* 超線程
* 執行禁用位元
* EHCI/XHCI 切換（Hand-off）
* 操作系統類型：Windows 8.1/10 UEFI 模式（某些主板可能需要選用「其他操作系統」）
* 預先分配的 DVMT（iGPU 記憶體）：32MB 或更多
* SATA 模式：AHCI

## AMD 主板

### 停用

* 快速啟動
* 安全開機
* Serial/COM 連接埠
* Parallel 連接埠
* Compatibility Support Module（CSM）（**在大多數情況下，你必須關閉此選項，當該選項啟用時，像 `gIO` 等等的 GPU 錯誤或停頓會很常見**）
* IOMMU

### 啟用

* Above 4G Decoding（**這是必須啟用的選項。如果你找不到這個選項，請在 boot-args 加入 `npci=0x3000` 參數。但請不要既啟用這個選項，又加入 npci 參數。**）
  * 如果你使用的是 Gigabyte/Aorus 或 AsRock 主板，啟用這個選項可能會破壞某些驅動程式(如：以太網）和／或導致其他操作系統無法啟動，如果發生了這種情況，請停用這個選項並改為加入 npci 參數。
  * 2020 或以後的 BIOS 請注意：當啟用這個選項時，, 一些 X570 和更新的主板上可能會提供可調整的 BAR 的支援，如果啟用的話，請確保 Booter -> Quirks -> ResizeAppleGpuBars 已設定為 `0`。
* 超線程
  * **Threadripper 用戶請特别注意**：macOS 内核目前不支援超過 64 個線程，如果内核發現線程超過 64 個會導致內核錯誤。目前，數款 Threadripper CPU（如：3990X、5995WX）共有 128 個線程，因此需要停用其中的一半。對於這種情況，我們建議在 BIOS 中停用超線程。
* EHCI/XHCI 切換（Hand-off）
* 操作系統類型：Windows 8.1/10 UEFI 模式（某些主板可能需要選用「其他操作系統」）
* iGPU 記憶體：512MB 或更多
  * 適用於使用 Vega iGPU 的系統
* SATA 模式：AHCI

# 現在，你已完成所有開機前的設定，請開始[安裝 macOS](../installation/installation-process.md)
