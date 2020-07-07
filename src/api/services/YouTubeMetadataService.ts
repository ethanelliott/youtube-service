import {Service} from 'typedi';
import ytdl from 'ytdl-core';

import {YoutubeAudio} from '../types/YoutubeAudio';

@Service()
export class YouTubeMetadataService {

    constructor() {
    }

    public async getAllMetadata(videoId: string): Promise<any> {
        return await ytdl.getInfo(videoId);
    }

    public async getBestAudio(videoId: string): Promise<YoutubeAudio> {
        const info = await ytdl.getInfo(videoId);
        const audio = ytdl.chooseFormat(info.formats, {quality: "highestaudio"});
        return {
            bitrate: audio.audioBitrate,
            channels: audio.audioChannels,
            container: audio.container,
            duration: parseInt(audio.approxDurationMs),
            mimeType: audio.mimeType,
            url: audio.url
        };
    }
}
