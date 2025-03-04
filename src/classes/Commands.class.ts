import { AvailableLanguages } from "../utils/enums/language.enum";
import { MAIN_CONTENT } from "../utils/constants/print-content";

export class Commands {
  language: AvailableLanguages;

  constructor(language: AvailableLanguages) {
    this.language = language;
  }

  getPrintStatement(): string {
    let baseStatement: string = this.getBasePrintStatement();
    const statement: string = baseStatement.replace("@", MAIN_CONTENT);
    return statement;
  }

  private getBasePrintStatement(): string {
    switch (this.language) {
      case "javascript":
      case "typescript":
        return "console.log(@);";
      case "python":
        return "print(f@)";
      case "dart":
        return "print(@);";
      case "rust":
        return "println!(@);";
      case "kotlin":
        return "println(@)";
      default:
        throw new Error("Language not supported");
    }
  }
}
