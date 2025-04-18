# Beauty Prints

**Beauty Prints** is a simple Visual Studio Code extension that helps you quickly insert a stylized print line to make debugging easier. The extension supports JavaScript, TypeScript, Python, Dart, Rust and Kotlin.

## Features

- Type `btprint` in the editor and press `Enter` to autocomplete a debug print line for easy identification.
- The inserted line has the format:

  ```python
  print(f'---------- Beauty Print ----------')
  ```

- Works with:
  - JavaScript
  - TypeScript
  - Python
  - Dart
  - Rust
  - Kotlin

This extension is perfect for developers who want a quick and easy way to insert noticeable print statements for debugging.

## Installation

1. Go to the Extensions view in Visual Studio Code.
2. Search for Beauty Prints.
3. Click Install to add the extension to your editor.

## Usage

1. Open any supported file (JavaScript, TypeScript, Python, Dart, Rust or Kotlin).
2. Type btprint where you want the debug line to appear.
3. Press Enter to insert the Beauty Print line.

## Customization

Beauty Prints now supports customization through your global `settings.json` in Visual Studio Code.
You can:

- Change the trigger keyword (default is `btprint`).
- Customize the inserted debug line format.

To customize, open your user settings in JSON format:

1. Press `Ctrl + Shift + P`
2. Search for **Preferences: Open User Settings (JSON)**
3. Add or modify the following settings:

```json
{
  "beautyPrints.beautyCommand.trigger": "yourCustomKeyword",
  "beautyPrints.beautyCommand.renderedOutput": "---------- ${1|Your-Custom-Text|} ----------"
}
```

- `beautyPrints.beautyCommand.trigger`: Defines the keyword to trigger the print (default: `btprint`)
- `beautyPrints.beautyCommand.renderedOutput`: Defines the format of the inserted print line (default: `"---------- ${1|Beauty-Print|} ----------"`)

💡 Make sure both values are strings.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
