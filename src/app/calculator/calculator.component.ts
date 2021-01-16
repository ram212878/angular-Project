import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  result = "";
  value = "";
  keys = [];
  constructor() {}

  ngOnInit() {
    this.value = "";
    this.result = "";
    this.keys = [
      "1",
      "2",
      "3",
      "-",
      "4",
      "5",
      "6",
      "+",
      "7",
      "8",
      "9",
      "*",
      ".",
      "0",
      "/",
      "=",
      "x",
      "C"
    ];
  }

  text(val) {
    let last = this.value.charAt(this.value.length);
    if (last == "+" || last == "-" || last == "/" || last == "=" || last == "*"){

    }
  }

  calculate(data) {
    this.result = eval(data);
  }
}
