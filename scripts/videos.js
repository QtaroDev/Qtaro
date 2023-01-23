

function selectType(){
    const aut = document.getElementsByClassName("videoAUT");
    const yba = document.getElementsByClassName("videoYBA");
    const riu = document.getElementsByClassName("videoRIU");
    let selectedType = document.getElementById("select").value;

function selectYBA(){
    for(let i=0; i<yba.length;i++){
        yba[i].style.display="grid"
    }
    for(let i=0; i<aut.length;i++){
        aut[i].style.display="none"
    }    
    for(let i=0; i<riu.length;i++){
        riu[i].style.display="none"
    }
}
function selectAUT(){
    for(let i=0;i<aut.length;i++){
        aut[i].style.display="grid"
    }
    for(let i=0; i<yba.length;i++){
        yba[i].style.display="none"
    }
    for(let i=0; i<riu.length;i++){
        riu[i].style.display="none"
    }
}
function selectRIU(){
    for(let i=0;i<riu.length;i++){
        riu[i].style.display="grid"
    }
    for(let i=0; i<aut.length;i++){
        aut[i].style.display="none"
    }
    for(let i=0; i<yba.length;i++){
        yba[i].style.display="none"
    }
}
function selectAll(){
    for(let i=0;i<riu.length;i++){
        riu[i].style.display="grid"
    }
    for(let i=0; i<aut.length;i++){
        aut[i].style.display="grid"
    }
    for(let i=0; i<yba.length;i++){
        yba[i].style.display="grid"
    }
}

if(selectedType=="ybavideos"){
    selectYBA()
}else if(selectedType=="autvideos"){
    selectAUT()
}else if(selectedType=="riuvideos"){
    selectRIU()
}else if(selectedType=="all"){
    selectAll()
}
}
