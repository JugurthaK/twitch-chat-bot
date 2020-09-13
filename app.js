const tmi = require('tmi.js')
const chalk = require('chalk')

const config = require('./.config')
const { commands } = require('./utils/commands')
const utils = require('./utils/utils')
const { whitelist } = require('./utils/whitelist')

const options = {
    options: { debug: false},
    connection: {
        secure: true,
        reconnect: true,
    },
    identity: {
        username: config.username,
        password: config.password
    },
    channels: [config.channel]
}

const client = new tmi.Client(options)

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (self) return;

    if (utils.containsURL(message))
    {
        whitelist.forEach(site => { message = message.replace(site, "") })

        if (utils.containsURL(message))
        {
            client.timeout(channel, tags.username, 1, "Ne pas envoyer de lien dans le chat")
            if (tags.username === "wise_d")
                client.say(channel, '/mod wise_d')
        }
    }

    else if (message === "!help")
    {
        commands.forEach(command => {
            client.say(channel, `${command.tag} : ${command.description}`)
        })
    }
    
    else if (message.startsWith("!"))
    {
        let tag = message.split(" ")[0]
        if (tag !== "!help")
            commands.forEach( command => { if (tag === command.tag) client.say(channel, command.message) })
    }
    else
        console.log(chalk.green(`@${chalk.bold(tags.username)} : ${message}`))
})

client.on("join", (client, username, self) => {
    if (self) return;

    console.log(`\n${chalk.bold(username)} joined the chat`)
})