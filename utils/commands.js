module.exports = {
    commands: [
        {
            description: "Affiche l'ensemble des commandes disponibles",
            message: "Ca arrive, vous inquiétez pas",
            tag: "!help"
        },
        {
            description: "Retourne le project sur lequel je travaille actuellement",
            message: "Actuellement je suis entrain de coder un outil pour améliorer le chat",
            tag: "!project"
        },
        {
            description: "Donne quelques informations sur moi",
            message: "Je m'appelle Jugurtha, j'ai 24 ans, je mange des clés USB et des HDD",
            tag: "!bio"
        },
        {
            description: "Renvoie l'ensemble des site autorisés sur le chat",
            message: 'youtube, twitch, github, reddit, developer.mozilla, w3schools',
            tag: "!whitesites"
        },
        {
            description: "Affiche ce qu'on a développé la dernière fois",
            message: "Détecte et supprime les URL dans le chat, mais avec certains sites whitelisté",
            tag: "!lastepisode"
        },
    ]
}