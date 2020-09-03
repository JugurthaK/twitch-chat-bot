# Twitch Chat Bot Homemade

I wanted to display my Twitch Chat on a terminal, so I've made this.

Now it has :
- Static commands management
- Delete URLs (with a whitelist system)
- Many more to come..

## How to run it

I think you're able to understand the code to add your own creds.

To get your oauth password : https://twitchapps.com/tmi/

```bash
git clone https://github.com/JugurthaK/twitch-chat-bot.git && cd twitch-chat-bot && npm install && node app.js
```

## To add a command:
Go to `utils/commands.js` and add your own command following the template

If you want to follow me : twitch.tv/jugurthak