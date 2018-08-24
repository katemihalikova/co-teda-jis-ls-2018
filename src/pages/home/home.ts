import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HraPage } from "../hra/hra";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  HraPage = HraPage;

  lepekzaskrtnuty = false;
  laktozazaskrtnuta = false;

  jdinadalsi() {
    console.log("Jdeme dal");
    var lepek;
    var laktoza;

    if (this.lepekzaskrtnuty == true) {
      lepek = "nemuze";
    } else {
      lepek = "muze";
    }

    if (this.laktozazaskrtnuta == true) {
      laktoza = "nemuze";
    } else {
      laktoza = "muze";
    }

    this.navCtrl.push(HraPage, { lepek, laktoza });
  }

  constructor(private navCtrl: NavController) {}
}
