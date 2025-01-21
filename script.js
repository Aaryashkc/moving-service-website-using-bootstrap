function submitForm(e) {
  e.preventDefault();
  
  const formData = {
      'entry.name': document.getElementById('name').value,
      'entry.email': document.getElementById('email').value,
      'entry.phone': document.getElementById('phone').value,
      'entry.movingFrom': document.getElementById('movingFrom').value,
      'entry.movingTo': document.getElementById('movingTo').value,
      'entry.movingData': document.getElementById('movingDate').value,
      'entry.movingSize': document.getElementById('movingSize').value,
      'entry.message': document.getElementById('message').value
  };

  const googleFormUrl = 'YOUR_GOOGLE_FORM_URL';
  const formUrl = new URLSearchParams(formData);
  
  fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formUrl
  })
  .then(() => {
      alert('Thank you! Your message has been sent.');
      document.getElementById('contactForm').reset();
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
  });

  return false;
}