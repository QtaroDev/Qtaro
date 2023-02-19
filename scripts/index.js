
function recommendVideo(){
    for(let i=1; i<24; i++){
        videoID = "video"+i;
        video = document.getElementById(videoID)
        video.style.display="none"
    }
    let videoNumber = Math.floor((Math.random()*22)+1);
    videoNumber = String(videoNumber);
    let id = "video"+videoNumber;
    console.log(id)
    document.getElementById(id).style.display="grid";
    document.getElementById(id).style.gridArea="video";
    document.getElementById(id).style.margin="auto";
}
recommendVideo()

if ('storage' in navigator && 'estimate' in navigator.storage) {
    const {usage, quota} = navigator.storage.estimate();
    console.log(`Using ${usage} out of ${quota} bytes.`);

    if(quota < 120000000){
        console.log('Incognito')
    } else {
        console.log('Not Incognito')
    }   
} else {
    console.log('Can not detect')
}

/* https://www.freeprivacypolicy.com/live/5e496ee4-e6b7-411f-abea-cd09ebbea5de */
