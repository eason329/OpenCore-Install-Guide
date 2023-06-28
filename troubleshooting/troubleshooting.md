# 故障診斷

本章節針對那些在啟動 OpenCore、macOS 或 macOS 系統內出現問題的人。如果你不知道在 macOS 開機過程中卡在哪個地方，請閱讀 [macOS 啟動過程](../troubleshooting/boot.md) 頁面來幫助你判斷故障位置。

**如果與你相關的問題沒有在這裡提及，請閱讀 OpenCore 官方說明文件：[Configuration.pdf](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf)**. 這份文件涉及更多關於 OpenCore 如何工作的技術細節，及更多關於所有選項值（Quirk）的資訊。

## 目錄

如果你不知道在哪個地方卡在的話，請閱讀：[了解 macOS 啟動過程](../troubleshooting/boot.md)

* [OpenCore 啟動問題](./extended/opencore-issues.md)
  * 這部分是有關使用隨身碟開機及進入 OpenCore 選擇器中可能出現的問題。在選擇器後的任何操作，如啟動 macOS，請參閱下方內容
* [Kernelspace 問題](./extended/kernel-issues.md)
  * 這部分涵蓋從 OpenCore 選單中選擇 macOS 開始，出現蘋果標誌和直到安装程式 GUI 載入之前的所有開機過程中發生的所有事情
* [Userspace 問題](./extended/userspace-issues.md)
  * 這部分涵蓋載入 macOS 的 GUI ，及在硬碟上安裝 macOS 的過程中可能出現的問題
* [安裝後的問題](./extended/post-issues.md)
  * 這部分涵蓋 macOS 完成安裝，及開機至登入畫面後的各種問題
* [雜項問題](./extended/misc-issues.md)
  * 這部分涵蓋 macOS 完成安裝後，或其他操作系統的各種問題
