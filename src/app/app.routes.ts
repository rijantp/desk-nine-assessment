import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.component').then((m) => m.SignupComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./signup/components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./users/users.component').then((m) => m.UsersComponent),
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./chat-box/chat-box.component').then((m) => m.ChatBoxComponent),
  },
]
