# eml2html README

eml2html is a simple visual studio code/codium extension that enables the conversion of EML email files to their HTML equivalent, using a simple and convenient copy-paste interface.

## How to use

Simply copy the content of your EML file, hit `CMD+SHIFT+P` or the equivalent for your preferred OS, write `eml2html` and convert the EML file; the result is copied in your clipbboard and you can paste it whereever you want.

## Install

The extension is available on the [Eclipse Foundation Open VSX library](https://open-vsx.org/).
In order to install it, you may check add a custom `product.json` pointing to the Open-VSX library or use an alternate method as describe in [this resolved issue](https://github.com/VSCodium/vscodium/pull/674).

### Using the VSIX file

On the [Open VSX](https://open-vsg.org) library, one can directly download the VSIX file.
Please do verify the checksum and signature of the file.

### Verify the binary

> On macOS, you can use the `GPG Keychain` GUI or install `gpg2` with `brew`, as well as `coreutils` with `brew` to get the `sha256sum` utility.
> On Linux, `coreutils` provides the `sha256sum` utility (at least on Fedora); whereas `kleopatra` is a GPG GUI and `gnupg2` is a CLI agent.

1. The OpenPGP key used to sign the binary is available on `hkp://keys.openpgp.org` or directly here: https://keys.openpgp.org/search?q=35ED5B0A122CA05C ;
2. Download the `CHECKSUM`, `CHECKSUM.sig` and binary files;
3. Verify the CHECKSUM signature with either your GUI GPG Agent or the CLI: `gpg --verify-files leading-works.eml2html-v0.0.1-CHECKSUM.sig`;
4. Verify the CHECKSUM of the binary, CLI is: `sha256sum -c leading-works.eml2html-v0.0.1-CHECKSUM`.

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
