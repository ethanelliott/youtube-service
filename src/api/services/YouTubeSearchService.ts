import {Service} from 'typedi';
import axios from 'axios';
import {env} from '../../env';

@Service()
export class YouTubeSearchService {

    constructor() {
    }

    public async search(query: string) {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=10&type=video,audio&key=${env.youtube.key}`, {
            headers: {
                'Authorization': env.youtube.key,
                'Accept': 'application/json'
            }
        });
        return res.data.items;
    }
}
