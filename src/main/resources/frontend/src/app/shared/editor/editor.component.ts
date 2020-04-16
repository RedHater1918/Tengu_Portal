import { Component, OnInit, Input, forwardRef } from "@angular/core";

import { NG_VALUE_ACCESSOR } from "@angular/forms";
import * as ne from "./nicEdit.js";

@Component({
  selector: "editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true
    }
  ]
})
export class EditorComponent implements OnInit {
  writeValue(obj: any): void {
    if (this.editor && obj) {
      this.editor.setContent(obj);
    }
  }

  propagateChange = (val: any) => (this._value = val);

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  editor: ne.nicEditor;
  @Input() _value: any;

  get value() {
    return this._value;
  }

  set value(val) {
    this.propagateChange(val);
  }

  constructor() {}

  ngOnInit() {
    this.editor = new ne.nicEditor({
      fullPanel: true,
      callback: value => this.propagateChange(value)
    }).panelInstance("editor");
  }
}
