# Kernel

Kernel（內核）refers to the part of an operating system that loads first. It controls and monitors hardware resources like memory, CPU processor allocation and disk drives. Due to the nature of hackintosh, we need to inject several kexts (**K**ernel **Ext**ensions) to patch macOS in order to boot correctly.

This section allows the application of different kinds of kernelspace modifications on Apple Kernel (XNU). The modifications currently provide driver (kext) injection, kernel and driver patching, and driver blocking.

Kernel and kext changes apply with the following effective order:

* `Block` is processed
* `Add` and `Force` are processed
* `Emulate` and `Quirks` are processed
* `Patch` is processed

Unlike ACPI, the patches most likely only applied in macOS.
