import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./signup/signup.component').then(
            (m) => m.SignupComponent
          ),
      },
];
