(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{264:function(t,e,r){t.exports=r.p+"assets/img/populated-efi.8d46cc52.png"},276:function(t,e,r){t.exports=r.p+"assets/img/sample-location.9e091fb2.png"},277:function(t,e,r){t.exports=r.p+"assets/img/renamed.9b06868d.png"},278:function(t,e,r){t.exports=r.p+"assets/img/before-snapshot.f2dccade.png"},279:function(t,e,r){t.exports=r.p+"assets/img/after-snapshot.0dfaaf2b.png"},280:function(t,e,r){t.exports=r.p+"assets/img/duplicate.b628676a.png"},566:function(t,e,r){"use strict";r.r(e);var s=r(10),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"開始建構-config-plist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#開始建構-config-plist"}},[t._v("#")]),t._v(" 開始建構 config.plist")]),t._v(" "),e("p",[t._v("現在，我們收集了所有需要的 Kext (.kext)、SSDT (.aml) 和韌體驅動程式 (.efi)，你的 USB 隨身碟應該開始看起來像這樣：")]),t._v(" "),e("p",[e("img",{attrs:{src:r(264),alt:"已構置的 EFI 資料夾"}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("注意")]),t._v("：你的隨身碟"),e("strong",[t._v("看起來可能會與上圖有所不同")]),t._v("，不同的系統都會有不同的需求。")])]),t._v(" "),e("h2",{attrs:{id:"建立你的-config-plist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立你的-config-plist"}},[t._v("#")]),t._v(" 建立你的 config.plist")]),t._v(" "),e("p",[t._v("首先，我們要取得 "),e("code",[t._v("Sample.plist")]),t._v("，這個檔案在 "),e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCorePkg"),e("OutboundLink")],1),t._v("的 "),e("code",[t._v("Docs")]),t._v(" 資料夾之下：")]),t._v(" "),e("p",[e("img",{attrs:{src:r(276),alt:""}})]),t._v(" "),e("p",[t._v("接下來，我們將它移動到隨身碟的 EFI 磁碟區（在 Windows 上稱為 BOOT）under "),e("code",[t._v("EFI/OC/")]),t._v(", 並將其重新命名為 config.plist：")]),t._v(" "),e("p",[e("img",{attrs:{src:r(277),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"加入你需要的-ssdt、kexts-和韌體驅動程式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加入你需要的-ssdt、kexts-和韌體驅動程式"}},[t._v("#")]),t._v(" 加入你需要的 SSDT、Kexts 和韌體驅動程式")]),t._v(" "),e("p",[t._v("在本指南接下來的部分，你需要某種形式的 plist 編輯。在本指南中，我們將使用 ProperTree 和 GenSMBIOS 來幫助自動化一些乏味的工作：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/corpnewt/ProperTree",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProperTree"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("通用的 plist 編輯器")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/corpnewt/GenSMBIOS",target:"_blank",rel:"noopener noreferrer"}},[t._v("GenSMBIOS"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("用於生成 SMBIOS 資料")])])])]),t._v(" "),e("p",[t._v("接下來，打開 ProperTree 並編輯我們的 config.plist：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("ProperTree.command")]),t._v(" "),e("ul",[e("li",[t._v("適用於 macOS")]),t._v(" "),e("li",[t._v("提示：在 Scripts 資料夾中有一個 buildapp.command 工具程式，可讓你在 macOS 中將 ProperTree 轉換為獨立的應用程式")])])]),t._v(" "),e("li",[e("code",[t._v("ProperTree.bat")]),t._v(" "),e("ul",[e("li",[t._v("適用於 Windows")])])])]),t._v(" "),e("p",[t._v("當 ProperTree 運行後, 通過按下 "),e("strong",[t._v("Cmd/Ctrl + O")]),t._v(" 開啟在隨身碟的的 config.plist。")]),t._v(" "),e("p",[t._v("在配置檔案打開後，按 "),e("strong",[t._v("Cmd/Ctrl + Shift + R")]),t._v(" 並將其指向你的 EFI/OC 資料夾來執行「清理快照」：")]),t._v(" "),e("ul",[e("li",[t._v("這將從 config.plist 中刪除所有條目，然後將所有 SSDT、kext 和韌體驅動程式的條目新增至配置檔案中")]),t._v(" "),e("li",[t._v("另一個做法是 "),e("strong",[t._v("Cmd/Ctrl + R")]),t._v("，它也會將你所有的檔案條目新增至配置檔案，但如果它們之前已被停用，則會維持原狀。這對你進行故障排除很有用，但對我們目前來說並不需要")])]),t._v(" "),e("p",[e("img",{attrs:{src:r(278),alt:""}})]),t._v(" "),e("p",[t._v("完成後，你會看到你的 SSDT、kext 和韌體驅動程式已經加入到你的 config.plist 中：")]),t._v(" "),e("p",[e("img",{attrs:{src:r(279),alt:""}})]),t._v(" "),e("ul",[e("li",[t._v('**注意：**如果程式彈出了 "Disable the following kexts with Duplicate CFBundleIdentifiers?" 的快顯通知，請按「Yes」。這是為了確保你沒有注入重複的 kext，因為一些 kext 可能內附一些相同的插件（例如：VoodooInput 同時存在於 VoodooPS2 和 VoodooI2C 的插件資料夾中)')])]),t._v(" "),e("p",[e("img",{attrs:{src:r(280),alt:""}})]),t._v(" "),e("p",[t._v("如果你想稍微清理一下檔案，你可以刪除 "),e("code",[t._v("#WARNING")]),t._v(" 條目。這取決於你的個人喜好，因為保留他們不會造成任何問題。")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),e("p",[t._v("config.plist "),e("strong",[t._v("必須")]),t._v(" 與 EFI 資料夾的內容相匹配. 如果您刪除了一個檔案，卻將其保留在 config.plist, OpenCore 將出錯並停止啟動。")]),t._v(" "),e("p",[t._v("如果你做了任何修改，你可以在 ProperTree 中使用 OC 快照工具（"),e("strong",[t._v("Cmd/Ctrl + R")]),t._v("）來更新 config.plist。")])]),t._v(" "),e("h2",{attrs:{id:"起點"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起點"}},[t._v("#")]),t._v(" 起點")]),t._v(" "),e("p",[t._v("編輯 config.plist 看起來可能很難，其實不然，只是需要一些時間。本指南將告訴您如何設定所有內容，您不會被冷落。這也意味著如果你有問題，你需要檢查你的配置設定以確保它們是正確的。設定 OpenCore 時需要注意的主要事項：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("所有屬性均必須定義")]),t._v("，OpenCore 不設任何預設的回退值，因此"),e("strong",[t._v("除非明確地告訴你可以刪除，否則不要刪除任何章節")]),t._v("。如果指南沒有提到該選項，請將其保留為預設值。")]),t._v(" "),e("li",[e("strong",[t._v("Sample.plist 不能按原樣使用")]),t._v("，你必須根據自己的系統進行配置")]),t._v(" "),e("li",[e("strong",[t._v("不要使用配置器")]),t._v(", 這些配置器很少遵守 OpenCore 的配置設定，甚至一些像 Mackie 製作的配置器還會增加 Clover 屬性和破壞 plist！")])]),t._v(" "),e("p",[t._v("現在，我們來快速回顧一下我們需要的工具")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/corpnewt/ProperTree",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProperTree"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("通用的 plist 編輯器")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/corpnewt/GenSMBIOS",target:"_blank",rel:"noopener noreferrer"}},[t._v("GenSMBIOS"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("用於生成 SMBIOS 資料")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample/config.plist"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("參閱上一章節了解如何取得："),e("RouterLink",{attrs:{to:"/config.plist/"}},[t._v("config.plist 設定")])],1)])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("在設定 OpenCore 之前，請多次閱讀本指南，並確保你已正確設定。請注意，圖片並不總是最新的，所以請閱讀圖片下面的文字，如果沒有提到，那麼請將其保持為預設值。")])]),t._v(" "),e("p",[t._v("提醒你：你需要根據你使用的平台進行配置。每個平台都有自己的選項值（Quirk）需要你的注意，所以了解你的硬體是非常重要的。")]),t._v(" "),e("h1",{attrs:{id:"現在-這些步驟都完成了-你可以開始編輯-config-plist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#現在-這些步驟都完成了-你可以開始編輯-config-plist"}},[t._v("#")]),t._v(" 現在，這些步驟都完成了，你可以"),e("RouterLink",{attrs:{to:"/config.plist/acpi.html"}},[t._v("開始編輯 config.plist")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);