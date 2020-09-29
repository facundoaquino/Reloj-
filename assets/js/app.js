setInterval(() => {
  let date = new Date();
  const $hour = document.querySelector(".hours"),
    $minuts = document.querySelector(".minuts"),
    $seconds = document.querySelector(".seconds");
  $hour.textContent = date.getHours();
  $minuts.textContent = date.getMinutes();
  date.getSeconds() < 10
    ? ($seconds.textContent = `0${date.getSeconds()}`)
    : ($seconds.textContent = date.getSeconds());
}, 1000);

 //theme choise

 const $iconThemesun = document.getElementById('day'),
        $icondark = document.getElementById('dark')
 $mainclock=document.querySelector('.clock')

 $iconThemesun.addEventListener('click',()=>{
    $mainclock.classList.replace('dark','day')
    $iconThemesun.classList.toggle('hidden')

    $icondark.classList.toggle('hidden')



 })

 $icondark.addEventListener('click',()=>{
    $mainclock.classList.replace('day','dark')
    $icondark.classList.toggle('hidden')

    $iconThemesun.classList.toggle('hidden')



 })