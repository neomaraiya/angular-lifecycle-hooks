import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-child",
  styleUrls: ["./child.component.css"],
  templateUrl: "./child.component.html"
})
export class ChildComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  @Input("name") username: { name: string } = null;
  fullName: { name: string };

  constructor() {
    console.log("constructor");
  }

  ngDoCheck() {
    this.fullName = this.username;
    console.log("do check");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
  }
  ngOnInit() {
    this.fullName = this.username;
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
}
