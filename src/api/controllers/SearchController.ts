import 'reflect-metadata';
import {Controller, Post, QueryParam} from 'routing-controllers';
import {YouTubeSearchService} from '../services/YouTubeSearchService';

@Controller('/search')
export class SearchController {
    constructor(
        private youTubeSearchService: YouTubeSearchService
    ) {
    }

    @Post('')
    public async search(@QueryParam('query') query: string): Promise<any> {
        console.log(query);
        return await this.youTubeSearchService.search(query);
    }
}
