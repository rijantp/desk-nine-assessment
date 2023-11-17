import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms'
import { PASSWORD_REGEX } from '../../constants/password-regex.constants'
import { Router } from '@angular/router'
import { LoginUtility } from '../../utility/login.utility'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  fb: FormBuilder = inject(FormBuilder)
  router: Router = inject(Router)

  showAlert: boolean = false

  loginForm: FormGroup = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(PASSWORD_REGEX)]],
  })

  get formGroup(): { [key: string]: AbstractControl } {
    return this.loginForm.controls
  }

  onLogin(): void {
    this.router.navigate(['/'])
  }

  generatePassword(): void {
    const generatedPassword = LoginUtility.generatePassword()
    this.formGroup['password'].setValue(generatedPassword)
    this.formGroup['password'].updateValueAndValidity()

    this.showAlert = true
    setTimeout(() => {
      this.showAlert = false
    }, 3000)
  }
}
