import * as vscode from "vscode";
import { Commands } from "./classes/Commands.class";
import { MAIN_COMMAND } from "./utils/constants/commands";
import { AvailableLanguages } from "./utils/enums/language.enum";

// https://github.com/microsoft/vscode-extension-samples/tree/main

function getProvider(language: AvailableLanguages) {
  return vscode.languages.registerCompletionItemProvider(language, {
    provideCompletionItems(
      _document: vscode.TextDocument,
      _position: vscode.Position,
      _token: vscode.CancellationToken,
      _context: vscode.CompletionContext
    ) {
      const commands = new Commands(language);
      const statement = commands.getPrintStatement();

      const btprintCompletion = new vscode.CompletionItem(MAIN_COMMAND);
      btprintCompletion.insertText = new vscode.SnippetString(statement);
      const docs = new vscode.MarkdownString(
        "Inserts a beauty print statement."
      );
      btprintCompletion.documentation = docs;

      return [btprintCompletion];
    },
  });
}

export function activate(context: vscode.ExtensionContext) {
  const jsProvider = getProvider(AvailableLanguages.JAVASCRIPT);
  const tsProvider = getProvider(AvailableLanguages.TYPESCRIPT);
  const pyProvider = getProvider(AvailableLanguages.PYTHON);
  const dartProvider = getProvider(AvailableLanguages.DART);
  const rsProvider = getProvider(AvailableLanguages.RUST);
  const ktProvider = getProvider(AvailableLanguages.KOTLIN);

  context.subscriptions.push(
    jsProvider,
    tsProvider,
    pyProvider,
    dartProvider,
    rsProvider,
    ktProvider
  );
}
