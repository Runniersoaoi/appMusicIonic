import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
      description: 'Genero musical electronico',
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
  ];
  constructor() {}
}
