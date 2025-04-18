import * as vscode from "vscode";
import { BuildSettings } from "../application/BuildSettings.class";
import { Settings } from "../domain/Settings.class";

export class SettingsBuilder {
  run(buildSettings: BuildSettings): Settings {
    const config = vscode.workspace.getConfiguration("beautyPrints");
    return buildSettings.run(config);
  }
}
