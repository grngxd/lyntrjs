
export class User {
    id: string;
    username: string;
    handle: string;
    created_at: string;
    iq: number;

    constructor(id: string, username: string, handle: string, created_at: string, iq: number) {
        this.id = id;
        this.username = username;
        this.handle = handle;
        this.created_at = created_at;
        this.iq = iq;
    }

    static isUser(obj: any): obj is User {
        return obj != null &&
               typeof obj.id === 'string' &&
               typeof obj.username === 'string' &&
               typeof obj.handle === 'string' &&
               typeof obj.created_at === 'string' &&
               typeof obj.iq === 'number';
    }
}