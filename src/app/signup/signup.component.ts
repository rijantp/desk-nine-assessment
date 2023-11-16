import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms'
import { matchPassword } from './validators/match-password.validator'
import { Router } from '@angular/router'
import { PASSWORD_REGEX } from './constants/password-regex.constants'

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  fb: FormBuilder = inject(FormBuilder)
  router: Router = inject(Router)

  signupForm: FormGroup = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: [matchPassword] }
  )

  get formGroup(): { [key: string]: AbstractControl } {
    return this.signupForm.controls
  }

  onSignup(): void {
    this.router.navigate(['/login'])
  }
}
