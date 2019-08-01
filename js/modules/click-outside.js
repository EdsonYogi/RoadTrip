export default function initClickOutside(element, events, callback) {
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