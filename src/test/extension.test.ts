import * as assert from "assert";
import * as vscode from "vscode";
import { MAIN_COMMAND } from "../utils/constants/commands";
import { AvailableLanguages } from "../utils/enums/language.enum";

suite("Beauty Prints Extension Test Suite", function () {
  this.timeout(10000);

  vscode.window.showInformationMessage("Starting tests...");

  const testLanguages = [
    AvailableLanguages.JAVASCRIPT,
    AvailableLanguages.TYPESCRIPT,
    AvailableLanguages.PYTHON,
    AvailableLanguages.DART,
    AvailableLanguages.RUST,
    // AvailableLanguages.KOTLIN,
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
    const document = await vscode.workspace.openTextDocument({
      language: "javascript",
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
      updatedText.includes("console.log("),
      "Inserted statement is not a print function"
    );
  });

  test("Should insert correct print statement snippet for typescript file", async () => {
    const document = await vscode.workspace.openTextDocument({
      language: "typescript",
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
      updatedText.includes("console.log("),
      "Inserted statement is not a print function"
    );
  });

  test("Should insert correct print statement snippet for python file", async () => {
    const document = await vscode.workspace.openTextDocument({
      language: "python",
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
  });

  test("Should insert correct print statement snippet for dart file", async () => {
    const document = await vscode.workspace.openTextDocument({
      language: "dart",
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
  });

  test("Should insert correct print statement snippet for rust file", async () => {
    const document = await vscode.workspace.openTextDocument({
      language: "rust",
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
      updatedText.includes("println!("),
      "Inserted statement is not a print function"
    );
  });

  // test("Should insert correct print statement snippet for kotlin file", async () => {
  //   const document = await vscode.workspace.openTextDocument({
  //     language: "kotlin",
  //     content: "",
  //   });
  //   const editor = await vscode.window.showTextDocument(document);
  //   const position = new vscode.Position(0, 0);

  //   await editor.edit((editBuilder) => {
  //     editBuilder.insert(position, MAIN_COMMAND);
  //   });

  //   await vscode.commands.executeCommand("editor.action.triggerSuggest");

  //   const completionList =
  //     await vscode.commands.executeCommand<vscode.CompletionList>(
  //       "vscode.executeCompletionItemProvider",
  //       document.uri,
  //       position
  //     );

  //   assert.ok(completionList, "No completion list returned");
  //   assert.ok(completionList.items.length > 0, "No completion items returned");

  //   const btprintItem = completionList.items.find(
  //     (item) => item.label === MAIN_COMMAND
  //   );
  //   assert.ok(btprintItem, "btprint command not found in completion items");

  //   await editor.insertSnippet(btprintItem.insertText as vscode.SnippetString);

  //   const updatedText = document.getText();
  //   assert.ok(
  //     updatedText.includes("println("),
  //     "Inserted statement is not a print function"
  //   );
  // });
});
