export class YoutubeMetadata {
    likes: number;
    dislikes: number;
    duration: number;
    description: string;
    title: string;
    author: {
        id: string;
        name: string;
        avatar: string;
        verified: boolean;
        user: string;
        channel_url: string;
        external_channel_url: string;
        user_url: string;
        subscriber_count: number;
    };
    id: string;
    url: string;
    formats: any;
}
