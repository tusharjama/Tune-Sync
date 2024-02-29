import { Component } from '@angular/core';

@Component({
  selector: 'app-top-rated-songs',
  templateUrl: './top-rated-songs.component.html',
  styleUrl: './top-rated-songs.component.css'
})
export class TopRatedSongsComponent {

  topRatedSongs:any = [
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
