import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { UsersComponent } from './pages/users/users.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AddPokemonComponent } from './pages/add-pokemon/add-pokemon.component';
import { RolesGuard } from './guards/roles.guard';
import { EditUserComponent } from './pages/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' },
  },
  {
    path: 'pokemones',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PokemonPageComponent,
        data: { title: 'Pokemon' },
      },
      {
        path: 'add',
        component: AddPokemonComponent,
        data: { title: 'Add' },
      },
    ],
  },
  {
    path: 'users',
    canActivate: [AuthGuard, RolesGuard],
    children: [
      {
        path: '',
        component: UsersComponent,
        data: { title: 'Users' },
      },
      {
        path: 'add',
        component: AddUserComponent,
        data: { title: 'add' },
      },
      {
        path: 'edit/:id',
        component: EditUserComponent,
        data: { title: 'edit' },
      },
    ],
  },
  { path: '**', redirectTo: 'pokemones' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
