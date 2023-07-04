# 雜項問題

與 macOS 本身無關的雜項問題，例如多系統開機。

[[toc]]

## 無法執行 `acpidump.efi`

在 OpenCore shell 中執行：

```
shell> fs0: //替換為正確的磁碟

fs0:\> dir //驗證這是正確的目錄

  Directory of fs0:\

   01/01/01 3:30p  EFI
fs0:\> cd EFI\OC\Tools //注意它是用正向斜線

fs0:\EFI\OC\Tools> acpidump.efi -b -n DSDT -z
```

## 修復 SSDTTime: `Could not locate or download iasl!`

This is usually due to an outdated version of Python, try either updating Python or add iasl to the scripts folder for SSDTTime:
這通常是由於過時的 Python 版本，請嘗試更新 Python 或把 iasl 加入到 SSDTTime 的 scripts 資料夾：

* [iasl macOS 版](https://bitbucket.org/RehabMan/acpica/downloads/iasl.zip)
* [iasl Windows 版](https://acpica.org/downloads/binary-tools)
* [iasl Linux 版](http://amdosx.kellynet.nl/iasl.zip)

## 修復 Python: `Python is not installed or not found on PATH`

非常容易，下載並安裝最新版本的 Python:

* [macOS 版](https://www.python.org/downloads/macos)
* [Windows 版](https://www.python.org/downloads/windows/)
* [Linux 版](https://www.python.org/downloads/source/)

記得要選擇 `Add Python to PATH`

![](../../images/troubleshooting/troubleshooting-md/python-path.png)

## Windows 啟動磁碟找不到 APFS 磁碟區

* 過時的 BootCamp 驅動程式 (通常 6.0 版本會附帶 brigadier，macOS 中的 BootCamp Utility 提供較新的版本，如 6.1 版本）。CorpNewt 的 brigadier 分支亦修復了這個問題: [CorpNewt 的 brigadier](https://github.com/corpnewt/brigadier)

## OpenCore 解析度不正確

* 跟隨 [修復解析度及詳細模式](https://eason329.github.io/OpenCore-Post-Install/cosmetic/verbose.html) 的正確設定，在 HiDPI 顯示器中將  `UIScale` 設為 `2`
* 有用戶注意到將 `ConsoleMode` 設為 Max 可能會失敗, 將該部分保留空值可能有幫助

## 無法在選擇器中找到 Windows/BootCamp 磁碟區

So with OpenCore, we have to note that legacy Windows installs are not supported, only UEFI. Most installs now are UEFI based but those made by BootCamp Assistant are legacy based, so you'll have to find other means to make an installer(Google's your friend). This also means MasterBootRecord/Hybrid partitions are also broken so you'll need to format the drive you want to install onto with DiskUtility. See the [Multiboot Guide](https://dortania.github.io/OpenCore-Multiboot/) on best practices

Now to get onto troubleshooting:

* Make sure `Misc -> Security -> ScanPolicy` is set to `0` to show all drives
* Enable `Misc -> Boot -> Hideself` when Windows bootloader is located on the same drive

## Selecting Startup Disk doesn't apply correctly

If you're having issues with Startup Disk correctly applying your new boot entry, this is most likely caused by a missing `DevicePathsSupported` in your I/O Registry. To resolve this, ensure you are using `PlatformInfo -> Automatic -> True`

Example of missing `DevicePathsSupported`:

* [Default DevicePath match failure due to different PciRoot #664](https://github.com/acidanthera/bugtracker/issues/664#issuecomment-663873846)

## Booting Windows results in BlueScreen or Linux crashes

This is due to alignment issues, make sure `SyncRuntimePermissions` is enabled on firmwares supporting MATs. Check your logs whether your firmware supports Memory Attribute Tables(generally seen on 2018 firmwares and newer)

Common Windows error code:

* `0xc000000d`

## Booting Windows error: `OCB: StartImage failed - Already started`

This is due to OpenCore getting confused when trying to boot Windows and accidentally thinking it's booting OpenCore. This can be avoided by either move Windows to it's own drive *or* adding a custom drive path under BlessOverride. See [Configuration.pdf](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf) for more details.

## iASL warning, only X unresolved

If you try to decompile your DSDT and get an error similar to this:

```
iASL Warning: There were 19 external control methods found during disassembly, but only 0 were resolved (19 unresolved)
```

This happens when one ACPI table requires the rest for proper referencing, it does not accept the creation of DSDTs as we're only using it for creating a select few SSDTs. For those who are worried, you can run the following:

```
iasl * [insert all ACPI files here]
```

## Time inconsistency between macOS and Windows

This is due to macOS using Universal Time while Windows relies on Greenwich time, so you'll need to force one OS to a different way of measuring time. We highly recommend modifying Windows instead as it's far less destructive and painful:

* [Install Bootcamp utilities](https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp.html)
* [Modify Windows' registry](https://superuser.com/q/494432)
