import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(public http: HttpClient) { }
  //apiKey = 'AIzaSyDiS4N4g6u1t9_EApKFSgRmWZr4vwJbdW4';
  apiKey = 'AIzaSyDzvVlr87fMi5kn0O4ooLx5VZru3XRXVzA';
  searchVideosUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video';
  serverUrl = 'http://localhost:3000';
  history;

  async getSearchResults(toSearch) {
   const results = await this.http.get(`${this.searchVideosUrl}&q=${toSearch}&key=${this.apiKey}`).toPromise();
   return results;
  }

  async getHistory() {
   this.history =  await this.http.get(`${this.serverUrl}/history/`).toPromise();
    return this.history;
  }

  async deleteHistory(id) {
    await this.http.post(`${this.serverUrl}/history/delete`, {
      id: id
    }).toPromise();
  }

  async saveToHistory(id, name) {
    await this.http.post(`${this.serverUrl}/history/save`, {
      id: id,
      name: name
    }).toPromise();
  }
}
