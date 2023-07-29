/*show img sectio start*/
let myImg=document.querySelector('.nav_img');
let div_img=document.querySelector('.open_img');
let shoe_img=document.querySelector('.myImg');
let html=document.querySelector('html');
let body=document.querySelector('body');

myImg.onclick=()=>{
  myImg.style.width='0'
  div_img.style.height='100vh'
  div_img.style.width='100vw'
  shoe_img.style.width='80rem'
  shoe_img.style.height='105rem'
  html.style.overflowY='hidden'
  body.style.overflowY='hidden'
}
div_img.onclick=()=>{
  myImg.style.width = '12rem'
  div_img.style.height = '0'
  div_img.style.width = '0'
  shoe_img.style.width = '0'
shoe_img.style.height='00rem'
  html.style.overflowY = 'auto'
  body.style.overflowY = 'auto'
}

/*show img section end*/

/* hambargar menu start*/

let link=document.querySelector('.hambargar_child');
let menu=document.querySelector('.hambargar_main');

let cros=document.querySelector('.fa-xmark');

let bar=document.querySelector('.fa-bars');

bar.onclick=()=>{
  menu.style.transform='translateX(0%)';
  html.style.overflowY='hidden';
  body.style.overflowY='hidden';
  
}
cros.onclick=()=>{
menu.style.transform='translateX(200%)';
  html.style.overflowY='auto';
  body.style.overflowY='auto';
}
link.onclick=()=>{
menu.style.transform='translateX(200%)';
  html.style.overflowY='auto';
  body.style.overflowY='auto';
}

//bio data section start

let sw=document.querySelectorAll('.sw');
let show=document.querySelector('.skill_hmtl');

/* sw[0].style.display = 'block'
    sw[1].style.display = 'block'
    sw[2].style.display = 'block'
     sw[3].style.display='block'
    sw[4].style.display='block'
    */


let showing=new IntersectionObserver((entris) => {
  const entry = entris[0];
if(entry.isIntersecting == false)return;
    sw[0].style.display = 'block'
    sw[1].style.display = 'block'
    sw[2].style.display = 'block'
    sw[3].style.display = 'block'
    sw[4].style.display = 'block'
    
}
  
,{
  root:null,
  threshold:0,
})
showing.observe(show);







 /*auto typing section start*/

let type= new Typed('.typed',{
  strings:['WEB DEVOLOPER','TEACHER','FRONTEND DEVOLOPER','FREELANCER','YOUTUBER'],
  typeSpeed:80,
  backSpeed:60,
  loop:true,
});


/* work start*/
let btnClone=document.querySelector('.cloneb');

let btnWebApp=document.querySelector('.web_appb');

let btnSubdix=document.querySelector('.subdixb');

let showWebApp=document.querySelectorAll('.web_app');

let showClone=document.querySelectorAll('.clone');

let showSubdix=document.querySelector('.subdix');


let grids=document.querySelector('.sample_main');

btnClone.onclick=()=>{
  showWebApp[0].style.display ='none';
  showWebApp[1].style.display ='none';
  showWebApp[2].style.display ='none';
  showWebApp[3].style.display ='none';
  showSubdix.style.display='none';
  showClone[0].style.display='block';
  showClone[1].style.display='block';
  showClone[2].style.display='block';
  grids.style.gridTemplateRows=' repeat(2,40rem)'
  grids.style.gridTemplateColumns=' repeat(2,43rem)'
}

btnWebApp.onclick = () => {
 showWebApp[0].style.display = 'block';
 showWebApp[1].style.display = 'block';
 showWebApp[2].style.display = 'block';
 showWebApp[3].style.display = 'block';
  showSubdix.style.display = 'none';
  showClone[0].style.display='none';
  showClone[1].style.display='none';
  showClone[2].style.display='none';
  grids.style.gridTemplateRows=' repeat(2,40rem)'
  grids.style.gridTemplateColumns=' repeat(2,43rem)'
 }
 
 
 btnSubdix.onclick = () => {
   showWebApp[0].style.display = 'none';
   showWebApp[1].style.display = 'none';
   showWebApp[2].style.display = 'none';
   showWebApp[3].style.display = 'none';
   showSubdix.style.display = 'block';
   showClone[0].style.display = 'none';
   showClone[1].style.display = 'none';
   showClone[2].style.display = 'none';
   grids.style.gridTemplateRows=' repeat(1,40rem)'
   grids.style.gridTemplateColumns=' repeat(1,43rem)'
   }
 
 
 /*animated number secftion start*/
 
 
let numbers=document.querySelectorAll('.number_child');
let mainNumber=document.querySelector('#number_main');
let speed=200;
//let main= document.querySelector('.main_div');

//sticky section start

const sticky= new IntersectionObserver((entris)=>{
  const entry=entris[0];
  if(entry.isIntersecting==false) return;
   
   
   
   numbers.forEach((curElem)=>{
  const update=()=>{
    
    const target = +curElem.dataset.num;
    
    const counter = parseInt(curElem.innerHTML);
   const devided = Math.trunc(target/ speed);
      if (target>counter) {
        curElem.innerHTML = counter + devided+' +';
     setTimeout(update,10)   ;
        
  }
  }
  
  update();
})

 
   

},{
  root:null,
  threshold:0,
})
sticky.observe(mainNumber);


/*swiper section start*/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView:1,
        spaceBetween:10,
        autoplay:{
          delay:1500,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
      });
      
      
  //contact    
  
  //akashrahul2006@gmail.com
  
  //0B1B8411ABA58A223DAC346851CB79F9BF9B
  
  //smtp.elasticemail.com

function mail(){
 let name= document.querySelector('.name1').value;
 let email= document.querySelector('.email1').value
 let password= document.querySelector('.password1').value
 let area= document.querySelector('.area').value
 let body=`Name: ${name}
email: ${email}
password: ${password}
massage:  ${area}`
  
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "portfolio@gmail.com",
    Password: "0B1B8411ABA58A223DAC346851CB79F9BF9B",
    To: 'portfolio@gmail.com',
    From: email,
    Subject: "This is the subject",
    Body: body
  }).then(
    message => alert(`THANK YOU ${name} FOR CONTECTING WITH US`)
  );
  
}
