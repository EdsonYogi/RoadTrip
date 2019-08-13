export default function initContentAnimation() {
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