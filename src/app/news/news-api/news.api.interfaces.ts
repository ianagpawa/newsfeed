/** Namespace  for Sources in News component. */
export namespace Sources {
    /** Interface for source request parameters. */
    export interface IRequest {
        category?: string,
        language?: string,
        country?: string
    }

    /** Interface for source request response. */
    export interface IResponse {
        state: string,
        sources: ISource[]
    }

    /** Interface for source object returned in source query response. */
    export interface ISource {
        id: string,
        name: string,
        description?: string,
        url?: string,
        category?: string,
        language?: string,
        country?: string
    }
}

/** Namespace for Top Headlines in News component. */
export namespace TopHeadlines {
    /** Interface for articles request parameters. */
    export interface IRequest {
        country?: string,
        category?: string,
        sources?: string,
        q?: string,
        pageSize?: number,
        page?: number
    }

    /** Interface for articles request response. */
    export interface IResponse {
        state: string,
        totalResults: number,
        articles: any[]
    }

    /** Interface for article object returned in top headline query response. */
    export interface IArticles {
        source: Sources.ISource,
        author: string,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string
    }
}
