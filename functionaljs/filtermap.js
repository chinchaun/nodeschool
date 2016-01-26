function getShortMessages(messages) {
      var msgs =  messages.map(function (msg) {
         return msg.message;
      });
      return msgs.filter(isBiggerThan50Words);
    }
    
function isBiggerThan50Words(message) {
    return message.length <= 50;
}    
    
module.exports = getShortMessages;


module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50;
      }).map(function(item) {
        return item.message;
      });
    };