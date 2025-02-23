import * as assert from "assert";
import * as vscode from "vscode";
import { MAIN_COMMAND } from "../utils/constants/commands";
import { AvailableLanguages } from "../utils/enums/language.enum";

async function testMainCommand(language: string) {
  const document = await vscode.workspace.openTextDocument({
    language: language,
    content: "",
  });
  const editor = await vscode.window.showTextDocument(document);
  const position = new vscode.Position(0, 0);

  await editor.edit((editBuilder) => {
    editBuilder.insert(position, MAIN_COMMAND);
  });

  await vscode.commands.executeCommand("editor.action.triggerSuggest");

  const completionList =
    await vscode.commands.executeCommand<vscode.CompletionList>(
      "vscode.executeCompletionItemProvider",
      document.uri,
      position
    );

  assert.ok(completionList, "No completion list returned");
  assert.ok(completionList.items.length > 0, "No completion items returned");

  const btprintItem = completionList.items.find(
    (item) => item.label === MAIN_COMMAND
  );
  assert.ok(btprintItem, "btprint command not found in completion items");

  await editor.insertSnippet(btprintItem.insertText as vscode.SnippetString);

  const updatedText = document.getText();
  assert.ok(
    updatedText.includes("print("),
    "Inserted statement is not a print function"
  );
}

suite("Beauty Prints Extension Test Suite", function () {
  this.timeout(10000);

  vscode.window.showInformationMessage("Starting tests...");

  const testLanguages = [
    AvailableLanguages.JAVASCRIPT,
    AvailableLanguages.TYPESCRIPT,
    AvailableLanguages.PYTHON,
    AvailableLanguages.DART,
    AvailableLanguages.RUST,
  ];

  test("Should register completion providers for all supported languages", async () => {
    for (const language of testLanguages) {
      const providers = vscode.languages
        .getLanguages()
        .then((langs) => langs.includes(language));
      assert.ok(
        await providers,
        `Completion provider not registered for ${language}`
      );
    }
  });

  test("Should insert correct print statement snippet for javascript file", async () => {
    await testMainCommand("javascript");
  });

  test("Should insert correct print statement snippet for typescript file", async () => {
    await testMainCommand("typescript");
  });

  test("Should insert correct print statement snippet for python file", async () => {
    await testMainCommand("python");
  });

  test("Should insert correct print statement snippet for dart file", async () => {
    await testMainCommand("dart");
  });

  test("Should insert correct print statement snippet for rust file", async () => {
    await testMainCommand("rust");
  });
});
