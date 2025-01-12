"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const provider = new SonusChatViewProvider(context);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider('sonusChatView', provider, {
        webviewOptions: { retainContextWhenHidden: true } // Preserve webview state
    }));
    context.subscriptions.push(vscode.commands.registerCommand('sonus.openChat', () => {
        // Open the chat view
        vscode.commands.executeCommand('workbench.view.extension.sonusWeb');
    }));
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "$(comment-discussion) Sonus";
    statusBarItem.tooltip = "Open Sonus Chat";
    statusBarItem.command = "sonus.openChat";
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);
}
exports.activate = activate;
class SonusChatViewProvider {
    constructor(context) {
        this.context = context;
    }
    resolveWebviewView(webviewView) {
        this.webviewView = webviewView;
        webviewView.webview.options = {
            enableScripts: true,
            enableForms: true,
        };
        // Load the saved session URL or the default URL
        const config = vscode.workspace.getConfiguration('sonusWeb');
        const defaultUrl = config.get('chatUrl', 'https://chat.sonus.ai/');
        const sessionUrl = this.context.globalState.get('sonusSessionUrl', defaultUrl);
        this.updateWebview(sessionUrl);
        // Listen for messages from the webview
        webviewView.webview.onDidReceiveMessage((message) => {
            switch (message.command) {
                case 'navigate':
                    // Save the new URL to global state
                    this.context.globalState.update('sonusSessionUrl', message.url);
                    break;
            }
        });
    }
    updateWebview(url) {
        if (this.webviewView) {
            this.webviewView.webview.html = `
        <html>
          <head>
            <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://chat.sonus.ai; script-src 'self' https://chat.sonus.ai 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://chat.sonus.ai; style-src 'self' https://chat.sonus.ai 'unsafe-inline';">
          </head>
          <body style="margin: 0; padding: 0; height: 100vh;">
            <iframe
              id="sonusIframe"
              src="${url}"
              style="width: 100%; height: 100%; border: none;"
            ></iframe>
            <script>
              const vscode = acquireVsCodeApi();
              const iframe = document.getElementById('sonusIframe');

              // Notify the extension when the iframe navigates
              iframe.onload = () => {
                const currentUrl = iframe.src;
                vscode.postMessage({
                  command: 'navigate',
                  url: currentUrl
                });
              };
            </script>
          </body>
        </html>
      `;
        }
    }
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map