<p align="center">
  <p align="center">
    <img src="assets/logo.svg" alt="Logo" width="128" />
  </p>
  <h1 align="center"><b>lyntr.js</b></h1>
</p>

## 💻 About

`lyntr.js` is a simple and lightweight JavaScript library that utilizes the [Lyntr API](https://lyntr.com) to interact with the Lyntr platform.

## 🚀 Installation
```bash
$ npm install lyntr
$ yarn add lyntr
$ pnpm add lyntr
```

## 📚 Usage
```javascript
import { Lyntr } from 'lyntr';

// Your Lyntr access token, labled as "_TOKEN__DO_NOT_SHARE" in your browser's cookies
const cookie = 'your_cookie_here';
// The Lyntr bot instance, with the cookie provided as authentication
const bot = new Lyntr({
    cookie
});


bot.on('error', console.error);
bot.on('ready', () => {
    console.log('Bot is ready!');
});

// Invoked in an IIFE since the library is asynchronous
(async () => {
    await bot.login();
    await bot.me().then((me) => { //  {
                                  //     "id": "8846746536817664",
                                  //     "username": "grng",
        console.log(me);          //     "handle": "gr",
                                  //     "created_at": "2024-08-06T21:23:33.269Z",
                                  //     "iq": 124
    });                           //  }
})();
```