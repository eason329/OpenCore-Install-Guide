(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{337:function(t,e,l){t.exports=l.p+"assets/img/booter-duetpkg.5a27db69.png"},338:function(t,e,l){t.exports=l.p+"assets/img/aptio-iv-booter.955f215d.png"},339:function(t,e,l){t.exports=l.p+"assets/img/hedt-booter.57e91dae.png"},340:function(t,e,l){t.exports=l.p+"assets/img/aptio-v-booter.758a72d3.png"},341:function(t,e,l){t.exports=l.p+"assets/img/amd-zen-booter.2ea01f55.png"},565:function(t,e,l){"use strict";l.r(e);var a=l(10),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"booter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#booter"}},[t._v("#")]),t._v(" Booter")]),t._v(" "),e("p",[t._v("此部分允許對操作系統開機程式（主要是 Apple 開機程式 (boot.efi)）套用不同類型的 UEFI 修改。這些修改目前為不同的韌體類型提供了各種修補和環境更改。其中一些功能最初是作為現已不再維護的 "),e("a",{attrs:{href:"https://github.com/acidanthera/AptioFixPkg",target:"_blank",rel:"noopener noreferrer"}},[t._v("AptioMemoryFix.efi"),e("OutboundLink")],1),t._v(" 的一部分實現的。")]),t._v(" "),e("p",[t._v("Booter 修改會循以下順序執行：")]),t._v(" "),e("ul",[e("li",[t._v("處理 "),e("code",[t._v("Quirks")])]),t._v(" "),e("li",[t._v("處理 "),e("code",[t._v("Patch")])])]),t._v(" "),e("p",[t._v("請注意，大多數情況下，“MmioWhitelist” 允許將通常被忽略的空間傳遞到 macOS，與 “DevirtualiseMmio” 配合使用時非常有用。詳細訊息請參閱閱"),e("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/extras/kaslr-fix.html#using-devirtualisemmio",target:"_blank",rel:"noopener noreferrer"}},[t._v("這裡"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"mmiowhitelist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mmiowhitelist"}},[t._v("#")]),t._v(" MmioWhitelist")]),t._v(" "),e("p",[t._v("這個章節允許將通常被忽略的空間傳送予 macOS，與 "),e("code",[t._v("DevirtualiseMmio")]),t._v(" 配合使用時會很有用。")]),t._v(" "),e("h2",{attrs:{id:"quirks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quirks"}},[t._v("#")]),t._v(" Quirks")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("資訊")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("AvoidRuntimeDefrag")]),t._v(": YES\n"),e("ul",[e("li",[t._v("修復 UEFI 執行期服務，如日期、時間、NVRAM、電源控制等")]),t._v(" "),e("li",[t._v("使用傳統 BIOS 的電腦應該停用這個選項")])])]),t._v(" "),e("li",[e("strong",[t._v("DevirtualiseMmio")]),t._v(": YES\n"),e("ul",[e("li",[t._v("減少被盜記憶體佔用，擴展 "),e("code",[t._v("slide=N")]),t._v(" 值的選項，並對修復 Z390 上的記憶體分配問題非常有幫助。需要 Icelake 和 Z390 Coffee Lake 系統，並啟用 "),e("code",[t._v("ProtectUefiServices")]),t._v("。")])])]),t._v(" "),e("li",[e("strong",[t._v("EnableSafeModeSlide")]),t._v(": YES\n"),e("ul",[e("li",[t._v("允許 Slide 變量在安全模式下使用。但這個選項只適用於使用 UEFI 的電腦。")])])]),t._v(" "),e("li",[e("strong",[t._v("EnableWriteUnprotector")]),t._v(": YES\n"),e("ul",[e("li",[t._v("需要從 UEFI 平台的 CR0 寄存器中移除寫入保護。")]),t._v(" "),e("li",[t._v("在 Coffee Lake 和更新的平台中，你應啟用 RebuildAppleMemoryMap 選項而停用本選項，因為兩個選項在新平台中經常有衝突。")]),t._v(" "),e("li",[t._v("然而，由於 OEM 沒有使用最新的 EDKII 版本，您可能會發現上述組合將導致早期啟動失敗。這是由於缺少 "),e("code",[t._v("MEMORY_ATTRIBUTE_TABLE")]),t._v(" 而引起。如發生這種情況，我们建議停用 RebuildAppleMemoryMap 並啟用 EnableWriteUnprotector。更多訊息請參見"),e("RouterLink",{attrs:{to:"/troubleshooting/extended/kernel-issues.html#stuck-on-eb-log-exitbs-start"}},[t._v("故障診斷部分")]),t._v("。")],1)])]),t._v(" "),e("li",[e("strong",[t._v("ProtectMemoryRegions")]),t._v(": NO\n"),e("ul",[e("li",[t._v("Patches memory region types for incorrectly mapped CSM/MMIO regions.")]),t._v(" "),e("li",[t._v("所有使用 coreboot UEFI 韌體的 Chromebook 都需要啟用這個選項。")])])]),t._v(" "),e("li",[e("strong",[t._v("ProtectUefiServices")]),t._v(": NO\n"),e("ul",[e("li",[t._v("保護 UEFI 服務不被韌體覆蓋，主要與 VM、Icelake 和 Z390 系統有關。")]),t._v(" "),e("li",[t._v("在 Z390 系統中，"),e("strong",[t._v("請啟用這個選項")]),t._v("。")])])]),t._v(" "),e("li",[e("strong",[t._v("ProvideCustomSlide")]),t._v(": YES\n"),e("ul",[e("li",[t._v("用於 Slide 變量計算。然而，這個選項的必要性取決於除錯日誌中是否出現 "),e("code",[t._v("OCABC: Only N/256 slide values are usable!")]),t._v(" 訊息。如果在日誌中顯示 "),e("code",[t._v("OCABC: All slides are usable! You can disable ProvideCustomSlide!")]),t._v(" 訊息，你可以停用 "),e("code",[t._v("ProvideCustomSlide")]),t._v("。")])])]),t._v(" "),e("li",[e("strong",[t._v("RebuildAppleMemoryMap")]),t._v(": YES\n"),e("ul",[e("li",[t._v("生成與 macOS 相容的記憶體映射，可能會在一些筆記型電腦 OEM 韌體上崩潰，如果你因此而收到早期開機失敗，請停用此功能。")]),t._v(" "),e("li",[t._v("在 Kaby Lake 和更舊的平台中，你應啟用 EnableWriteUnprotector 選項而停用本選項。")])])]),t._v(" "),e("li",[e("strong",[t._v("ResizeAppleGpuBars")]),t._v(": -1\n"),e("ul",[e("li",[t._v("啟動 macOS 時，如果設定為 "),e("code",[t._v("0")]),t._v("，將減少 GPU PCI 條的大小，設定為 "),e("code",[t._v("-1")]),t._v(" 則停用")]),t._v(" "),e("li",[t._v("使用此選項可以設定其他 PCI Bar 值，但可能導致不穩定")]),t._v(" "),e("li",[t._v("只有在韌體中啟用了對 Resizable BAR 的支援時，才需要將此屬性設定為 0。")])])]),t._v(" "),e("li",[e("strong",[t._v("SetupVirtualMap")]),t._v(": YES\n"),e("ul",[e("li",[t._v("修復了 SetVirtualAddresses 對虛擬地址的調用問題，Gigabyte 主板需要啟用這個選項來解決早期內核錯誤")]),t._v(" "),e("li",[t._v("但是，此選項在 Comet Lake 因其記憶體保護而無法工作。ASUS，Gigabyte 和 AsRock 主板無法在本選項啟用的情況下開機。")])])]),t._v(" "),e("li",[e("strong",[t._v("SyncRuntimePermissions")]),t._v(": YES\n"),e("ul",[e("li",[t._v("修正了與 MAT 表的對齊，並要求使用 MAT 表啟動 Windows 和 Linux，也推薦用於 macOS。主要適用於重建蘋果記憶體映射用戶。")])])])])]),t._v(" "),e("p",[t._v("接下來，請根據平台進行設定。")]),t._v(" "),e("h3",{attrs:{id:"通用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用"}},[t._v("#")]),t._v(" 通用")]),t._v(" "),e("h4",{attrs:{id:"啟動-os-x-10-4-至-10-6-的系統"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#啟動-os-x-10-4-至-10-6-的系統"}},[t._v("#")]),t._v(" 啟動 OS X 10.4 至 10.6 的系統")]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("RebuildAppleMemoryMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")])])])]),t._v(" "),e("h4",{attrs:{id:"使用-coreboot-uefi-韌體的-chromebook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-coreboot-uefi-韌體的-chromebook"}},[t._v("#")]),t._v(" 使用 coreboot UEFI 韌體的 Chromebook")]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ProtectMemoryRegions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("修復了某些 Chromebook 上的關機／重新啟動問題，否則會導致 AppleEFINVRAM 內核錯誤。")])])])]),t._v(" "),e("h3",{attrs:{id:"intel-桌面平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intel-桌面平台"}},[t._v("#")]),t._v(" Intel 桌面平台")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("傳統 BIOS")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("UEFI")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:l(337),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:l(338),alt:""}})])])])]),t._v(" "),e("h4",{attrs:{id:"傳統-bios-系統-yonah-conroe-penryn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#傳統-bios-系統-yonah-conroe-penryn"}},[t._v("#")]),t._v(" 傳統 BIOS 系統（Yonah, Conroe, Penryn）")]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("AvoidRuntimeDefrag")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Big Sur 可能需要啟用這個選項值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableSafeModeSlide")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableWriteUnprotector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ProvideCustomSlide")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SetupVirtualMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"coffee-lake"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coffee-lake"}},[t._v("#")]),t._v(" Coffee Lake")]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DevirtualiseMmio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableWriteUnprotector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ProtectUefiServices")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在 Z390 系統上需要啟用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("RebuildAppleMemoryMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ResizeAppleGpuBars")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("如果你的韌體支援增加 GPU Bar 大小（可調整大小的 BAR 的支援），請將其設定為 "),e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SyncRuntimePermissions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"comet-lake"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comet-lake"}},[t._v("#")]),t._v(" Comet Lake")]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DevirtualiseMmio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableWriteUnprotector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ProtectUefiServices")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("RebuildAppleMemoryMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ResizeAppleGpuBars")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("如果你的韌體支援增加 GPU Bar 大小（可調整大小的 BAR 的支援），請將其設定為 "),e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SetupVirtualMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SyncRuntimePermissions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"其他-未列出的-系統"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他-未列出的-系統"}},[t._v("#")]),t._v(" 其他（未列出的）系統")]),t._v(" "),e("p",[t._v("這些選項對這些系統沒有作用，請保留預設值。")]),t._v(" "),e("h3",{attrs:{id:"intel-高端桌面平台-hedt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intel-高端桌面平台-hedt"}},[t._v("#")]),t._v(" Intel 高端桌面平台（HEDT）")]),t._v(" "),e("h4",{attrs:{id:"nehalem-和-westmere"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nehalem-和-westmere"}},[t._v("#")]),t._v(" Nehalem 和 Westmere")]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("AvoidRuntimeDefrag")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Big Sur 可能需要啟用這個選項值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableSafeModeSlide")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableWriteUnprotector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ProvideCustomSlide")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SetupVirtualMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"skylake-x-w-和-cascade-lake-x-w"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#skylake-x-w-和-cascade-lake-x-w"}},[t._v("#")]),t._v(" Skylake-X/W 和 Cascade Lake-X/W")]),t._v(" "),e("p",[e("img",{attrs:{src:l(339),alt:"Booter"}})]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DevirtualiseMmio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableWriteUnprotector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("RebuildAppleMemoryMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SetupVirtualMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SyncRuntimePermissions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"其他-未列出的-系統-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他-未列出的-系統-2"}},[t._v("#")]),t._v(" 其他（未列出的）系統")]),t._v(" "),e("p",[t._v("這些選項對這些系統沒有作用，請保留預設值。")]),t._v(" "),e("h3",{attrs:{id:"intel-筆記型電腦平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intel-筆記型電腦平台"}},[t._v("#")]),t._v(" Intel 筆記型電腦平台")]),t._v(" "),e("h4",{attrs:{id:"clarksfield-和-arrandale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clarksfield-和-arrandale"}},[t._v("#")]),t._v(" Clarksfield 和 Arrandale")]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("AvoidRuntimeDefrag")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Big Sur 可能需要啟用這個選項值")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableSafeModeSlide")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableWriteUnprotector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ProvideCustomSlide")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SetupVirtualMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"coffee-lake-和-whiskey-lake"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coffee-lake-和-whiskey-lake"}},[t._v("#")]),t._v(" Coffee Lake 和 Whiskey Lake")]),t._v(" "),e("p",[e("img",{attrs:{src:l(340),alt:"Booter"}})]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableWriteUnprotector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("RebuildAppleMemoryMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SyncRuntimePermissions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"coffee-lake-plus-和-comet-lake"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coffee-lake-plus-和-comet-lake"}},[t._v("#")]),t._v(" Coffee Lake Plus 和 Comet Lake")]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DevirtualiseMmio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableWriteUnprotector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ProtectUefiServices")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("RebuildAppleMemoryMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SyncRuntimePermissions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h4",{attrs:{id:"其他-未列出的-系統-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他-未列出的-系統-3"}},[t._v("#")]),t._v(" 其他（未列出的）系統")]),t._v(" "),e("p",[t._v("這些選項對這些系統沒有作用，請保留預設值。")]),t._v(" "),e("h3",{attrs:{id:"amd-平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amd-平台"}},[t._v("#")]),t._v(" AMD 平台")]),t._v(" "),e("h4",{attrs:{id:"bulldozer-15h-和-jaguar-16h"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bulldozer-15h-和-jaguar-16h"}},[t._v("#")]),t._v(" Bulldozer(15h) 和 Jaguar(16h)")]),t._v(" "),e("p",[t._v("這些選項對這些系統沒有作用，請保留預設值。")]),t._v(" "),e("h4",{attrs:{id:"ryzen-和-threadripper-17h-and-19h"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ryzen-和-threadripper-17h-and-19h"}},[t._v("#")]),t._v(" Ryzen 和 Threadripper（17h and 19h）")]),t._v(" "),e("p",[e("img",{attrs:{src:l(341),alt:"Booter"}})]),t._v(" "),e("p",[t._v("請進行以下設定：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("選項值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否啟用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("說明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DevirtualiseMmio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("如果你使用的是 TRx40 系統，請啟用這個選項並參閱"),e("a",{attrs:{href:"https://eason329.github.io/OpenCore-Install-Guide/extras/kaslr-fix.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("這個指南"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("EnableWriteUnprotector")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("NO")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("RebuildAppleMemoryMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ResizeAppleGpuBars")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("如果你的韌體支援增加 GPU Bar 大小（可調整大小的 BAR 的支援），請將其設定為 "),e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SetupVirtualMap")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("X570、B550、A520、TRx40，及更新至 2020 年度後期 BIOS 的 X470、B450 主板則可能需要停用")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SyncRuntimePermissions")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("YES")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("h1",{attrs:{id:"完成此部分後-請編輯-deviceproperties-部分"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完成此部分後-請編輯-deviceproperties-部分"}},[t._v("#")]),t._v(" 完成此部分後，請"),e("RouterLink",{attrs:{to:"/config.plist/device-properties.html"}},[t._v("編輯 DeviceProperties 部分")])],1)])}),[],!1,null,null,null);e.default=i.exports}}]);