//img selection
const imgs = document.querySelectorAll(".img a");
//console.log(imgs)
let imgId = 1;

const imgdiv = document.querySelectorAll(".img");
imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        imgdiv.forEach((imgg) => {
          imgg.classList.remove("active")
        })
        img.parentElement.classList.add("active")//parentElement
        imgId = img.dataset.id;
      //  console.log(imgId)
        moveImage();
    })
})

function moveImage()
{
  const imgWidth=document.querySelector('.main-image img:first-child').clientWidth;
  let width=((imgId-1)*imgWidth); 
document.querySelector('.main-image').style.transform=`translateX(${-width}px)`;
}

//Rate for star
const stars = document.querySelectorAll(".star");
const  paraRate= document.querySelector("#para");

stars.forEach((star,index)=>{
    
  star.addEventListener('click',()=>{
      
      let current_star = index+1
      paraRate.innerText = `${current_star} of 5`

      stars.forEach((star,i)=>{
          if(current_star >= i+1){
              star.innerHTML = `&#9733`;
          }
          else{
              star.innerHTML = `&#9734;`
          }
  })
  })
})


//Qty increase decrease 
const minusBtn = document.querySelector(".minus")
const plusBtn = document.querySelector(".plus")
const qtyTxt = document.querySelector("#qty")

minusBtn.addEventListener("click",(e) => {
  e.preventDefault();
  let qty = Number(qtyTxt.value)
  //console.log(qty)
  if(qty > 1){
    qty--;
    qtyTxt.value = qty;
  }
})

plusBtn.addEventListener("click",(e) => {
  e.preventDefault();
  let qty = Number(qtyTxt.value)
  //console.log(qty)
  if(qty > 0 && qty < 5){
    qty++;
    qtyTxt.value = qty;
}
})