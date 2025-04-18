export class BeautyCommandDocs {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  toPrimitive(): string {
    return this.value;
  }
}
