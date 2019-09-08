import {Component, EventEmitter, Output} from '@angular/core';
import {HttpService} from '../http.service';
import {PlayerService} from '../player.service';

@Component({
  selector: 'history-component',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})

export class HistoryComponent {
  historyReady = false;

  constructor(private httpService: HttpService) { }

  async ngOnInit() {
    await this.getAllHistory();
  }

  async getAllHistory() {
    await this.httpService.getHistory();
    this.historyReady = true;
  }

  async deleteHistory(id) {
    await this.httpService.deleteHistory(id);
    await this.getAllHistory();
  }
}
