import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
    <blog-inputbox icon="search" placeholder="Search" [(ngModel)]="title"></blog-inputbox>
 */
@Component({
  selector: 'blog-inputbox',
  host: {
    "class": "inputbox",
  },
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputboxComponent),
      multi: true
    }
  ]
})
export class InputboxComponent implements ControlValueAccessor {
  @Input() icon?: string;
  @Input() id: string = crypto.randomUUID();
  @Input() name: string = "";
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;

  _value: string = "";
  @Input()
  get value() {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.onChange(val);
  }
  onChange(val: string) { }
  onTouch() { }
  _onChange(target: EventTarget | null) { 
    this.onChange((<HTMLInputElement>target).value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
