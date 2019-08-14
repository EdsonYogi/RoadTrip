function initClickOutside(element, events, callback) {
  const html = document.documentElement
  const dataOutside = 'data-outside'

  if(!element.hasAttribute(dataOutside)) {
    events.forEach((userEvents) => {
    setTimeout(() => {
      html.addEventListener(userEvents, outside)
    })
  })    
  element.setAttribute(dataOutside, '')
}

  function outside(event) {
    if(!element.contains(event.target)) {
        element.removeAttribute(dataOutside)
        events.forEach((userEvents) => {
        html.removeEventListener(userEvents, outside)
      })   
      callback()
    }
  }
}

function initMenuMobile() {
  const menuMobile = document.querySelector('.menu-icon')
  const menu = document.querySelector('.menu')
  const closeMenu = document.querySelector('.close')
  const eventos = ['click','touchstart']

  eventos.forEach((events) => {
    menuMobile.addEventListener(events, ativarMenuMobile)
    closeMenu.addEventListener(events, closeMenuMobile)
  })

  function ativarMenuMobile() {
    menu.classList.add('menu-ativo')
    initClickOutside(this, eventos, () => {
      menuMobile.classList.remove('menu-ativo')
      menu.classList.remove('menu-ativo')
    })
  }

  function closeMenuMobile() {
    menuMobile.classList.remove('menu-ativo')
    menu.classList.remove('menu-ativo')
  }
}

initMenuMobile()

function initContentAnimation() {
  const section = document.querySelectorAll('section');

  if(section) {
    window.addEventListener('scroll', startAnimation)
  }  

  function startAnimation() {
    let start
    let end
    let heightSection
    let content

    section.forEach((sections) => {
      start = sections.getBoundingClientRect().top
      end = sections.getBoundingClientRect().bottom
      heightSection = sections.getBoundingClientRect().height
      content = sections.querySelector('.content')  
      if(content) {
        if(start < heightSection && end > 0 ) {
          content.classList.add('ativar-animacao')
        } else if(start >= heightSection || end <= 0) {
          content.classList.remove('ativar-animacao')
        }
      }
    })  
  }
}

initContentAnimation()