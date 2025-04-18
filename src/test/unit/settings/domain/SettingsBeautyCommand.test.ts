import * as assert from "assert";
import { SettingsBeautyCommand } from "../../../../lib/settings/domain/SettingsBeautyCommand.class";

suite("SettingsBeautyCommand", () => {
  let settingsBeautyCommand: SettingsBeautyCommand;

  test("should return trigger and renderedOutput", () => {
    settingsBeautyCommand = new SettingsBeautyCommand(
      "exampleTrigger",
      "'exampleOutput'"
    );
    assert.strictEqual(settingsBeautyCommand.trigger, "exampleTrigger");
    assert.strictEqual(settingsBeautyCommand.renderedOutput, "'exampleOutput'");
  });

  test("should throw error if renderedOutput does not start with ' or \"", () => {
    assert.throws(() => {
      new SettingsBeautyCommand("exampleTrigger", "exampleOutput'");
    }, /renderedOutput should start with ' or "/);
  });

  test("should throw error if renderedOutput does not end with ' or \"", () => {
    assert.throws(() => {
      new SettingsBeautyCommand("exampleTrigger", "'exampleOutput");
    }, /renderedOutput should end with ' or "/);
  });
});
