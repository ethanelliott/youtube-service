import {Service} from 'typedi';
import youtubeSearch from "youtube-search";
import {env} from '../../env';

const opts: youtubeSearch.YouTubeSearchOptions = {
    maxResults: 10,
    key: env.youtube.key
};

@Service()
export class YouTubeSearchService {

    constructor() {
    }

    public async search(query: string) {
        return await youtubeSearch(query, opts);
    }
}
