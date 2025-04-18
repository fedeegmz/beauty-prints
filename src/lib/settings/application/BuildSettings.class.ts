import * as vscode from "vscode";
import { Settings } from "../domain/Settings.class";
import { SettingsBeautyCommand } from "../domain/SettingsBeautyCommand.class";
import { VSCBeautyCommandSetting } from "../domain/VSCBeautyCommandSetting.interface";

export class BuildSettings {
  run(settings: vscode.WorkspaceConfiguration): Settings {
    const beautyCommand =
      settings.get<VSCBeautyCommandSetting>("beautyCommand");
    const userSettings = new Settings(
      new SettingsBeautyCommand(
        beautyCommand?.trigger,
        beautyCommand?.renderedOutput
      )
    );
    return userSettings;
  }
}
