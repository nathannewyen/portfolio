import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";

import { ThemeModule } from "./theme/theme.module";
import { lightTheme } from "./theme/light-theme";
import { darkTheme } from "./theme/dark-theme";

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: "light",
    }),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
