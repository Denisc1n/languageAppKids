import { Component, OnInit } from "@angular/core";
import { ɵangular_packages_forms_forms_d } from "@angular/forms";
import { Router } from "@angular/router";
import { ParamService } from "../../services/param.service";

@Component({
  selector: "app-step-two",
  templateUrl: "./step-two.component.html",
  styleUrls: ["./step-two.component.scss"],
})
export class StepTwoComponent implements OnInit {
  constructor(public router: Router, public paramsService: ParamService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  public selectedLanguage;
  public selectedCategory;
  public mostrar: boolean = false;

  ngOnInit() {
    this.getOption();
  }

  ionViewWillEnter() {
    this.getOption();
  }

  getOption() {
    this.selectedLanguage =
      "../../../assets/images/" + localStorage.getItem("language") + ".png";
    this.selectedCategory =
      "../../../assets/images/" + localStorage.getItem("category") + ".png" ??
      "";
  }

  selectNumbers() {
    localStorage.setItem("isCategory", "true");
    localStorage.setItem("category", "numbers");
    this.router.navigate(["/stepThree"]);
  }
  selectAnimals() {
    localStorage.setItem("isCategory", "true");
    localStorage.setItem("category", "animals");
    this.router.navigate(["/stepThree"]);
  }
  selectColours() {
    localStorage.setItem("isCategory", "true");
    localStorage.setItem("category", "colours");
    this.router.navigate(["/stepThree"]);
  }

  return() {
    localStorage.setItem("isCategory", "false");
    localStorage.setItem("category", "");
    this.router.navigate(["/stepOne"]);
  }

  seleccionarIdioma() {
    this.router.navigate(["/stepOne"]);
  }
}
