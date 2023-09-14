import React, { useEffect, useRef, useState } from 'react'
import '../Login/Login.css'
import photo from '../../Assets/Images/imgLogin.jpg'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';





export default function Login() {

    useEffect(() => {
        navigate('/login')
        localStorage.setItem('token', '');
    }, [])

    const [moveLeft, setMoveLeft] = useState(false);
    const navigate = useNavigate();

    const createName = useRef(null);
    const createEmail = useRef(null);
    const createPassword = useRef(null);
    const createRePassword = useRef(null);
    const createPhone = useRef(null);

    const loginEmail = useRef(null);
    const loginPassword = useRef(null);

    const [loadingCreate, setLoadingCreate] = useState(false);
    const [loadingLogin, setLoadingLogin] = useState(false);

    const [errorCreate, setErrorCreate] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);

    function clearValues() {
        createName.current.value = '';
        createEmail.current.value = '';
        createPassword.current.value = '';
        createRePassword.current.value = '';
        createPhone.current.value = '';
        loginEmail.current.value = '';
        loginPassword.current.value = '';
        createFormik.setValues({
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        })
        loginFormik.setValues({
            email: "",
            password: ""
        })

    }


    let signUpSchema = Yup.object({
        name: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().matches('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$', 'password is too weak').required('Password is required'),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'passwords not matched').required('rePassword is required'),
        phone: Yup.string().matches('^01[0125][0-9]{8}$', 'Invalid phone number').required('Phone is required'),
    })

    let loginSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    })



    let createFormik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },
        validationSchema: signUpSchema,
        onSubmit: async () => {
            setLoadingCreate(true);

            await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', createFormik.values)
                .then(() => {
                    clearValues()
                    setErrorCreate(false)
                    setMoveLeft(false)
                })
                .catch((err) => { setErrorCreate(err.response.data.message) })

            setLoadingCreate(false);


        }
    })

    let loginFormik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: async () => {
            setLoadingLogin(true);

            await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', loginFormik.values)
                .then((data) => {
                    let token = data.data.token;
                    localStorage.setItem('token', token)
                    clearValues()
                    setErrorLogin(false)
                    navigate('/')
                    window.location.reload();


                })
                .catch((err) => { setErrorLogin(err.response.data.message) })

            setLoadingLogin(false);


        }
    })





    return (
        <div className='login py-5'>
            <div style={{ backgroundColor: '#161616' }} className='container content py-5'>
                <div className="row p-5  ">



                    <div className="col-sm-12 col-lg-0 d-flex justify-content-center ">
                        <img src={photo} className='d-sm-block d-lg-none w-50' alt="" />
                    </div>



                    <div className={`col-12 d-lg-block col-lg-6 rounded-4 ${moveLeft ? 'd-none' : ''}`}>
                        <div className="container">
                            <h1 className='mt-5 fw-bold text-white'>Login</h1>

                            <p className='lightColor pb-3'>Doesn't have an account yet? <Link onClick={() => { setMoveLeft(true); clearValues(); }} >Sign Up</Link></p>

                            {errorLogin ? <div className="alert alert-danger ">{errorLogin}</div> : null}


                            <form onSubmit={loginFormik.handleSubmit}>

                                <div className="inputContainer mb-4 d-flex">
                                    <input style={{ backgroundColor: 'transparent' }} ref={loginEmail} onChange={loginFormik.handleChange} id='email' name='email' type="text" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder text-white' placeholder='Email Address' />
                                    <span>
                                        <i className="fa-solid fa-at"></i>
                                    </span>
                                </div>
                                {!loginFormik.values.email || !loginFormik.errors.email ? null : <div className="alert alert-danger ">{loginFormik.errors.email}</div>}


                                <div className="inputContainer mb-4 d-flex">
                                    <input style={{ backgroundColor: 'transparent' }} ref={loginPassword} onChange={loginFormik.handleChange} id='password' name='password' type="password" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder text-white' placeholder='Password' />
                                    <span>
                                        <i className="fa-solid fa-lock"></i>
                                    </span>
                                </div>
                                {!loginFormik.values.password || !loginFormik.errors.password ? null : <div className="alert alert-danger ">{loginFormik.errors.password}</div>}

                                <button style={{ backgroundColor: '#0E54BD' }} disabled={loadingLogin || JSON.stringify(loginFormik.values) == '{"email":"","password":""}' || (JSON.stringify(loginFormik.errors) != '{}')} type='submit' className='text-white btn border-1 border-black mb-5 w-100'>{loadingLogin ? <div><i className=' fa-solid fa-spinner fa-spin'></i></div> : 'Login'}</button>

                            </form>


                        </div>
                    </div>



                    <div className={`col-12 d-lg-block col-lg-6 rounded-4 ${moveLeft ? '' : 'd-none'}`}>
                        <div className=' w-100 h-100 rounded-4 position-relative'>

                            <div className={`d-none d-lg-block rounded-4 position-absolute  backgroundImg ${moveLeft ? 'moveLeft' : ''}`}>

                            </div>

                            <div className="container">
                                <h1 className='pt-5 fw-bold text-white'>Let's create your account</h1>

                                <p className='lightColor pb-3'>Did you have an account ? <Link onClick={() => { setMoveLeft(false); clearValues(); }}>Login</Link></p>

                                {errorCreate ? <div className="alert alert-danger ">{errorCreate}</div> : null}

                                <form onSubmit={createFormik.handleSubmit}>

                                    <div className="inputContainer mb-4 d-flex">
                                        <input style={{ backgroundColor: 'transparent' }} ref={createName} onChange={createFormik.handleChange} id='name' name='name' type="text" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder text-white' placeholder='Name' />
                                        <span>
                                            <i className="fa-solid fa-id-card"></i>
                                        </span>
                                    </div>
                                    {!createFormik.values.name || !createFormik.errors.name ? null : <div className="alert alert-danger ">{createFormik.errors.name}</div>}

                                    <div className="inputContainer mb-4 d-flex">
                                        <input style={{ backgroundColor: 'transparent' }} ref={createEmail} onChange={createFormik.handleChange} id='email' name='email' type="text" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder text-white' placeholder='Email Address' />
                                        <span>
                                            <i className="fa-solid fa-at "></i>
                                        </span>
                                    </div>
                                    {!createFormik.values.email || !createFormik.errors.email ? null : <div className="alert alert-danger ">{createFormik.errors.email}</div>}

                                    <div className="inputContainer mb-4 d-flex">
                                        <input style={{ backgroundColor: 'transparent' }} ref={createPassword} onChange={createFormik.handleChange} id='password' name='password' type="password" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder text-white' placeholder='Password' />
                                        <span>
                                            <i className="fa-solid fa-lock"></i>
                                        </span>
                                    </div>
                                    {!createFormik.values.password || !createFormik.errors.password ? null : <div className="alert alert-danger ">{createFormik.errors.password}</div>}

                                    <div className="inputContainer mb-4 d-flex">
                                        <input style={{ backgroundColor: 'transparent' }} ref={createRePassword} onChange={createFormik.handleChange} id='rePassword' name='rePassword' type="password" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder text-white' placeholder='rePassword' />
                                        <span>
                                            <i className="fa-solid fa-fingerprint"></i>
                                        </span>
                                    </div>
                                    {!createFormik.values.rePassword || !createFormik.errors.rePassword ? null : <div className="alert alert-danger ">{createFormik.errors.rePassword}</div>}

                                    <div className="inputContainer mb-4 d-flex">
                                        <input style={{ backgroundColor: 'transparent' }} ref={createPhone} onChange={createFormik.handleChange} id='phone' name='' type="text" className='form-control w-100 border-top-0 border-start-0 border-end-0 inputBorder text-white' placeholder='Phone' />
                                        <span>
                                            <i class="fa-solid fa-phone"></i>
                                        </span>
                                    </div>
                                    {!createFormik.values.phone || !createFormik.errors.phone ? null : <div className="alert alert-danger ">{createFormik.errors.phone}</div>}

                                    <button style={{ backgroundColor: '#0E54BD' }} disabled={loadingCreate || JSON.stringify(createFormik.values) == '{"name":"","email":"","password":"","rePassword":"","phone":""}' || (JSON.stringify(createFormik.errors) != '{}')} type='submit' className='text-white btn border-1 border-black mb-5 w-100'>{loadingCreate ? <div><i className=' fa-solid fa-spinner fa-spin'></i></div> : 'Create an account'}</button>

                                </form>

                            </div>



                        </div>

                    </div>



                </div>
            </div>

        </div>
    )
}
