# 開始建構 config.plist

現在，我們收集了所有需要的 Kext (.kext)、SSDT (.aml) 和韌體驅動程式 (.efi)，你的 USB 隨身碟應該開始看起來像這樣：

![已構置的 EFI 資料夾](../images/installer-guide/opencore-efi-md/populated-efi.png)

* **注意**：你的隨身碟**看起來可能會與上圖有所不同**，不同的系統都會有不同的需求。

## 建立你的 config.plist

首先，我們要取得 `Sample.plist`，這個檔案在 [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg/releases)的 `Docs` 資料夾之下：

![](../images/config/config-universal/sample-location.png)

接下來，我們將它移動到隨身碟的 EFI 磁碟區（在 Windows 上稱為 BOOT）under `EFI/OC/`, 並將其重新命名為 config.plist：

![](../images/config/config-universal/renamed.png)

## 加入你需要的 SSDT、Kexts 和韌體驅動程式

在本指南接下來的部分，你需要某種形式的 plist 編輯。在本指南中，我們將使用 ProperTree 和 GenSMBIOS 來幫助自動化一些乏味的工作：

* [ProperTree](https://github.com/corpnewt/ProperTree)
  * 通用的 plist 編輯器
* [GenSMBIOS](https://github.com/corpnewt/GenSMBIOS)
  * 用於生成 SMBIOS 資料

接下來，打開 ProperTree 並編輯我們的 config.plist：

* `ProperTree.command`
  * 適用於 macOS
  * 提示：在 Scripts 資料夾中有一個 buildapp.command 工具程式，可讓你在 macOS 中將 ProperTree 轉換為獨立的應用程式
* `ProperTree.bat`
  * 適用於 Windows

當 ProperTree 運行後, 通過按下 **Cmd/Ctrl + O** 開啟在隨身碟的的 config.plist。

在配置檔案打開後，按 **Cmd/Ctrl + Shift + R** 並將其指向你的 EFI/OC 資料夾來執行「清理快照」：

* 這將從 config.plist 中刪除所有條目，然後將所有 SSDT、kext 和韌體驅動程式的條目新增至配置檔案中
* 另一個做法是 **Cmd/Ctrl + R**，它也會將你所有的檔案條目新增至配置檔案，但如果它們之前已被停用，則會維持原狀。這對你進行故障排除很有用，但對我們目前來說並不需要

![](../images/config/config-universal/before-snapshot.png)

完成後，你會看到你的 SSDT、kext 和韌體驅動程式已經加入到你的 config.plist 中：

![](../images/config/config-universal/after-snapshot.png)

* **注意：**如果程式彈出了 "Disable the following kexts with Duplicate CFBundleIdentifiers?" 的快顯通知，請按「Yes」。這是為了確保你沒有注入重複的 kext，因為一些 kext 可能內附一些相同的插件（例如：VoodooInput 同時存在於 VoodooPS2 和 VoodooI2C 的插件資料夾中)

![](../images/config/config-universal/duplicate.png)

如果你想稍微清理一下檔案，你可以刪除 `#WARNING` 條目。這取決於你的個人喜好，因為保留他們不會造成任何問題。

::: danger
config.plist **必須** 與 EFI 資料夾的內容相匹配. 如果您刪除了一個檔案，卻將其保留在 config.plist, OpenCore 將出錯並停止啟動。

如果你做了任何修改，你可以在 ProperTree 中使用 OC 快照工具（**Cmd/Ctrl + R**）來更新 config.plist。
:::

## 編輯以前

編輯 config.plist 看起來可能很難，其實不然，只是需要一些時間。本指南將告訴您如何設定所有內容，您不會被冷落。這也意味著如果你有問題，你需要檢查你的配置設定以確保它們是正確的。設定 OpenCore 時需要注意的主要事項：

* **所有屬性均必須定義**，OpenCore 不設任何預設的回退值，因此**除非明確地告訴你可以刪除，否則不要刪除任何章節**。如果指南沒有提到該選項，請將其保留為預設值。
* **Sample.plist 不能按原樣使用**，你必須根據自己的系統進行配置
* **避免使用配置器**, 這些配置器很少遵守 OpenCore 的配置設定，甚至一些像 Mackie 製作的配置器還會增加 Clover 屬性和破壞 plist！

現在，我們來快速回顧一下我們需要的工具

* [ProperTree](https://github.com/corpnewt/ProperTree)
  * 通用的 plist 編輯器
* [GenSMBIOS](https://github.com/corpnewt/GenSMBIOS)
  * 用於生成 SMBIOS 資料
* [Sample/config.plist](https://github.com/acidanthera/OpenCorePkg/releases)
  * 參閱上一章節了解如何取得：[config.plist 設定](../config.plist/README.md)

::: warning

在設定 OpenCore 之前，請多次閱讀本指南，並確保你已正確設定。請注意，圖片並不總是最新的，所以請閱讀圖片下面的文字，如果沒有提到，那麼請將其保持為預設值。

:::

提醒你：你需要根據你使用的平台進行配置。每個平台都有自己的選項值（Quirk）需要你的注意，所以了解你的硬體是非常重要的。

# 現在，這些步驟都完成了，你可以[開始編輯 ACPI 部分](acpi.md)
