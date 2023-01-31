const vignettes = document.querySelectorAll('.small');
const fullImg = document.getElementById('full');
const btn = document.querySelector('.btn-add');

const panierContainer = document.querySelector('.panier-container');
let panier = 0;


vignettes.forEach((item)=>{
    
    item.addEventListener('click',function(){
        let imgSource =item.getAttribute('src');
        fullImg.setAttribute('src',imgSource);
        
    });
});

btn.addEventListener('click', function(){
panier++;
if(panier < 2){
    panierContainer.innerText = "vous avez" + " " + panier + " " + "produit dans votre panier";
}else{
    panierContainer.innerText = "vous avez" + " " + panier + " " + "produits dans votre panier";
}
});

