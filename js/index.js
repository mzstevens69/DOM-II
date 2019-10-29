// Fun Bus Change
const hdrChange = document.querySelector('.logo-heading');
hdrChange.addEventListener('mouseenter', () =>{
    hdrChange.style.transform = 'scale(1.2)';
    hdrChange.style.transition = 'all 0.3s'

})
////////
hdrChange.addEventListener('mouseleave', () => {
    hdrChange.style.transform = 'scale(1.0)';
    hdrChange.style.transition = 'all 0.3';
  })

  ////////Pic swap/////////////////////////////////////

  const changeImage = document.querySelector('#pic');
  changeImage.addEventListener('dblclick', () => {
    changeImage.src ="img/RHP.jpg"
  })

  ///////text swap///////////////////////////

  const timeWarp = document.querySelector('#tw');
  changeImage.addEventListener('click', () => {
    changeImage.src ="img/timewarp.jpg"


