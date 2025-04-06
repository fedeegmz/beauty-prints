export enum AvailableLanguage {
  PYTHON = "PYTHON",
  JAVASCRIPT = "JAVASCRIPT",
  TYPESCRIPT = "TYPESCRIPT",
  DART = "DART",
  RUST = "RUST",
  KOTLIN = "KOTLIN",
}

export class BeautyCommandLanguage {
  value: AvailableLanguage;

  constructor(value: AvailableLanguage) {
    this.value = value;
  }

  toPrimitive(): string {
    return this.value.toString().toLowerCase();
  }
}
