var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOOK6Sd8tPkCMHlJFMpppXArSYiFtuA5RfuEoGd5qrme7-nOl7oUwBKBURK_0tn9ttj8sxdhD3v90xXVpcUfWcA',
    privateKey: 'mp9q69bj_071jaSfqiQ7YvWL0g4LTsaDx-sfqO51Ry4'
  }

push.setVapidDetails('izzych:sunnych741@1utar.my', vapidKeys.publicKey, vapidKeys.privateKey)

let sub ={
    "endpoint":"https://fcm.googleapis.com/fcm/send/eHp-V9Lz9SI:APA91bEIgo9i8iuB412D_LuYX55Kb9QLBHm3up_q5GEa0BT5or3rWHGD8py8eRTvm06mtB9IUCEpSn4Dw4_z_m8un4gefu4dvVXrLotEV6-euyOdE33p3UYJsoVwgIGw7_a-5HxBAfOR",
    expirationTime:null,
    keys:{
        p256dh:
        "BNrkEIqWW4bppLP7IjWLF6kZTfHcrmqW0nvsy5z6ZDcGFO5EWIlIN0eO4H_6VMNe0bwefgGXsq5QlJ7vhZNAoO4",
        auth:"xt5AqeTcTUiwM4xOUX5wbw"
    }
};



push.sendNotification(sub, 'test message')