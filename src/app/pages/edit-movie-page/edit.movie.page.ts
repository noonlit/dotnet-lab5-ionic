import { Movie, GENRES } from './../../models/movie.model';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: '../add-movie-page/add.movie.page.html',
})
export class EditMoviePage {
  GENRES = GENRES;

  movie;

  ngOnInit() {
    this.movie = this.dataService.movie;
  }

  constructor(
    private apiSvc: ApiService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private dataService: DataService
  ) {}
  saveMovie() {
    this.apiSvc.put('api/Movies/' + this.movie.id, this.movie).subscribe(
      () => {
        this.navCtrl.pop();
      },
      (err) => {
        let message = 'Validation error';
        const errorsArray = err?.error?.errors;
        if (errorsArray) {
          message = Object.values(errorsArray)[0] as string;
        }
        this.alertCtrl
          .create({
            header: 'Error',
            message: message,
            buttons: ['Ok'],
          })
          .then((al) => al.present());
      }
    );
  }

  backToMovies() {
    this.dataService.movie = null;
    this.navCtrl.pop();
  }
}
