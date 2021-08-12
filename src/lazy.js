export default function lazy() {
  console.log('懒加载过程')
  const span1 = document.createElement('span')
  span1.innerHTML = ('懒加载完成 ')
  document.body.appendChild(span1)
}