import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-songs',
  templateUrl: './popular-songs.component.html',
  styleUrl: './popular-songs.component.css'
})
export class PopularSongsComponent {

  popularSongs:any = [
    {
      title: "Agar Tum Sath Hoo",
      singer: "Arijit Singh",
      imgUrl: "agartumsathho.jpeg"
    },
    {
      title: "Arjan Vailly",
      singer: "Javare Kapoor",
      imgUrl: "arjanVaillyPoster.jpeg"
    },
    {
      title: "Kahani Suno",
      singer: "Manish Pande",
      imgUrl: "kahaniSuno.jpeg"
    },
    {
      title: "Sarkar",
      singer: "Rahul More",
      imgUrl: "sarkar.jpeg"
    },

  ]

}
