import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export class NgLetContext {
  $implicit: any = null;
  ngLet: any = null;
}

@Directive({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngLet]',
})
export class LetDirective implements OnInit {
  private _context = new NgLetContext();

  @Input()
  set ngLet(value: any) {
    this._context.$implicit = value;
    this._context.ngLet = value;
  }

  constructor(
    private _vcr: ViewContainerRef,
    private _templateRef: TemplateRef<NgLetContext>,
  ) {}

  ngOnInit() {
    this._vcr.createEmbeddedView(this._templateRef, this._context);
  }
}
