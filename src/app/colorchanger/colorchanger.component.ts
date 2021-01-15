import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-colorchanger",
  templateUrl: "./colorchanger.component.html",
  styleUrls: ["./colorchanger.component.css"]
})
export class ColorchangerComponent implements OnInit {
  @Output() childData: EventEmitter<any> = new EventEmitter();
  color = "";
  changeColor(val) {
    this.color = val;
    this.childData.emit(this.color);
  }

  constructor() {}

  ngOnInit() {}
}
