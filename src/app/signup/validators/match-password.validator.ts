import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms'

export function matchPassword(
  control: AbstractControl
): ValidationErrors | null {
  const group: FormGroup = control as FormGroup
  if (
    group.controls['password'].value !== group.controls['confirmPassword'].value
  ) {
    return { passwordMatch: true }
  }
  return null
}
