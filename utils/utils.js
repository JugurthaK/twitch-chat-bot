let containsURL = (message) => {

    message = message.replace(" ", "")
    return  message.match(/(?:http(s)?:\/\/)?(\s)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+/) ? true : false
}

module.exports = { containsURL }
