import { basePrintStatements } from "../utils/constants/base-print-statements";
import { AvailableLanguages } from "../utils/enums/language.enum";

export class BasePrintStatement {
  language: AvailableLanguages;

  constructor(language: AvailableLanguages) {
    this.language = language;
  }

  getBasePrintStatement(): string {
    let statement: string = basePrintStatements[this.language];
    return statement;
  }
}
