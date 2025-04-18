import * as assert from "assert";
import * as vscode from "vscode";
import { BuildSettings } from "../../../../lib/settings/application/BuildSettings.class";

suite("BuildSettings", () => {
  let mockEmptyVSCWorkspaceConfig: vscode.WorkspaceConfiguration = {
    get: (key: string) => {
      return undefined;
    },
  } as unknown as vscode.WorkspaceConfiguration;

  let mockFullVSCWorkspaceConfig: vscode.WorkspaceConfiguration = {
    get: (key: string) => {
      if (key === "beautyCommand") {
        return {
          trigger: "customTrigger",
          renderedOutput: '"renderedOutput"',
        };
      }
      return undefined;
    },
  } as unknown as vscode.WorkspaceConfiguration;

  let mockPartialVSCWorkspaceConfig: vscode.WorkspaceConfiguration = {
    get: (key: string) => {
      if (key === "beautyCommand") {
        return {
          trigger: "customTrigger",
        };
      }
      return undefined;
    },
  } as unknown as vscode.WorkspaceConfiguration;

  test("should return settings with default values", () => {
    const buildSettings = new BuildSettings();
    const settings = buildSettings.run(mockEmptyVSCWorkspaceConfig);

    assert.strictEqual(settings.beautyCommand.trigger, "btprint");
    assert.strictEqual(
      settings.beautyCommand.renderedOutput,
      '"---------- ${1|Beauty-Print|} ----------"'
    );
  });

  test("should return settings with custom values", () => {
    const buildSettings = new BuildSettings();
    const settings = buildSettings.run(mockFullVSCWorkspaceConfig);

    assert.strictEqual(settings.beautyCommand.trigger, "customTrigger");
    assert.strictEqual(
      settings.beautyCommand.renderedOutput,
      '"renderedOutput"'
    );
  });

  test("should return settings with partial custom values", () => {
    const buildSettings = new BuildSettings();
    const settings = buildSettings.run(mockPartialVSCWorkspaceConfig);

    assert.strictEqual(settings.beautyCommand.trigger, "customTrigger");
    assert.strictEqual(
      settings.beautyCommand.renderedOutput,
      '"---------- ${1|Beauty-Print|} ----------"'
    );
  });
});
