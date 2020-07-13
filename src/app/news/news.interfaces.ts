import { TopHeadlines, Sources } from './news-api/news.api.interfaces';

/** Namespace for News component. */
export namespace News {
    /** Interface for news component state prop. */
    export interface IState {
        articles: TopHeadlines.IArticles[],
        sources:  Sources.ISource[]
    }
}