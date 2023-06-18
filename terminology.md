# 術語

術語 | 描述
--- | ---
**macOS**        | 蘋果公司自己的基於 UNIX 的操作系統，用於 Mac 機器和 “使 Mac 成為 Mac” 的重點。
**Windows**      | 微軟的專有操作系統，可在各種電腦上安裝和使用（如果你不想頭疼，就繼續使用這個操作系統）
**Linux**        | 基於 Linux 内核的開源類 UNIX 操作系統家族，1991 年 9 月 17 日由 Linus Torvalds 首次發佈的操作系統内核。Linux 通常打包在 Linux 發行版中。注意，雖然 macOS 和 Linux 可能是基於 UNIX 的，但它們有很大的不同。
**Distros**      | 發行版的縮寫。Linux 發行版是 Linux 的發行方式。然而，當涉及到 macOS 時，發行版混合了 macOS 安裝程式和一堆非蘋果公司的工具 **不要使用被修改過的 macOS**  
**Hackintosh**   | 將 macOS 安裝到 PC 上的過程，請注意**Hackintosh 不是操作系統**，它也可以指被「黑客」攻擊的機器，以使 macOS 在其上運行。例如：*我在這台 Windows 機器上安裝了 macOS，因此我有一個 Hackintosh。但是我沒有安裝 “Hackintosh”。*
**Bootloader**   | 載入操作系統的軟體，通常由操作系統建立者製作。從技術上講，OpenCore本身並不是一個開機程式（請參閱下面的開機管理器解釋）。蘋果的 boot.efi 將是 Mac 或 Hackintosh 中實際的引導程式。
**Boot Manager** | 管理開機程式的軟體（開機管理器）- 我們有很多例子：Clover, systemd-boot, OpenCore, rEFInd, rEFIt… 這些通常被視為幫助系統實際的引導程式作準備。
---
術語 | 描述
--- | ---
**OpenCore**     | Hackintosh 界的新熱門，由 [Acidanthera 團隊](https://github.com/acidanthera)在考慮安全性的情況下製作，比 Clover 啟動速度更快，佔用空間更少。它需要更多的工作來設定，但也比 Clover 支持更多原生的東西(如休眠，FileVault 2，熱鍵等等)。
**Clover**       | 在 OpenCore 發布後被認為是舊式的開機管理器。本指南將不涉及該軟體的使用。
**ACPI**         | 進階組態與電源介面（Advanced Configuration and Power Interface, ACPI）提供了一個開放的標準，操作系統可以使用它來發現和設定計算機硬體組件，更多內容將在本指南的後面討論。
**DSDT/SSDT**    | ACPI 中的表格描述了裝置以及操作系統應該如何與它們進行交互，例如使電腦進入休眠、喚醒、切換 GPU、USB 連接埠等等。
**.AML**         | 編譯後的 ACPI 檔案格式，以及你的 PC 將執行的內容。 `.DAT` 是另一個具有完全相同用途的副檔名。
**.DSL**         | ACPI 的源代碼 - 這是您為電腦編輯和編譯的內容。**不要** 將這種檔案格式與 `.asl` 混淆。
**Kexts**        | 也稱為 **K**ernel **Ext**，是 macOS 的驅動程式。它們用於執行不同的任務，如裝置驅動程式，或用於不同的目的（在駭客編程中），如修補操作系統，注入訊息或執行任務。kext 並不是優秀 Hackintosh 的唯一組成部分，因為它們通常與 ACPI 補丁和修復一起使用。
**BIOS**         | 基本輸入／輸出系統是用於在啟動過程（通電啟動）中執行硬體初始化的韌體，並為操作系統和程式提供執行期服務。BIOS 韌體預先安裝在 PC 的主板上，它是在通電時第一個執行的軟體（資料來源：維基百科）。它是 70 年代製作的舊式軟體，由於其成熟度，至今仍在使用。
**UEFI**         | 統一可延伸韌體介面（Unified Extensible Firmware Interface）是定義操作系統與平台韌體之間的軟件介面的規範。UEFI 取代了最初出現在所有 IBM PC 相容 PC 上的傳統 BIOS （Basic Input/Output System）韌體介面，大部分 UEFI 韌體實作都支持傳統 BIOS 服務。UEFI 可以支持遠端診斷和修復電腦，即使沒有安裝操作系統。（資料來源：維基百科）
**UEFI Drivers** | 與其他操作系統一樣，UEFI 也有驅動程式，由 Clover 或 OpenCore 載入。它們還可以載入裝置或執行其他任務，如用 HfsPlus 載入蘋果的 HfsPlus.efi, 修補 macOS 的 `boot.efi` 等等. 你可能會發現它們是 `Clover Drivers` 或 `OpenCore Drivers`, 它們都是 UEFI 驅動程式。（注意：只使用針對特定開機管理器的驅動程式。更多資訊可以在 [Clover 轉換頁面](https://github.com/eason329/OpenCore-Install-Guide/tree/master/clover-conversion)上找到）。
---
術語 | 描述
--- | ---
**EFI**   | 它可以表示兩件事：<br/>- Mac 的韌體，與 UEFI 相同，但針對 Mac 進行了相當大的修改，所以不那麼「通用」<br/>- 硬碟上的分區，儲存由 UEFI 讀取的軟體來載入操作系統（如 Windows 開機程式）或 UEFI 應用程式（如 OpenCore），它是 FAT32 格式的，ID 類型為 `EF00`（十六進制）。它可以被命名為 ESP 或 SYSTEM，通常大小在 100MB 到 400MB 之間，但大小不影響任何東西。
**MBR**   | 主開機記錄是一種特殊類型的開機扇區，位於已分區電腦的大容量儲存裝置（如硬碟或卸除式磁碟）的最開始，旨在與IBM PC 相容系統及其他系統一起使用。MBR 於 1983 年首次與 PC DOS 2.0 一起推出。MBR 儲存有關如何在該介質上組織包含文件系統的邏輯分區的資訊。MBR 還包含可執行代碼，用作已安裝操作系統的載入程式 — 通常通過將控制權傳遞給載入程式的第二階段，或與每個分區的卷引導記錄（VBR）結合使用。此 MBR 代碼通常稱為引導程式（來源：維基百科）。此格式用於 BIOS/舊版設置。MBR 格式最多支援 2 TiB 的大小和最多 4 個主分區。
**GPT**   | GUID 分區表（GUID Partition Table）是物理電腦儲存裝置（如硬碟或固態硬碟）的分區表佈局的標準，使用通用唯一標識碼（也稱為全域唯一標識符（GUID））。作為統一可延伸韌體介面（UEFI）標準（統一 EFI 論壇提議的 PC BIOS 替代品）的一部分，由於主開機記錄（MBR）分區表的限制，它也用於某些 BIOS 系統，該分區表使用 32位元進行傳統 512 位元組磁碟扇區的邏輯塊尋址（LBA）（來源：維基百科）。這是在一般 UEFI 系統上使用的磁碟格式。
---
術語 | 描述
--- | ---
**EC**        | 嵌入式控制器。主板和嵌入式外設（如熱鍵、連接埠或電池）之間的通信。
**PLUG**      | 允許 XCPM，蘋果 XNU（OS 内核）電源管理，允許附加更好的整體 CPU 控制。僅支援 Haswell 和更新 CPU。
**AWAC**      | ACPI 喚醒鬧鐘計數器，主板的內部時鐘。與實時時鐘（RTC）形成對比。macOS 無法與 AWAC 時鐘進行通信，因此必須進行修補。
**PMC**       | 電源管理控制器，在 B360, B365, H310, H370, Z390 主板上，OEM 忘記映射此區域，因此需要 SSDT-PMC 來避免分頁錯誤
**PNLF**      | 內部背光顯示，macOS 使用此 PNLF 裝置發送和接收亮度控制訊息
**XOSI/_OSI** | `_OSI` 用於確定正在開機的是哪個操作系統，將其重新命名為 XOSI 可以讓硬體認為我們正在啟動一個不同的操作系統
**HPET**      | 高精度事件定時器，操作系統使用它來決定如何與設備（IRQ）通信。macOS 對裝置的設定可能非常挑剔，因此我們有時需要修補 HPET。
**RHUB**      | 根 USB 集線器，其中定義了 USB 連接埠。如果這裡缺少某些定義，USB 連接埠可能無法在 macOS 中工作
**IMEI**      | Intel 管理引擎介面，處理雜項任務。在 macOS 中，蘋果公司依靠 IMEI 來實現Intel GPU 的加速。如果使用不明 ID，如在 7 系列芯片組使用 Sandy Bridge，macOS 將無法找到它來進行 GPU 加速。
**UNC**       | Uncore Bridge，類似於北橋，它處理許多與緩存相關的函數。很多時候，OEM 會定義這個裝置，但無法運作，macOS 無法處理這些情況。
**SMBus**     | 系統管理總線，用於允許裝置之間輕鬆地進行通信。
