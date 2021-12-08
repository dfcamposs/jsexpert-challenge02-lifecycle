class WeirdMathService {
  getWeirdBooleanNumberMath(boolean, number) {
    return Number(boolean) + number;
  }

  getWeirdStringBooleanMath(string, boolean) {
    return String(string) + boolean;
  }

  getWeirdStringBooleanMath2(string, boolean) {
    return Number(string) - Number(boolean);
  }

  getWeirdStringNumberMath(string, number) {
    return Number(string) - Number(number);
  }
}

module.exports = WeirdMathService;
