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
      ".",
      "x",
      "=",
      "C"
    ];
  }

  text(val) {
    let len = this.value.length;
    switch (val) {
      case "=":
        this.calculate();
        break;
      case "C":
        this.value = "";
        this.result = "";
        break;
      case "x":
        this.value = this.value.substr(0, this.value.length - 1);
        this.result = this.value;
        break;
      default:
        if (len == 1 && this.value == "0" && val == "0") {
          this.value = "0";
          this.result = this.value;
        } else if (len == 1 && val == ".") {
          this.value += val;
          this.result = this.value;
        } else {
          if (len == 1 && this.value == "0" && val != "0") this.value = val;
          else this.value += val;
          this.result = this.value;
        }
        break;
    }
  }

  calculate() {
    this.result = eval(this.value.toString());
    this.value = this.result;
  }
}
