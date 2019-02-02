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

app.post('/webhook', middleware(config), (req, res) => {  //req = request
  const event = req.body.events[0];
  
  if (event.type === 'message') {
    const message = event.message;
    console.log(message)
    client.replyMessage(event.replyToken, 
      {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
            "type": "buttons",
            "thumbnailImageUrl": "https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFSUN126-1_medium.jpg",
            "imageAspectRatio": "rectangle",
            "imageSize": "cover",
            "imageBackgroundColor": "#9EE37D",
            "title": "Menu",
            "text": "Please select",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://google.com/"
            },
            "actions": [
                {
                  "type": "postback",
                  "label": "Buy",
                  "data": "action=buy&itemid=123"
                },
                {
                  "type": "message",
                  "label": "Add to cart",
                  "text": "no no no"
                },
                {
                  "type": "uri",
                  "label": "View detail",
                  "uri": "http://google.com"
                }
            ]
        }
      })
  }

  res.send('webhook success')//
  
})


app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})