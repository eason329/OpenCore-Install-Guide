(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{279:function(t,a,e){t.exports=e.p+"assets/img/format-usb.83a24b13.png"},454:function(t,a,e){t.exports=e.p+"assets/img/commandlinesoftwareupdateutility.e1679420.png"},455:function(t,a,e){t.exports=e.p+"assets/img/munki.cb5c523a.png"},456:function(t,a,e){t.exports=e.p+"assets/img/munki-process.c0791880.png"},457:function(t,a,e){t.exports=e.p+"assets/img/munki-done.581ad405.png"},458:function(t,a,e){t.exports=e.p+"assets/img/munki-dmg.893a0e5d.png"},459:function(t,a,e){t.exports=e.p+"assets/img/download.974b60da.png"},460:function(t,a,e){t.exports=e.p+"assets/img/boot-disk.73bf04f5.png"},461:function(t,a,e){t.exports=e.p+"assets/img/boot-done.48b57b22.png"},462:function(t,a,e){t.exports=e.p+"assets/img/efi-base.2af0e24a.png"},463:function(t,a,e){t.exports=e.p+"assets/img/mount-efi-usb.c855475e.png"},464:function(t,a,e){t.exports=e.p+"assets/img/base-efi.3b1f0304.png"},596:function(t,a,e){"use strict";e.r(a);var s=e(10),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"making-the-installer-in-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer-in-macos"}},[t._v("#")]),t._v(" Making the installer in macOS")]),t._v(" "),a("p",[t._v("While you don't need a fresh install of macOS to use OpenCore, some users prefer having a fresh slate with their boot manager upgrades.")]),t._v(" "),a("p",[t._v("To start we'll want to grab ourselves a copy of macOS. You can skip this and head to formatting the USB if you're just making a bootable OpenCore stick and not an installer. For everyone else, you can either download macOS from the App Store or with Munki's script.")]),t._v(" "),a("h2",{attrs:{id:"downloading-macos-modern-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos-modern-os"}},[t._v("#")]),t._v(" Downloading macOS: Modern OS")]),t._v(" "),a("p",[t._v("This method allows you to download macOS 10.13 and newer, for 10.12 and older see "),a("a",{attrs:{href:"#downloading-macos-legacy-os"}},[t._v("Downloading macOS: Legacy OS")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("macOS 12 and above note")]),t._v(": As recent macOS versions introduce changes to the USB stack, it is highly advisable that you map your USB ports (with USBToolBox) before installing macOS.\n"),a("ul",[a("li",[a("span",{staticStyle:{color:"red"}},[t._v(" CAUTION: ")]),t._v(" With macOS 11.3 and newer, "),a("a",{attrs:{href:"https://github.com/dortania/bugtracker/issues/162",target:"_blank",rel:"noopener noreferrer"}},[t._v("XhciPortLimit is broken resulting in boot loops"),a("OutboundLink")],1),t._v(".\n"),a("ul",[a("li",[t._v("If you've already "),a("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/usb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mapped your USB ports"),a("OutboundLink")],1),t._v(" and disabled "),a("code",[t._v("XhciPortLimit")]),t._v(", you can boot macOS 11.3+ without issues.")])])])])])]),t._v(" "),a("p",[t._v("From a macOS machine that meets the requirements of the OS version you want to install, go directly to the App Store:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#using-app-store"}},[t._v("Using App Store")])])]),t._v(" "),a("p",[t._v("For machines that need a specific OS release or can't download from the App Store:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#command-line-software-update-utility"}},[t._v("Command Line Software Update Utility,")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#munkis-installinstallmacos-utility"}},[t._v("Munki's InstallInstallMacOS utility")])])]),t._v(" "),a("h2",{attrs:{id:"using-app-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-app-store"}},[t._v("#")]),t._v(" Using App Store")]),t._v(" "),a("p",[t._v("From a macOS machine that meets the requirements of the OS version you want to install, go directly to the App Store and download the desired OS release and continue to "),a("a",{attrs:{href:"#setting-up-the-installer"}},[a("strong",[t._v("Setting up the installer")])]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"command-line-software-update-utility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-software-update-utility"}},[t._v("#")]),t._v(" Command Line Software Update Utility")]),t._v(" "),a("p",[t._v("Open a terminal window then copy and paste the below command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("softwareupdate --list-full-installers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Please enter version number you wish to download:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$REPLY")]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"softwareupdate --fetch-full-installer --full-installer-version "')]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$REPLY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:e(454),alt:""}})]),t._v(" "),a("p",[t._v("This gives you a list of available releases you can choose from.\nOnce downloaded it will be saved in your Applications folder.\nYou can continue to "),a("a",{attrs:{href:"#setting-up-the-installer"}},[a("strong",[t._v("Setting up the installer")])]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"munki-s-installinstallmacos-utility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#munki-s-installinstallmacos-utility"}},[t._v("#")]),t._v(" Munki's InstallInstallMacOS utility")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Note for users running macOS Monterey 12.3 or above")]),t._v(" "),a("p",[t._v("Starting from macOS Monterey 12.3, Apple removed support for "),a("code",[t._v("python2.7")]),t._v(", so without it "),a("code",[t._v("installinstallmacos.py")]),t._v(" will throw the following error:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("This tool requires the Python xattr module. Perhaps run 'pip install xattr' to install it.\n")])])]),a("p",[t._v("To overcome the issue, we recommend to install "),a("code",[t._v("Command Line Tools for Xcode")]),t._v(" by running "),a("code",[t._v("xcode-select --install")]),t._v(" in a Terminal and then run "),a("code",[t._v("pip3 install xattr")])]),t._v(" "),a("p",[t._v("After that you can run the same command below but with "),a("code",[t._v("python3")]),t._v(" instead of just "),a("code",[t._v("python")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" ~/macOS-installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/macOS-installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/munki/macadmin-scripts/main/installinstallmacos.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" installinstallmacos.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python3 installinstallmacos.py\n")])])])]),t._v(" "),a("p",[t._v("In order to run it, just copy and paste the below command in a terminal window:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" ~/macOS-installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/macOS-installer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.githubusercontent.com/munki/macadmin-scripts/main/installinstallmacos.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" installinstallmacos.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python installinstallmacos.py\n")])])]),a("p",[a("img",{attrs:{src:e(455),alt:""}})]),t._v(" "),a("p",[t._v("As you can see, we get a nice list of macOS installers. If you need a particular versions of macOS, you can select it by typing the number next to it. For this example we'll choose 10:")]),t._v(" "),a("p",[a("img",{attrs:{src:e(456),alt:""}})]),t._v(" "),a("p",[t._v("This is going to take a while as we're downloading the entire 8GB+ macOS installer, so it's highly recommended to read the rest of the guide while you wait.")]),t._v(" "),a("p",[t._v("Once finished, you'll find in your "),a("code",[t._v("~/macOS-Installer/")]),t._v(" folder a DMG containing the macOS Installer, called "),a("code",[t._v("Install_macOS_11.1-20C69.dmg")]),t._v(" for example. Mount it and you'll find the installer application.")]),t._v(" "),a("ul",[a("li",[t._v("Note: We recommend to move the Install macOS.app into the "),a("code",[t._v("/Applications")]),t._v(" folder, as we'll be executing commands from there.")]),t._v(" "),a("li",[t._v("Note 2: Running Cmd+Shift+G in Finder will allow you to easily jump to "),a("code",[t._v("~/macOS-installer")])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(457),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(458),alt:""}})]),t._v(" "),a("p",[t._v("From here, jump to "),a("a",{attrs:{href:"#setting-up-the-installer"}},[t._v("Setting up the installer")]),t._v(" to finish your work. If you want to check the integrity of your download, you can check "),a("a",{attrs:{href:"https://github.com/notpeter/apple-installer-checksums",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repository of checksums"),a("OutboundLink")],1),t._v(", although do note that these are crowdsourced checksums and may not be a reliable way to check for authenticity.")]),t._v(" "),a("h2",{attrs:{id:"downloading-macos-legacy-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos-legacy-os"}},[t._v("#")]),t._v(" Downloading macOS: Legacy OS")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("This method allows you to download much older versions of OS X, currently supporting all Intel versions of OS X(10.4 to current)")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/installer-guide/mac-install-pkg.html"}},[t._v("Legacy macOS: Offline Method")]),t._v(" "),a("ul",[a("li",[t._v("10.7 - 10.12 supported, excluding 10.9")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/installer-guide/mac-install-recovery.html"}},[t._v("Legacy macOS: Online Method")]),t._v(" "),a("ul",[a("li",[t._v("10.7 - 11 supported")])])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/installer-guide/mac-install-dmg.html"}},[t._v("Legacy macOS: Disk Images")]),t._v(" "),a("ul",[a("li",[t._v("10.4 - 10.6 supported")])])],1)])])]),t._v(" "),a("h2",{attrs:{id:"setting-up-the-installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-installer"}},[t._v("#")]),t._v(" Setting up the installer")]),t._v(" "),a("p",[t._v("Now we'll be formatting the USB to prep for both the macOS installer and OpenCore. We'll want to use macOS Extended (HFS+) with a GUID partition map. This will create two partitions: the main "),a("code",[t._v("MyVolume")]),t._v(" and a second called "),a("code",[t._v("EFI")]),t._v(" which is used as a boot partition where your firmware will check for boot files.")]),t._v(" "),a("ul",[a("li",[t._v("Note 1: The "),a("code",[t._v("EFI")]),t._v(" partition created by formatting the USB is hidden until you mount it. This will be mounted later when "),a("a",{attrs:{href:"#setting-up-opencores-efi-environment"}},[t._v("Setting up OpenCore's EFI environment")])]),t._v(" "),a("li",[t._v("Note 2: By default, Disk Utility only shows partitions – press Cmd/Win+2 to show all devices (alternatively you can press the View button)")]),t._v(" "),a("li",[t._v('Note 3: Users following "Legacy macOS: Online Method" section can skip to '),a("a",{attrs:{href:"#setting-up-opencores-efi-environment"}},[t._v("Setting up OpenCore's EFI environment")])])]),t._v(" "),a("p",[a("img",{attrs:{src:e(279),alt:"Formatting the USB"}})]),t._v(" "),a("p",[t._v("Next run the "),a("code",[t._v("createinstallmedia")]),t._v(" command provided by "),a("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple"),a("OutboundLink")],1),t._v(". Note that the command is made for USB's formatted with the name "),a("code",[t._v("MyVolume")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Note for users on Apple Silicon installing macOS older than Big Sur")]),t._v(" "),a("p",[t._v("If the "),a("code",[t._v("createinstallmedia")]),t._v(" fails with "),a("code",[t._v("zsh: killed")]),t._v(" or "),a("code",[t._v("Killed: 9")]),t._v(" then it's most likely an issue with the installer's code signature. To fix this, you can run the following command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/\ncodesign "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--deep")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app\n")])])]),a("p",[t._v("You will need the command line tools for Xcode installed:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("xcode-select "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--install")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("This will take some time so you may want to grab a coffee or continue reading the guide (to be fair you really shouldn't be following this guide step by step without reading the whole thing first).")]),t._v(" "),a("p",[t._v("You can also replace the "),a("code",[t._v("createinstallmedia")]),t._v(" path with that of where your installer's located (same idea with the drive name).")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Legacy createinstallmedia Commands")]),t._v(" "),a("p",[t._v("Pulled from Apple's own site: "),a("a",{attrs:{href:"https://support.apple.com/en-us/HT201372",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to create a bootable installer for macOS"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ventura")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Ventura.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Monterey")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Monterey.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Big Sur")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Big"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sur.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Catalina")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Catalina.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mojave")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mojave.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# High Sierra")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" High"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sierra")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--applicationpath")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" macOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Sierra.app\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# El Capitan")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--applicationpath")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" El"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Capitan.app\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Yosemite")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--applicationpath")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Yosemite.app\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Mavericks")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app/Contents/Resources/createinstallmedia "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--volume")]),t._v(" /Volumes/MyVolume "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--applicationpath")]),t._v(" /Applications/Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" OS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" Mavericks.app "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--nointeraction")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"legacy-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legacy-setup"}},[t._v("#")]),t._v(" Legacy Setup")]),t._v(" "),a("p",[t._v("For systems not supporting UEFI boot, see below:")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Setting up Legacy Boot")]),t._v(" "),a("p",[t._v("To start, you need the following:")]),t._v(" "),a("ul",[a("li",[t._v("BootInstall_IA32.tool or BootInstall_X64.tool\n"),a("ul",[a("li",[t._v("This can be found in OpenCorePkg under "),a("code",[t._v("/Utilties/LegacyBoot/")])])])]),t._v(" "),a("li",[t._v("Install USB(Created above)")])]),t._v(" "),a("p",[t._v("Within your OpenCore build folder, navigate to "),a("code",[t._v("Utilities/LegacyBoot")]),t._v(". Here you'll find a file called "),a("code",[t._v("BootInstall_ARCH.tool")]),t._v(". What this does is install DuetPkg to your desired drive.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(459),alt:"BootInstall Location"}})]),t._v(" "),a("p",[t._v("Now run this tool in terminal "),a("strong",[t._v("with sudo")]),t._v("(This tool will likely fail otherwise):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Replace X64 with IA32 if you have a 32-Bit CPU")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ~/Downloads/OpenCore/Utilities/legacyBoot/BootInstall_X64.tool\n")])])]),a("p",[a("img",{attrs:{src:e(460),alt:"Disk Selection/writing new MBR"}})]),t._v(" "),a("p",[t._v("This will give you a list of available disks, choose yours and you will be prompted to write a new MBR. Choose yes"),a("code",[t._v("[y]")]),t._v(" and you'll be finished.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(461),alt:"Finished Installer"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(462),alt:"Base EFI"}})]),t._v(" "),a("p",[t._v("This will provide you with an EFI partition with either a "),a("strong",[t._v("bootia32")]),t._v(" or "),a("strong",[t._v("bootx64")]),t._v(" file")])]),t._v(" "),a("h2",{attrs:{id:"setting-up-opencore-s-efi-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-opencore-s-efi-environment"}},[t._v("#")]),t._v(" Setting up OpenCore's EFI environment")]),t._v(" "),a("p",[t._v("Setting up OpenCore's EFI environment is simple – all you need to do is mount our EFI system partition. This is automatically made when we format with GUID but is unmounted by default, this is where our friend "),a("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[t._v("MountEFI"),a("OutboundLink")],1),t._v(" comes in:")]),t._v(" "),a("p",[a("img",{attrs:{src:e(463),alt:"MountEFI"}})]),t._v(" "),a("p",[t._v("You'll notice that once we open the EFI partition, it's empty. This is where the fun begins.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(464),alt:"Empty EFI partition"}})]),t._v(" "),a("h2",{attrs:{id:"now-with-all-of-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-of-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[t._v("#")]),t._v(" Now with all of this done, head to "),a("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[t._v("Setting up the EFI")]),t._v(" to finish up your work")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);