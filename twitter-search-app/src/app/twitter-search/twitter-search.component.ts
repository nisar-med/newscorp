import { Component, OnInit } from '@angular/core';
import { ITweet } from '../model/tweet.model'
import { TwitterSearchService } from './twitter-search.service'
import { TweetAPIResult } from '../model/tweet-api-result.model';

@Component({
  selector: 'app-twitter-search',
  templateUrl: './twitter-search.component.html',
  styleUrls: ['./twitter-search.component.css']
})
export class TwitterSearchComponent implements OnInit {

  tweets: ITweet[] = [];
  currentSearch: string
  nextToken: string;
  message: string;
  constructor(
    protected twitterService: TwitterSearchService
  ) { }

  ngOnInit(): void {
  }

  search() {
    this.clear();
    this.twitterService.searchTweets(this.currentSearch, this.nextToken)
      .subscribe(results => this.tweets = this.parseAPIResults(results));
  }

  clear() {
    this.tweets = [];
  }
  protected parseAPIResults(results: TweetAPIResult): ITweet[] {
    this.nextToken = results.meta['next_token'];
    if (results.meta.result_count !== undefined) {
      this.message = `${results.meta['result_count']} tweets found`;
    }
    else {
      this.message = results.message;
    }
    return results.data;
  }
}
