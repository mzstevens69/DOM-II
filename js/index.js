// Fun Bus Change
const hdrChange = document.querySelector('.logo-heading');
hdrChange.addEventListener('mouseenter', () =>{
    hdrChange.style.transform = 'scale(1.2)';
    hdrChange.style.transition = 'all 0.3s'
});
hdrChange.addEventListener('mouseleave', () => {
    hdrChange.style.transform = 'scale(1.0)';
    hdrChange.style.transition = 'all 0.3';
  });

  ////////Pic swap/////////////////////////////////////

  const changeImage = document.querySelector('#pic');
  changeImage.addEventListener('dblclick', () => {
    changeImage.src ="img/RHP.jpg"
  });

  ///////text swap///////////////////////////

  const timeWarp = document.querySelector('#tw');
  timeWarp.addEventListener('click', () => {
    timeWarp.src ="img/timewarp.jpg"
});
//////Multi event with stop prop///////////

const body = document.querySelector('body');
body.addEventListener('mouseover', () => {
  body.style.backgroundColor = 'lightgray';
  
})


//////////////////////////////////////////////








