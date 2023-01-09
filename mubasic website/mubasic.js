window.onload = () =>{
   const hamburger =  document.getElementById("icon")
   const close = document.getElementById('icon-2')
//    const list = document.getElementById('list')
//    const social = document.getElementById('social')
//    const icon = document.getElementById('mubasic')
   const nav = document.getElementById('nav-b')
   const body = document.getElementById('container')
    const hidden = document.getElementById('hidden')

   hamburger.addEventListener('click', () =>{
    // list.style.display = 'flex'
    // social.style.display = 'block'
    // icon.style.display = 'block'
    nav.style.background = '#fcf3e4'
    hidden.style.display = 'block'
    body.style.display = 'none'
    hidden.style.opacity = '0'
    var id = setInterval(Animate, 1)

    function Animate(){
      hidden.style.opacity = '1'
    }

   
   })
   close.addEventListener('click', ()=>{
    body.style.display = 'block'
    hidden.style.display = 'none'
})
   
}

    