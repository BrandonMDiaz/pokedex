import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonFormat } from './shared/pipes/pokemon';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { BackgroundDirective } from './shared/directives/background.directive';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokemonWeightPipe } from './shared/pipes/pokemon-weight.pipe';
import { PokemonHeightPipe } from './shared/pipes/pokemon-height.pipe';
import { AddPokemonComponent } from './pages/add-pokemon/add-pokemon.component';
import { UsersComponent } from './pages/users/users.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AddUserComponent } from './pages/add-user/add-user.component';

import { FormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailsComponent,
    PokemonFormat,
    BackgroundDirective,
    LoginComponent,
    NavbarComponent,
    PaginationComponent,
    PokemonPageComponent,
    PokemonWeightPipe,
    PokemonHeightPipe,
    AddPokemonComponent,
    UsersComponent,
    RegisterComponent,
    AddUserComponent,
    DialogComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
