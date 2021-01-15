import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  menu_lists = [];
  constructor() {}

  ngOnInit() {
    this.populateMenuItems();
  }

  populateMenuItems() {
    this.menu_lists = ["Home", "Blog", "About", "Contact"];
  }
}
