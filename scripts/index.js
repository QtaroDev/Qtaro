
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

/* https://www.freeprivacypolicy.com/live/5e496ee4-e6b7-411f-abea-cd09ebbea5de */