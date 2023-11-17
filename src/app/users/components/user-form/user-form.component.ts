import { Component, EventEmitter, inject, Output } from '@angular/core'
import { CommonModule, UpperCasePipe } from '@angular/common'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms'
import { PHONE_NUMBER_REGEX } from '../../../shared/constants/phone-number-regex.constant'
import { UserFormValueInterface } from '../../types/user-form-value.interface'
import { validatePhoto } from '../../validators/profile-photo.validator'

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UpperCasePipe],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  fb: FormBuilder = inject(FormBuilder)
  @Output() formSubmitEvent: EventEmitter<UserFormValueInterface> =
    new EventEmitter<UserFormValueInterface>()

  userForm: FormGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: [
      '',
      [Validators.required, Validators.pattern(PHONE_NUMBER_REGEX)],
    ],
    dummy: [],
    image: [undefined, [Validators.required, validatePhoto]],
    imageUrl: [''],
  })

  get formGroup(): { [key: string]: AbstractControl } {
    return this.userForm.controls
  }

  onImageUpload(event: Event): void {
    const files: FileList | null = (event.target as HTMLInputElement).files
    const file = files !== null ? files[0] : null
    console.log(file)
    this.userForm.patchValue({ image: file })
    this.userForm.controls['image'].updateValueAndValidity()
    const reader = new FileReader()
    reader.onload = () => {
      const imagePreview = reader.result as string
      this.userForm.patchValue({ imageUrl: imagePreview })
      this.userForm.controls['imageUrl'].updateValueAndValidity()
    }
    reader.readAsDataURL(file!)
  }

  onSubmit(): void {
    console.log(this.userForm.value)
  }
}
