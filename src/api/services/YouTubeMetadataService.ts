import {Service} from 'typedi';
import ytdl from 'ytdl-core';

import {YoutubeAudio} from '../types/YoutubeAudio';
import {YoutubeMetadata} from '../types/YoutubeMetadata';

@Service()
export class YouTubeMetadataService {

    constructor() {
    }

    public async getAllMetadata(videoId: string): Promise<YoutubeMetadata> {
        const allInfo = await ytdl.getInfo(videoId);
        return {
            dislikes: allInfo.dislikes,
            likes: allInfo.likes,
            duration: parseInt(allInfo.length_seconds),
            description: allInfo.description,
            title: allInfo.title,
            author: allInfo.author,
            id: allInfo.video_id,
            url: allInfo.video_url,
            formats: allInfo.formats
        };
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
