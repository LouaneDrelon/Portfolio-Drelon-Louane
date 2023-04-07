const dragon = document.querySelector('#dragon')
const wolf = document.querySelector('#wolf')
const profil = document.querySelector('profil')


window.addEventListener('load', () => {
    
    const TL = gsap.timeline({paused : true}) ;

    TL
    .from(wolf, 5 ,{left : 300, opacity : 0, ease : 'power2.out'})
    .from(dragon, 5,{right: 300, opacity: 0, ease : 'power2.out'}, '-=5')
    .fromTo("#profil", 5 ,{scale: 0.7, opacity:0},{scale : 1,opacity: 0.8, ease : 'power2'}, '-=5')
    
    TL.play()
})



