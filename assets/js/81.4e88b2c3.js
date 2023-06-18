(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{603:function(e,t,o){"use strict";o.r(t);var r=o(10),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"terminology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Term")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("macOS")])]),e._v(" "),t("td",[e._v('Apple\'s own UNIX based OS used for Mac machines and "What makes a Mac a Mac".')])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Windows")])]),e._v(" "),t("td",[e._v("Microsoft's proprietary OS that is used and supported on a wide range of devices (stay with this OS if you don't want headaches)")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Linux")])]),e._v(" "),t("td",[e._v("Family of open source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution. Note that while macOS and Linux may be UNIX-based, they're vastly different.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Distros")])]),e._v(" "),t("td",[e._v("Short for Distributions. Linux distros are how Linux is distributed. However, when it comes to macOS, distros are mixed macOS installers with a bunch of tools that are not from Apple. "),t("strong",[e._v("Do not use macOS distros.")])])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Hackintosh")])]),e._v(" "),t("td",[e._v("The process of installing macOS onto a PC, note that "),t("strong",[e._v("Hackintosh IS NOT the OS")]),e._v(', it can also refer to the machine that was "hacked" to get macOS running on it. EG: '),t("em",[e._v('I installed macOS on this Windows machine, therefore I have a Hackintosh. But I did NOT install "Hackintosh".')])])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Bootloader")])]),e._v(" "),t("td",[e._v("Piece of software that loads an OS, usually made by the OS creators. OpenCore is technically not a bootloader per se (see boot manager explanation down below). Apple's Boot.efi would be the actual boot loader in a Mac or Hackintosh.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Boot Manager")])]),e._v(" "),t("td",[e._v("Piece of software that manages bootloaders – we have many of these: Clover, systemd-boot, OpenCore, rEFInd, rEFIt... These are generally seen as prepping the system for the actual boot loader.")])])])]),e._v(" "),t("hr"),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Term")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("OpenCore")])]),e._v(" "),t("td",[e._v("The new hotness on the Hackintosh scene, made with security in mind by the "),t("a",{attrs:{href:"https://github.com/acidanthera",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acidanthera team"),t("OutboundLink")],1),e._v(", has faster booting and lighter weight than Clover. It is a lot more work to set up but also supports many things a lot more natively than Clover (like Hibernation, FileVault 2, Boot HotKeys...).")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Clover")])]),e._v(" "),t("td",[e._v("A boot manager now considered legacy with the release of OpenCore. This guide will not be covering uses of this software.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("ACPI")])]),e._v(" "),t("td",[e._v("The Advanced Configuration and Power Interface (ACPI) provides an open standard that operating systems can use to discover and configure computer hardware components, more of this will be discussed later in the guide.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("DSDT/SSDT")])]),e._v(" "),t("td",[e._v("Tables in your ACPI that describe the devices and how the OS should interact with them e.g. putting the computer to sleep, wake, switching GPUs, USB ports.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v(".AML")])]),e._v(" "),t("td",[e._v("The compiled file format of ACPI, and what your PC will execute. "),t("code",[e._v(".DAT")]),e._v(" is another extension with the exact same use.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v(".DSL")])]),e._v(" "),t("td",[e._v("The source code for ACPI – this is what you edit and compile for your computer. "),t("strong",[e._v("DO NOT")]),e._v(" mix this file format up with "),t("code",[e._v(".ASL")]),e._v(".")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("Kexts")])]),e._v(" "),t("td",[e._v("Also known as "),t("strong",[e._v("K")]),e._v("ernel "),t("strong",[e._v("Ext")]),e._v("ensions, are macOS's drivers. They're used to perform different tasks like device drivers or for a different purpose (in Hackintoshing) like patching the OS, injecting information or running tasks. Kexts are not the only part of a good Hackintosh, as they're commonly paired with ACPI patches and fixes.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("BIOS")])]),e._v(" "),t("td",[e._v("The Basic Input/Output System is firmware used to perform hardware initialization during the booting process (power-on startup), and to provide runtime services for operating systems and programs. The BIOS firmware comes preinstalled on a personal computer's system board, and it is the first software to run when powered on (source: Wikipedia). It's a legacy piece of software that was made back in the 70s and is still used to this day due to its maturity.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("UEFI")])]),e._v(" "),t("td",[e._v("The Unified Extensible Firmware Interface (UEFI) is a specification that defines a software interface between an operating system and platform firmware. UEFI replaces the legacy Basic Input/Output System (BIOS) firmware interface originally present in all IBM PC-compatible personal computers, with most UEFI firmware implementations providing support for legacy BIOS services. UEFI can support remote diagnostics and repair of computers, even with no operating system installed. (source: Wikipedia)")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("UEFI Drivers")])]),e._v(" "),t("td",[e._v("Like any other OS, UEFI has drivers and they're loaded by Clover or OpenCore. They're also meant to load devices or perform other tasks, like loading Apple's HFS drives with HfsPlus.efi, patching macOS's "),t("code",[e._v("boot.efi")]),e._v(" and so on. You may find them as "),t("code",[e._v("Clover Drivers")]),e._v(" or "),t("code",[e._v("OpenCore Drivers")]),e._v(", they're all UEFI drivers. (Note: only use drivers that are meant for that specific boot manager. More info can be found on the "),t("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/tree/master/clover-conversion",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clover Conversion page"),t("OutboundLink")],1),e._v(").")])])])]),e._v(" "),t("hr"),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Term")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("EFI")])]),e._v(" "),t("td",[e._v("It can denote two things: "),t("br"),e._v('- Mac\'s firmware, which is the same as UEFI, but pretty modified for Macs only, so not so "Universal"'),t("br"),e._v("- The partition on your hard drive that stores software read by the UEFI to load OSes (like the Windows bootloader) or UEFI Applications (like OpenCore), it's FAT32 formatted and has an ID type of "),t("code",[e._v("EF00")]),e._v(" (in hex). It can be named ESP or SYSTEM, and it's usually from 100MB to 400MB in size but the size doesn't reflect upon anything.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("MBR")])]),e._v(" "),t("td",[e._v("Master Boot Record is a special type of boot sector at the very beginning of partitioned computer mass storage devices like fixed disks or removable drives intended for use with IBM PC-compatible systems and beyond. The MBR was first introduced in 1983 with PC DOS 2.0. The MBR holds the information on how the logical partitions, containing file systems, are organized on that medium. The MBR also contains executable code to function as a loader for the installed operating system—usually by passing control over to the loader's second stage, or in conjunction with each partition's volume boot record (VBR). This MBR code is usually referred to as a boot loader (source: Wikipedia). This format is used on BIOS/Legacy setups. The MBR format supports a maximum of 2 TiB of size and a max of 4 primary partitions.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("GPT")])]),e._v(" "),t("td",[e._v("GUID Partition Table (GPT) is a standard for the layout of partition tables of a physical computer storage device, such as a hard disk drive or solid-state drive, using universally unique identifiers, which are also known as globally unique identifiers (GUIDs). Forming a part of the Unified Extensible Firmware Interface (UEFI) standard (Unified EFI Forum-proposed replacement for the PC BIOS), it is nevertheless also used for some BIOS systems, because of the limitations of master boot record (MBR) partition tables, which use 32 bits for logical block addressing (LBA) of traditional 512-byte disk sectors (source: Wikipedia). Usually, this is the disk format you want to use on a UEFI system.")])])])]),e._v(" "),t("hr"),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Term")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("EC")])]),e._v(" "),t("td",[e._v("Embedded Controller. Communicates between the main board and embedded peripherals such as hotkeys, ports, or battery.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("PLUG")])]),e._v(" "),t("td",[e._v("Allows for XCPM, Apple XNU (OS kernel) power management, to attach allowing for better overall CPU control. Only supported on Haswell and newer.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("AWAC")])]),e._v(" "),t("td",[e._v("ACPI Wake Alarm Counter Clock, the board's internal clock. Contrast with the Real-Time Clock (RTC). macOS cannot communicate with AWAC clocks, so they must be patched.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("PMC")])]),e._v(" "),t("td",[e._v("Power Management Controller, on B360, B365, H310, H370, Z390 motherboards OEMs forgot to map this region and so need SSDT-PMC to avoid page-faults")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("PNLF")])]),e._v(" "),t("td",[e._v("Internal backlight display, macOS uses this PNLF device to send and receive info for brightness control")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("XOSI/_OSI")])]),e._v(" "),t("td",[t("code",[e._v("_OSI")]),e._v(" is used to determine what OS is being booted, renaming to XOSI allows us to trick hardware into thinking we're booting a different OS")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("HPET")])]),e._v(" "),t("td",[e._v("High Precision Event Timer, OSes use this to determine how to communicate with devices(IRQ). macOS can be very picky on how devices are set, so we need to sometimes patch the HPET.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("RHUB")])]),e._v(" "),t("td",[e._v("Root USB Hub, where USB ports are defined. If certain definitions are missing here, USB ports may not work in macOS")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("IMEI")])]),e._v(" "),t("td",[e._v("Intel Management Engine Interface, handles misc tasks. In macOS, Apple relies on the IMEI for Intel GPU acceleration. If using an unknown ID like using a 7 series chipset with Sandy Bridge, macOS will be unable to find it for GPU acceleration.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("UNC")])]),e._v(" "),t("td",[e._v("Uncore Bridge, similar to a North Bridge it handles many cache related functions. Many times OEMs will have this device defined but non-functional, macOS is unable to handle these situations.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("SMBus")])]),e._v(" "),t("td",[e._v("System Management Bus, used to allow devices to easily communicate between each other.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);