let moment = require('moment');


function formatMessage(username, text){
    return {
        username,
        text,
        position: ((username === 'Galaxy Bot')?'center': 'left'),
        // position: 'left',
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;