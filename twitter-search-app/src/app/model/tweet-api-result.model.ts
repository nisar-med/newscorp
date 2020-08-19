import { ITweet } from './tweet.model';

export class TweetAPIResult {
    constructor(public data: ITweet[], public meta: any, public message: string) {}
}