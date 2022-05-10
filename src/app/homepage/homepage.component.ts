import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  public showPepeDance:boolean = false;
  public showPepeStand:boolean = true;
  
  private srcPepeDance:String = "./assets/pepeDance.gif";
  private srcPepeStand:String = "./assets/Sad-Pepe-The-Frog-Transparent-Background.png";
  private song = new Audio();
  private isSongPlaying = false;

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.song.pause()
    this.song.currentTime = 0;
    this.isSongPlaying = false;
    this.showPepeDance = false;
  }
  jammerTime(){
    this.showPepeDance = !this.showPepeDance;
    this.showPepeStand = !this.showPepeStand;
    this.song.src = "./assets/One More Time.mp3";
    this.playAudio();
  }

  playAudio(){
    //if song is not playing start playing it
    if(!this.isSongPlaying){
      this.song.load();
      this.song.play();
      this.isSongPlaying = true;
    }
    //song is already playing so stop it
    else{
      this.song.pause();
      this.song.currentTime = 0;
      this.isSongPlaying = false;
    }
  }

}
