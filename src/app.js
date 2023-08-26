const button = document.querySelector('button');
const textParagraph = document.querySelector('p')

button.addEventListener('click', () => {
  const text = textParagraph.textContent; // store content of p elements text
    if (navigator.clipboard) { // feature detection - if 'falsey' fallback code is executed
      navigator.clipboard.writeText(text) // clipboard API returns a promise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error)
      })
    } else { // fallback code if feature (navigator API) is unavilable
      alert('Feature not available...please copy manually!');
    }
});