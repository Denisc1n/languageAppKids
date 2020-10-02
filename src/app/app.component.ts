import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  splash = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router
  ) {
    this.initializeApp();
  }
  ngOnInit() {}

  initializeApp() {
    this.statusBar.styleDefault();
    this.splashScreen.show();

    if (this.splash) {
      setTimeout(() => {
        this.splash = false;
        this.router.navigate(["home"]);
      }, 4000);
    }
  }
}
