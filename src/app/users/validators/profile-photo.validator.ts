import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms'

export function validatePhoto(
  control: AbstractControl
): ValidationErrors | null {
  const file = control.value as File
  const images = ['image/png', 'image/jpeg', 'image/jpg']
  if (!file) {
    return null
  } else if (
    file.size > 50000 &&
    file.size < 1000000 &&
    images.includes(file.type)
  ) {
    return null
  }
  return { invalidUpload: true }
}
