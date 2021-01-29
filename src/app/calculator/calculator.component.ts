import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  // public previous = "";
  public result = "";
  public current = "";
  clickBtnColor: String = "";
  previous = "";
  keys = [
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
    "(",
    "C",
    ")",
    "X"
  ];
  constructor() {}

  ngOnInit() {}

  text(val) {
    this.clickBtnColor = "red";
    // this.current = this.result;
    let last = "";

    if (val == "+" || val == "-" || val == "/" || val == "*") {
      if (this.current.length > 0) {
        last = this.current.charAt(this.current.length - 1);
        console.log("hello");
        if (last == "+" || last == "-" || last == "/" || last == "*") {
          this.current = this.current.slice(0, -1) + val;
          this.result = this.current;
        } else {
          this.current += val;
          this.result = this.current;
        }
      }
    } else
      switch (val) {
        case "C":
          this.result = "";
          this.current = "";
          this.previous = "";
          console.log("data cleared");
          break;
        case "X":
          if (this.result.length > 0) {
            console.log(this.result);
            this.result = this.result.slice(0, -1);
            this.current = this.result;
          }
          break;
        case "=":
          console.warn(this.current.length);
          if (this.current.length > 0) {
            last = this.current.charAt(this.current.length - 1);
            if (!(last == "+" || last == "-" || last == "/" || last == "*")) {
              this.solve(this.current);
              if (this.previous.length > 0)
                this.previous = this.previous + "+ ( " + this.current + " )";
              else this.previous = this.previous + "( " + this.current + " )";
            }
          } else {
            console.log("please enter proper statement");
          }
          break;

        default:
          if (this.current.length == 1 && this.current.charAt(0) == "0") {
            this.current = val;
            this.result = this.current;
          } else {
            this.current = this.result + val;
            this.result = this.current;
          }

          break;
      }
  }
  solve(value: string) {
    let answer = eval(this.current);
    this.result = answer.toString();
    this.current = this.result;
    console.log(this.current);
  }
}
