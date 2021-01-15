import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  legal_pages = [];
  constructor() {}

  ngOnInit() {
    this.legal_pages = ["Privacy Policy", "Disclaimer", "Sitemap"];
  }
}
