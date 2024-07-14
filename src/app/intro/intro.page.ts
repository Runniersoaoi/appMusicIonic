import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slides = [
    {
      title: 'Rock',
      icon: 'rocket-outline',
      avatar:
        'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      image:
        'https://www.ifema.es/img/xl/grupo-rock-roll/grupo-rock-and-roll.jpeg',
      description: 'Genero musical cool',
    },
    {
      title: 'Pop',
      icon: 'accessibility-outline',
      avatar:
        'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      image:
        'https://los40.com/resizer/4J4F58FtRSyMzKqUTubgATFVnEw=/arc-photo-prisaradiolos40/eu-central-1-prod/public/4XSAQPS5P5AGPIR7Q43KXZZTUA.jpg',
      description: 'Genero musical interesante',
    },
    {
      title: 'Electronica',
      icon: 'logo-electron',
      avatar:
        'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      image:
        'https://www.elcorteingles.es/entradas/blog/wp-content/uploads/2020/12/Tipos-de-m%C3%BAsica-electr%C3%B3nica.jpg',
      description: 'Genero musical vibrante',
    },
    {
      title: 'Tecno',
      icon: 'battery-full-outline',
      avatar:
        'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      image:
        'https://www.malavitanightbar.com/wp-content/uploads/2022/09/Musica-Techno.png',
      description: 'Genero musical clasico e interesante',
    },
    {
      title: 'Regueton',
      icon: 'megaphone-outline',
      avatar:
        'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      image:
        'https://es.rollingstone.com/wp-content/uploads/2023/12/Uno-de-los-generos-musicalmente-mas-pobres-Arcangel-habla-del-reggaeton.jpg',
      description: 'Genero musical mas popular',
    },
    {
      title: 'Bachata',
      icon: 'shirt-outline',
      avatar:
        'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      image:
        'https://img.freepik.com/foto-gratis/pareja-joven-bailando-bachata_23-2149587488.jpg',
      description: 'Genero musical muy buena para bailar',
    },
    {
      title: 'Cumbia',
      icon: 'musical-notes-outline',
      avatar:
        'https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png',
      image:
        'https://studio.rebaila.com/wp-content/uploads/2021/08/cumbiacolombia.jpeg',
      description: 'Genero musical hermoso y ritmico',
    },
  ];
  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {}

  close() {
    //console.log('estoy intentando cerrar la intro');
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }
}
