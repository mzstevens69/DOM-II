// Fun Bus Change
const hdrChange = document.querySelector('.logo-heading');
hdrChange.addEventListener('mouseenter', () => {
    hdrChange.style.transform = 'scale(1.2)';
    hdrChange.style.transition = 'all 0.3s'
});
hdrChange.addEventListener('mouseleave', () => {
    hdrChange.style.transform = 'scale(1.0)';
    hdrChange.style.transition = 'all 0.3';
});

////////Pic swap//////////////////////[3]//////////////

const changeImage = document.querySelector('#pic');
changeImage.addEventListener('dblclick', () => {
    changeImage.src = "img/RHP.jpg"
});

///////text swap////////////////////[4]//////

const timeWarp = document.querySelector('#tw');
timeWarp.addEventListener('click', () => {
    timeWarp.src = "img/timewarp.jpg"
});
//////Multi event with stop prop///////[5]///

const body = document.querySelector('body');
body.addEventListener('mouseover', () => {
    body.style.backgroundColor = 'lightgray';

})
///////////////Wheel////////////////////[6]/////////
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }  
  let scale = 1;
  const el = document.querySelector('#boat');
  el.onwheel = zoom

  ////////Resize //////////////[7]//////
  const rhslip = document.querySelector('#AA');
window.addEventListener('resize', () => {
  rhslip.src = "img/RHSlips"
})
/////////scroll ///////////////[8]//////////

window.addEventListener('scroll', () =>  {
    body.style.backgroundColor ="deepskyblue"
  })

  ////////key down//////////////[9]//////

  document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

///////////no context menu////////[10]///////

noContext = document.querySelector('#noContext');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});

/////////////Stop Nav prevent default/////////////////////////////////

const links = document.querySelectorAll('.nav-link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault;
        event.stopPropagation();
        links[i].style.color = 'deeppink';
        
    })
}
////////////////mouse/move//////////////////////////

const footer = document.querySelector('.footer p');
footer.addEventListener('mousemove', (event) => {
    footer.style.color = 'yellow'});

/////////green sock//////////////////////
TweenMax.to('#AA', 1, {
    x: 20,
    y: 100,
    ease: Elastic.easeOut.config( 1, 0.75)
  })