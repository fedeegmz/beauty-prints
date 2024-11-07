import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const jsProvider = vscode.languages.registerCompletionItemProvider('javascript', {

		provideCompletionItems(_document: vscode.TextDocument, _position: vscode.Position, _token: vscode.CancellationToken, _context: vscode.CompletionContext) {

			const btprintCompletion = new vscode.CompletionItem("btprint");
			btprintCompletion.insertText = new vscode.SnippetString('console.log("---------- ${1|Beauty Print|} ----------");');
			const docs = new vscode.MarkdownString("Inserts a console.log statement.");
			btprintCompletion.documentation = docs;

			return [
				btprintCompletion,
			];
		}
	});

	context.subscriptions.push(jsProvider);
}
