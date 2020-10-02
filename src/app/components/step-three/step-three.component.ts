import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as $ from "jquery";
@Component({
  selector: "app-step-three",
  templateUrl: "./step-three.component.html",
  styleUrls: ["./step-three.component.scss"],
})
export class StepThreeComponent implements OnInit {
  public pathImageOne: string;
  public pathImageTwo: string;
  public pathImageThree: string;
  public pathImageFour: string;
  public pathImageFive: string;

  public imagePath = new Array();

  private language = localStorage.getItem("language");
  private category = localStorage.getItem("category");
  reproducir: boolean;
  public selectedLanguage;
  public selectedCategory;
  constructor(public router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    //this.retrievePictures();
    this.selectedLanguage =
      "../../../assets/images/" + localStorage.getItem("language") + ".png";
    this.selectedCategory =
      "../../../assets/images/" + localStorage.getItem("category") + ".png";
  }

  ionViewWillEnter() {
    this.retrievePictures();
    this.selectedLanguage =
      "../../../assets/images/" + localStorage.getItem("language") + ".png";
    this.selectedCategory =
      "../../../assets/images/" + localStorage.getItem("category") + ".png";
  }

  retrievePictures() {
    this.imagePath = [];
    for (let i = 0; i < 5; i++) {
      this.imagePath.push(
        `../../../assets/images/${localStorage.getItem("category")}/${
          i + 1
        }.png`
      );
    }
  }

  return() {
    localStorage.setItem("isCategory", "false");
    localStorage.setItem("category", "");
    this.router.navigate(["/stepTwo"]);
  }

  goLogin() {
    localStorage.clear();
    this.router.navigate(["/stepOne"]);
  }

  changeLanguage() {
    this.router.navigate(["/stepOne"]);
  }

  changeCategory() {
    localStorage.setItem("isCategory", "false");
    this.router.navigate(["/stepTwo"]);
  }

  playClip(number: number) {
    let audio = new Audio(
      "../../../assets/audio/" +
        localStorage.getItem("language") +
        "/" +
        localStorage.getItem("category") +
        "/" +
        number +
        ".mp3"
    );
    audio.play();
    this.reproducir = true;
    setTimeout(() => {
      this.reproducir = false;
      audio.pause();
    }, 3000);
  }

  selectNumeros() {
    this.removerClases();

    $(".btnUno").addClass("unoNum");
    $(".btnDos").addClass("dosNum");
    $(".btnTres").addClass("tresNum");
    $(".btnCuatro").addClass("cuatroNum");
    $(".btnCinco").addClass("cincoNum");
  }

  selectAnimales() {
    this.removerClases();

    $(".btnUno").addClass("vacaAni");
    $(".btnDos").addClass("zorroAni");
    $(".btnTres").addClass("caballoAni");
    $(".btnCuatro").addClass("tortugaAni");
    $(".btnCinco").addClass("leonAni");
  }

  selectColores() {
    this.removerClases();

    $(".btnUno").addClass("rosaCol");
    $(".btnDos").addClass("verdeCol");
    $(".btnTres").addClass("azulCol");
    $(".btnCuatro").addClass("amarilloCol");
    $(".btnCinco").addClass("rojoCol");
  }

  removerClases() {
    $(".btnUno").removeClass("vacaAni");
    $(".btnDos").removeClass("zorroAni");
    $(".btnTres").removeClass("caballoAni");
    $(".btnCuatro").removeClass("zorroAni");
    $(".btnCinco").removeClass("leonAni");

    $(".btnUno").removeClass("unoNum");
    $(".btnDos").removeClass("dosNum");
    $(".btnTres").removeClass("tresNum");
    $(".btnCuatro").removeClass("cuatroNum");
    $(".btnCinco").removeClass("cincoNum");

    $(".btnUno").removeClass("rosaCol");
    $(".btnDos").removeClass("verdeCol");
    $(".btnTres").removeClass("azulCol");
    $(".btnCuatro").removeClass("amarilloCol");
    $(".btnCinco").removeClass("rojoCol");
  }
}
