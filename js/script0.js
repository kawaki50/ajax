var images=document.querySelectorAll('.photo')
console.log(images)
var posPhoto=0

images.forEach((image)=>{
    image.addEventListener('click',function(){
       document.querySelector('#Gphoto').src=this.getAttribute('src')
       document.querySelector('#titre').innerHTML="<strong>"+this.getAttribute('alt')+"</strong>"
       posPhoto=this.getAttribute('rel')
       console.log(posPhoto)
    })
})


document.querySelector('#btnR').addEventListener('click',function(){
    posPhoto++;
    if(posPhoto>=images.length)
    {
        posPhoto=0
    }
    document.querySelector('#Gphoto').src=images[posPhoto].getAttribute('src')
    document.querySelector('#titre').innerHTML="<strong>"+images[posPhoto].getAttribute('alt')+"</strong>"
})



document.querySelector('#btnL').addEventListener('click',function(){
    posPhoto--;
    if(posPhoto<0)
    {
        posPhoto=images.length-1
    }
    document.querySelector('#Gphoto').src=images[posPhoto].getAttribute('src')
    document.querySelector('#titre').innerHTML="<strong>"+images[posPhoto].getAttribute('alt')+"</strong>"
})


document.querySelector('#Gphoto').addEventListener('click',function(){
    document.querySelector('#backGris').style.display="flex"
    document.querySelector('#PGphoto').src=this.src
    document.querySelector('#titrePhoto').innerHTML=document.querySelector('#titre').innerHTML
})


document.querySelector("#btnClose").addEventListener('click',function(){
     document.querySelector('#backGris').style.display="none"
})