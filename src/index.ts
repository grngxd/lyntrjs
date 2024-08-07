import axios from 'axios';
import Emittery from 'emittery';
import https from 'https';
import { Lynt } from './lynt/lynt';
import { FeedType, LyntPostOptions, LyntrOptions } from './types';
import { User } from './user/user';

const api = "https://lyntr.com/api/";

export class Lyntr {
    cookie: string;
    private emitter;
    constructor(config: LyntrOptions) {
        this.cookie = config.cookie;
        this.emitter = new Emittery();
        axios.defaults.withCredentials = true;
    }

    public on(event: string, listener: (...args: any[]) => void) { this.emitter.on(event, listener) }

    public async login() {
        try {
            const response = await axios.get(api + 'me', {
                headers: {
                    'Cookie': `_TOKEN__DO_NOT_SHARE=${this.cookie}`
                },
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                })
            })
            .then((res) => res.data);

            if (!User.isUser(response)) {
                this.emitter.emit('error', response.error || 'Invalid user data');
                this.emitter.emit('auth', response.error || 'Invalid user data');
            }
        } catch (error: any) {
            this.emitter.emit('error', error.response.data.error || error.message);
            this.emitter.emit('auth', error.response.data.error || error.message);
        }
    }

    public async me(): Promise<User | void> {
        try {
            const response = await axios.get(api + 'me', {
                headers: {
                    'Cookie': `_TOKEN__DO_NOT_SHARE=${this.cookie}`
                },
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                })
            })
            .then((res) => res.data);

            if (!User.isUser(response)) {
                this.emitter.emit('error', response.error || 'Invalid user data');
            }

            return response;
        } catch (error: any) {
            this.emitter.emit('error', error.response.data.error || error.message);
        }
    }

    public async feed(type: FeedType = FeedType.MAIN): Promise<Lynt[] | void> {
        try {
            const response = await axios.get(api + 'feed', {
                headers: {
                    'Cookie': `_TOKEN__DO_NOT_SHARE=${this.cookie}`
                },
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                })
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
            const response = await axios.post(api + 'lynt', options, {
                headers: {
                    'Cookie': `_TOKEN__DO_NOT_SHARE=${this.cookie}`,
                    'Origin': 'https://lyntr.com',
                    'Content-Type': 'multipart/form-data',
                },
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                })
            })
            .then((res) => res.data);
            return response;
        } catch (error: any) {
            this.emitter.emit('error', error.response?.data?.message || error.message);
        }
    }
}