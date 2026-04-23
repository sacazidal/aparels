import { FormControl, FormGroup } from '@angular/forms';

export type BuilderType<T> = FormGroup<{
  [K in keyof T]: FormControl<T[K]>;
}>;
