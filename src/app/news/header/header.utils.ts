import { Header } from './header.interfaces';
import { Sources } from '../news-api/news.api.interfaces';

const convertSourcesToOptions = (sources:Sources.ISource[]): Header.ISelectOption[] => {
    return sources.map(source => {
        return {
            value: source.id,
            label: source.name
        }
    });
}

