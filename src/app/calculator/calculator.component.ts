import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  result = "";
  value = "";
  history = "";
  keys = [];
  constructor() {}

  ngOnInit() {
    this.value = "";
    this.result = "";
    this.keys = [
      "7",
      "8",
      "9",
      "+",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "*",
      ".",
      "0",
      "=",
      "/",
      "",

      "C",
      "x"
    ];
  }

  text(val) {
    let last = "";
    if (this.value.length > 0) last = this.value.charAt(this.value.length - 1);

    if (val == "=") {
      this.calculate();
    } else if (val == "C") {
      this.value = "";
      this.result = "";
      this.history = "";
    } else if (val == "x") {
      if (this.result.length > 0) {
        this.result = this.result.slice(0, -1);
      }
    } else if (
      (last == "+" || last == "-" || last == "/" || last == "*") &&
      (val == "+" || val == "-" || val == "/" || val == "*")
    ) {
      this.result = this.result.slice(0, -1) + val;
    } else {
      this.value += val;
      this.result = this.value;
    }
  }

  calculate() {
    let answer = eval(this.value.toString());
    this.result = answer;
    this.history = this.value;
    this.value = this.result;

    console.warn(this.value);
  }
}
