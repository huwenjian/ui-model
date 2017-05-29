import { Validators } from '@angular/forms';
import { FieldMetadata } from '../metas';

export function RequiredTrue(): any {
  return function (target: any, name: string): void {
    const field = FieldMetadata.of(target, name);
    field.addValidator(Validators.requiredTrue);
  };
}
