# 硬體限制

在開始安裝 macOS 之前，你需要了解許多硬體上的限制。這是因為蘋果支援的硬體數量有限，所以我們要麼受到蘋果的限制，要麼受到社群建立的補丁的限制。

需要驗證的主要硬體部分有：

[[toc]]

有關該主題的更詳細指南，請瀏覽：

* [顯示卡購買指南](https://eason329.github.io/GPU-Buyers-Guide/)
  * 檢查您的 GPU 是否受支援，以及你可以執行哪個版本的 macOS。
* [無線網卡購買指南](https://eason329.github.io/Wireless-Buyers-Guide/)
  * 檢查你的無線網卡是否支援 macOS。
* [避免購買指南](https://eason329.github.io/Anti-Hackintosh-Buyers-Guide/)
  * 關於應該避免什麼以及你的硬體可能會遇到什麼問題的指南。（BTW：這裡是告訴你哪些硬體既不被 macOS 支援，亦沒有可以驅動它們的補丁）

## CPU 支援

對於 CPU，我們有以下细分:

* 32 和 64 位元 CPU 都支援
  * 但這需要操作系統支持你的架構，請參閱下面的 CPU 要求部分
* Intel 的桌面 CPU
  * 本指南支援 Yonah 到 Comet Lake 世代。
  * Atoms、Celeron 和 Pentium CPU 需要配備獨立 GPU。
* Intel 高端桌面（HEDT）和伺服器 CPU
  * 本指南支援 Nehalem 到 Cascade Lake X 世代。
* Intel Core “i” 和至強系列的筆記型電腦 CPU
  * 本指南支援 Arrandale 到 Ice Lake 世代。
  * **不**支持 Mobile Atoms、Celeron 和 Pentium CPU
* AMD 的 Bulldozer(15H)，Jaguar（16H）和 Ryzen(17h) CPU
  * 需要配備獨立 GPU。
  * 如使用補丁，則支援部分使用 Vega iGPU 的桌面及筆記型電腦 CPU（即 APU）。詳情請參閱 [GPU 支援](macos-limits.md#gpu-支援)
  * 注意，AMD CPU 無法支援 macOS 的所有功能，請參見下文。

**欲了解更多深入資訊，請參閱[避免購買指南](https://eason329.github.io/Anti-Hackintosh-Buyers-Guide/)**

:::details  詳細的 CPU 要求

架構需求

* 32 位元 CPU 支援 10.4.1 至 10.6.8
  * 注意 10.7.x 需要 64 位元用戶空間，將 32 位元 CPU 限制為 10.6
* 從 10.4.1 起支援 64 位元 CPU

SSE要求:

* 所有 Intel 版本的 OS X/macOS 都需要 SSE3
* 所有 64 位元版本的 OS X/macOS 都需要 SSSE3
  * 對於缺少 SSSE3 的 CPU（例如某些 64 位元 Pentium），我們建議使用 32 位元用戶空間（`i386-user32`）
* macOS 10.12 及更新版本需要 SSE4
* macOS 10.14 和更新版本需要 SSE4.2
  * SSE4.1 CPU 支持 [telemetrap.kext](https://forums.macrumors.com/threads/mp3-1-others-sse-4-2-emulation-to-enable-amd-metal-driver.2206682/post-28447707)
  * 較新的 AMD 驅動程式也需要 SSE4.2 來支援 Metal。要解決這個問題，請參閱：[MouSSE: SSE4.2 emulation](https://forums.macrumors.com/threads/mp3-1-others-sse-4-2-emulation-to-enable-amd-metal-driver.2206682/)

固件要求:

* OS X 10.4.1 到 10.4.7 需要 EFI32（即 IA32（32 位元）版本的 OpenCore）
  * OS X 10.4.8 到 10.7.5 支持 EFI32 和 EFI64
* OS X 10.8 及更新版本需要 EFI64（即 x64（64位）版本的 OpenCore）
* OS X 10.7 到 10.9 需要 OpenPartitionDxe.efi 啟動恢復分區

内核要求:

* OS X 10.4 和 10.5 由於只支持 32 位元内核空間，因此需要 32 位元 kext
  * OS X 10.6 和 10.7 同時支持 32 和 64 位元内核空間
* OS X 10.8 及更新版本由於只支持 64 位元内核空間，因此需要 64 位元 kext
  * 執行`lipo -archs` 以了解你的 kext 所支援的架構（請記住在二進制檔案本身而不是 .kext 包上執行）

核心／線程數限制:

* OS X 10.10 及以下版本可能無法以超過 24 個線程啟動 (明顯表現為 `mp_cpus_call_wait() timeout` 錯誤）
* OS X 10.11 及更新版本有 64 個線程的限制
* `cpus=` 引導參數可以作為一個解決方案，或者停用超線程

特別注意事項:

* Lilu 和插件需要 10.8 或更新版本才能執行
  * 我們建議在 OS X 的舊版本中執行 FakeSMC
* OS X 10.6 及更早版本要求啟用 RebuildAppleMemoryMap
  * 這是為了解決早期的內核問題

:::

:::details 詳細的 Intel CPU 支援圖表

對於純淨内核（即沒有修改）的支援：

| CPU 世代 | 最初支援版本 | 最後支援版本 | 說明 | CPUID |
| :--- | :--- | :--- | :--- | :--- |
| [Pentium 4](https://en.wikipedia.org/wiki/Pentium_4) | 10.4.1 | 10.5.8 | 僅用於開發工具包 | 0x0F41 |
| [Yonah](https://en.wikipedia.org/wiki/Yonah_(microprocessor)) | 10.4.4 | 10.6.8 | 32-Bit | 0x0006E6 |
| [Conroe](https://en.wikipedia.org/wiki/Conroe_(microprocessor)), [Merom](https://en.wikipedia.org/wiki/Merom_(microprocessor)) | 10.4.7 | 10.11.6 | No SSE4 | 0x0006F2 |
| [Penryn](https://en.wikipedia.org/wiki/Penryn_(microarchitecture)) | 10.4.10 | 10.13.6 | No SSE4.2 | 0x010676 |
| [Nehalem](https://en.wikipedia.org/wiki/Nehalem_(microarchitecture)) | 10.5.6 | <span style="color:green"> 目前最新版本 </span> | N/A | 0x0106A2 |
| [Lynnfield](https://en.wikipedia.org/wiki/Lynnfield_(microprocessor)), [Clarksfield](https://en.wikipedia.org/wiki/Clarksfield_(microprocessor)) | 10.6.3 | ^^ | 在 10.14+ 沒有對 iGPU 的支援  | 0x0106E0 |
| [Westmere, Clarkdale, Arrandale](https://en.wikipedia.org/wiki/Westmere_(microarchitecture)) | 10.6.4 | ^^ | ^^ | 0x0206C0 |
| [Sandy Bridge](https://en.wikipedia.org/wiki/Sandy_Bridge) | 10.6.7 | ^^ | ^^ | 0x0206A0(M/H) |
| [Ivy Bridge](https://en.wikipedia.org/wiki/Ivy_Bridge_(microarchitecture)) | 10.7.3 | ^^ | 在 12+ 沒有對 iGPU 的支援 | 0x0306A0(M/H/G) |
| [Ivy Bridge-E5](https://en.wikipedia.org/wiki/Ivy_Bridge_(microarchitecture)) | 10.9.2 | ^^ | N/A | 0x0306E0 |
| [Haswell](https://en.wikipedia.org/wiki/Haswell_(microarchitecture)) | 10.8.5 | ^^ | ^^ | 0x0306C0(S) |
| [Broadwell](https://en.wikipedia.org/wiki/Broadwell_(microarchitecture)) | 10.10.0 | ^^ | ^^ | 0x0306D4(U/Y) |
| [Skylake](https://en.wikipedia.org/wiki/Skylake_(microarchitecture)) | 10.11.0 | ^^ | ^^ | 0x0506e3(H/S) 0x0406E3(U/Y) |
| [Kaby Lake](https://en.wikipedia.org/wiki/Kaby_Lake) | 10.12.4 | ^^ | ^^ | 0x0906E9(H/S/G) 0x0806E9(U/Y) |
| [Coffee Lake](https://en.wikipedia.org/wiki/Coffee_Lake) | 10.12.6 | ^^ | ^^ | 0x0906EA(S/H/E) 0x0806EA(U)|
| [Amber](https://en.wikipedia.org/wiki/Kaby_Lake#List_of_8th_generation_Amber_Lake_Y_processors), [Whiskey](https://en.wikipedia.org/wiki/Whiskey_Lake_(microarchitecture)), [Comet Lake](https://en.wikipedia.org/wiki/Comet_Lake_(microprocessor)) | 10.14.1 | ^^ | ^^ | 0x0806E0(U/Y) |
| [Comet Lake](https://en.wikipedia.org/wiki/Comet_Lake_(microprocessor)) | 10.15.4 | ^^ | ^^ | 0x0906E0(S/H)|
| [Ice Lake](https://en.wikipedia.org/wiki/Ice_Lake_(microprocessor)) | ^^ | ^^ | ^^ | 0x0706E5(U) |
| [Rocket Lake](https://en.wikipedia.org/wiki/Rocket_Lake) | ^^ | ^^ | 需要 Comet Lake CPUID | 0x0A0671 |
| [Tiger Lake](https://en.wikipedia.org/wiki/Tiger_Lake_(microprocessor)) | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span> | <span style="color:red"> 未經測試 </span> | 0x0806C0(U) |

:::

:::details 詳細說明 AMD CPU 在 macOS 中的限制

不幸的是，AMD 不支援 macOS 中的許多功能，亦有許多功能是部分無法運作的。這些包括：

* 依賴 AppleHV 的虛擬機器
  * 各個主流虛擬機器軟體如 VMWare、Parallels、VirtualBox（自 7.0 版本起）、Docker、Android Studio 等
  * VMware 10、VirtualBox 6.1 和 Parallels 13.1.0 的確是使用它們自己的虛擬機器管理程式，但是使用這些過時的虛擬機器軟體會帶來很大的安全威脅
* Adobe 支援
  * 大多數 Adobe 套件均需要 Intel 的 Memfast 指令集，在使用 AMD CPU 時會導致崩潰
  * 你可以停用部分功能（如 RAW 支援）來避免崩潰：[Adobe 修復](https://gist.github.com/naveenkrdy/26760ac5135deed6d0bb8902f6ceb6bd)
* 32 位元支援
  * 對於在 Mojave 和以下版本的那些仍然依賴 32 位元的軟體，請注意原生補丁不支持 32 位元指令
  * 解決方法是安裝一個[自訂内核](https://files.amd-osx.com/?dir=Kernels), 但是你會失去了 iMessage 支援，這些内核亦不會得到任何支援
* 許多應用程式的穩定性問題
  * 基於音訊的應用程式最容易出現問題，例如 Logic Pro
  * DaVinci Resolve 也有零星的問題

:::

## GPU 支援

由於市場上 GPU 的數量幾乎是無限的，使情況變得非常複雜，但總體劃分如下：

* AMD 基於 GCN、RDNA1 和 RDNA2 的 GPU 支援最新版本的 macOS
  * AMD 的 iGPU 絕大多數均不支援。但是，小部分 Vega iGPU 可以藉由開發中的[第三方 kext](https://github.com/NootInc/NootedRed)來增加對這些 iGPU 的**有限度**支援
  * AMD [基於 Lexa 的核心](https://www.techpowerup.com/gpu-specs/amd-lexa.g806) 的 Polaris 系列 GPU 也不支援
  * 特別提醒 MSI Navi 用戶：[安裝程式不能與 5700XT 一起工作 #901](https://github.com/acidanthera/bugtracker/issues/901)
    * 此問題在 macOS 11 (Big Sur) 中不再存在。
* NVIDIA 的 GPU 支援很複雜：
  * [Kepler(6XX](https://en.wikipedia.org/wiki/GeForce_600_series), [7XX)](https://en.wikipedia.org/wiki/GeForce_700_series) GPU 最高支援 macOS 11: Big Sur
  * [Maxwell(9XX)](https://en.wikipedia.org/wiki/GeForce_900_series) 和 [Pascal(10XX)](https://en.wikipedia.org/wiki/GeForce_10_series) GPU 僅支援 macOS 10.13: High Sierra
  * [Turing(20XX](https://en.wikipedia.org/wiki/GeForce_20_series), [16XX)](https://en.wikipedia.org/wiki/GeForce_16_series)、[Ampere(30XX)](https://en.wikipedia.org/wiki/GeForce_30_series) 和以後所有世代的 GPU **都不支援任何版本的 macOS**
* Intel 的 [GT2+](https://en.wikipedia.org/wiki/Intel_Graphics_Technology) 系列 iGPU
  * 本指南涵蓋了 Ivy Bridge 至 Ice Lake iGPU 的支援
    * 關於 GMA 系列 iGPU 的資訊可以到：[GMA Patching](https://eason329.github.io/OpenCore-Post-Install/gpu-patching/)
  * 注意：GT2 指的是 iGPU 等級，Pentium、Celeron 和 Atom 上的低端 GT1 iGPU 在 macOS 中不支援

對於**使用獨立 GPU 的筆記型電腦**，有一個重要的注意事項：

* 90% 的獨立 GPU 無法運作，因為它們以 macOS 不支援的配置中連接（Switchable Graphics）。在 NVIDIA 獨立 GPU 中，這通常被稱為 Optimus。由於無法使用這些獨立 GPU 進行内部顯示，因此一般會建議停用及關閉它們（將在本指南的後面介紹）。
* 然而，在某些情况下，獨立 GPU 為任何外部輸出（HDMI、mini DisplayPort 等）供電，這些輸出有可能正常或無法工作；如果能正常工作，你將不得不讓 GPU 運行。
* 然而，有少數筆記型電腦沒有使用 Switchable Graphics，因此可以使用獨立 GPU（如果 macOS 支援），但連接和設定通常會導致問題。

**有關完整的 GPU 支援列表，請參閱 [顯示卡購買指南](https://eason329.github.io/GPU-Buyers-Guide/)**

:::details 詳細的 Intel GPU 支援列表

| GPU 世代 | 首次支援版本 | 最後支援版本 | 備註 |
| :--- | :--- | :--- | :--- |
| [3rd Gen GMA](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Third_generation) | 10.4.1 | 10.7.5 | [需要 32 位元内核和補丁](https://eason329.github.io/OpenCore-Post-Install/gpu-patching/legacy-intel/) |
| [4th Gen GMA](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen4) | 10.5.0 | ^^ | ^^ |
| [Arrandale(HD Graphics)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen5) | 10.6.4 | 10.13.6 | 只支援 LVDS，不支援 eDP 和外部輸出 |
| [Sandy Bridge(HD 3000)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen6) | 10.6.7 | ^^ | N/A |
| [Ivy Bridge(HD 4000)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen7) | 10.7.3 | 11.7.x | ^^ |
| [Haswell(HD 4XXX, 5XXX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen7) | 10.8.5 | 12.6.x | ^^ |
| [Broadwell(5XXX, 6XXX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen8) | 10.10.0 | ^^ | ^^ |
| [Skylake(HD 5XX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen9) | 10.11.0 | ^^ | ^^ |
| [Kaby Lake(HD 6XX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen9) | 10.12.4 | <span style="color:green"> 目前最新版本 </span> | ^^ |
| [Coffee Lake(UHD 6XX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen9) | 10.13.6 | ^^ | ^^ |
| [Comet Lake(UHD 6XX)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen9) | 10.15.4 | ^^ | ^^ |
| [Ice Lake(Gx)](https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units#Gen11) | 10.15.4 | ^^ | 需要 `-igfxcdc` 和 `-igfxdvmt` 啟動參數 |
| [Tiger Lake(Xe)](https://en.wikipedia.org/wiki/Intel_Xe) | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span> | <span style="color:red"> 無可用的驅動程式 </span> |
| [Rocket Lake](https://en.wikipedia.org/wiki/Rocket_Lake) | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span> | <span style="color:red"> 無可用的驅動程式 </span> |

:::

:::details 詳細的 AMD GPU 支援列表

| GPU 世代 | 首次支援版本 | 最後支援版本 | 備註 |
| :--- | :--- | :--- | :--- |
| [X800](https://en.wikipedia.org/wiki/Radeon_X800_series) | 10.3.x | 10.7.5 | 需要 32 位元内核 |
| [X1000](https://en.wikipedia.org/wiki/Radeon_X1000_series) | 10.4.x | ^^ | N/A |
| [TeraScale](https://en.wikipedia.org/wiki/TeraScale_(microarchitecture)) | 10.4.x | 10.13.6 | ^^ |
| [TeraScale 2/3](https://en.wikipedia.org/wiki/TeraScale_(microarchitecture)) | 10.6.x | ^^ | ^^ |
| [GCN 1](https://en.wikipedia.org/wiki/Graphics_Core_Next) | 10.8.3 | 12.6.x | ^^ |
| [GCN 2/3](https://en.wikipedia.org/wiki/Graphics_Core_Next) | 10.10.x | ^^ | ^^ |
| [Polaris 10](https://en.wikipedia.org/wiki/Radeon_RX_400_series), [20](https://en.wikipedia.org/wiki/Radeon_RX_500_series) | 10.12.1 | <span style="color:green"> 目前最新版本 </span> | ^^ |
| [Vega 10](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series) | 10.12.6 | ^^ | ^^ |
| [Raven Ridge(Vega 10)](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series) | 11.0.1  | ^^ | <span style="color:yellow"> 需使用[第三方 kext](https://github.com/NootInc/NootedRed) 才能運作 </span> |
| [Vega 20](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series) | 10.14.5 | ^^ | N/A |
| [Picasso(Vega 10)](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series) | 11.0.1 | ^^ | <span style="color:yellow"> 需使用[第三方 kext](https://github.com/NootInc/NootedRed) 才能運作 </span> |
| [Navi 10](https://en.wikipedia.org/wiki/Radeon_RX_5000_series) | 10.15.1 | ^^ | 需要 `agdpmod=pikera` 啟動參數 |
| [Navi 20](https://en.wikipedia.org/wiki/Radeon_RX_6000_series) | 11.4 | ^^ | <span style="color:yellow"> 目前只有一些 Navi 21 型號可以正常運作 </span> |
| [Dalí(Vega 20？)](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series) | 11.0.1 | ^^ | <span style="color:yellow"> 需使用[第三方 kext](https://github.com/NootInc/NootedRed) 才能運作 </span> |
| [Renoir(Vega 20？)](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series) | 11.0.1 | ^^ | ^^ |
| [Lucienne(Vega 20？)](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series) | 11.0.1 | ^^ | ^^ |
| [Cezanne(Vega 20？)](https://en.wikipedia.org/wiki/Radeon_RX_Vega_series) | 11.0.1 | ^^ | ^^ |
| [Navi 30](https://en.wikipedia.org/wiki/Radeon_RX_7000_series) | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span> | <span style="color:red"> 無可用的驅動程式 </span> |

:::

:::details 詳細的 NVIDIA GPU 支援列表

| GPU 世代 | 首次支援版本 | 最後支援版本 | 備註 |
| :--- | :--- | :--- | :--- |
| [GeForce 6](https://en.wikipedia.org/wiki/GeForce_6_series) | 10.2.x | 10.7.5 | 需要 32 位元内核和 [NVCAP 補丁](https://sumingyd.github.io/OpenCore-Post-Install/gpu-patching/nvidia-patching/) |
| [GeForce 7](https://en.wikipedia.org/wiki/GeForce_7_series) | 10.4.x | ^^ | [需要 NVCAP 補丁](https://sumingyd.github.io/OpenCore-Post-Install/gpu-patching/nvidia-patching/) |
| [Tesla](https://en.wikipedia.org/wiki/Tesla_(microarchitecture)) | 10.4.x | 10.13.6 | ^^ |
| [Tesla v2](https://en.wikipedia.org/wiki/Tesla_(microarchitecture)#Tesla_2.0) | 10.5.x | ^^ | ^^ |
| [Fermi](https://en.wikipedia.org/wiki/Fermi_(microarchitecture)) | 10.7.x | ^^ | ^^ |
| [Kepler](https://en.wikipedia.org/wiki/Kepler_(microarchitecture)) | 10.7.x | 11.7.x | N/A |
| [Kepler v2](https://en.wikipedia.org/wiki/Kepler_(microarchitecture)) | 10.8.x | ^^ | ^^ |
| [Maxwell](https://en.wikipedia.org/wiki/Maxwell_(microarchitecture)) | 10.10.x | 10.13.6 | [Requires NVIDIA Web Drivers](https://www.nvidia.com/download/driverResults.aspx/149652/) |
| [Pascal](https://en.wikipedia.org/wiki/Pascal_(microarchitecture)) | 10.12.4 | ^^ | ^^ |
| [Turing](https://en.wikipedia.org/wiki/Turing_(microarchitecture)) | <span style="color:red"> N/A </span> | <span style="color:red"> N/A </span> | <span style="color:red"> 無可用的驅動程式 </span> |
| [Ampere](https://en.wikipedia.org/wiki/Ampere_(microarchitecture)) | ^^ | ^^ | ^^ |

:::

## 主板支援

在大多數情况下，只要 CPU 支援，所有主板都支援。

:::details MSI AMD 500 系列主板特別注意

~~MSI 500 系列 AMD 主板（A520, B550和X570）是個例外。這些主板與 macOS Monterey 和以上版本發生了一些問題:~~

* ~~PCIe 設備不總是正確枚舉~~
* ~~用於支援 Zen 3 的 BIOS 更新導致開機失敗~~

~~這些主板推薦使用 macOS Big Sur 或更早版本。~~

感謝 CaseySJ，這些問題已在最新版本的 AMD 補丁中修復了!

:::

## 儲存裝置支援

在大多數情况下，macOS 支援所有 SATA 和大多數 NVMe 硬碟。只有少數例外：

* **三星 PM981, PM991 和 美光 2200S NVMe SSDs**
  * 這些 SSD 不相容（導致内核錯誤），因此需要[NVMeFix.kext](https://github.com/acidanthera/NVMeFix/releases) 來修復這些錯誤。注意，即使使用 NVMeFix.kext，這些硬碟仍然可能導致引導問題。
  * 備註：三星 970 EVO Plus NVMe SSD 也有同樣的問題，但它在韌體更新中得到了修復；[按這裡](https://www.samsung.com/semiconductor/minisite/ssd/download/tools/)來取得更新（在 Windows 中通過三星魔術師或 ISO）。
  * 注意：macOS 不支援使用 [Intel Optane Memory](https://www.intel.com/content/www/us/en/architecture-and-technology/optane-memory.html) 或 [Micron 3D XPoint](https://www.micron.com/products/advanced-solutions/3d-xpoint-technology) 進行硬碟加速的筆記型電腦。一些用戶報告，這些硬碟成功在 Catalina 進行讀寫，但我們強烈建議移除這些硬碟，以防止任何潛在的開機問題。
    * 如果在 macOS 中停用了 Optane 部分，則 Intel Optane H10/H20 型號記憶體是相容的。更多資訊可以在[這裡](https://blog.csdn.net/weixin_46341175/article/details/126626808) ([中文原文](https://zhuanlan.zhihu.com/p/429073173))找到。
  
* **Intel 600p**
  * 雖然可以啟動，但請注意此型號可能會導致許多問題。 [Intel 600p NVMe 硬碟有修復嗎？#1286](https://github.com/acidanthera/bugtracker/issues/1286)
  * 660p 型號則沒有問題

:::details AMD CPU 筆記型電腦需特別注意

你應留意你的筆記型電腦所支援的硬碟規格：

* 如支援 NVMe：只要留意上述事項，你應能正常安裝 macOS。
* 如只支援 SATA：請留意筆記型電腦的 SATA/AHCI 控制器型號。如果是 AMD 原生的 SATA 控制器，除非你願意安裝到 USB 硬碟，否則無法安裝 macOS。

:::

## 有線網路

在 macOS 中，幾乎所有有線網路適配器均有一定程度的支援，要麼是内置驅動程式，要麼是社群製作的 kext。主要的例外有：

* Intel I225 2.5Gb NIC
  * 可以在高端桌面的 Comet Lake 主板上找到
  * 可能的解決方法：[來源](https://www.hackintosh-forum.de/forum/thread/48568-i9-10900k-gigabyte-z490-vision-d-er-läuft/?postID=606059#post606059) 和 [示例](config.plist/comet-lake.md#deviceproperties)
* Intel I350 1Gb server NIC
  * 通常在 Intel 和 Supermicro 不同年代的伺服器主板上找到
  * [替代方法](config-HEDT/ivy-bridge-e.md#deviceproperties)
* Intel 10Gb server NICs
  * 用於 [X520 and X540 芯片組](https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/)的替代方案
* Mellanox 和 Qlogic 伺服器網路適配器

## 無線網路

大多數筆記型電腦自帶的 Wi-Fi 卡均不支援，因為它們通常是 Intel 或是高通的型號。如果你幸運的話，你可能有一張受支援的 Atheros Wi-Fi 卡，但最高只支援到 High Sierra.

目前最好的選擇是獲得支持的博通 Wi-Fi 卡；請參閱[無線網卡購買指南](https://eason329.github.io/Wireless-Buyers-Guide/) 獲得建議。

注意：在 macOS 上，Intel Wi-Fi 可藉由第三方驅動程式獲得支援，請查看[無線網卡購買指南](https://eason329.github.io/Wireless-Buyers-Guide/) 了解更多關於驅動程式和支援的無線網卡的資訊。

## 其他

* **指紋傳感器**
  * 目前還沒有辦法模擬 Touch ID 傳感器，因此指紋傳感器將無法運作。
* **Windows Hello 人臉識別**
  * 一些筆記本電腦自帶的 WHFR 是 I2C 連接的（並通過 iGPU 使用），這些將不起作用。
  * 一些筆記本電腦配備了以 USB 連接的 WHFR，如果你幸運的話，你可能會有相機功能，但沒有其他功能。
* **Intel 智能聲音技術**
  * 對於使用英特爾 SST 的筆記型電腦，所有通過這個技術連接的任何東西（通常是內部麥克風）都將不起作用，因為這個技術不受支援。你可以在 Windows 的裝置管理員中查看。
* **耳機連接埠組合**
  * 一些帶有綜合耳機插孔的筆記型電腦可能無法通過它們進行音訊輸入，必須使用內置麥克風或通過 USB 連接埠的外部音訊輸入設備。
* **Thunderbolt USB-C 連接埠**
  * （Hackintosh）目前在 macOS 中對 Thunderbolt 的支援仍然不確定，尤其是在 Alpine Ridge 控制器上，這是目前大多數筆記型電腦都擁有的。有人嘗試維持控制器的電力來允許Thunderbolt 和 USB-C 的熱插拔，但代價是內核崩潰 和/或 USB-C 在睡眠後失效。如果你想使用 USB-C 連接埠並能夠休眠，你必須在啟動時插入裝置並保持插入狀態。
  * 注意：這僅適用於 Thunderbolt 3 和 USB-C 的組合連接埠，不適用於僅 USB-C 的連接埠。
  * 在 BIOS 中停用 Thunderbolt 也會解決這個問題。
