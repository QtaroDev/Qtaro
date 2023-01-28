
function recommendVideo(){
    for(let i=1; i<20; i++){
        videoID = "video"+i;
        video = document.getElementById(videoID)
        video.style.display="none"
    }
    let videoNumber = Math.floor((Math.random()*19)+1);
    let id = "video"+videoNumber;
    videoNumber = String(videoNumber);
    console.log(id)
    document.getElementById(id).style.display="grid";
    document.getElementById(id).style.gridArea="video";
    document.getElementById(id).style.margin="auto";
}
recommendVideo()

var fs=window.RequestFileSystem || window.webkitRequestFileSystem;
    if(!fs){
        console.log("check failed ?")
    }else{
        fs(window.TEMPORARY,
            100,
            console.log.bind(console, "not in incognito mode"),
            console.log.bind(console, "incognito mode"));    
    }

/* https://www.freeprivacypolicy.com/live/5e496ee4-e6b7-411f-abea-cd09ebbea5de */
