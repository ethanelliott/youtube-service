import 'reflect-metadata';
import {Controller, Get, Param} from 'routing-controllers';
import {YouTubeMetadataService} from '../services/YouTubeMetadataService';
import {YoutubeAudio} from '../types/YoutubeAudio';

@Controller('/yt')
export class YoutubeController {
    constructor(
        private youTubeMetadataService: YouTubeMetadataService
    ) {
    }

    @Get('/:video_id')
    public async getMetadata(@Param('video_id') videoId: string): Promise<any> {
        return await this.youTubeMetadataService.getAllMetadata(videoId);
    }

    @Get('/:video_id/audio')
    public async getAudioOnly(@Param('video_id') videoId: string): Promise<YoutubeAudio> {
        return await this.youTubeMetadataService.getBestAudio(videoId);
    }
}
