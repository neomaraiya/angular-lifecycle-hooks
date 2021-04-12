import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ChildComponent } from "./child/child.component";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Child1Component } from './child/child1/child1.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ChildComponent, Child1Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
