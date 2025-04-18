import * as assert from "assert";
import { Settings } from "../../../../lib/settings/domain/Settings.class";
import { SettingsBeautyCommand } from "../../../../lib/settings/domain/SettingsBeautyCommand.class";

suite("Settings", () => {
  let settings: Settings;
  let mockBeautyCommand: SettingsBeautyCommand;

  test("should initialize with the provided beautyCommand", () => {
    mockBeautyCommand = {
      trigger: "btprint",
      renderedOutput: '"---------- ${1|Beauty-Print|} ----------"',
    } as unknown as SettingsBeautyCommand;
    settings = new Settings(mockBeautyCommand);

    assert.ok(settings.beautyCommand !== null);
    assert.ok(settings instanceof Settings);
  });
});
