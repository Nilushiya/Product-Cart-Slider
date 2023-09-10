const imgs = document.querySelectorAll(".img a");
//console.log(imgs)
let imgId = 1;

const imgdiv = document.querySelectorAll(".img");
const stars = document.querySelectorAll(".star1");
const  para= document.querySelector("#para");
//console.log(para);

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
console.log(stars)

let int = stars.indexOf("button.star1")
console.log(int);