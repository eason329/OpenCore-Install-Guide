# 製作引導隨身碟

你需要：

* [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg/releases)，強烈建議先行使用除錯版本以顯示更多訊息
* [ProperTree](https://github.com/corpnewt/ProperTree)，編輯 .plist 檔案（另有一些工具如 OpenCore Configurator 或 OpenCore Auxiliary Tools，但可能已嚴重過時，Mackie 版本的 OCC 更是以損毀檔案而聞名。**請盡量避免使用這些工具！**）
* 如果你希望使用 OpenCore 作為主要引導程式，則必須從系統中完全移除 Clover。並保留一個基於 Clover 的 EFI 備份。請參閱[從 Clover 轉換](https://github.com/sumingyd/OpenCore-Install-Guide/tree/master/clover-conversion)了解需要清理的地方。

### 線上 vs 離線安裝程式

離線安裝程式有一個完整的 macOS 副本，而線上安裝程式只有一個恢復映像（~500MB），啟動後就可以從蘋果伺服器下載 macOS。

* 離線
  * 只能在 macOS 下製作
  * Windows/Linux 沒有整合完整安装程式所需的 APFS／HFS 驅動程式
* 線上
  * 可在 macOS/Linux/Windows 下製作
  * 需要在欲安裝電腦上使用 macOS 支援的網路適配器進行網際網路連接

### 製作安裝程式

根據你使用的操作系統，請參閱有關製作引導隨身碟的具體部分：

* [macOS 用戶](../installer-guide/mac-install.md)
  * 支援 OS X 10.4 至目前版本
  * 提供線上及離線安裝程式
  * 支援傳統 BIOS 和 UEFI 安裝
* [Windows 用戶](../installer-guide/windows-install.md)
  * 支援 OS X 10.7 至目前版本
  * 只提供線上安裝程式
  * 支援傳統 BIOS 和 UEFI 安裝
* [Linux 用戶（UEFI）](../installer-guide/linux-install.md)
  * 支援 OS X 10.7 至目前版本
  * 只提供線上安裝程式
  * 適用於支援 UEFI 引導的電腦
