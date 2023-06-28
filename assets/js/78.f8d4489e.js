(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{572:function(t,e,l){"use strict";l.r(e);var a=l(10),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"蘋果安全開機"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#蘋果安全開機"}},[t._v("#")]),t._v(" 蘋果安全開機")]),t._v(" "),e("p",[t._v("config.plist 中的這些設定可以限制 OpenCore 啟動哪些 macOS 版本。在啟動 USB 之前，你需要先檢查這些設定。")]),t._v(" "),e("h2",{attrs:{id:"misc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[t._v("#")]),t._v(" Misc")]),t._v(" "),e("h3",{attrs:{id:"security-securebootmodel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#security-securebootmodel"}},[t._v("#")]),t._v(" Security -> SecureBootModel")]),t._v(" "),e("p",[t._v("OpenCore 預設啟用 "),e("a",{attrs:{href:"https://eason329.github.io/OpenCore-Post-Install/universal/security/applesecureboot.html#what-is-apple-secure-boot",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple Secure Boot"),e("OutboundLink")],1),t._v("。這將支援安全功能，如驗證 macOS 的 "),e("code",[t._v("boot.efi")]),t._v("，其副作用是限制了 OpenCore 能啟動的 macOS 版本。")]),t._v(" "),e("ul",[e("li",[t._v("Big Sur 及以上版本 (11.0+)：建議設定為 "),e("code",[t._v("Default")]),t._v("。")]),t._v(" "),e("li",[t._v("High Sierra 至 Catalina (10.13-10.15)：\n"),e("ul",[e("li",[t._v("如果你欲使用的型號沒有在下表列出，請設定為 "),e("code",[t._v("Disabled")]),t._v("。")]),t._v(" "),e("li",[t._v("如果要使用 NVIDIA Web Drivers，請設定為 "),e("code",[t._v("Disabled")]),t._v("。")]),t._v(" "),e("li",[t._v("如果你欲使用的 SMBIOS 有在下表列出，請將你欲安裝的版本與最低版本比較。如果欲安裝的版本比你的 SMBIOS 要求的最低版本還要低的話，請設定為 "),e("code",[t._v("Disabled")]),t._v("，否則請設定為你所使用的 SMBIOS。")])])]),t._v(" "),e("li",[t._v("Sierra 及以下版本 (10.4-10.12)：這個設定沒有作用。")]),t._v(" "),e("li",[t._v("如果需要啟動多個版本，你可能需要設定為 "),e("code",[t._v("Disabled")]),t._v("。\n"),e("ul",[e("li",[t._v("示例：一個沒有 T2 的 SMBIOS 要同時啟動 High Sierra 和 Big Sur 的話，便需要設定為 "),e("code",[t._v("Disabled")]),t._v("。")]),t._v(" "),e("li",[t._v("下表列出了 T2 SMBIOS 的最低版本限制。")])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("T2 Mac 型號")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("SMBIOS")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("最低 macOS 版本")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("iMacPro1,1 (December 2017)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.2 (17C2111)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,1 (July 2018)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.6 (17G2112)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,2 (July 2018)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.13.6 (17G2112)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Macmini8,1 (October 2018)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14 (18A2063)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir8,1 (October 2018)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.1 (18B2084)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,3 (May 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F132)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro15,4 (July 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F2058)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir8,2 (July 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.14.5 (18F2058)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,1 (November 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.1 (19B2093)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacPro7,1 (December 2019)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.1 (19B88)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookAir9,1 (March 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.3 (19D2064)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,2 (May 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.4 (19E2269)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,3 (May 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.4 (19E2265)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MacBookPro16,4 (June 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.5 (19F96)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("iMac20,1 (August 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.6 (19G2005)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("iMac20,2 (August 2020)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10.15.6 (19G2005)")])])])])]),t._v(" "),e("h1",{attrs:{id:"完成此部分後-請編輯-bios-設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完成此部分後-請編輯-bios-設定"}},[t._v("#")]),t._v(" 完成此部分後，請"),e("RouterLink",{attrs:{to:"/config.plist/bios-settings.html"}},[t._v("編輯 BIOS 設定")])],1)])}),[],!1,null,null,null);e.default=i.exports}}]);