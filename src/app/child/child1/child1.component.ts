import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-child1",
  styleUrls: ["./child1.component.css"],
  templateUrl: "./child1.component.html"
})
export class Child1Component
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("name") username: { name: string } = null;
  fullName: { name: string };

  constructor() {
    console.log("CHILD :: constructor");
  }
  ngOnDestroy(): void {
    console.log("CHILD :: ngOnDestroy");
  }

  ngDoCheck() {
    this.fullName = this.username;
    console.log("CHILD :: ngDoCheck");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("CHILD :: ngOnChanges");
  }
  ngOnInit() {
    this.fullName = this.username;
    console.log("CHILD :: ngOnInit");
  }

  ngAfterContentInit(): void {
    console.log("CHILD :: ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("CHILD :: ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("CHILD :: ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("CHILD :: ngAfterViewChecked");
  }
}
