// import 'core-js'; // includes all supported features
// import 'core-js/stable' // used when using entry option
// import 'regenerator-runtime/runtime' // used when using entry option
// import 'core-js/actual/promise'; // includes compatibility tools for just promise feature

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent; // store content of p elements text
  // const promise = new Promise();
  // console.log(promise);  
    if (navigator.clipboard) { // feature detection - code only runs in browsers where navigator.clipboard is supported. if 'falsey' fallback code is executed
      navigator.clipboard.writeText(text) // clipboard API returns a promise
      .then((result) => { // text gets added to clipboard
        console.log(result); // console logs undefined
      })
      .catch((error) => {
        console.log(error) // system error message if feature is not available and fallback setup is not implimented
      })
    } else { // fallback code if feature (navigator API) is unavilable
      alert('Feature not available...please copy manually!'); // dispays error message to user and provides alternative
    }
});