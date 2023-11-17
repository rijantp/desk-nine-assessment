import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserFormComponent } from './components/user-form/user-form.component'

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
