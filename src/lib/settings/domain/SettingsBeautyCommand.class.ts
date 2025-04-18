export class SettingsBeautyCommand {
  trigger: string;
  renderedOutput: string;

  constructor(
    trigger: string = "btprint",
    renderedOutput: string = '"---------- ${1|Beauty-Print|} ----------"'
  ) {
    this.trigger = trigger.trim();
    this.renderedOutput = renderedOutput;
    this.ensureIsValid();
  }

  private ensureIsValid() {
    console.log(this.renderedOutput);
    if (
      !this.renderedOutput.startsWith('"') &&
      !this.renderedOutput.startsWith("'") &&
      !this.renderedOutput.startsWith('"') &&
      !this.renderedOutput.startsWith("\'")
    ) {
      throw Error("renderedOutput should start with ' or \"");
    }
    if (
      !this.renderedOutput.endsWith('"') &&
      !this.renderedOutput.endsWith("'") &&
      !this.renderedOutput.endsWith('"') &&
      !this.renderedOutput.endsWith("\'")
    ) {
      throw Error("renderedOutput should end with ' or \"");
    }
  }
}
