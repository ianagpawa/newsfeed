import { Subscription } from 'rxjs';

export namespace IApp {
    export interface State {
        articles: any[],
        sources:  any[],
        subscriptions: Subscription[]
    }
}