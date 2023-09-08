const imgs = document.querySelectorAll(".img a");
let imgId = 1;

imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        imgId = img.dataset.id;
        console.log(imgId)
        moveImage();
    })
})
function moveImage()
{
  const imgWidth=document.querySelector('.main-image img:first-child').clientWidth;
  let width=((imgId-1)*imgWidth);
 
document.querySelector('.main-image').style.transform=`translateX(${-width}px)`;

}