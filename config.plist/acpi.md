# ACPI

ACPI（進階組態與電源介面，Advanced Configuration and Power Interface）是用於發現和設定電腦硬體的開放標準。[ACPI 規範](https://uefi.org/specifications) 定義了標準的表（如：`DSDT`, `SSDT`, `FACS`, `DMAR`）和多種用於執行的方法（如：`_DSM`, `_PRW`）。現代硬體只需進行少量更改即可保持 ACPI 相容性，並 OpenCore 提供了一些用於此類更改的選項。

要編譯和反彙編ACPI表，可以使用 [ACPICA](https://www.acpica.org) 開發的 [iASL compiler](https://github.com/acpica/acpica)。iASL 編譯器的 GUI 軟體可以從 [Acidanthera/MaciASL](https://github.com/acidanthera/MaciASL/releases) 下載。

ACPI changes apply globally (to every operating system) with the following effective order:
ACPI 修改（在所有操作系統）會循以下順序執行：

* 處理 `Delete`
* 處理 `Quirks`
* 處理 `Patch`
* 處理 `Add`

在所有操作系統套用修改可以解決操作系統檢測不正確（與 ACPI 規範一致，在操作系統啟動之前不可能）、多操作系統開機和困難的 ACPI 除錯等問題。 因此，在寫入“_OSI”更改時可能需要更多注意。

提早套用修補可以編寫所謂的「代理」修補，其中原始方法在原始表中進行修補，並在修補後的表中執行。

# Add

::: tip 資訊

這裡是你將為系統加入 SSDT 的地方，它們對**啟動 macOS** 非常重要，且有許多用途，如 [USB 映射](https://eason329.github.io/OpenCore-Post-Install/usb/)、[停用不支援的 GPU](../extras/spoof.md) 等。在我們的系統中, **甚至需要這些才可以啟動**. 你可以在 [**ACPI 入門教學**](https://eason329.github.io/Getting-Started-With-ACPI/)了解如何製作 SSDT

對於我們來說，我們需要一些 SSDT 來帶回 Clover 提供的功能。現在，我們來快速回顧一下不同平台所需要的 SSDT：

:::

### 桌面電腦

| 平台 | **CPU** | **EC** | **AWAC** | **NVRAM** | **USB** | **IMEI** |
| :-------: | :-----: | :----: | :------: | :-------: | :-----: |
| Penryn | N/A | [SSDT-EC](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | N/A | N/A | N/A | N/A |
| Lynnfield and Clarkdale | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| SandyBridge | [CPU-PM](https://sumingyd.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management) (安裝完畢後執行) | ^^ | ^^ | ^^ | ^^ | [SSDT-IMEI](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/imei.html) |
| Ivy Bridge | ^^ | ^^ | ^^ | ^^ | ^^ | [SSDT-IMEI](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/imei.html) |
| Haswell | [SSDT-PLUG](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/plug.html) | ^^ | ^^ | ^^ | ^^ | N/A |
| Broadwell | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Skylake | ^^ | [SSDT-EC-USBX](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | ^^ | ^^ | ^^ | ^^ |
| Kaby Lake | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Coffee Lake | ^^ | ^^ | [SSDT-AWAC](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/awac.html) | [SSDT-PMC](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/nvram.html) | ^^ | ^^ |
| Comet Lake | ^^ | ^^ | ^^ | N/A | [SSDT-RHUB](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/rhub.html) | ^^ |
| AMD (15/16h) | N/A | ^^ | N/A | ^^ | N/A | ^^ |
| AMD (17/19h) | [SSDT-CPUR for B550 and A520](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-CPUR.aml) | ^^ | ^^ | ^^ | ^^ | ^^ |

### 高端桌面電腦（HEDT）

| 平台 | **CPU** | **EC** | **RTC** | **PCI** |
| :-------: | :-----: | :----: | :-----: | :-----: |
| Nehalem and Westmere | N/A | [SSDT-EC](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | N/A | N/A |
| Sandy Bridge-E | ^^ | ^^ | ^^ | [SSDT-UNC](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/unc0) |
| Ivy Bridge-E | ^^ | ^^ | ^^ | ^^ |
| Haswell-E | [SSDT-PLUG](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/plug.html) | [SSDT-EC-USBX](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | [SSDT-RTC0-RANGE](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/awac.html) | ^^ |
| Broadwell-E | ^^ | ^^ | ^^ | ^^ |
| Skylake-X | ^^ | ^^ | ^^ | N/A |

### 筆記型電腦

| 平台 | **CPU** | **EC** | **Backlight** | **I2C Trackpad** | **AWAC** | **USB** | **IRQ** |
| :-------: | :-----: | :----: | :-----------: | :--------------: | :------: | :-----: | :-----: |
| Clarksfield and Arrandale | N/A | [SSDT-EC](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | [SSDT-PNLF](https://sumingyd.github.io/Getting-Started-With-ACPI/Laptops/backlight.html) | N/A | N/A | N/A | [IRQ SSDT](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/irq.html) |
| SandyBridge | [CPU-PM](https://sumingyd.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management) (Run in Post-Install) | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Ivy Bridge | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Haswell | [SSDT-PLUG](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/plug.html) | ^^ | ^^ | [SSDT-GPI0](https://sumingyd.github.io/Getting-Started-With-ACPI/Laptops/trackpad.html) | ^^ | ^^ | ^^ |
| Broadwell | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Skylake | ^^ | [SSDT-EC-USBX](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/ec-fix.html) | ^^ | ^^ | ^^ | ^^ | N/A |
| Kaby Lake | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Coffee Lake (8th Gen) and Whiskey Lake | ^^ | ^^ | [SSDT-PNLF](https://sumingyd.github.io/Getting-Started-With-ACPI/Laptops/backlight.html) | ^^ | [SSDT-AWAC](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/awac.html) | ^^ | ^^ |
| Coffee Lake (9th Gen) | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Comet Lake | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ | ^^ |
| Ice Lake | ^^ | ^^ | ^^ | ^^ | ^^ | [SSDT-RHUB](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/rhub.html) | ^^ |

### 筆記型電腦（續）

| 平台 | **NVRAM** | **IMEI** |
| :-------: | :-------: | :------: |
| Clarksfield and Arrandale | N/A | N/A |
| Sandy Bridge | ^^| [SSDT-IMEI](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/imei.html) |
| Ivy Bridge | ^^ | ^^ |
| Haswell | ^^ | N/A |
| Broadwell | ^^ | ^^ |
| Skylake | ^^ | ^^ |
| Kaby Lake | ^^ | ^^ |
| Coffee Lake (8th Gen) and Whiskey Lake | ^^ | ^^ |
| Coffee Lake (9th Gen) | [SSDT-PMC](https://sumingyd.github.io/Getting-Started-With-ACPI/Universal/nvram.html) | ^^ |
| Comet Lake | N/A | ^^ |
| Ice Lake | ^^ | ^^ |

請注意，你**不應該**在這裡加入您生成的 DSDT.aml，它已經在你的韌體中了。因此，如果存在的話，請刪除 config plist 和 EFI/OC/ACPI 下的相關條目。

對於那些想要更深入地傾印你的 DSDT、如何製作這些 SSDT 及編譯它們的人，請參閱 [**ACPI 入門教學**](https://eason329.github.io/Getting-Started-With-ACPI/)**頁面**。編譯後的 SSDT 會有一個 **.aml** 副檔名（已編譯）並會放入 `EFI/OC/ACPI` 資料夾，且**必須**在你的配置檔案裡的 `ACPI -> Add` 下指定。

# Delete

這裡將阻止載入某些 ACPI 表。

* 大部分非 Sandy Bridge 和 Ivy Bridge 的電腦不需要設定這一部分。

::: tip 資訊

Sandy Bridge 和 Ivy Bridge 的電腦需要設定這一部分。這是由於蘋果的 XCPM 對 Sandy Bridge 和 Ivy Bridge 的支援不太好，會導致開機時令 AppleIntelCPUPowerManagement 出現錯誤。要避免這種情況，我們要在 [安裝後](https://dortania.github.io/OpenCore-Post-Install/) 建立我們自己的 PM SSDT，並「刪除」原有的表（注意：這是暫時性的，直至我們建立了自己的 SSDT-PM，我們稍後會重新啟用這些表）。

刪除 CpuPm：

| Key | Type | Value |
| :--- | :--- | :--- |
| All | Boolean | YES |
| Comment | String | Delete CpuPm |
| Enabled | Boolean | YES |
| OemTableId | Data | `437075506d000000` |
| TableLength | Number | 0 |
| TableSignature | Data | `53534454` |

刪除 Cpu0Ist：

| Key | Type | Value |
| :--- | :--- | :--- |
| All | Boolean | YES |
| Comment | String | Delete Cpu0Ist |
| Enabled | Boolean | YES |
| OemTableId | Data | `4370753049737400` |
| TableLength | Number | 0 |
| TableSignature | Data | `53534454` |

:::

# Patch

這個章節允許我們通過 OpenCore 動態修改 ACPI 部分内容（DSDT、SSDT 等）。對我們來說，我們的修補程式將由我們的 SSDT 處理。這是一個更簡潔的解決方案，因為這將允許我們使用 OpenCore 啟動 Windows 和其他操作系統。

::: tip 資訊

* 重新命名 OSI
  * 筆記型電腦可能需要進行這個設定。
  * 這個設定在使用 SSDT-XOSI 時是必需的，因為我們會將所有的 OSI 調用重定向到這個 SSDT，**如果你使用 `SSDT-GPIO` 則不需要**

| Comment | String | Change _OSI to XOSI |
| :--- | :--- | :--- |
| Enabled | Boolean | YES |
| Count | Number | 0 |
| Limit | Number | 0 |
| Find | Data | `5f4f5349` |
| Replace | Data | `584f5349` |

:::

# Quirks

與 ACPI 相關的設定，請將所有內容保留為預設值，我們不需要這些選項值。

# 完成此部分後，請[編輯 Booter 部分](booter.md)
