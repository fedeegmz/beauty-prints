import * as vscode from "vscode";
import { BeautyCommandController } from "./lib/completion/infrastructure/BeautyCommandController.class";
import { BeautyCommandRepositoryImpl } from "./lib/completion/infrastructure/BeautyCommandRepositoryImpl.class";
import { SettingsBuilder } from "./lib/settings/infrastructure/SettingsBuilder.class";
import { BuildSettings } from "./lib/settings/application/BuildSettings.class";

export function activate(context: vscode.ExtensionContext) {
  const settings = new SettingsBuilder().run(new BuildSettings());
  const beautyCommandController = new BeautyCommandController(
    new BeautyCommandRepositoryImpl(settings)
  );
  const beautyCommands = beautyCommandController.findAllCompletions();

  context.subscriptions.push(...beautyCommands);
}
