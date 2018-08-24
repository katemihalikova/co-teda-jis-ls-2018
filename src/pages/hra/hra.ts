import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

declare function require(s: string): object;
const lokace = require("./jidla.json");

@Component({
  selector: "page-hra",
  templateUrl: "hra.html"
})
export class HraPage {
  lokaceHry = lokace["Fastfood"];
  jidla: any[] = shuffle(this.lokaceHry.jidla);
  presunutajidla = [];

  lepek = this.navParams.get("lepek");
  laktoza = this.navParams.get("laktoza");

  gameoverZobrazeno = false;
  vyhraZobrazeno = false;

  constructor(private navParams: NavParams) {
    console.log(this.jidla);
  }

  kliknutoNaJidlo(jidlo) {
    console.log(jidlo);

    if ((this.lepek == "nemuze" && jidlo.lepek == "obsahuje") || (this.laktoza == "nemuze" && jidlo.laktoza == "obsahuje")) {
      console.log("Game Over");

      this.gameoverZobrazeno = true;
    } else {
      console.log("OK");

      this.jidla = this.jidla.filter(j => j != jidlo);
      this.presunutajidla.push(jidlo);

      if (this.jidla.every(j => (this.lepek == "nemuze" && j.lepek == "obsahuje") || (this.laktoza == "nemuze" && j.laktoza == "obsahuje"))) {
        console.log("vyhravas");
        this.vyhraZobrazeno = true;
      }
    }
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
