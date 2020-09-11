var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOOK6Sd8tPkCMHlJFMpppXArSYiFtuA5RfuEoGd5qrme7-nOl7oUwBKBURK_0tn9ttj8sxdhD3v90xXVpcUfWcA',
    privateKey: 'mp9q69bj_071jaSfqiQ7YvWL0g4LTsaDx-sfqO51Ry4'
  }

push.setVapidDetails('izzych:sunnych741@1utar.my', vapidKeys.publicKey, vapidKeys.privateKey)

let sub ={
    endpoint:"https://fcm.googleapis.com/fcm/send/c0QsgJCCdag:APA91bHCfiRfLuOkKUIDEzk8YbuthrOL5B8herEPRpayeWlMjGxtIZZx2baRIcq65UL19BN-41VKw3nvpOnVp3R185dYTD3YDAX_HrAxFfjn-KoQ5mfDHqwE3G8tA1XDfeirXAlUiwtl",
    expirationTime:null,
    keys:{
        p256dh:
        "BEofckH-3NTioAfdaaA9u3VBb0SAfFYX4U3HMt7qyQjIat95jyNmHdPi-Gya2Sx4GTCX_kEMQ457V3P8jnx67Vs",
        auth:"83X_7PvPRP_iUCwpKMkc1Q"
    }
};

push.sendNotification(sub, 'test message')