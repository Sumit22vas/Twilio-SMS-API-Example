const accountSid = ''; // Enter accountSid provide by Twilio
const authToken = ''; // Enter aauthToken provide by Twilio
const client = require('twilio')(accountSid, authToken);


module.exports = function sendsms(number,message) {
    client.messages
  .create({
     body:   message ,
     from: '', // Enter Your Virtual Trail number provide by Twilio
     to: number // In Trail Version Only your registered Number Can Get Free SMS
   }) 
  .then(message => console.log(message.sid));
}