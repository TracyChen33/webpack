import './x.scss'
import './y.less'
import './z.styl'
import png from './assets/add.png'


const div = document.getElementById('app')
console.log('div')
div.innerHTML = `
<img src="${png}">
`

const button = document.createElement('button')
button.innerText = 'lazy loader'
button.onclick = () => {
  const promise = import('./lazy')
  promise.then((module)=>{
const fn=module.default
    fn()
  },()=>{
console.log('error loader')
  })
}
div.appendChild(button)