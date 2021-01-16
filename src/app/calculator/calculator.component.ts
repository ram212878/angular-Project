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
    // console.warn(val);
    this.value += val;
    let len = this.value.length;
    let lastTerm = this.value.charAt(len - 1);
    console.log("last term = " + lastTerm);
    this.result = this.value;
    console.info("length=" + len);
    console.log("result = " + this.result);
    if (
      (lastTerm == "+" ||
        lastTerm == "-" ||
        lastTerm == "*" ||
        lastTerm == "/") &&
      (val == "+" || val == "-" || val == "*" || val == "/") &&
      val != "="
    ) {
      this.value = this.value.slice(0, len - 2);
      this.value += val;
      this.result = this.value;
    }
    if (val == "C") {
      this.value = "";
      this.result = "";
    } else if (val == "=") {
      this.calculate(this.value.slice(0, len - 1));
    }
    console.info(this.result);
  }

  calculate(data) {
    this.result = eval(data);
  }
}
