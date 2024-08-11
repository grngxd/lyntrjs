export type LyntrOptions = {
    cookie: string;
    api?: string;
}

export type LyntPostOptions = {
    content: string;
    parentId?: string;
}

export enum FeedType {
    FOR_YOU = 'For you',
    FOLLOWING = 'Following',
    LIVE = 'Live',
    NEW = 'New',
    LIKED = 'Liked'
}

export type LyntOptions = {
    id: string;
    content: string;
    userId: string;
    created_at: string;
    views: number;
    reposted: boolean;
    parentId: string | null;
    has_image: boolean;
    likeCount: number;
    likedByFollowed: boolean;
    repostCount: number;
    commentCount: number;
    likedByUser: boolean;
    repostedByUser: boolean;
    handle: string;
    bio: string;
    userCreatedAt: string;
    username: string;
    iq: number;
    verified: boolean;
    parentContent: string | null;
    parentHasImage: boolean | null;
    parentUserHandle: string | null;
    parentUserCreatedAt: string | null;
    parentUserBio: string | null;
    parentUserUsername: string | null;
    parentUserVerified: boolean | null;
    parentUserIq: number | null;
    parentUserId: string | null;
    parentCreatedAt: string | null;
    isFollowed: boolean;
    isViewed: boolean;
    viewedAt: string | null;
}