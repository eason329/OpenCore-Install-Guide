# 安裝程序

现在，你已經完成了 OpenCore 的設定，你終於能開始首次開機，需要記住的主要事情：

* 為 macOS 啟用最適當的設定
* 閱讀 [OpenCore 多系統開機指南](https://dortania.github.io/OpenCore-Multiboot/) 和[設定 LauncherOption](https://dortania.github.io/OpenCore-Post-Install/multiboot/bootstrap) 頁面
  * 主要適用於打算單磁碟多操作系統的用戶
* 在其他裝置開啟[通用故障診斷](../troubleshooting/troubleshooting.md)頁面
* 閱讀和了解 [macOS 開機過程](../troubleshooting/boot.md)
  * 可以幫助第一次安裝的用戶更好地了解他們可能在哪裡出現問題
* 大量耐性

## 再次檢查你的準備工作

在開機之前，讓我們再次檢查一下你的 EFI 設置：

良好的 EFI          |  不好的 EFI
:-------------------------:|:-------------------------:
![](../images/installation/install-md/good-efi.png)  |  ![](../images/installation/install-md/bad-efi.png)
EFI 資料夾能在 EFI 磁碟分割中找到 | 找不到 EFI 資料夾
ACPI 檔案都是已編譯的 (.aml) | ACPI 檔案是未編譯的 (.dsl)
不包括 DSDT | 包含了 DSDT
已移除不需要的驅動程式 (.efi) | 保留預設的驅動程式
已移除不需要的工具程式 (.efi) | 保留預設的工具程式
kext 資料夾的所有檔案皆以 .kext 為副檔名 | 包含原始碼和資料夾
config.plist 在 EFI/OC 內 | 既沒有重新命名，也沒有將 .plist 放在正確位置
只保留需要的 kext | 下載了每一個列出的 kext

## 以 OpenCore USB 開機

現在，你終於準備好你的 USB 隨身碟並將其插入電腦啟動了。請注意，大多數電腦仍然會預設使用 Windows 的磁碟區開機，你將需要在 BIOS 開機選單中手動選擇 OpenCore。你需要查看說明書或使用 Google 找出如何進入 BIOS 和開機選單（如：Esc, F2, F10 或 F12）

啟動隨身碟後，你會看到類似下面的開機選項：

1. Windows
2. macOS Base System (External) / Install macOS Big Sur (External) / *USB drive name* (External)
3. OpenShell.efi
4. Reset NVRAM

::: warning

You might need to press space in order to see the installer, as in later versions of OpenCore `HideAuxiliary` is enabled by default.

:::

For us, **Option 2.** is the one we want. Depending how the installer was made, it may report as either **"macOS Base System (External)"**, **"Install macOS Big Sur (External)"** or **"*Your USB drive's name* (External)"**

## macOS 安裝程式

So you've finally got the installer booted, got through the verbose and hit the installer! Now that you've gotten this far,  the main things to keep in mind:

* Drives you wish to install macOS on **must** be both of GUID partition Scheme **and** APFS
  * High Sierra on HDD and all Sierra users will need to use macOS Journaled(HFS+)
* The drive **must** also have a 200MB partition
  * By default, macOS will setup freshly formatted drives with 200MB
  * See the [Multiboot Guide](https://dortania.github.io/OpenCore-Multiboot/) for more info on partitioning a Windows Drive

Once you start the installation, you will want to wait until the system restarts. You will once again want to boot into OpenCore, but rather than selecting your USB installer/recovery - you will want to select the macOS installer on the hard drive to continue installation. You should get an apple logo, and after a few minutes you should get a timer at the bottom saying "x minutes remaining". This may be a good time to get a drink or snack as this will take a while. It may restart a couple more times, but if all goes well, it should finally plop you at the "Setup your Mac screen"

![](../images/installation/install-md/setup-your-mac.png)

如果你看到這個畫面，你成功了！ 🎉
You will want to go through the Post-Installation pages to finish setting up your system.
