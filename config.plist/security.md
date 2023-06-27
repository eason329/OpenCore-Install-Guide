# 蘋果安全開機

config.plist 中的這些設定可以限制 OpenCore 啟動哪些 macOS 版本。在啟動 USB 之前，你需要先檢查這些設定。

## Misc

### Security -> SecureBootModel

OpenCore 預設啟用 [Apple Secure Boot](https://eason329.github.io/OpenCore-Post-Install/universal/security/applesecureboot.html#what-is-apple-secure-boot)。這將支援安全功能，如驗證 macOS 的 `boot.efi`，其副作用是限制了 OpenCore 能啟動的 macOS 版本。

* Big Sur 及以上版本 (11.0+)：建議設定為 `Default`。
* High Sierra 至 Catalina (10.13-10.15)：
  * 如果你欲使用的型號沒有在下表列出，請設定為 `Disabled`。
  * 如果要使用 NVIDIA Web Drivers，請設定為 `Disabled`。
  * 如果你欲使用的 SMBIOS 有在下表列出，請將你欲安裝的版本與最低版本比較. 如果欲安裝的版本比你的 SMBIOS 要求的最低版本還要低的話，請設定為 `Disabled`。否則請設定為你所使用的 SMBIOS。
* Sierra 及以下版本 (10.4-10.12)：這個設定沒有作用。
* 如果需要啟動多個版本，你可能需要設定為 `Disabled`。
  * 示例：一個沒有 T2 的 SMBIOS 要同時啟動 High Sierra 和 Big Sur 的話，便需要設定為 `Disabled`。
  * 下表列出了 T2 SMBIOS 的最低版本限制。

::: details T2 Mac 型號

| SMBIOS                                              | 最低 macOS 版本 |
| :---                                                | :---                  |
| iMacPro1,1 (December 2017)                          | 10.13.2 (17C2111)     |
| MacBookPro15,1 (July 2018)                          | 10.13.6 (17G2112)     |
| MacBookPro15,2 (July 2018)                          | 10.13.6 (17G2112)     |
| Macmini8,1 (October 2018)                           | 10.14 (18A2063)       |
| MacBookAir8,1 (October 2018)                        | 10.14.1 (18B2084)     |
| MacBookPro15,3 (May 2019)                           | 10.14.5 (18F132)      |
| MacBookPro15,4 (July 2019)                          | 10.14.5 (18F2058)     |
| MacBookAir8,2 (July 2019)                           | 10.14.5 (18F2058)     |
| MacBookPro16,1 (November 2019)                      | 10.15.1 (19B2093)     |
| MacPro7,1 (December 2019)                           | 10.15.1 (19B88)       |
| MacBookAir9,1 (March 2020)                          | 10.15.3 (19D2064)     |
| MacBookPro16,2 (May 2020)                           | 10.15.4 (19E2269)     |
| MacBookPro16,3 (May 2020)                           | 10.15.4 (19E2265)     |
| MacBookPro16,4 (June 2020)                          | 10.15.5 (19F96)       |
| iMac20,1 (August 2020)                              | 10.15.6 (19G2005)     |
| iMac20,2 (August 2020)                              | 10.15.6 (19G2005)     |

:::

# 完成此部分後，請[編輯 BIOS 設定](bios-settings.md)
