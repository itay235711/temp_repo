import {Component} from '@angular/core';
import {HttpService} from '../http.service';
import {PlayerService} from '../player.service';
import {HistoryComponent} from '../historyComponent/history.component';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})

export class SearchComponent {
  showDropDown = false;
  toSearch = '';
  videoResults = [];
  videoId;

  constructor(private httpService: HttpService,
              private playerService: PlayerService) { }

  async search(event) {
    if (event.key !== undefined) {
      this.toSearch += event.key;
      this.showDropDown = true;
      const results =  <any>await this.httpService.getSearchResults(this.toSearch);
      this.videoResults = results.items;
    }
  }


  async playVideo(id, name) {
    this.videoId = id;
    this.playerService.playVideo(id);
    this.showDropDown = false;
    this.toSearch = '';
    await this.httpService.saveToHistory(id, name);
    //this.historyComponent.history = await this.httpService.getHistory();
  }

  getVideoName(name) {
    if (name.length > 70) {
      const shortName = name.substr(0,  69) + '...';
      return shortName;
    } else {
      return name;
    }
  }

  getImageUrl(video) {
    return video.snippet.thumbnails.default.url;
  }
}
