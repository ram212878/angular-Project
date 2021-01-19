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
    let last = this.value.charAt(this.value.length - 1);

    if (val == "=") {
      this.calculate();
    } else if (val == "C") {
      this.value = "";
      this.result = "";
      this.history = "";
    } else if (val == "x") {
      if (this.value.length > 0) {
        this.value = this.value.slice(0, -1);
        this.result = this.value;
      }
    } else if (
      (last == "+" || last == "-" || last == "/" || last == "*") &&
      (val == "+" || val == "-" || val == "/" || val == "*")
    ) {
      this.value = this.value.slice(0, -1) + val;
      this.result = this.value;
    } else {
      this.value += val;
      this.result = this.value;
    }
  }

  calculate() {
    this.result = eval(this.value);
    // this.history = this.value;
  }
}
