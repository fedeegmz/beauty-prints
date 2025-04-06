export class BeautyCommandTrigger {
  value: string;

  constructor(value: string = "btprint") {
    this.value = value;
  }

  toPrimitive(): string {
    return this.value;
  }
}
