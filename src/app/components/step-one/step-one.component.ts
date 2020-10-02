import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-step-one",
  templateUrl: "./step-one.component.html",
  styleUrls: ["./step-one.component.scss"],
})
export class StepOneComponent implements OnInit {
  constructor(public router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {}

  ngOnChange() {}

  selectSpanish() {
    localStorage.setItem("language", "spanish");
    localStorage.setItem("isLanguage", "true");
    if (localStorage.getItem("isCategory") === "true") {
      this.router.navigate(["/stepThree"]);
      return;
    }
    this.router.navigate(["/stepTwo"]);
  }
  selectPortuguese() {
    localStorage.setItem("language", "portuguese");
    localStorage.setItem("isLanguage", "true");
    if (localStorage.getItem("isCategory") === "true") {
      this.router.navigate(["/stepThree"]);
      return;
    }
    this.router.navigate(["/stepTwo"]);
  }

  selectEnglish() {
    localStorage.setItem("language", "english");
    localStorage.setItem("isLanguage", "true");
    if (localStorage.getItem("isCategory") === "true") {
      this.router.navigate(["/stepThree"]);
      return;
    }
    this.router.navigate(["/stepTwo"]);
  }
  goLogin() {
    localStorage.clear();
    this.router.navigate([""]);
  }
}
