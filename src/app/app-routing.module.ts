import { AddMoviePage } from './pages/add-movie-page/add.movie.page';
import { EditMoviePage } from './pages/edit-movie-page/edit.movie.page';
import { MoviesPage } from './pages/movies/movies.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'movies/edit',
    component: EditMoviePage,
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
