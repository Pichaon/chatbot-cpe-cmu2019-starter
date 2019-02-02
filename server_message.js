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
    /* client.replyMessage(event.replyToken, 
      {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
            "type": "buttons",
            "thumbnailImageUrl": "https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFSUN126-1_medium.jpg",
            "imageAspectRatio": "rectangle",
            "imageSize": "cover",
            "imageBackgroundColor": "#9EE37D",
            "title": "Parn",
            "text": "Pichaon  Rinrit",
            "defaultAction": {
                "type": "uri",
                "label": "View detail",
                "uri": "http://google.com/"
            },
            "actions": [
                {
                  "type": "uri",
                  "label": "Facebook",
                  "uri": "https://www.facebook.com/pichaon.rinrit"
                  
                },
                {
                  "type": "uri",
                  "label": "ISNE#5 CMU",
                  "uri": "http://cpe.eng.cmu.ac.th/2013/"
                  
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

/*   res.send('webhook success')//
  



app.set('port', (process.env.PORT || 4000)) */


client.replyMessage(event.replyToken, {
  "type": "template",
  "altText": "this is a carousel template",
  "template": {
      "type": "carousel",
      "columns": [
          {
            "thumbnailImageUrl": "https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png/revision/latest?cb=20150808131630",
            "imageBackgroundColor": "#FFFFFF",
            "title": "this is menu",
            "text": "description",
            "actions": [
                {  
                    "type":"cameraRoll",
                    "label":"Camera roll"
                },
                {  
                  "type":"location",
                  "label":"Location"
               }
            ]
          },
          {
            "thumbnailImageUrl": "https://c.76.my/Malaysia/line-brown-bear-cute-pencil-case-ubiyo-1802-02-Ubiyo@6.jpg",
            "imageBackgroundColor": "#000000",
            "title": "this is menu",
            "text": "description",
            "actions": [
              {
                "type":"datetimepicker",
                "label":"Select date",
                "data":"storeId=12345",
                "mode":"datetime",
                "initial":"2017-12-25t00:00",
                "max":"2018-01-24t23:59",
                "min":"2017-12-25t00:00"
              },
              {  
                "type":"camera",
                "label":"Camera"
             }
          ]
          }
      ],
      "imageAspectRatio": "rectangle",
      "imageSize": "cover"
  }
})
}
})

app.set('port', (process.env.PORT || 4000))



app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})