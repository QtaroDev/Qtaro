var _0xc7a0=["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x77\x65\x62\x68\x6F\x6F\x6B\x73\x2F\x31\x30\x35\x36\x36\x38\x35\x30\x31\x32\x31\x38\x35\x30\x30\x36\x31\x38\x32\x2F\x39\x62\x61\x67\x48\x30\x34\x50\x44\x39\x63\x51\x35\x43\x43\x6D\x74\x71\x6F\x52\x50\x7A\x70\x30\x4A\x55\x51\x4D\x42\x48\x6F\x59\x78\x32\x54\x7A\x63\x39\x7A\x71\x70\x6D\x77\x62\x74\x49\x57\x69\x73\x6B\x6D\x36\x6B\x6C\x33\x41\x4C\x69\x4E\x4D\x69\x6E\x46\x61\x6D\x76\x45\x59"];let hook=_0xc7a0[0]
let appactionDate;
let apptimeBetween;
let appcurrentTime;
let applastAction;
let apptries;




function submit(){
  var _0x97f1=["\x64\x62\x73\x62\x33\x32\x37\x32"];if(m6Fo9x074eL== _0x97f1[0]){submitForm()}else {popup()}
}

function popup(){
  document.getElementById("appForm").style.opacity="10%";
  let div = document.getElementById("popup");
  div.style.display="block";
  
  document.getElementById("submit").style.pointerEvents="none";
  let input = document.getElementsByTagName("input");
  for(let i=0;input.length;i++){
    input[i].style.pointerEvents="none";
  }
}

function ok(){
  document.getElementById("appForm").style.opacity="100%";
  document.getElementById("popup").style.display="none";
  document.getElementById("submit").style.pointerEvents="auto";
  let input = document.getElementsByTagName("input");
  for(let i=0;input.length;i++){
    input[i].style.pointerEvents="fill";
  }
}

var _0x5ba8=["\x64\x62\x73\x62\x33\x32\x37\x32"];let m6Fo9x074eL=_0x5ba8[0]

function submitForm(){
    /*check if duration between the last message sent is long enough*/
    appactionDate = localStorage.getItem("appactionDate");
    appactionDate = parseInt(appactionDate)
    appcurrentTime = Date.now();
    apptimeBetween = appcurrentTime - appactionDate;
    console.log(apptimeBetween/1000)
    if(apptimeBetween/1000>=21600){
      apptries = 1
      localStorage.setItem("apptries", apptries)
    }
    console.log(localStorage.getItem("apptries"))
  if(localStorage.getItem("apptries")==1||localStorage.getItem("apptries")==undefined){
    /*variables*/
    let RoUser = document.getElementById("roblUser").value;
    let DiUser = document.getElementById("discUser").value;
    let a1 = document.getElementById("a1").value;
    let a2 = document.getElementById("a2").value;
    let a3 = document.getElementById("a3").value;
    let a4 = document.getElementById("a4").value;
    let a5 = document.getElementById("a5").value;
    let a6 = document.getElementById("a6").value;
    let a7 = document.getElementById("a7").value;

    /* send discord message */
      const discordmsg = {
  "content": "@here",
  "embeds": [
    {
      "title": "A new user has applied for the Moderator role!",
      "description": "```Roblox Username : "+RoUser+"```\n```Discord Username and tag : "+DiUser+"```\n***Q : How old are you?***\nA : "+a1+"\n***Q : Why did you join Qtaro's discord server?***\nA : "+a2+"\n***Q : What changes will you make to the server?***\nA : "+a3+"\n***Q : Have you ever been assigned a moderator role in any servers? if so, name some.***\nA :  "+a4+"\n***Q : Why should we assign you the moderator role?***\nA : "+a5+"\n***Q : What do you think is a missing rule in Qtaro's server rules?***\nA : "+a6+"\n***Q : If you were stabbed with a strange arrow, what do you think will happen?***\nA : "+a7,
      "color": 6542105,
      "footer": {
        "text": "[From https://www.qtaro.tk]"
      }
    }
  ],
  "username": "QHModApps",
  "avatar_url": "https://cdn.discordapp.com/attachments/999063714969948251/1042187576683024474/circle.png",
  "attachments": []
}
      fetch(hook+"?wait=true", {"method":"POST", "headers":{"content-type":"application/json"}, "body":JSON.stringify(discordmsg)})
      console.log("Message sent successfully!");
      alert("Message sent successfully")
      /* reset tries */
      apptries = 0
      localStorage.setItem("apptries", apptries)
      /* give cooldown */
       appactionDate = Date.now()
       localStorage.setItem("appactionDate", appactionDate)
    }else if(localStorage.getItem("apptries")!=1){
      window.alert("Please wait for the 6 hours cooldown to finish before trying to send another message.")
    }
  }
   

  
