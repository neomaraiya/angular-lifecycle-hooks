import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  username: string;
  name: {
    name: string;
  } = {
    name: "Vipin Sharma"
  };

  onChange() {
    this.name = {
      ...this.name,
      name: this.username
    };
  }
}
