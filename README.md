# free-talking-node-telegram-bot

Project based on https://github.com/yagop/node-telegram-bot-api

You can specify your own questions:answers in talk-list file. For example your bot should randomly answer "Hello", "Hi!" "Nice to meet you." or "Hi" on message that contains "hi" or "hello" text, specify talk list as:

```
    'hi|hello':[
        'Hello!',
        'Hi! Nice to meet you.',
        'Hi.'
    ],
```

#Installation

```
git clone this_repo
npm install
```
Then type your telegram bot token (which you can get by telegram bot father) in const token and type this command in command line:
```
node index
```
#Enjoy
