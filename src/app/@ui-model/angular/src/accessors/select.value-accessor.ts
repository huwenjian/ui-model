import { ControlValueAccessor } from '@angular/forms';
import { Select } from '@ui-model/core';

export class SelectValueAccessor<T> extends Select<T> implements ControlValueAccessor {
  constructor() {
    super();
  }

  disabled = false;

  enable(): void {
    this.disabled = false;
  }

  disable(): void {
    this.disabled = true;
  }

  onChange: (value: T) => {};
  onTouched: () => {};

  protected changed(): void {
    super.changed();
    if (this.onChange) {
      this.onChange(this.transformer(this.selection));
    }
    this.touched();
  }

  protected touched(): void {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  writeValue(value: T): void {
    this.select(value);
  }

  registerOnChange(fn: (value: T) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
