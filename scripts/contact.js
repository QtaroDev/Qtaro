var _0x770f=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x34\x32\x35\x35\x36\x39\x31\x38\x32\x34\x37\x34\x36\x34\x39\x38\x30\x2F\x67\x6A\x52\x46\x4B\x58\x67\x50\x32\x49\x71\x67\x58\x57\x6F\x56\x53\x4C\x63\x39\x5F\x55\x44\x6A\x54\x54\x7A\x63\x32\x5A\x52\x4B\x64\x56\x61\x72\x71\x67\x53\x64\x31\x52\x55\x41\x7A\x6A\x76\x46\x44\x47\x68\x36\x47\x74\x58\x79\x65\x37\x54\x73\x54\x41\x74\x68\x75\x38\x68\x75"];let hook=_0x770f[0]
let actionDate;
let timeBetween;
let currentTime;
let lastAction;
let tries;
function sendMessage(){

  /*check if duration between the last message sent is long enough*/

  actionDate = localStorage.getItem("actionDate");
  actionDate = parseInt(actionDate)
  currentTime = Date.now();
  timeBetween = currentTime - actionDate;
  console.log(timeBetween/1000)

  
  if(timeBetween/1000>=3600){
    tries = 1
    localStorage.setItem("tries", tries)
  }
  console.log(localStorage.getItem("tries"))
if(localStorage.getItem("tries")==1||localStorage.getItem("tries")==undefined){

  /*variables*/

  let username = document.getElementById("username").value;
  let message = document.getElementById("message").value;
  let email = document.getElementById("email").value;

  /* send discord message */

    const discordmsg = {
      "content": "@here",
      "embeds": [{
        "title": "A new message has arrived",  
        "description": "`From : "+username+"`"+"\n`E-mail : "+email+"`"+"\n```"+message+"```",
        "color": 3786509
      }],
      "username": "QH Contact",
      "avatar_url": "https://cdn.discordapp.com/attachments/999063714969948251/1042187576683024474/circle.png",
      "attachments": []
    }
    fetch(hook+"?wait=true", {"method":"POST", "headers":{"content-type":"application/json"}, "body":JSON.stringify(discordmsg)})
    console.log("Message sent successfully!");
    alert("Message sent successfully")

    tries = 0
    localStorage.setItem("tries", tries)

    /* give cooldown */
     actionDate = Date.now()
     localStorage.setItem("actionDate", actionDate)

  }else if(localStorage.getItem("tries")!=1){
    window.alert("Please wait for the 60 minutes cooldown to finish before trying to send another message.")
  }


}
 

