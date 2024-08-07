import { expect } from 'chai';
import { Lynt } from '../src/lynt/lynt';
import { LyntOptions } from '../src/types';

describe('Lynt', () => {
    const validLynt: LyntOptions = {
        id: '1',
        content: 'it content',
        userId: 'user1',
        created_at: '2023-01-01T00:00:00Z',
        views: 100,
        reposted: false,
        parentId: null,
        has_image: false,
        likeCount: 10,
        likedByFollowed: false,
        repostCount: 5,
        commentCount: 2,
        likedByUser: false,
        repostedByUser: false,
        handle: 'user_handle',
        bio: 'User bio',
        userCreatedAt: '2022-01-01T00:00:00Z',
        username: 'username',
        iq: 100,
        verified: false,
        parentContent: null,
        parentHasImage: null,
        parentUserHandle: null,
        parentUserCreatedAt: null,
        parentUserBio: null,
        parentUserUsername: null,
        parentUserVerified: null,
        parentUserIq: null,
        parentUserId: null,
        parentCreatedAt: null,
        isFollowed: false,
        isViewed: false,
        viewedAt: null
    };

    it('should return true for a valid Lynt object', () => {
        expect(Lynt.isLynt(new Lynt(validLynt))).to.equal(true);
    });

    it('should return false for an invalid Lynt object (missing fields)', () => {
        const invalidLynt = { ...validLynt, id: undefined };
        expect(Lynt.isLynt(invalidLynt)).to.equal(false);
    });

    it('should return false for null', () => {
        expect(Lynt.isLynt(null)).to.equal(false);
    });

    it('should return false for undefined', () => {
        expect(Lynt.isLynt(undefined)).to.equal(false);
    });

    it('should return false for incorrect data types', () => {
        const invalidLynt = { ...validLynt, views: '100' }; // views should be a number
        expect(Lynt.isLynt(invalidLynt)).to.equal(false);
    });
});