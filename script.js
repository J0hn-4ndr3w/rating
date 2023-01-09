const img = document.querySelector('.image');
const imgThanks = document.querySelector('.image2');
const h3 = document.querySelector('.thanks');
const h3eL = document.querySelector('.thank');
const h1 = document.querySelector('#text');
const p = document.querySelector('#ptag');
const button = document.querySelector('.button');
const btn = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submit');

btn.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the 'selected' class from all buttons
    btn.forEach(b => b.classList.remove('active'));
    // Add the 'active' class to the clicked button
    button.classList.add('active');
    // btn.classList.toggle('active');
    
    const innerHTML = button.innerHTML;
    anotherFunction(innerHTML);
  });
});


function anotherFunction(html) {

  submitBtn.addEventListener('click', () => {
    h3eL.innerHTML = 'You selected' + ' ' + html + ' ' + 'out of' + ' ' + btn.length;
    h1.innerHTML = '<center>Thank you!</center>'
    p.innerHTML = ` We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!`
    imgThanks.classList.add('visible');
    h3.classList.add('visible');

    button.classList.add('invisible');
    submitBtn.classList.add('invisible');
    img.classList.add('invisible');
  })

}


// button.textContent = 