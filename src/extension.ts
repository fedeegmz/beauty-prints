import * as vscode from "vscode";
import { BeautyCommandController } from "./lib/completion/infrastructure/BeautyCommandController.class";

export function activate(context: vscode.ExtensionContext) {
  const beautyCommandController = new BeautyCommandController();
  const beautyCommands = beautyCommandController.findAllCompletions();

  context.subscriptions.push(...beautyCommands);
}
