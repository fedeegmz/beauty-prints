import { BeautyCommand } from "../domain/BeautyCommand.class";
import { BeautyCommandDocs } from "../domain/BeautyCommandDocs.class";
import {
  AvailableLanguage,
  BeautyCommandLanguage,
} from "../domain/BeautyCommandLanguage.class";
import { BeautyCommandRenderedOutput } from "../domain/BeautyCommandRenderedOutput.class";
import { BeautyCommandRepository } from "../domain/BeautyCommandRepository.interface";
import { BeautyCommandTrigger } from "../domain/BeautyCommandTrigger.class";

export class BeautyCommandRepositoryImpl implements BeautyCommandRepository {
  data: BeautyCommand[] = [];

  constructor() {
    const trigger = new BeautyCommandTrigger();
    const docs = new BeautyCommandDocs("Inserts a beauty print statement.");
    const printStmt = "---------- ${1|Beauty-Print|} ----------";
    this.data.push(
      new BeautyCommand(
        trigger,
        new BeautyCommandLanguage(AvailableLanguage.JAVASCRIPT),
        new BeautyCommandRenderedOutput(`console.log(${printStmt});`),
        docs
      ),
      new BeautyCommand(
        trigger,
        new BeautyCommandLanguage(AvailableLanguage.TYPESCRIPT),
        new BeautyCommandRenderedOutput(`console.log(${printStmt});`),
        docs
      ),
      new BeautyCommand(
        trigger,
        new BeautyCommandLanguage(AvailableLanguage.PYTHON),
        new BeautyCommandRenderedOutput(`print(f${printStmt})`),
        docs
      ),
      new BeautyCommand(
        trigger,
        new BeautyCommandLanguage(AvailableLanguage.DART),
        new BeautyCommandRenderedOutput(`print(${printStmt});`),
        docs
      ),
      new BeautyCommand(
        trigger,
        new BeautyCommandLanguage(AvailableLanguage.KOTLIN),
        new BeautyCommandRenderedOutput(`println(${printStmt})`),
        docs
      ),
      new BeautyCommand(
        trigger,
        new BeautyCommandLanguage(AvailableLanguage.RUST),
        new BeautyCommandRenderedOutput(`println!(${printStmt});`),
        docs
      )
    );
  }

  findAll(): BeautyCommand[] {
    return this.data;
  }
}
