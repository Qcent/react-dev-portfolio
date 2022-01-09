import React, { useState } from 'react';

function ContactForm() {
  const validateEmail = (email) =>
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);


  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    setErrorMessage('');
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      }
    }
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    } else {
      console.log(errorMessage)
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);

    if (!name.length) {
      setErrorMessage(`Name is required.`);
      return;
    }
    else if (!validateEmail(email)) {
      setErrorMessage(`Your email is invalid.`);
      return;
    }
    else if (!message.length) {
      setErrorMessage(`Message is required.`);
      return;
    }
    else {
      setErrorMessage(`Thank You!`);
      document.getElementById('contact-submit').disabled = true;
      document.querySelector('#contact-submit div').textContent = 'Sent';
      //submit form to backend or email server
    }

  };

  return (
    <section id='ContactForm'>
      <div className='section-title'>
        <h2>
          Con<span className="spinner-effect">t</span>ac
          <span className="spinner-effect reverse">t</span>&nbsp;
          <span className="spinner-effect spin-3d delay">M</span>
          <span className="spinner-effect spin-3d delay"><span className="spinner-effect">e</span></span>
        </h2>
      </div>
      <div className='section-content'>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} autoComplete="off" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} autoComplete="off" />
          </div>
          <div className='formfield'>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button id='contact-submit' data-testid="contact-button" data-hover="the Message" type="submit"><div>Send Me</div></button>
        </form>
      </div>
    </section >
  );
}

export default ContactForm;