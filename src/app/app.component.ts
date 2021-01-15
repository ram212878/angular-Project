import { Component, Output, EventEmitter, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Geeks";
  background = "";

  parentColorChanger(val) {
    this.background = val;
  }
}
