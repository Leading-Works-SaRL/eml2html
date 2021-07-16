const vscode = require('vscode');
const EmlParser = require('eml-parser');
const clipboardy = require('clipboardy');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('eml2html.convert', function () {
		eml2Html();
		vscode.window.showInformationMessage('EML was converted to HTML and saved in the clipboard.');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

function eml2Html() {
	if (!vscode.window.activeTextEditor) {
		return;
	}

	const eml = clipboardy.readSync();
	new EmlParser(eml)
		.getEmailBodyHtml()
		.then(html => clipboardy.writeSync(html))
		.catch(err => console.error(err));
}

module.exports = {
	activate,
	deactivate
}
