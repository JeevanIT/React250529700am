import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
const FormValidations = () => {
    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            name:Yup.string()
            .min(2,'Name Must be at least 2 Characters')
            .required('Name is Required'),

            email:Yup.string()
            .email('Invalid email address')
            .required('Email is Required'),

            password:Yup.string()
            .required('Password is Required')
            .matches(/^(?=.*[A-Z])/, 'Must Include at least 1 Uppercase Letter')
            .matches(/^(?=(?:.*[a-z]){4,})/, 'Must Include at 4 lowercase letters')
            .matches(/^(?=.*[!*$@&^#])/, 'Must Include at least 1 special Character')

        }),
        onSubmit:values=>{
            alert(JSON.stringify(values,null));
        }
    })
  return (
    <div>
        <h1>FormValidations</h1>
        <form style={{background:'yellow'}} onSubmit={formik.handleSubmit}>
            <label>User Name</label>
            <input type='text' 
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}

            />

            {formik.touched.name && formik.errors.name && (
                <div style={{color:'red'}}>
                    {formik.errors.name}
                </div>
            )}

            <label>Email</label>
            <input type='email' 
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />

        {formik.touched.email && formik.errors.email && (
                <div style={{color:'red'}}>
                    {formik.errors.email}
                </div>
            )}
            <label>Password</label>
            <input type='password' 
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password && (
                <div style={{color:'red'}}>
                    {formik.errors.password}
                </div>
            )}

            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default FormValidations