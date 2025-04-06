import { BeautyCommandDocs } from "./BeautyCommandDocs.class";
import { BeautyCommandLanguage } from "./BeautyCommandLanguage.class";
import { BeautyCommandRenderedOutput } from "./BeautyCommandRenderedOutput.class";
import { BeautyCommandTrigger } from "./BeautyCommandTrigger.class";

export class BeautyCommand {
  trigger: BeautyCommandTrigger;
  language: BeautyCommandLanguage;
  renderedOutput: BeautyCommandRenderedOutput;
  docs: BeautyCommandDocs;

  constructor(
    trigger: BeautyCommandTrigger,
    language: BeautyCommandLanguage,
    renderedOutput: BeautyCommandRenderedOutput,
    docs: BeautyCommandDocs
  ) {
    this.trigger = trigger;
    this.language = language;
    this.renderedOutput = renderedOutput;
    this.docs = docs;
  }
}
