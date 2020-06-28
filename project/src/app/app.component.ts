import { Component } from "@angular/core";
import { HttpService } from "./http.service";
import { ThemeService } from "./theme/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Portfolio";
  constructor(private themeService: ThemeService) {}

  toggle() {
    const active = this.themeService.getActiveTheme();
    if (active.name === "light") {
      this.themeService.setTheme("dark");
    } else {
      this.themeService.setTheme("light");
    }
  }
}
