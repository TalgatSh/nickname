export default class Validator {
  constructor() {
    this.validateStart = /^[^\d_-]/;
    this.validateEnd = /[^\d_-]$/;
    this.validateThreeNum = /\d{4,}/;
    this.validateText = /^[\w-]*$/i;
  }

  validateUsername(name) {
    const resultText = this.validateText.test(name);
    const resultStart = this.validateStart.test(name);
    const resultEnd = this.validateStart.test(name);
    const resultThreeNum = this.validateThreeNum.test(name);

    return !!(resultStart && resultText && !resultThreeNum && resultEnd);
  }
}
