import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { StepOneComponent } from "./components/step-one/step-one.component";
import { StepThreeComponent } from "./components/step-three/step-three.component";
import { StepTwoComponent } from "./components/step-two/step-two.component";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "stepOne",
    component: StepOneComponent,
  },
  {
    path: "stepTwo",
    component: StepTwoComponent,
  },
  {
    path: "stepThree",
    component: StepThreeComponent,
  },

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
