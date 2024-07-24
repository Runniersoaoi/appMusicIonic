import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongModalPage } from '../song-modal/song-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  artistsJson: any;
  artists: any;

  constructor(
    private router: Router,
    private musicService: MusicService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.artistsJson = this.musicService.getArtistsJson().artists;
    console.log('Json', this.artistsJson.artists);
    // this.musicService.getArtints().subscribe((data: any) => {
    //   this.artists = data;
    //   console.log(this.artists);
    // });

    this.musicService.getArtints().then((data) => {
      this.artists = data;
      console.log(data);
    });
  }
  music() {
    this.router.navigateByUrl('/intro');
  }

  async showSongs(artstis: any) {
    console.log(artstis);
    const songs = await this.musicService.getArtistTracks(artstis.id);
    const modal = await this.modalController.create({
      component: SongModalPage,
      componentProps: {
        name: artstis.name,
        id: artstis.id,
        songs: songs,
      },
    });
    modal.present();
  }
}
