# Twitch Chat Bot Homemade

I wanted to display my Twitch Chat on a terminal, so I've made this.

Now it has :
- Static commands management
- Delete URLs (with a whitelist system)
- Many more to come..

## How to run it

```bash
git clone https://github.com/JugurthaK/twitch-chat-bot.git && cd twitch-chat-bot
```

To get your oauth password : https://twitchapps.com/tmi/

To add your oauth password to the project :

```bash
touch .config.js
```
Open .config.js with whatever you want.

Paste this code **Please change the values**:

```js
module.exports = {
    username: "YOUR TWITCH USERNAME",
    password: "YOUR OAUTH PASSWORD",
    channel: "YOUR TWITCH CHANNEL"
}
```

```bash
npm install && npm start
```

## To add a command:
Go to `utils/commands.js` and add your own command following the template

If you want to follow me : twitch.tv/jugurthak