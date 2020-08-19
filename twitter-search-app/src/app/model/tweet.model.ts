export interface ITweet {
    id?: number,
    text?: string
}
export class Tweet implements ITweet {
    constructor(
        public id?: number,
        public text?: string
    ) {}
}