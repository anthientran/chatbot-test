const express = require('express');
const FBBotFramework = require('fb-bot-framework');

const app = express();

const port = process.env.PORT || 3000;

const bot = new FBBotFramework({
    page_token: process.env.PAGE_ACCESS_TOKEN,
    verify_token: process.env.VERIFY_TOKEN
});

app.use('/webhook', bot.middleware());

bot.on('message', (userId, message) => {
    console.log('SenderID: ' + userId);
    bot.sendTextMessage(userId, 'Echo message: ' + message);
})
    ;
app.get('/', (req, res) => {
    res.send('Hello world');
});

/* app.post('/webhook', (req, res) => {

    // Parse the request body from the POST
    let body = req.body;

    // Check the webhook event is from a Page subscription
    if (body.object === 'page') {

        // Iterate over each entry - there may be multiple if batched
        body.entry.forEach(function (entry) {

            // Get the webhook event. entry.messaging is an array, but 
            // will only ever contain one event, so we get index 0
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);

            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);


        });

        // Return a '200 OK' response to all events
        res.status(200).send('EVENT_RECEIVED');

    } else {
        // Return a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }

});
 */
function handleMessage(sender_psid, received_message) {

}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {

}


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});