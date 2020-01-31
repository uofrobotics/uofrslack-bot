const { RTMClient } = require('@slack/rtm-api');
const dotenv = require('dotenv')

dotenv.config()

// Initialize
const rtm = new RTMClient(`${process.env.BOT_TOKEN}`);

rtm.on('message', (event) => {
    console.log(event);
});

(async () => {
    await rtm.start();
})();