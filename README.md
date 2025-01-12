# Sonus - VS Code Extension

Embed **[Sonus Chat](https://chat.sonus.ai/)** (*or any other website*) directly into your VS Code sidebar. This extension allows you to interact with Sonus Chat or any custom URL without leaving your editor.

![Banner](images/banner.png)

---

## Features

* **Embed Sonus Chat or Any URL** : Open Sonus Chat or any custom website in a Webview panel within VS Code.
* **Customizable URL** : Configure the URL of the website you want to embed (e.g., for self-hosted instances or other tools).
* **Persistent Session** : Saves your session URL so you don't have to reconfigure it every time.
* **Easy Access** : Open the webview with a single click from the status bar or command palette.

---

## Installation

1. Open  **VS Code** .
2. Go to the **Extensions** view by clicking on the Extensions icon in the Activity Bar or pressing `Ctrl+Shift+X`.
3. Search for  **"Sonus"** .
4. Click **Install** to add the extension.

Alternatively, you can install the extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Kingleo.sonus-web).

---

## Usage

### Open Sonus

1. Click the **Sonus icon** in the Activity Bar.
2. Alternatively, use the **Command Palette** (`Ctrl+Shift+P`) and search for `Open Sonus Chat`.

### Customize the URL

1. Open **Settings** (`Ctrl+,`).
2. Search for `Sonus`.
3. Update the `Chat URL` field with any URL (e.g., `https://chat.sonus.ai/` or a custom URL).

---

## Commands

| Command            | Description             |
| ------------------ | ----------------------- |
| `sonus.openChat` | Open the Sonus Webview. |

---

## Configuration

| Setting              | Default Value              | Description                                           |
| -------------------- | -------------------------- | ----------------------------------------------------- |
| `sonusWeb.chatUrl` | `https://chat.sonus.ai/` | The URL of the website to embed. This can be any URL. |

---

## License

This project is licensed under the  **MIT License** . See the [LICENSE](https://chat.sonus.ai/a/chat/s/LICENSE) file for details.

---

## Acknowledgements

* **[Sonus](https://www.sonus.ai/)** for providing the AI-powered chat interface.
* **[VS Code](https://code.visualstudio.com/)** for the extensible editor platform.

---

Enjoy seamless integration with Sonus Chat! 🚀
