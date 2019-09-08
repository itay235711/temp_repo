import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SearchComponent} from './components/searchComponent/search.component';
import {YouTubeIframeComponent} from './components/youTubeIframeComponent/youTubeIframe.component';
import {NgModule} from '@angular/core';
import {HttpService} from './components/http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PlayerService} from './components/player.service';
import {HistoryComponent} from './components/historyComponent/history.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    YouTubeIframeComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, PlayerService],
  bootstrap: [AppComponent, SearchComponent]
})
export class AppModule {


}
