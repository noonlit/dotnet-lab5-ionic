
import { AddMoviePage } from './pages/add-movie-page/add.movie.page';
import { SideMenuComponent } from './components/side.menu/side.menu.component';
import { MoviesPage } from './pages/movies/movies.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditMoviePage } from './pages/edit-movie-page/edit.movie.page';
import { DataService } from './services/data.service';
import { LoginPage } from './pages/login/login.page';
import { AuthService } from './services/auth.service';
import { ViewMoviePage } from './pages/view-movie-page/view.movie.page';

@NgModule({
  declarations: [
    // components
    AddMoviePage,
    EditMoviePage,
    ViewMoviePage,
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    // pages
    MoviesPage,
    LoginPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
