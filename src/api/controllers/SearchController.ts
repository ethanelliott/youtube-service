import 'reflect-metadata';
import {Controller, Get, QueryParam} from 'routing-controllers';
import {YouTubeSearchService} from '../services/YouTubeSearchService';

@Controller('/search')
export class SearchController {
    constructor(
        private youTubeSearchService: YouTubeSearchService
    ) {
    }

    @Get('')
    public async search(@QueryParam('query') query: string): Promise<any> {
        return await this.youTubeSearchService.search(query);
    }
}
