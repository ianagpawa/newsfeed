import { Subscription } from 'rxjs';

export namespace IApp {
    export interface State {
        articles: Array<Object>,
        defaultSource: string,
        sources:  Array<Object>,
        subscriptions: Subscription[]
    }
}