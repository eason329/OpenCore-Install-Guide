# PlatformInfo

PlatformInfo 是與系統管理 BIOS (SMBIOS) 相關的設置，它是通過系統固件傳遞管理信息的標準。

在真正的 Mac 上，SMBIOS 有幾個重要的數據，例如產品型號、主板 ID、序列號等。這些信息對於 macOS 至關重要，因為 SMBIOS 會影響電腦的性能，甚至在啟動 iMessage 或 FaceTime 服務時影響你的 Apple ID 。

由於 Hackintosh 使用自己的供應商的硬體和韌體，而沒有蘋果的韌體。因此，我們需要欺騙 SMBIOS 來匹配您的硬體規格，讓 macOS 能夠正確地與 CPU 電源管理、顯卡和 USB 等硬體資源通信。

為了設定 SMBIOS 訊息，我們將使用 CorpNewt 的 [GenSMBIOS](https://github.com/corpnewt/GenSMBIOS) 應用程式。

執行 GenSMBIOS，選擇選項 1 下載 MacSerial，選擇選項 3 下載 SMBIOS。這將給我們一個類似於下面的輸出：

```sh
  #######################################################
 #               iMac13,2 SMBIOS Info                  #
#######################################################

Type:         iMac13,2
Serial:       C02KCYZLDNCW
Board Serial: C02309301QXF2FRJC
SmUUID:       A154B586-874B-4E57-A1FF-9D6E503E4580
```

將 `Type` 部分複製到 Generic -> SystemProductName。

將 `Serial` 部分複製到 Generic -> SystemSerialNumber。

將 `Board Serial` 部分複製到 Generic -> MLB。

將 `SmUUID` 部分複製到 Generic -> SystemUUID。

我們將 Generic -> ROM 設定為蘋果 ROM（從真正的 Mac 中傾印），你的網路卡 MAC 地址，或任何隨機的 MAC 地址的其中之一 （可以是 6 個隨機位元組，在本指南中我們將使用 `11223300 0000`。安裝後，請跟隨[修復 iServices](https://eason329.github.io/OpenCore-Post-Install/universal/iservices.html) 頁面了解如何找到你的真實 MAC 地址）

**提醒：你需要一個無效的序列號！當你在蘋果的[查看裝置保固範圍](https://checkcoverage.apple.com)頁面中輸入你的序列號時，你會得到一條訊息，如「請輸入有效的序號」。**

**Automatic**: YES

* 基於 Generic 章節而不是 DataHub、NVRAM 和 SMBIOS 節來生成 PlatformInfo

## SMBIOS 列表

請根據你使用的平台使用適當的 SMBIOS。

:::details Intel 桌面平台

* Yonah, Conroe, Penryn

| SMBIOS | 硬體 | OS 支援 |
| :--- | :--- | :--- |
| iMac4,1 | Yonah SMBIOS(32-bit) | 10.4 至 10.6.8 |
| iMac7,1 | Conroe SMBIOS(64-Bit, SSE3) | 10.4 至 10.11.6 |
| iMac10,1 | Penryn SMBIOS(64-Bit, SSE4) | 10.6 至 10.13.6 |

** 如果你打算稍後執行 macOS 10.14、Mojave 或更新版本，那麼我們推薦使用 MacPro6,1 這個 SMBIOS。但請注意，你將需要 [telemetrap.kext](https://forums.macrumors.com/threads/mp3-1-others-sse-4-2-emulation-to-enable-amd-metal-driver.2206682/page-4?post=28447707#post-28447707) 來解決安裝問題

* Clarkdale

| SMBIOS | 硬體 |
| :--- | :--- |
| iMac11,1 | Lynnfield SMBIOS |
| iMac11,2 | Clarkdale SMBIOS |
| MacPro6,1 | Mojave 和更新的 SMBIOS |

** 如果你打算稍後執行 macOS 10.14 Mojave 或更新版本，那麼推薦使用 MacPro6,1 這個 SMBIOS。由於本平台的 iGPU 已經不再支援，你必須在 BIOS 中停用它

* Sandy Bridge

| SMBIOS | 硬體 |
| :--- | :--- |
| iMac12,2 | 預設 Sandy Bridge SMBIOS |
| MacPro6,1 | Mojave 和更新的 SMBIOS |

** 如果你打算稍後執行 macOS 10.14 Mojave 或更新版本，那麼推薦使用 MacPro6,1 這個 SMBIOS。由於本平台的 iGPU 已經不再支援，你必須在 BIOS 中停用它

* Ivy Bridge

| SMBIOS | 硬體 | OS 支援 |
| :--- | :--- | :--- |
| iMac13,1 | Ivy Bridge SMBIOS，只有 iGPU | 最高 10.15 |
| iMac13,2 | Ivy Bridge SMBIOS，有 dGPU | 最高 10.15 |
| iMac14,4 | Ivy Bridge SMBIOS，只有 iGPU | 僅 11 |
| iMac15,1 | Ivy Bridge SMBIOS，有 dGPU | 僅 11 |
| MacPro6,1 | Monterey的 SMBIOS | 最高 12 |

** 注意：MacPro6,1 SMBIOS 不應用於 Catalina 或更舊版本，因為使用未最佳化的 SMBIOS 可能會使電源管理等功能出現問題。

* Haswell, Broadwell

| SMBIOS | 硬體 | OS 支援 |
| :--- | :--- | :--- |
| iMac14,4 | Haswell SMBIOS，只有 iGPU | 最高 11 |
| iMac15,1 | Haswell SMBIOS，有 dGPU | 最高 11 |
| iMac16,2 | Broadwell SMBIOS，只有 iGPU | 最高 12 |
| iMac17,1 | Broadwell SMBIOS，有 dGPU | 最高 12 |

* Skylake

| SMBIOS | 硬體 | OS 支援 |
| :--- | :--- | :--- |
| iMac17,1 | Skylake | 最高 12 |

* Kaby Lake

| SMBIOS | 硬體 | OS 支援 |
| :--- | :--- | :--- |
| iMac18,1 | Kaby Lake SMBIOS，只有 iGPU | 最高 13 |
| iMac18,3 | Kaby Lake SMBIOS，有 dGPU | 最高 13 |

* Coffee Lake

| SMBIOS | 硬體 |
| :--- | :--- |
| iMac19,1 | Coffee Lake SMBIOS，Mojave 或更新 |
| iMac18,3 | Coffee Lake SMBIOS，High Sierra 或更舊 |

* Comet Lake

| SMBIOS | 硬體 |
| :--- | :--- |
| iMac20,1 | i7-10700K 或更低端（8 核心或更少） |
| iMac20,2 | i9-10850K 或更高端（10 核心） |

:::

:::details Intel 筆記型電腦平台

* Clarksfield, Arrandale

| SMBIOS | CPU 類型 | 顯示尺寸 |
| :--- | :--- | :--- | :--- |
| MacBookPro6,1 | 四核心 45W（高端） | 17" |
| MacBookPro6,2 | 四核心 45W（低端） | 15" |

* Sandy Bridge

| SMBIOS | CPU 類型 | GPU | 顯示尺寸 |
| :--- | :--- | :--- | :--- |
| MacBookAir4,1 | 雙核心 17W | iGPU: HD 3000 | 11" |
| MacBookAir4,2 | 雙核心 17W | iGPU: HD 3000 | 13" |
| MacBookPro8,1 | 雙核心 35W | iGPU: HD 3000 | 13" |
| MacBookPro8,2 | 四核心 45W（高端） | iGPU: HD 3000 + dGPU: 6490M | 15" |
| MacBookPro8,3 | 四核心 45W（低端） | iGPU: HD 3000 + dGPU: 6750M | 17" |
| Macmini5,1 | 雙核心 NUC | iGPU: HD 3000 | N/A |
| Macmini5,3 | 四核心 NUC | iGPU: HD 3000 | N/A |

* Ivy Bridge

| SMBIOS | CPU 類型 | 顯示尺寸 |
| :--- | :--- | :--- |
| MacBookAir6,1 | 雙核心 15W | 11" |
| MacBookAir6,2 | 雙核心 15W | 13" |
| MacBookPro11,1 | 雙核心 28W | 13" |
| MacBookPro11,2 | 四核心 45W | 15" |
| MacBookPro11,3 | 四核心 45W | 15" |
| MacBookPro11,4 | 四核心 45W | 15" |
| MacBookPro11,5 | 四核心 45W | 15" |
| Macmini7,1 | NUC | N/A |

* Haswell

| SMBIOS | CPU 類型 | GPU | 顯示尺寸 |
| :--- | :--- | :--- | :--- |
| MacBookAir6,1 | 雙核心 15W | iGPU: HD 5000 | 11" |
| MacBookAir6,2 | 雙核心 15W | iGPU: HD 5000 | 13" |
| MacBookPro11,1 | 雙核心 28W | iGPU: Iris 5100 | 13" |
| MacBookPro11,2 | 四核心 45W | iGPU: Iris Pro 5200 | 15" |
| MacBookPro11,3 | 四核心 45W | iGPU: Iris Pro 5200 + dGPU: GT 750M | 15" |
| MacBookPro11,4 | 四核心 45W | iGPU: Iris Pro 5200 | 15" |
| MacBookPro11,5 | 四核心 45W | iGPU: Iris Pro 5200 + dGPU: R9 M370X | 15" |
| Macmini7,1 | NUC | HD 5000/Iris 5100 | N/A |

**注意：MacBookPro11,4, MacBookPro11,5 和 Macmini7,1 SMBIOS 支援 macOS Monterey。

* Broadwell

| SMBIOS | CPU 類型 | GPU | 顯示尺寸 |
| :--- | :--- | :--- | :--- |
| MacBook8,1 | 雙核心 7W（低端） | iGPU: HD 5300 | 12" |
| MacBookAir7,1 | 雙核心 15W | iGPU: HD 6000 | 11" |
| MacBookAir7,2 | 雙核心 15W | iGPU: HD 6000 | 13" |
| MacBookPro12,1 | 雙核心 28W（高端） | iGPU: Iris 6100 | 13" |
| MacBookPro11,2 | 四核心 45W | iGPU: Iris Pro 5200 | 15" |
| MacBookPro11,3 | 四核心 45W | iGPU: Iris Pro 5200 + dGPU: GT 750M | 15" |
| MacBookPro11,4 | 四核心 45W | iGPU: Iris Pro 5200 | 15" |
| MacBookPro11,5 | 四核心 45W | iGPU: Iris Pro 5200 + dGPU: R9 M370X | 15" |
| iMac16,1 | NUC Systems | HD 6000/Iris Pro 6200 |  N/A |

**注意：macOS Monterey 已放棄 MacBook8,1 的支援。要運行 macOS Monterey，請使用其他 SMBIOS。

* Skylake

| SMBIOS | CPU 類型 | GPU | 顯示尺寸 | Touch ID |
| :--- | :--- | :--- | :--- | :--- |
| MacBook9,1 | 雙核心 7W（低端） | iGPU: HD 515 | 12" | 沒有 |
| MacBookPro13,1 | 雙核心 15W（低端） | iGPU: Iris 540 | 13" | 沒有 |
| MacBookPro13,2 | 雙核心 15W（高端） | iGPU: Iris 550 | 13" | 有 |
| MacBookPro13,3 | 四核心 45W | iGPU: HD 530 + dGPU: Radeon Pro 450/455 | 15" | 有 |
| iMac17,1 | NUC | iGPU: HD 530 + R9 290 |  N/A | 沒有 |

**注意：macOS Ventura 已放棄 Skylake SMBIOS 的支援。

* Kaby Lake

| SMBIOS | CPU 類型 | GPU | 顯示尺寸 | Touch ID |
| :--- | :--- | :--- | :--- | :--- |
| MacBookPro14,1 | 雙核心 15W（低端） | iGPU: Iris Plus 640 | 13" | 沒有 |
| MacBookPro14,2 | 雙核心 15W（高端） | iGPU: Iris Plus 650 | 13" | 有 |
| MacBookPro14,3 | 四核心 45W | iGPU: HD 630 + dGPU: Radeon Pro 555X/560X | 15" | 有 |
| iMac18,1 | NUC | iGPU: Iris Plus 640 |  N/A | 沒有 |

* Coffee Lake, Whiskey Lake

| SMBIOS | CPU 類型 | GPU | 顯示尺寸 | Touch ID |
| :--- | :--- | :--- | :--- | :--- |
| MacBookPro15,1 | 六核心 45W | iGPU: UHD 630 + dGPU: Radeon Pro 555X/560X | 15" | 有 |
| MacBookPro15,2 | 四核心 15W | iGPU: Iris 655 | 13" | 有 |
| MacBookPro15,3 | 六核心 45W | iGPU: UHD 630 + dGPU: Vega 16/20 | 15" | 有 |
| MacBookPro15,4 | 四核心 15W | iGPU: Iris 645 | 13" | 有 |
| Macmini8,1 | NUC | HD 6000/Iris Pro 6200 |  N/A | 沒有 |

* Coffee Lake Plus, Comet Lake

| SMBIOS | CPU 類型 | GPU | 顯示尺寸 | Touch ID |
| :--- | :--- | :--- | :--- | :--- |
| MacBookPro16,1 | 六／八核心 45W | iGPU: UHD 630 + dGPU: 5300/5500M | 15" | 有 |
| MacBookPro16,3 | 四核心 15W | iGPU: Iris 645 | 13" | 有 |
| MacBookPro16,4 | 六／八核心 45W | iGPU: UHD 630 + dGPU: 5600M | 15" | 有 |
| Macmini8,1 | NUC | HD 6000/Iris Pro 6200 |  N/A | 沒有 |

* Icelake

| SMBIOS | CPU 類型 | GPU | 顯示尺寸 | Touch ID |
| :--- | :--- | :--- | :--- | :--- |
| MacBookAir9,1 | 雙／四核心 12W | iGPU: G4/G7 | 13" | 有 |
| MacBookPro16,2 | 四核心 28W | iGPU: G4/G7 | 13" | 有 |

:::

:::details AMD 平台

* Bulldozer(15h), Jaguar(16h)

| SMBIOS | GPU | OS 支援限制 |
| :--- | :--- | :--- |
| MacPro6,1 | AMD GCN GPU（支援 HD 及 R5/R7/R9 系列） | |
| MacPro7,1 | AMD Polaris 或更新 | 10.15 或更新 |
| iMacPro1,1 | NVIDIA Maxwell 及 Pascal，或 AMD Polaris 或更新 | 10.13 至 10.14 |
| iMac14,2 | NVIDIA Maxwell 及 Pascal | |

* 桌面平台的 Ryzen 和 Threadripper(17h and 19h)

| SMBIOS | GPU | OS 支援限制 |
| :--- | :--- | :--- |
| MacPro6,1 | AMD GCN GPU（支援 HD 及 R5/R7/R9 系列） | |
| MacPro7,1 | AMD Polaris 或更新 | 10.15 或更新 |
| iMacPro1,1 | NVIDIA Maxwell 及 Pascal，或 AMD Polaris 或更新 | 10.13 至 10.14 |
| iMac14,2 | NVIDIA Maxwell 及 Pascal | |

* 筆記型電腦平台的 Ryzen(17h and 19h)

| SMBIOS | GPU | OS 支援限制 |
| :--- | :--- | :--- |
| iMacPro1,1 | iGPU: Vega Raven ASIC family | 11 至最新版本 |
| iMac20,1 | iGPU: Vega Raven ASIC family | 11 至最新版本 |
| MacBookPro16,3 | iGPU: Vega Raven ASIC family | 11 至最新版本 |

:::

### Generic

::: details 更深入的資訊

* **AdviseFeatures**: NO
  * 當 EFI 分割不是 Windows 磁碟上的第一個分割時使用

* **MaxBIOSVersion**: NO
  * 設定 BIOS 版本為 Max，以避免在 Big Sur 及以上版本進行韌體更新，主要適用於正版 Mac。

* **ProcessorType**: `0`
  * 設定為 `0` 以用於自動類型檢測，但是如果需要，這個值可以被覆蓋。參見 [AppleSmBios.h](https://github.com/acidanthera/OpenCorePkg/blob/master/Include/Apple/IndustryStandard/AppleSmBios.h) 取得可能的值

* **SpoofVendor**: YES
  * 將供應商欄位替換為 Acidanthera，在大多數情況下使用蘋果作為供應商通常不安全

* **SystemMemoryStatus**: Auto
  * 在 SMBIOS 訊息中設定記憶體是否焊接，純粹用於修飾，因此我們建議使用 `Auto`

* **UpdateDataHub**: YES
  * 更新 Data Hub 欄位

* **UpdateNVRAM**: YES
  * 更新 NVRAM 欄位

* **UpdateSMBIOS**: YES
  * 更新 SMBIOS 欄位

* **UpdateSMBIOSMode**: Create
  * 用新分配的 EfiReservedMemoryType 替換表, 在需要 `CustomSMBIOSGuiduse` 的 Dell 筆記型電腦上使用 `Custom`
  * 設定為 `Custom` 並啟用 `CustomSMBIOSGuid` 也可以阻止 SMBIOS 注入到「非蘋果」作業系統，但是我們不支持這種方法，因為它破壞了 Bootcamp 的相容性。使用風險自負

:::

# 完成此部分後，請[編輯 UEFI 部分](uefi.md)
