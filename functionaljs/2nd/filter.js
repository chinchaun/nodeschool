function getShortMessages(messages) {
    var filtered = messages.filter(function (obj) {
        return obj.message.length < 50;
    });
    return filtered.map(function (obj) {
        return obj.message;
    });
}

module.exports = getShortMessages;

//Oficial

module.exports = function getShortMessages(messages) {
    return messages.filter(function (item) {
        return item.message.length < 50
    }).map(function (item) {
        return item.message
    })
}
