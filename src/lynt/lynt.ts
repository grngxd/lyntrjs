import { LyntOptions } from "../types";

export class Lynt {
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

    // constructor(id: string, content: string, userId: string, created_at: string, views: number, reposted: boolean, parentId: string | null, has_image: boolean, likeCount: number, likedByFollowed: boolean, repostCount: number, commentCount: number, likedByUser: boolean, repostedByUser: boolean, handle: string, bio: string, userCreatedAt: string, username: string, iq: number, verified: boolean, parentContent: string | null, parentHasImage: boolean | null, parentUserHandle: string | null, parentUserCreatedAt: string | null, parentUserBio: string | null, parentUserUsername: string | null, parentUserVerified: boolean | null, parentUserIq: number | null, parentUserId: string | null, parentCreatedAt: string | null, isFollowed: boolean, isViewed: boolean, viewedAt: string | null) {
    //     this.id = id;
    //     this.content = content;
    //     this.userId = userId;
    //     this.created_at = created_at;
    //     this.views = views;
    //     this.reposted = reposted;
    //     this.parentId = parentId;
    //     this.has_image = has_image;
    //     this.likeCount = likeCount;
    //     this.likedByFollowed = likedByFollowed;
    //     this.repostCount = repostCount;
    //     this.commentCount = commentCount;
    //     this.likedByUser = likedByUser;
    //     this.repostedByUser = repostedByUser;
    //     this.handle = handle;
    //     this.bio = bio;
    //     this.userCreatedAt = userCreatedAt;
    //     this.username = username;
    //     this.iq = iq;
    //     this.verified = verified;
    //     this.parentContent = parentContent;
    //     this.parentHasImage = parentHasImage;
    //     this.parentUserHandle = parentUserHandle;
    //     this.parentUserCreatedAt = parentUserCreatedAt;
    //     this.parentUserBio = parentUserBio;
    //     this.parentUserUsername = parentUserUsername;
    //     this.parentUserVerified = parentUserVerified;
    //     this.parentUserIq = parentUserIq;
    //     this.parentUserId = parentUserId;
    //     this.parentCreatedAt = parentCreatedAt;
    //     this.isFollowed = isFollowed;
    //     this.isViewed = isViewed;
    //     this.viewedAt = viewedAt;
    // }

    constructor (options: LyntOptions) {
        this.id = options.id;
        this.content = options.content;
        this.userId = options.userId;
        this.created_at = options.created_at;
        this.views = options.views;
        this.reposted = options.reposted;
        this.parentId = options.parentId;
        this.has_image = options.has_image;
        this.likeCount = options.likeCount;
        this.likedByFollowed = options.likedByFollowed;
        this.repostCount = options.repostCount;
        this.commentCount = options.commentCount;
        this.likedByUser = options.likedByUser;
        this.repostedByUser = options.repostedByUser;
        this.handle = options.handle;
        this.bio = options.bio;
        this.userCreatedAt = options.userCreatedAt;
        this.username = options.username;
        this.iq = options.iq;
        this.verified = options.verified;
        this.parentContent = options.parentContent;
        this.parentHasImage = options.parentHasImage;
        this.parentUserHandle = options.parentUserHandle;
        this.parentUserCreatedAt = options.parentUserCreatedAt;
        this.parentUserBio = options.parentUserBio;
        this.parentUserUsername = options.parentUserUsername;
        this.parentUserVerified = options.parentUserVerified;
        this.parentUserIq = options.parentUserIq;
        this.parentUserId = options.parentUserId;
        this.parentCreatedAt = options.parentCreatedAt;
        this.isFollowed = options.isFollowed;
        this.isViewed = options.isViewed;
        this.viewedAt = options.viewedAt;
    }

    public static isLynt(obj: any): obj is Lynt {
        return obj != null &&
            typeof obj.id === 'string' &&
            typeof obj.content === 'string' &&
            typeof obj.userId === 'string' &&
            typeof obj.created_at === 'string' &&
            typeof obj.views === 'number' &&
            typeof obj.reposted === 'boolean' &&
            (obj.parentId === null || typeof obj.parentId === 'string') &&
            typeof obj.has_image === 'boolean' &&
            typeof obj.likeCount === 'number' &&
            typeof obj.likedByFollowed === 'boolean' &&
            typeof obj.repostCount === 'number' &&
            typeof obj.commentCount === 'number' &&
            typeof obj.likedByUser === 'boolean' &&
            typeof obj.repostedByUser === 'boolean' &&
            typeof obj.handle === 'string' &&
            typeof obj.bio === 'string' &&
            typeof obj.userCreatedAt === 'string' &&
            typeof obj.username === 'string' &&
            typeof obj.iq === 'number' &&
            typeof obj.verified === 'boolean' &&
            (obj.parentContent === null || typeof obj.parentContent === 'string') &&
            (obj.parentHasImage === null || typeof obj.parentHasImage === 'boolean') &&
            (obj.parentUserHandle === null || typeof obj.parentUserHandle === 'string') &&
            (obj.parentUserCreatedAt === null || typeof obj.parentUserCreatedAt === 'string') &&
            (obj.parentUserBio === null || typeof obj.parentUserBio === 'string') &&
            (obj.parentUserUsername === null || typeof obj.parentUserUsername === 'string') &&
            (obj.parentUserVerified === null || typeof obj.parentUserVerified === 'boolean') &&
            (obj.parentUserIq === null || typeof obj.parentUserIq === 'number') &&
            (obj.parentUserId === null || typeof obj.parentUserId === 'string') &&
            (obj.parentCreatedAt === null || typeof obj.parentCreatedAt === 'string') &&
            typeof obj.isFollowed === 'boolean' &&
            typeof obj.isViewed === 'boolean' &&
            (obj.viewedAt === null || typeof obj.viewedAt === 'string');
    }

}