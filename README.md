# doi-2-scihub: DOI Redirector

**doi-2-scihub** is a lightweight Chrome extension built on **Manifest V3** that automatically redirects `doi.org` links to a customizable Sci-Hub instance. It is designed to streamline the workflow for researchers and academics by bypassing manual URL editing.

## 🚀 Features

* **Automatic Redirection**: Seamlessly intercepts `https://doi.org/*` requests and routes them to Sci-Hub.
* **Privacy-First**: Uses the `declarativeNetRequest` API, which is more efficient and secure than older background script methods.
* **Customizable Domain**: Since Sci-Hub mirrors change frequently, the extension includes a dedicated options page to update the target domain without touching the code.

## 🛠️ Installation (Manual Load)

Since this extension is not on the Chrome Web Store, you can install it manually:

1.  **Download** or clone this repository to a folder on your computer.
2.  Open Chrome and navigate to `chrome://extensions/`.
3.  Enable **"Developer mode"** (toggle in the top right corner).
4.  Click **"Load unpacked"** and select the folder containing the extension files.
5.  (Optional) **Pin** the extension to your toolbar for quick access to settings.

## ⚙️ Configuration

Sci-Hub domains often go offline or change. To keep the extension functional:

1.  Click the **doi-2-scihub icon** in your browser toolbar or go to the extension's **Options** page.
2.  In the "Current Domain" field, enter the active Sci-Hub mirror (e.g., `sci-hub.se`, `sci-hub.st`).
3.  Click **"Save and activate"**.
4.  The redirection rule is updated dynamically—the new domain will be stored and used for all future redirects.

---

*Developed as a tool for academic efficiency and information management.*