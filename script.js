const imgs = document.querySelectorAll(".img a");
console.log(imgs)
let imgId = 1;

const imgdiv = document.querySelectorAll(".img");

imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        img.parentElement.classList.add("active")//parentElement
        imgId = img.dataset.id;
        console.log(imgId)
        moveImage();
    })
})

imgdiv.forEach((imgg) => {
  imgg.classList.remove("active")
})


function moveImage()
{
  const imgWidth=document.querySelector('.main-image img:first-child').clientWidth;
  let width=((imgId-1)*imgWidth);
 
document.querySelector('.main-image').style.transform=`translateX(${-width}px)`;

}