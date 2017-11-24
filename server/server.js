const express = require('express');
const FBBotFramework = require('fb-bot-framework');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});