import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  previous = "";
  result = "";
  current = "";
  history = "";
  keys = [];
  constructor() {}

  ngOnInit() {
    this.previous = "";
    this.result = "";
    this.current = "";
    this.history = "";
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
      "X"
    ];
  }

  text(val) {
    switch (val) {
      case "C":
        this.result = "";
        this.current = "";
        this.previous = "";
        console.log("data cleared");
        break;
      case "=":
        let last;
        if (this.current.length > 0) {
          last = this.current.charAt(this.current.length - 1);
          if (!(last == "+" || last == "-" || last == "/" || last == "*")) {
            this.solve(this.current);
            this.previous = this.previous + "+ ( " + this.current + " )";
          }
        } else {
          console.log("please enter proper statement");
        }
        break;
      case "X":
        if (this.result.length > 0) {
          this.result = this.result.slice(0, -1);
          this.current = this.result;
        } else {
          if (this.previous.length == 0 && this.result.length == 0)
            console.warn("nothing to delete");
          this.result = this.previous;
          this.previous = "";
        }
        break;
      case "+" || "-" || "/" || "*":
        last = this.current.charAt(this.current.length - 1);
        if (last == "+" || last == "-" || last == "/" || last == "*")
          this.current = this.current.slice(0, -1);
        this.result = this.current;
        break;
    }
  }
  solve(value) {
    this.result = eval(value);
  }
}
