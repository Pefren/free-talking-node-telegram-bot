const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'TELEGRAM-BOT-TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
const talk_list = require('./talk-list');

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});


// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    let message = talk_list['default'][Math.random() * talk_list['default'].length | 0];
    let received = msg.text.toLowerCase();
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    for(let question in talk_list){
        if(question.includes('|')){
            let questions = question.split('|');
            for(let question_item in questions){
                if (received.includes(questions[question_item])) {
                    message = talk_list[question][Math.random() * talk_list[question].length | 0];
                }
            }
        }
        else {
            if (received.includes(question)) {
                message = talk_list[question][Math.random() * talk_list[question].length | 0];
            }
        }
    }

    bot.sendMessage(chatId, message);
});