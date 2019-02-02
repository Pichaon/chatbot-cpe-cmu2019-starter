const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const Client = require('@line/bot-sdk').Client;
const app = express()

const config = {
  channelAccessToken: 'PFqCzp+X5yQjqoDoGUHo2nFbJTcU8jr0gRD5yj6Xf3WtIqPCeXEfoXGvx8DHgF0+uw/NdwTrRdu1WXtylvBWgv1dB5ScbsqmojHQlFOAl6x7dDRlXn/K83hXKgG99+YhShNV1eAdiS279xcmSzhSIAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '8bb8fbea1d622e44a5d3f00e3d918fa5'
}

const client = new Client(config)

app.get('/', function (req, res) {
    res.send('Hello World!!')
})


app.post('/webhook', middleware(config), (req, res) => {
  
  const event = req.body.events[0];

  if (event.type === 'message') {
    const message = event.message;

    client.replyMessage(event.replyToken, {
      type: 'text',
      text: message.text,
    });
  }
  res.send('webhook success')//
  
})


app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})

