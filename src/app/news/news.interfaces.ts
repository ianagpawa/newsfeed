import { Subscription } from 'rxjs';

/** Namespace for News component. */
export namespace News {
    /** Interface for news component state prop. */
    export interface IState {
        articles: any[],
        defaultSource: string,
        sources:  any[],
        subscriptions: Subscription[]
    }
}