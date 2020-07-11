
export namespace Sources {
    export interface IRequest {
        category?: string,
        language?: string,
        country?: string
    }

    export interface IResponse {
        state: string,
        sources: ISource[]
    }

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

export namespace TopHeadlines {
    export interface IRequest {
        country?: string,
        category?: string,
        sources?: string,
        q?: string,
        pageSize?: number,
        page?: number
    }
    export interface IResponse {
        state: string,
        totalResults: number,
        articles: any[]
    }
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
