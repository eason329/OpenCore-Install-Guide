(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{405:function(e,t,a){e.exports=a.p+"assets/img/cpu-model-aida64.aace72f2.png"},406:function(e,t,a){e.exports=a.p+"assets/img/cpu-model-devicemanager.e6eedd26.png"},407:function(e,t,a){e.exports=a.p+"assets/img/GPU-model-aida64.b3b2cc00.png"},408:function(e,t,a){e.exports=a.p+"assets/img/GPU-model-devicemanager.677068d3.png"},409:function(e,t,a){e.exports=a.p+"assets/img/chipset-model-aida64.782706ee.png"},410:function(e,t,a){e.exports=a.p+"assets/img/chipset-model-devicemanager.57f025ae.png"},411:function(e,t,a){e.exports=a.p+"assets/img/trackpad-model-devicemanager.4e4c4e97.png"},412:function(e,t,a){e.exports=a.p+"assets/img/Windows-SMBus-Device.c4154ce4.png"},413:function(e,t,a){e.exports=a.p+"assets/img/USB-trackpad-normal.4415be9a.png"},414:function(e,t,a){e.exports=a.p+"assets/img/USB-trackpad-by-connection.57b914c9.png"},415:function(e,t,a){e.exports=a.p+"assets/img/i2c-trackpad.3277ba42.png"},416:function(e,t,a){e.exports=a.p+"assets/img/audio-controller-aida64.c4a94a0b.png"},417:function(e,t,a){e.exports=a.p+"assets/img/audio-controller-aida64.png.bf36cd98.png"},418:function(e,t,a){e.exports=a.p+"assets/img/nic-model-aida64.794005c8.png"},419:function(e,t,a){e.exports=a.p+"assets/img/nic-model-devicemanager.9bc7b615.png"},420:function(e,t,a){e.exports=a.p+"assets/img/disk-model-aida64.72b7da46.png"},421:function(e,t,a){e.exports=a.p+"assets/img/disk-model-devicemanager.41243ee5.png"},422:function(e,t,a){e.exports=a.p+"assets/img/ocsysinfo-example.b6fb71ae.png"},423:function(e,t,a){e.exports=a.p+"assets/img/ocsysinfo-hwdisc.0552a0c3.png"},424:function(e,t,a){e.exports=a.p+"assets/img/cpu-model-ocsysinfo.6150fbf3.png"},425:function(e,t,a){e.exports=a.p+"assets/img/gpu-model-ocsysinfo.a45a8727.png"},426:function(e,t,a){e.exports=a.p+"assets/img/id-smbus-ocsysinfo.b4de10bd.png"},427:function(e,t,a){e.exports=a.p+"assets/img/id-i2c-ocsysinfo.4a83c466.png"},428:function(e,t,a){e.exports=a.p+"assets/img/id-ps2-ocsysinfo.ea64d0ff.png"},429:function(e,t,a){e.exports=a.p+"assets/img/audio-codec-ocsysinfo.b196d284.png"},430:function(e,t,a){e.exports=a.p+"assets/img/network-model-ocsysinfo.7095f7ef.png"},431:function(e,t,a){e.exports=a.p+"assets/img/drive-model-ocsysinfo.40e31cef.png"},588:function(e,t,a){"use strict";a.r(t);var s=a(10),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"finding-your-hardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-your-hardware"}},[e._v("#")]),e._v(" Finding your hardware")]),e._v(" "),t("p",[e._v("This section is mostly a mini-guide on how to find what hardware you're currently running; this is mainly relevant for laptop and prebuilt users as hardware specs are a bit more difficult to obtain. You can skip this page and head to "),t("RouterLink",{attrs:{to:"/installer-guide/"}},[e._v("Creating the USB")]),e._v(" if you already know what hardware you have.")],1),e._v(" "),t("p",[e._v("For this, we'll assume you have Windows or Linux installed:")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#finding-hardware-using-windows"}},[e._v("Finding Hardware using Windows")]),t("ul",[t("li",[t("a",{attrs:{href:"#cpu-model"}},[e._v("CPU Model")])]),t("li",[t("a",{attrs:{href:"#gpu-model"}},[e._v("GPU Model")])]),t("li",[t("a",{attrs:{href:"#chipset-model"}},[e._v("Chipset Model")])]),t("li",[t("a",{attrs:{href:"#keyboard-trackpad-and-touchscreen-connection-type"}},[e._v("Keyboard, Trackpad and Touchscreen Connection Type")])]),t("li",[t("a",{attrs:{href:"#audio-codec"}},[e._v("Audio Codec")])]),t("li",[t("a",{attrs:{href:"#network-controller-models"}},[e._v("Network Controller models")])]),t("li",[t("a",{attrs:{href:"#drive-model"}},[e._v("Drive Model")])])])]),t("li",[t("a",{attrs:{href:"#finding-hardware-using-linux"}},[e._v("Finding Hardware using Linux")]),t("ul",[t("li",[t("a",{attrs:{href:"#cpu-model"}},[e._v("CPU Model")])]),t("li",[t("a",{attrs:{href:"#gpu-model"}},[e._v("GPU Model")])]),t("li",[t("a",{attrs:{href:"#chipset-model"}},[e._v("Chipset Model")])]),t("li",[t("a",{attrs:{href:"#keyboard-trackpad-and-touchscreen-connection-type"}},[e._v("Keyboard, Trackpad and  Touchscreen Connection Type")])]),t("li",[t("a",{attrs:{href:"#audio-codec"}},[e._v("Audio Codec")])]),t("li",[t("a",{attrs:{href:"#network-controller-models"}},[e._v("Network Controller models")])]),t("li",[t("a",{attrs:{href:"#drive-model"}},[e._v("Drive Model")])])])]),t("li",[t("a",{attrs:{href:"#finding-hardware-using-ocsysinfo"}},[e._v("Finding Hardware using OCSysInfo")]),t("ul",[t("li",[t("a",{attrs:{href:"#discovering-hardware"}},[e._v("Discovering hardware")])]),t("li",[t("a",{attrs:{href:"#cpu-model"}},[e._v("CPU Model")])]),t("li",[t("a",{attrs:{href:"#gpu-model"}},[e._v("GPU Model")])]),t("li",[t("a",{attrs:{href:"#keyboard-and-trackpad-connection-type"}},[e._v("Keyboard and Trackpad Connection Type")])]),t("li",[t("a",{attrs:{href:"#audio-codec"}},[e._v("Audio codec")])]),t("li",[t("a",{attrs:{href:"#network-models"}},[e._v("Network models")])]),t("li",[t("a",{attrs:{href:"#drive-model"}},[e._v("Drive model")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"finding-hardware-using-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-hardware-using-windows"}},[e._v("#")]),e._v(" Finding Hardware using Windows")]),e._v(" "),t("p",[e._v("For this we mainly have 2 options:")]),e._v(" "),t("ul",[t("li",[e._v("Windows' built-in Device Manager")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.aida64.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("AIDA64"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Due to the easier to use GUI, we recommend downloading AIDA64 and running this as it's much easier to grab specs. However we'll show you both methods for obtaining hardware specs.")]),e._v(" "),t("h3",{attrs:{id:"cpu-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-model"}},[e._v("#")]),e._v(" CPU Model")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("AIDA64")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Device Manager")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(405),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(406),alt:""}})])])])]),e._v(" "),t("h3",{attrs:{id:"gpu-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-model"}},[e._v("#")]),e._v(" GPU Model")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("AIDA64")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("DeviceManager")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(407),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(408),alt:""}})])])])]),e._v(" "),t("h3",{attrs:{id:"chipset-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chipset-model"}},[e._v("#")]),e._v(" Chipset Model")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("AIDA64")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("DeviceManager")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(409),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(410),alt:""}})])])])]),e._v(" "),t("ul",[t("li",[e._v("Note: Intel SOC based CPUs will have the chipset and other features already on the same die instead of being dedicated chips. This means trying to detect the exact chipset is a bit more difficult")])]),e._v(" "),t("h3",{attrs:{id:"keyboard-trackpad-and-touchscreen-connection-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-trackpad-and-touchscreen-connection-type"}},[e._v("#")]),e._v(" Keyboard, Trackpad and Touchscreen Connection Type")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("DeviceManager")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(411),alt:""}})])])])]),e._v(" "),t("p",[e._v("AIDA64 unfortunately doesn't provide any useful info regarding pointer devices, so we recommend using DeviceManager for this.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("You can find these devices under the following:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Human Interface Devices")])]),e._v(" "),t("li",[t("code",[e._v("Keyboards")])]),e._v(" "),t("li",[t("code",[e._v("Mice and other Pointer Devices")])])])]),e._v(" "),t("li",[t("p",[e._v("To view the exact connection type of the device, select the pointer device then enter "),t("code",[e._v("View -> Device by Connection")]),e._v(". This will clarify whether it's over PS2, I2C, SMBus, USB, etc")])])]),e._v(" "),t("p",[e._v("Depending on the device, it may show up under multiple names and connections. The main ones to keep an eye on:")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("SMBus")]),e._v(" "),t("p",[e._v("These will show up as a straight PCI device such as "),t("code",[e._v("Synaptics SMBus Driver")]),e._v(" or "),t("code",[e._v("ELAN SMBus Driver")])]),e._v(" "),t("ul",[t("li",[e._v("Synaptics devices will show up under both PS2 under "),t("code",[e._v("Synaptics PS2 device")]),e._v("/"),t("code",[e._v("Synaptics Pointing Device")]),e._v(" and PCI as "),t("code",[e._v("Synaptics SMBus Driver")])])]),e._v(" "),t("p",[t("img",{attrs:{src:a(412),alt:""}})]),e._v(" "),t("p",[e._v("As you can see, we get 2 Synaptics devices in the left image, however if we take a closer look we'll see the top device is PS2, while the bottom one is SMBus. While you can use the trackpad in either mode, SMBus generally provides better gesture support and accuracy.")])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("USB")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Device by Type")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Device by Connection")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(413),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(414),alt:""}})])])])]),e._v(" "),t("p",[e._v("These will show up as a "),t("code",[e._v("PS2 Compliant Trackpad")]),e._v(", as well under USB when we switch our connection view to "),t("code",[e._v("Device by Connection")])])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("I2C")]),e._v(" "),t("p",[t("img",{attrs:{src:a(415),alt:""}}),e._v("\nThese will almost always show up as a Microsoft HID device, though can appear as other trackpads as well. They will always show up under I2C though.")])]),e._v(" "),t("h3",{attrs:{id:"audio-codec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audio-codec"}},[e._v("#")]),e._v(" Audio Codec")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("AIDA64")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("DeviceManager")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(416),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(417),alt:""}})])])])]),e._v(" "),t("p",[e._v("Due to how certain OEMs present device names, the most accurate info you can get with DeviceManager is via the PCI ID(ie. pci 14F1,50F4). This means you'll need to google the ID and figure out the exact device ID, however AIDA64 can present the name properly which is quite a bit easier on the end user.")]),e._v(" "),t("h3",{attrs:{id:"network-controller-models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-controller-models"}},[e._v("#")]),e._v(" Network Controller models")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("AIDA64")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Device Manager")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(418),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(419),alt:""}})])])])]),e._v(" "),t("p",[e._v("Due to how certain OEMs present device names, the most accurate info you can get with Device Manager is via the PCI ID (ie. "),t("code",[e._v("PCI\\VEN_14E4&DEV_43A0")]),e._v(" corresponds to a vendor ID of "),t("code",[e._v("14E4")]),e._v(" and a device ID of "),t("code",[e._v("43A0")]),e._v("). This means you'll need to Google the ID and figure out the exact device ID; however, AIDA64 can present the name properly which can be quite a bit easier.")]),e._v(" "),t("h3",{attrs:{id:"drive-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drive-model"}},[e._v("#")]),e._v(" Drive Model")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("AIDA64")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Device Manager")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(420),alt:""}})]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("img",{attrs:{src:a(421),alt:""}})])])])]),e._v(" "),t("p",[e._v("Due to OEMs not providing much details about the drive, you'll need to Google a bit which drive matches up with the displayed name.")]),e._v(" "),t("h2",{attrs:{id:"finding-hardware-using-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-hardware-using-linux"}},[e._v("#")]),e._v(" Finding Hardware using Linux")]),e._v(" "),t("p",[e._v("For finding hardware using Linux, we'll be using a few tools:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pciutils")])]),e._v(" "),t("li",[t("code",[e._v("dmidecode")])])]),e._v(" "),t("p",[e._v("Below you'll find a list of commands to run in the terminal, thankfully most Linux distros will come with these tools already installed. If not, you will likely find them in your distro's package manager.")]),e._v(" "),t("h3",{attrs:{id:"cpu-model-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-model-2"}},[e._v("#")]),e._v(" CPU Model")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"model name"')]),e._v(" /proc/cpuinfo\n")])])]),t("h3",{attrs:{id:"gpu-model-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-model-2"}},[e._v("#")]),e._v(" GPU Model")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("lspci "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--color")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vga\\|3d\\|2d"')]),e._v("\n")])])]),t("h3",{attrs:{id:"chipset-model-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chipset-model-2"}},[e._v("#")]),e._v(" Chipset Model")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("dmidecode "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-t")]),e._v(" baseboard\n")])])]),t("h3",{attrs:{id:"keyboard-trackpad-and-touchscreen-connection-type-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-trackpad-and-touchscreen-connection-type-2"}},[e._v("#")]),e._v(" Keyboard, Trackpad and  Touchscreen Connection Type")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dmesg")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" input\n")])])]),t("h3",{attrs:{id:"audio-codec-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audio-codec-2"}},[e._v("#")]),e._v(" Audio Codec")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("aplay "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-l")]),e._v("\n")])])]),t("h3",{attrs:{id:"network-controller-models-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-controller-models-2"}},[e._v("#")]),e._v(" Network Controller models")]),e._v(" "),t("p",[e._v("Basic info:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("lspci "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" network\n")])])]),t("p",[e._v("More in-depth info:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("lshw "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-class")]),e._v(" network\n")])])]),t("h3",{attrs:{id:"drive-model-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drive-model-2"}},[e._v("#")]),e._v(" Drive Model")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("lshw "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-class")]),e._v(" disk "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-class")]),e._v(" storage\n")])])]),t("h2",{attrs:{id:"finding-hardware-using-ocsysinfo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-hardware-using-ocsysinfo"}},[e._v("#")]),e._v(" Finding Hardware using OCSysInfo")]),e._v(" "),t("p",[e._v("There are 2 methods of obtaining and running OCSysInfo:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/KernelWanderers/OCSysInfo/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Precompiled binaries"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Manually cloning the "),t("a",{attrs:{href:"https://github.com/KernelWanderers/OCSysInfo",target:"_blank",rel:"noopener noreferrer"}},[e._v("repository"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("We recommend you download "),t("a",{attrs:{href:"https://github.com/KernelWanderers/OCSysInfo/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the binaries"),t("OutboundLink")],1),e._v(", as it is the simplest and easiest method.")]),e._v(" "),t("p",[e._v("If you want to learn more about manually cloning the repository, you can check out the OCSysInfo "),t("a",{attrs:{href:"https://github.com/KernelWanderers/OCSysInfo/tree/main/mini-guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("mini-guide"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"discovering-hardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discovering-hardware"}},[e._v("#")]),e._v(" Discovering hardware")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Laptop users: before we start, we advise you to disconnect any external USB devices, as this may lead to ambiguous or unnecessary information collected which may confuse you.")])]),e._v(" "),t("p",[e._v("After you've successfully installed and ran the application, you should be greeted with the following screen:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(422),alt:""}})]),e._v(" "),t("p",[e._v("From here, you can type in "),t("code",[e._v("d")]),e._v(" and press "),t("code",[e._v("ENTER")]),e._v("/"),t("code",[e._v("RETURN")]),e._v(", after, you should be greeted with a similar-looking screen:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(423),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"cpu-model-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-model-3"}},[e._v("#")]),e._v(" CPU Model")]),e._v(" "),t("p",[t("img",{attrs:{src:a(424),alt:""}})]),e._v(" "),t("p",[e._v("Besides the CPU model, it also lists the CPU's codename, highest SSE version supported and SSSE3 availability.")]),e._v(" "),t("h3",{attrs:{id:"gpu-model-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpu-model-3"}},[e._v("#")]),e._v(" GPU Model")]),e._v(" "),t("p",[t("img",{attrs:{src:a(425),alt:""}})]),e._v(" "),t("p",[e._v("In this case, the machine has two GPUs:")]),e._v(" "),t("ul",[t("li",[e._v("iGPU (Intel UHD Graphics 630)")]),e._v(" "),t("li",[e._v("dGPU (AMD Radeon R9 390X)")])]),e._v(" "),t("p",[e._v("Besides the model names, it also lists the GPUs' codename, ACPI & PCI path, which you may soon find useful as you progress in your hackintosh journey.")]),e._v(" "),t("h3",{attrs:{id:"keyboard-and-trackpad-connection-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-and-trackpad-connection-type"}},[e._v("#")]),e._v(" Keyboard and Trackpad Connection Type")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("SMBus Trackpad")]),e._v(" "),t("p",[t("img",{attrs:{src:a(426),alt:""}}),e._v("\nTrackpad: "),t("code",[e._v("SMBus")]),e._v(" "),t("br"),e._v(" Keyboard: "),t("code",[e._v("PS/2")])]),e._v(" "),t("p",[e._v("Credit for providing image: "),t("a",{attrs:{href:"https://github.com/ThatCopy",target:"_blank",rel:"noopener noreferrer"}},[e._v("ThatCopy"),t("OutboundLink")],1)])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("I2C Trackpad")]),e._v(" "),t("p",[t("img",{attrs:{src:a(427),alt:""}}),e._v("\nTrackpad: "),t("code",[e._v("I2C")]),e._v(" "),t("br"),e._v(" Keyboard: "),t("code",[e._v("PS/2")])]),e._v(" "),t("p",[e._v("Credit for providing image: "),t("a",{attrs:{href:"https://github.com/Mahas1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mahas"),t("OutboundLink")],1)])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("PS/2 Trackpad")]),e._v(" "),t("p",[t("img",{attrs:{src:a(428),alt:""}}),e._v("\nTrackpad: "),t("code",[e._v("PS/2")]),e._v(" "),t("br"),e._v(" Keyboard: "),t("code",[e._v("PS/2")])]),e._v(" "),t("p",[e._v("Credit for providing image: "),t("a",{attrs:{href:"https://github.com/Tasty0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tasty0"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"audio-codec-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audio-codec-3"}},[e._v("#")]),e._v(" Audio codec")]),e._v(" "),t("p",[t("img",{attrs:{src:a(429),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"network-models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-models"}},[e._v("#")]),e._v(" Network models")]),e._v(" "),t("p",[t("img",{attrs:{src:a(430),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"drive-model-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drive-model-3"}},[e._v("#")]),e._v(" Drive model")]),e._v(" "),t("p",[t("img",{attrs:{src:a(431),alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);