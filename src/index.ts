import axios from 'axios';
import Emittery from 'emittery';
import https from 'https';
import { Lynt } from './lynt/lynt';
import { FeedType, LyntPostOptions, LyntrOptions } from './types';
import { User } from './user/user';

export class Lyntr {
    private cookie: string;
    private emitter;
    private base = "https://lyntr.com/";
    private api;
    private client;
    constructor(config: LyntrOptions) {
        this.cookie = config.cookie;
        this.emitter = new Emittery();
        this.base = config.base || this.base;
        if (!this.base.endsWith('/')) this.base += '/';

        this.api = this.base + 'api/';
        axios.defaults.withCredentials = true;

        this.client = axios.create({
            headers: {
                'Cookie': `_TOKEN__DO_NOT_SHARE=${this.cookie}`,
                'Origin': this.base,
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });
    }

    public on(event: string, listener: (...args: any[]) => void) { this.emitter.on(event, listener) }

    public async login() {
        try {
            const response = await this.client.get('me')
                .then((res) => res.data);

            if (!User.isUser(response)) {
                this.emitter.emit('error', response.error || 'Invalid user data');
                this.emitter.emit('auth', response.error || 'Invalid user data');
            }
        } catch (error: any) {
            this.emitter.emit('error', error.response || error.message);
            this.emitter.emit('auth', error.response || error.message);
        }
    }

    public async me(): Promise<User | void> {
        try {
            const response = await this.client.get('me')
                .then((res) => res.data);

            if (!User.isUser(response)) {
                this.emitter.emit('error', response.error || 'Invalid user data');
            }

            return response;
        } catch (error: any) {
            this.emitter.emit('error', error.response || error.message);
        }
    }

    public async feed(type: FeedType = FeedType.FOR_YOU, handle: string | undefined = undefined): Promise<Lynt[] | void> {
        try {
            const response = await this.client.get('feed', {
                params: {
                    type,
                    handle
                }
            })
            .then((res) => res.data.lynts);

            const array = response.map((lynt: any) => {
                if (!Lynt.isLynt(lynt)) {
                    this.emitter.emit('error', lynt.error || 'Invalid lynt data');
                }

                return lynt;
            });

            return array;
        } catch (error: any) {
            this.emitter.emit('error', error.response || error.message);
        }
    }
    
    public async post(options: LyntPostOptions): Promise<Lynt | void> {
        try {
            const response = await this.client.post('lynt', options, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((res) => res.data);
            return response;
        } catch (error: any) {
            this.emitter.emit('error', error.response || error.message);
        }
    }

    public async search(q: string) {
        try {
            const response = await this.client.get('search', {
                params: {
                    q
                }
            })
            .then((res) => res.data);
            const array = response.map((lynt: any) => {
                if (!Lynt.isLynt(lynt)) {
                    this.emitter.emit('error', lynt.error || 'Invalid lynt data');
                }

                return lynt;
            });
            return array;
        } catch (error: any) {
            this.emitter.emit('error', error.response || error.message);
        }
    }
}