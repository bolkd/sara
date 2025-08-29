const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    hp: `'${document.getElementById('hp').value}`,
    address: document.getElementById('address').value,
    message: document.getElementById('message').value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw3RftUHuk9HTwgne9dc2zvzt38Mai2jU_dxiu67FRsxkjUyraPp4bEq2NLsAFBCKoRQA/exec', {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      responseMessage.textContent = 'Thank you! Your message has been sent.';
      form.reset();
      // Auto-erase the message after 3 seconds
      setTimeout(() => {
        responseMessage.textContent = '';
      }, 3000); // 3000 milliseconds = 3 seconds
    } else {
      responseMessage.textContent = 'Error submitting the form. Please try again.';
    }
  } catch (error) {
    responseMessage.textContent = 'An error occurred. Please try again.';
  }
});