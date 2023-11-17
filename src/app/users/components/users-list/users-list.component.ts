import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserFormValueInterface } from '../../types/user-form-value.interface'

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Input() usersList: UserFormValueInterface[] = []
}
