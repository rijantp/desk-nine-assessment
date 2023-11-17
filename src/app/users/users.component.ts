import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserFormComponent } from './components/user-form/user-form.component'
import { UsersListComponent } from './components/users-list/users-list.component'
import { UserFormValueInterface } from './types/user-form-value.interface'

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserFormComponent, UsersListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  usersList: UserFormValueInterface[] = []

  addUser(user: UserFormValueInterface): void {
    this.usersList = [user, ...this.usersList]
  }
}
