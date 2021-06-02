import { AddMoviePage } from './pages/add-movie-page/add.movie.page';
import { EditMoviePage } from './pages/edit-movie-page/edit.movie.page';
import { MoviesPage } from './pages/movies/movies.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { ViewMoviePage } from './pages/view-movie-page/view.movie.page';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesPage,
  },
  {
    path: 'movies/add',
    component: AddMoviePage,
  },
  {
    path: 'movies/edit/:id',
    component: EditMoviePage,
  },
  {
    path: 'movies/view/:id',
    component: ViewMoviePage,
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
