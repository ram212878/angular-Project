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
    this.result = "0";
    this.keys = [
      "-",
      "+",
      "/",
      "*",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "=",
      "C"
    ];
  }

  text(val) {
    this.value += val;
    this.result = this.value;
  }

  calculate() {
    this.result = eval(this.result);
  }
}
