const button = document.querySelector('button');

button.addEventListener('click', () => {
  // do something...
  const div = document.createElement('div')
  const h1 = document.createElement('h1')
  const text = document.createTextNode('Good Morning Dawn. Sing Bella! Sing.')
  h1.appendChild(text)
  div.appendChild(h1)
  document.body.appendChild(div)
});