import initClickOutside from './click-outside.js'
export default function initMenuMobile() {
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