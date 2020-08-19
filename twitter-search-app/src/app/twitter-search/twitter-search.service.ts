import { Injectable } from '@angular/core';
import { TweetAPIResult } from '../model/tweet-api-result.model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterSearchService {
  private apiUrl: string = "http://localhost:8080/https://api.twitter.com/2/tweets/search/recent";
  constructor(
    private http: HttpClient
  ) { }
  searchTweets(query: string = "", nextToken?: string): Observable<TweetAPIResult> {
    let params: string[] = [];
    params.push(`query=${encodeURIComponent(query + " @KidspotSocial")}`)
    if (nextToken !== undefined) {
      params.push(`next_token=${encodeURIComponent(nextToken)}`);
    }
    if (params.length > 0) {
      return this.http.get<TweetAPIResult>(this.apiUrl + '?' + params.join('&'))
        .pipe(
          retry(3),
          catchError((err: HttpErrorResponse) => {
            console.error(err);
            return of<TweetAPIResult>(new TweetAPIResult([], {}, 'Error fetching Tweets, Please see browser logs for more details'))
          })
        );
    }
  }
}
