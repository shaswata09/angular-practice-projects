import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.render.setStyle(this.elRef.nativeElement, "background-color", "blue");
  }
}
