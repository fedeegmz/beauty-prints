import { BasePrintStatement } from "./BasePrintStatement.class";
import { AvailableLanguages } from "../utils/enums/language.enum";
import { MAIN_CONTENT } from "../utils/constants/print-content";

export class PrintStatement {
  language: AvailableLanguages;

  constructor(language: AvailableLanguages) {
    this.language = language;
  }

  getPrintStatement(): string {
    let baseStatement: string = new BasePrintStatement(
      this.language
    ).getBasePrintStatement();
    const statement: string = baseStatement.replace("@", MAIN_CONTENT);
    return statement;
  }
}
