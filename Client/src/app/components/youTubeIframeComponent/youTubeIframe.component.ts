import {Component, Input} from '@angular/core';
import { Injectable } from '@angular/core';
import {PlayerService} from '../player.service';

@Component({
  selector: 'iframe-component',
  templateUrl: './youTubeIframe.component.html',
})

@Injectable()
export class YouTubeIframeComponent {
  isReady = false;
  @Input() videoId;
  public YT;

  constructor (private playerService: PlayerService) {
  }

  init() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    this.init();

    window['onYouTubeIframeAPIReady'] = (e) => {
      this.YT = window['YT'];
      this.playerService.player = new window['YT'].Player('player', {
        height: '450',
        width: '850',
        videoId: this.videoId,
        events: {
          'onReady': () => {
              this.isReady = true;
          }
        }
      });
    };
  }

}
