# eml2html README

eml2html is a simple visual studio code/codium extension that enables the conversion of EML email files to their HTML equivalent, using a simple and convenient copy-paste interface.

## How to use

Simply copy the content of your EML file, hit `CMD+SHIFT+P` or the equivalent for your preferred OS, write `eml2html` and convert the EML file; the result is copied in your clipbboard and you can paste it whereever you want.

## Install

The extension is available on the [Eclipse Foundation Open VSX library](https://open-vsx.org/).
In order to install it, you may check add a custom `product.json` pointing to the Open-VSX library or use an alternate method as describe in [this resolved issue]().

### Using a custom `product.json` file

> See also [this documentation](https://github.com/eclipse/openvsx/wiki/Using-Open-VSX-in-VS-Code)

1. create a `product.json` at the documented location for your preferred OS:

   * Windows: `%USER%\AppData\Roaming\VSCodium`
   * macOS: `~/Library/Application Support/VSCodium`
   * Linux: `~/.config/VSCodium`

2. add this content:

```json
{
  "extensionsGallery": {
    "serviceUrl": "https://open-vsx.org/vscode/gallery",
    "itemUrl": "https://open-vsx.org/vscode/item"
  },
  "linkProtectionTrustedDomains": [
    "https://open-vsx.org"
  ]
}
```

## Known Issues

Atm the extension offers to convert only the body of the email.
Extending it to offer more options is trivial but not needed for the author of the extension.
Do not hesitate to create an issue or a PR to improved the features of the extension.

## Release Notes

### 0.0.1

Initial release of `eml2html`.
