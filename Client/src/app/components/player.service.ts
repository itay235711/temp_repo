import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  constructor() { }
  player;

  playVideo(videoId) {
    this.player.loadVideoById(videoId);
  }
}
