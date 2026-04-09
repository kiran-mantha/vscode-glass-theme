# Glass Theme Setup for VSCode

This guide explains how to set up the glass theme effect in Visual Studio Code using custom CSS and JavaScript.

## Prerequisites

1. Visual Studio Code installed
2. Access to your VSCode user directory

## Setup Steps

### 1. Prepare CSS and JS Files

Place the following files in your VSCode user directory:
- `%APPDATA%\Code\User\glass.css` (Windows)
- `$HOME/Library/Application Support/Code/User/glass.css` (macOS)
- `$HOME/.config/Code/User/glass.css` (Linux)

And similarly for:
- `glow.js`

### 2. Install Required Extensions

Install these VSCode extensions from the Extensions Marketplace:
- **Custom CSS and JS Loader** by [be5invis](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)
- **GlassIt-VSC** by [hikarin522](https://marketplace.visualstudio.com/items?itemName=hikarin522.GlassIt-VSC)

### 3. Configure Settings

Add the following configuration to your `settings.json` file (accessible via `Ctrl+,` → `{}` icon in top-right):

```json
{
  "vscode_custom_css.imports": [
    "file:///C:/Users/your-username/AppData/Roaming/Code/User/glass.css",
    "file:///C:/Users/your-username/AppData/Roaming/Code/User/glow.js"
  ],
  // Other your existing settings...
}
```

**Note:** Replace `your-username` with your actual Windows username. Use appropriate file paths for your OS:
- Windows: `file:///C:/Users/your-username/AppData/Roaming/Code/User/`
- macOS: `file:///Users/your-username/Library/Application Support/Code/User/`
- Linux: `file:///home/your-username/.config/Code/User/`

### 4. Enable Features

1. Press `Ctrl+Shift+P` → type "Enable Custom CSS and JS" → select the command
2. Press `Ctrl+Shift+P` → type "GlassIt-VSC: Enable Glass Effect" → select the command

### 5. Restart VSCode

Completely close and reopen Visual Studio Code for the changes to take effect.

## Troubleshooting

- If the effect doesn't appear, double-check that the file paths in `settings.json` are correct
- Ensure both extensions are properly installed and enabled
- Try reloading VSCode with `Ctrl+Shift+P` → "Reload Window" after enabling the features
- Check the Output panel (`Ctrl+Shift+U`) for any error messages from the Custom CSS and JS Loader

## Bonus Tip: Blur Effect When GlassIt-VSC is Disabled

If you disable the GlassIt-VSC extension but still want to see a blur effect in the background, you can add the following CSS rule to your `glass.css` file:

```css
/* Background blur effect */
#monaco-editor .view-lines {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1) !important;
}

/* Apply blur to activity bar, side bar, status bar */
.activity-bar, .side-bar, .status-bar {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1) !important;
}
```

This will give you a subtle glass-like blur effect even when the GlassIt-VSC extension is disabled, using only CSS backdrop-filter.
> Note:
> Do not forget to reload the **Custom CSS and JS Loader** extension after updating the file.

## File Structure Example

After setup, your VSCode user directory should contain:
```
%APPDATA%\Code\User\
├─ glass.css
├─ glow.js
└─ settings.json
```

## Customization

You can modify `glass.css` and `glow.js` to adjust the visual effects according to your preferences. Refer to the individual extension documentation for advanced customization options.