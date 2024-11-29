

/*********************** */
var listProducts = null;

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://dummyjson.com/products');
xhr.send(null);

xhr.addEventListener('readystatechange', function () {
    console.log(xhr.readyState )
	if (xhr.readyState === 4) {
        listProducts=JSON.parse(xhr.responseText).products;
        console.log(listProducts)
        affichage(listProducts)
	}
});

/************************/

var  affichage = (listProducts)=>{

    listProducts.forEach(product => {

        var col=document.createElement("div")
        col.setAttribute('class','col-md-3')
    
        var card=document.createElement("div")
        card.setAttribute('class','card')
    
    
        var image=document.createElement("img")
        image.setAttribute('src',product.thumbnail)
        image.setAttribute('class','card-img-top prd_photo')
        image.setAttribute('alt',product.description)
        image.setAttribute('rel',`${product.id}`)
    
        var cardbody=document.createElement("div")
        cardbody.setAttribute('class','card-body')
    
    
        var titre=document.createElement("h5")
        titre.setAttribute('class','card-title')
        titre.innerText=product.title
    
    
        var para=document.createElement("p")
        para.setAttribute('class','card-text')
        para.innerText=product.description
    
        var lien=document.createElement("a")
        lien.setAttribute('class','btn btn-primary')
        lien.innerText="voir detail";
    
        cardbody.appendChild(titre)
        cardbody.appendChild(para)
        cardbody.appendChild(lien)
    
        card.appendChild(image)
        card.appendChild(cardbody)
    
        col.appendChild(card)
        
        document.querySelector('#listePsroduct').appendChild(col)
    
    });

    var listephotosProduct=document.querySelectorAll('.prd_photo')

    console.log(listephotosProduct)

    listephotosProduct.forEach((photo)=>{
        photo.addEventListener('click',function(){
            alert(this.getAttribute('rel')
        )
        })
    })
}






/*
document.querySelectorAll('.photo').forEach((element)=>{
    element.addEventListener('click',function(){
     document.querySelector('#Gphoto').src=this.src
     document.querySelector('#Gphoto').alt=this.alt
     console.log(this)
 })})
*/