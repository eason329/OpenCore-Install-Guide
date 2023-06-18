# OpenCore 入門

在我們可以開始建立一個基於 OpenCore 的系統之前，我們需要確認以下事項。

## 前提條件

1. <span style="color:red">_**[關鍵]**_</span> 時間和耐心。
   * 如果你有限時完成的重要工作，請不要開始 Hackintosh，黑蘋果不是你的首要工作。
2. <span style="color:red">_**[關鍵]**_</span> **了解你的硬體**
   * 你的 CPU 型號和世代
   * 你的 GPU 型號
   * 你的儲存設備（硬碟／固態硬碟、NVME/AHCI/RAID/IDE 配置，PS：這裡指的是南橋／芯片組上的硬碟的工作模式）
   * 你的筆記型／桌面電腦的 OEM 型號（如果來自 OEM）
   * 你的 **有線網卡芯片組**
   * 你的無線／藍牙芯片組
3. <span style="color:red">_**[關鍵]**_</span> **命令列及使用終端／命令提示字符的基本知識**
   * 這不僅僅是[關鍵]，也是整個指南的基礎。如果你不知道如何`cd`到一個目錄或刪除一個檔案，我們將無法幫助你。
4. <span style="color:red">_**[關鍵]**_</span> 在**相容性**部分中看到你的硬體是否與 macOS 相容。
   * [硬體限制頁面](macos-limits.md)
5. <span style="color:red">_**[關鍵]**_</span> 最低要求：
   * 16GB 的 USB 隨身碟，如果你打算使用 macOS 製作開機隨身碟
   * 4GB 的 USB 隨身碟，如果你打算使用 Windows 或 Linux 製作開機隨身碟
6. <span style="color:red">_**[關鍵]**_</span> **有線網路連接**（如沒有 Wi-Fi 發射器而使用 USB 作有線網路連接，那麼它是否能工作取決於 macOS 對其有線網卡的支持），並且你必須知道你的網卡的型號。
   * 你必須有物理的網路連接埠或是與 macOS 相容的有線網卡／無線網卡。如果你有 [相容的無線網卡](https://eason329.github.io/Wireless-Buyers-Guide/), 你也可以使用它。
     * 請注意，macOS 原生不支援市面大多數的無線網卡
   * 對於不能使用網路但有 Android 手機的人，你可以將你的 Android 手機連接到 Wi-Fi，然後使用 [HoRNDIS](https://joshuawise.com/horndis#available_versions) 功能來共享它。
7. <span style="color:red">_**[關鍵]**_</span> **已正確安裝的操作系統：**
   * 包括：
     * macOS（版本越新越好）
     * Windows（Windows 10 1703 或更新版本）
     * Linux（純淨且功能正常，使用 Python 2.7 或更高版本）
   * 對於 Windows 或 Linux 用戶，你正在使用的磁碟區上應至少有 **15GB** 的可用空間。在 Windows 上，你的系統磁碟區 (C:) 必須至少有 **15GB** 的可用空間。
   * 對於 macOS 用戶，系統磁碟區上至少有 **30GB** 的可用空間。
   * 本指南手冊中使用的大多數工具需要 [安装 Python](https://www.python.org/downloads/)
8. <span style="color:red">_**[關鍵]**_</span> **安裝了最新版本的 BIOS**
   * 在多數情况下，更新 BIOS 將為 macOS 提供最好的支援
   * MSI 500 系列 AMD 主板是個例外，更多資訊請瀏覽 [主板支援](macos-limits.md#motherboard-support)。
