import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('beauty-prints.info', () => {
		vscode.window.showInformationMessage('I am here to help you with your code!');
	});

	const btprintCommand = vscode.commands.registerCommand('beauty-prints.print', () => {
		console.log("---------- IN BTPRINT  ----------");
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const { document, selection } = editor;

			console.log(">>>>>>>>>> document ----------");
			console.log(document);
			console.log("---------- document <<<<<<<<<<");
			console.log(">>>>>>>>>> selection ----------");
			console.log(selection);
			console.log("---------- selection <<<<<<<<<<");

			const range = new vscode.Range(
				selection.start.line,
				7,
				selection.start.line,
				selection.start.character
			);

			if (document.getText(range) === 'btprint') {
				editor.edit(editBuilder => {
					editBuilder.replace(range, 'print("---------- BEAUTY PRINT ----------")');
				});
			}
		}
	});

	context.subscriptions.push(disposable, btprintCommand);
}
