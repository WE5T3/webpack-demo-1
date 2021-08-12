import x from './x.js'
import img1 from './assets/1.png'

const div = document.getElementById('app')
div.innerHTML = `<img src="${img1}">`

const button = document.createElement('button')
button.innerText = ('懒加载')
div.appendChild(button)
button.onclick = () => {
  const promise = import('./lazy')
  promise.then((module) => {
    
    const fn = module.default
    fn()
  }, () => {
    console.log('模块懒加载错误')
  })
}