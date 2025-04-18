import * as vscode from "vscode";
import { FindAllBeautyCommand } from "../application/FindAllBeautyCommand.class";
import { BeautyCommandRepository } from "../domain/BeautyCommandRepository.interface";

export class BeautyCommandController {
  beautyCommandRepository: BeautyCommandRepository;

  constructor(beautyCommandRepository: BeautyCommandRepository) {
    this.beautyCommandRepository = beautyCommandRepository;
  }

  findAllCompletions(): vscode.Disposable[] {
    const disposables: vscode.Disposable[] = [];
    const service = new FindAllBeautyCommand(this.beautyCommandRepository);
    const commands = service.run();
    for (const command of commands) {
      disposables.push(
        vscode.languages.registerCompletionItemProvider(
          command.language.toPrimitive(),
          {
            provideCompletionItems(
              _document: vscode.TextDocument,
              _position: vscode.Position,
              _token: vscode.CancellationToken,
              _context: vscode.CompletionContext
            ) {
              const completion = new vscode.CompletionItem(
                command.trigger.toPrimitive()
              );
              completion.insertText = new vscode.SnippetString(
                command.renderedOutput.toPrimitive()
              );
              completion.documentation = new vscode.MarkdownString(
                command.docs.toPrimitive()
              );

              return [completion];
            },
          }
        )
      );
    }
    return disposables;
  }
}
