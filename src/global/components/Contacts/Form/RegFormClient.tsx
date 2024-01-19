'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

import './RegForm.scss'


const RegFormSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, 'Минимум 2 символа')
  .max(50, 'Максимум 50 символов')
  .matches(/^[а-яА-Яa-zA-Z]+$/, 'Используйте только кириллицу и латиницу')
  .required('Обязательное поле'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Используйте только цифры')
    .length(12, 'Номер телефона должен содержать ровно 12 символов')
    .required('Номер телефона обязателен для заполнения'),
})

export const RegForm = () => {

  const sendForm = async (values: any) => {
    // console.log(values)
    const { data } = await axios(`https://prodat.io:8445/trello?name=${values.name}&phone=${values.phone}`)

    console.log(data)

	  return data
  }
  
  return (
     <Formik
      initialValues={{
        name: '',
        phone: 996
      }}
      validationSchema={RegFormSchema}
      onSubmit={sendForm}>
        {({errors, touched}) => (
          <Form className='reg-form' id='reg-form'>
            <h4 className="reg-form__title">
              <span className="reg-form__title reg-form__title-bold">Оставьте заявку</span>
              <br />и мы обязательно свяжемся с Вами
            </h4>
            <div className="reg-form__wrapper">
            <Field 
              name='name'
              className={`reg-form__inp 
              ${touched?.name && errors?.name ? 'reg-form__inp-invalid' : ''}`}
              placeholder="Ваше имя"
              type="text"
            />
            <ErrorMessage name="name" component="span" className="reg-form__inp-feedback" />
            </div>
            <div className="reg-form__wrapper">
            <Field 
              name='phone'
              className={`reg-form__inp 
              ${touched?.phone && errors?.phone ? 'reg-form__inp-invalid' : ''}`}
              placeholder="+996"
              type="tel"
            />
            <ErrorMessage name="phone" component="span" className="reg-form__inp-feedback" />
            </div>
            <button className="reg-form__btn" type="submit">
              Оставить заявку
            </button>
          </Form>
        )}
    </Formik>
  )
}