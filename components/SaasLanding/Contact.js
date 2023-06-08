import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your message was successfully send and will back to you soon',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: '',
  email: '',
  number: '',
  subject: '',
  text: '',
};

const Contact = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const { register, handleSubmit, errors } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact);
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      await axios.post(url, payload);
      console.log(url);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id='contact' className='contact-area ptb-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>Contactanos </h2>
            <p>
              Llámanos, escríbenos, sin ningún compromiso y consulta todas las
              dudas que puedas tener acerca de nosotros o nuestra plataforma.
              Elige la vía de contacto que prefieras, nosotros estaremos
              esperándote al otro lado.
            </p>
          </div>

          <div className='contact-content'>
            <form id='contactForm' onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      placeholder='Nombre'
                      value={contact.name}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}
                    >
                      {errors.name && 'Name is required.'}
                    </div>
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='email'
                      className='form-control'
                      placeholder='Correo electronico'
                      value={contact.email}
                      onChange={handleChange}
                      ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}
                    >
                      {errors.email && 'Email is required.'}
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control'
                      placeholder='Tema'
                      value={contact.subject}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}
                    >
                      {errors.subject && 'Subject is required.'}
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='number'
                      className='form-control'
                      placeholder='Telefono'
                      value={contact.number}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}
                    >
                      {errors.number && 'Number is required.'}
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <textarea
                      name='text'
                      className='form-control'
                      cols='30'
                      rows='6'
                      placeholder='Mensaje...'
                      value={contact.text}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}
                    >
                      {errors.text && 'Text body is required.'}
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12 text-center'>
                  <button type='submit' className='default-btn'>
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
