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
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'pokemones',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PokemonPageComponent,
      },
      {
        path: 'add',
        component: AddPokemonComponent,
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
      },
      {
        path: 'add',
        component: AddUserComponent,
      },
      {
        path: 'edit/:id',
        component: EditUserComponent,
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
