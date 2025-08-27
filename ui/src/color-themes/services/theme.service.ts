import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private currentTheme: string = "light"; // Default theme is light

  constructor() {
    //   document.body.classList.remove('light','dark');
    //  let savedTheme: any = localStorage.getItem("theme");
    //    document.body.classList.add(savedTheme);
   this.initialSettingOfTheme();
  }

  // Method to toggle the theme
  toggleTheme() {
    document.body.classList.remove(this.currentTheme);
    console.log("this.currentTheme", this.currentTheme);
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(this.currentTheme);
  }

  // Method to set the theme dynamically
  setTheme(theme: string) {
    document.body.classList.remove('theme-default');
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }

  // Method to get the current theme
  getCurrentTheme(): string {
    return this.currentTheme;
  }
  initialSettingOfTheme(){

  document.body.classList.add(this.currentTheme);
  }
}
