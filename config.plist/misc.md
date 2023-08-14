# Misc

這個部分主要包含一些無法分類而影響 OpenCore 操作系統開機行為的雜項設定。

## Boot

::: tip 資訊

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| HideAuxiliary | YES | 按空格鍵來顯示 macOS 恢復模式及其他輔助條目 |

:::

::: details 更深入的資訊

* **HideAuxiliary**: YES
  * 此選項將輔助條目（如：macOS 恢復模式和其他工具）從選擇器中隱藏。隱藏輔助條目可以提高多磁碟系統的啟動性能。你可以在選擇器按空格鍵來顯示輔助條目

:::

## Debug

::: tip 資訊

有助我們對 OpenCore 開機問題進行除錯（除了`DisplayDelay`，我們將更改所有內容）：

| 選項值 | 是否啟用 |
| :--- | :--- |
| AppleDebug | YES |
| ApplePanic | YES |
| DisableWatchDog | YES |
| Target | 67 |

:::

::: details 更深入的資訊

* **AppleDebug**: YES
  * 啟用 boot.efi 的日誌記錄，用於除錯。注意：只有 10.15.4 及更高版本支援這個功能
* **ApplePanic**: YES
  * 嘗試將內核崩潰記錄到磁碟
* **DisableWatchDog**: YES
  * 停用 UEFI watchdog，可以幫助解決早期開機問題
* **DisplayLevel**: `2147483650`
  * 顯示更多的除錯訊息，需要 DEBUG 版本的 OpenCore
* **SysReport**: NO
  * 有助我們進行除錯（如：傾印 ACPI 表）
  * 注意：只限於 DEBUG 版本的 OpenCore
* **Target**: `67`
  * 顯示更多的除錯訊息，需要 DEBUG 版本的 OpenCore

這些值是基於在[對 OpenCore 進行除錯](../troubleshooting/debug.md)過程中計算得出的。

:::

## Security

::: tip 資訊

安全性不用多說了吧，**不要跳過**。我們將修改以下內容：

| 選項值 | 是否啟用 | 說明 |
| :--- | :--- | :--- |
| AllowSetDefault | YES | |
| BlacklistAppleUpdate | YES | |
| ScanPolicy | 0 | |
| SecureBootModel | Default | 將這個值設定為 `Default`，以便 OpenCore 自動設定為與您的 SMBIOS 對應的正確值。下一頁將詳細介紹這個設定。 |
| Vault | Optional | 你不能略過這個設定。如果你不把它設定為 Optional，你會後悔的，注意：它是區分大小寫的 |

:::

::: details 更深入的資訊

* **AllowSetDefault**: YES
  * 允許在選擇器中按 `CTRL+Enter` 和 `CTRL+Index` 設定預設啟動條目
* **ApECID**: 0
  * 用於獲得個性化的安全啟動標識字符，由於 macOS 安裝程式中的一個 bug，這種方式目前是不可靠的，因此我們強烈建議您保留預設設置。
* **AuthRestart**: NO
  * 為 FileVault 2 啟用身份認證重啟，因此在重新開機時不需要密碼。由於被認為是一個安全風險，因此這是可選的
* **BlacklistAppleUpdate**: YES
  * 用於阻止韌體更新，由於 macOS Big Sur 不再使用 `run-efi-updater` 變量，這可作為額外的保護
* **DmgLoading**: Signed
  * 確保只加載經過簽名的 DMG
* **ExposeSensitiveData**: `6`
  * 顯示更多的除錯訊息，需要 DEBUG 版本的 OpenCore
* **Vault**: `Optional`
  * 我們目前不會處理 Vault 功能，所以我們可以略過它，**如果你現在把這個選項設定為 Secure，你將無法開機**
  * 這是一個字，你不能略過這個設定。如果你不把它設定為 Optional，你會後悔的，注意：它是區分大小寫的
* **ScanPolicy**: `0`
  * `0` 允許您查看所有可用的磁碟，請參閱[安全](https://eason329.github.io/OpenCore-Post-Install/universal/security.html) 部分了解更多詳細訊息。**如果保留為預設值，將不能從 USB 裝置啟動**
* **SecureBootModel**: Default
  * 控制 macOS 中的蘋果安全啟動功能，請參閱[安全](https://dortania.github.io/OpenCore-Post-Install/universal/security.html)部分了解更多詳細訊息。
  * 注意：用戶可能會發現在已經安裝 macOS 的系統上升級 OpenCore 可能會導致早期開機失敗。要解決這個問題，請參見：[卡在 OCB: LoadImage failed - Security Violation](/troubleshooting/extended/kernel-issues.md#stuck-on-ocb-loadimage-failed-security-violation)

:::

## Serial

用於序列除錯。保留為預設值。

## Tools

用於執行 OC 除錯工具（如：shell），ProperTree 的快照功能將為您加入這些工具。

## Entries

用於指定 OpenCore 無法自然找到的不規則的開機路徑。

這裡不會介紹，更多信息請參見 [Configuration.pdf](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf) 第 8.6 節

# 完成此部分後，請[編輯 NVRAM 部分](nvram.md)
