---
home: true
heroImage: /dortania-logo-clear.png
heroText: OpenCore 的安裝指南
actionText: 準備開始→
actionLink: prerequisites.md

meta:
- name: 描述
  content: 目前支持的版本 0.8.8
---

# OpenCore 是什麼？這個指南是為誰準備的？

OpenCore 就是我們所說的「開機程式」-- 它是一個複雜的軟體，我們用它來準備我們的系統，特別是通過注入新的 macOS 數據，如 SMBIOS、ACPI 表和 kext。這個工具與 Clover 等其他工具的不同之處在於，它在設計時考慮到了安全性和質量，允許我們使用許多在真正的 mac 上可以找到的安全特性，如[系統完整性保護](https://support.apple.com/en-ca/HT204899)和 [FileVault](https://support.apple.com/en-ca/HT204837)。想更深入的了解可以瀏覽：[為什麼 OpenCore 超越 Clover 和其他程式](why-oc.md)

本指南主要關注以下兩點:

* 在 x86 PC 上安裝 macOS 操作系統
* 如何讓你的黑蘋果正常運行

因此，您需要閱讀、學習甚至使用 Google。這不是一個簡單的一鍵安裝。

請記住，OpenCore 目前仍然是處於測試階段的新產品。雖然它相當穩定，而且可以說在各個方面都比 Clover 穩定得多，但它仍然經常更新，所以功能可能經常改變（即新特性取代舊特性）。

最後，那些有問題的人可以進入 [r/Hackintosh subreddit](https://www.reddit.com/r/hackintosh/) 和 [r/Hackintosh Discord](https://discord.gg/u8V7N5C) 以取得更多幫助。

:::tip 注意
此翻譯文件**不是** Dortania 或 acidanthera 的官方翻譯文件，本文件的内容未必是最新的，如果要了解最新資訊，[請瀏覽英文版本](https://dortania.github.io/OpenCore-Install-Guide/)。

本文件的翻譯水平受限於作者及貢獻者的個人喜好及個人理解，部分用詞可能與港台習慣有異。部分地方尚未完成翻譯，你可能仍會看到英文原文或簡體中文。
:::
