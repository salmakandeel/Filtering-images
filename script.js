
import { images } from './data.js'
// const containerDiv=document.getElementsByClassName("container")
console.log(images);
function getAllImages(){
const button=document.querySelector(".active")
   button? button.classList.remove('active'):null
    document.getElementById('all').classList.add('active')
    document.getElementById("Id").innerHTML=""
    images.map(image=>{
    var img=document.createElement("img");
    img.src=image.src  
    document.getElementById("Id").appendChild(img);
       
    })
}
getAllImages()
const displayAll=document.getElementById('all')
displayAll.addEventListener('click',function(){getspesficImages('all')})

function getspesficImages(imgType){
    const button=document.querySelector(".active")
    button? button.classList.remove('active'):null
    document.getElementById(imgType).classList.add('active')
    document.getElementById("Id").innerHTML=""
    images.filter(image=>{
        if(image.name.indexOf(imgType) > -1 )
    {
    var img=document.createElement("img")
    img.src=image.src  
    document.getElementById("Id").appendChild(img)}
       
    })
}



let displaySpecficImagesButton=document.getElementById('webDesign')
displaySpecficImagesButton.addEventListener('click',function(){getspesficImages('webDesign')})



 displaySpecficImagesButton=document.getElementById('mobileApp')
displaySpecficImagesButton.addEventListener('click',function(){getspesficImages('mobileApp')})

 displaySpecficImagesButton=document.getElementById('logo')
 displaySpecficImagesButton.addEventListener('click',function(){getspesficImages('logo')})
