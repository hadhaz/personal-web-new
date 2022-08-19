import React, { useState, useRef, useEffect } from "react";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signInWithGoogle } from "../store/auth-actions";

export default function Login() {
  // state for ui purpose
  const [visible, setVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {ui:{error}, auth:{isLoggedIn}} = useSelector(state => state);
  
  // dispatch for some actions
  const dispatch = useDispatch()

  // reference
  const emailRef = useRef();
  const passRef = useRef();
  const router = useRouter();


  // prevent authorized user to login again
  if(isLoggedIn) {
    router.replace('/')
  }

  // optimized for production
  useEffect(()=>{
    router.prefetch('/')
  }, [router])
  

  const handleVisibility = e => {
    e.preventDefault();
    setVisible(value => !value);
  };

  const loginGoogleHandler = async e => {
    e.preventDefault();
    setIsSubmitted(false);
    dispatch(signInWithGoogle())
    setIsSubmitted(true);
  }

  const loginHandler = e => {
    setIsSubmitted(false);
    e.preventDefault()
    
    const email = emailRef.current.value.trim();
    const password = passRef.current.value.trim();
  
    dispatch(signIn(email, password));

    setIsSubmitted(true);
  };
  
  useEffect(()=>{
    if(isLoggedIn) {
      const routing = setTimeout(()=>{
        router.replace('/');
      }, 2000);

      return clearTimeout(routing)
    }
  }, [isLoggedIn, router])

  return (
    <form onSubmit={loginHandler} className='bg-login'>
      <div className='flex flex-col p-8 sm:max-w-[500px] sm:mx-auto '>
        <div className='my-4'>
          <h1 className='text-2xl text-center font-bold'>Login</h1>
        </div>
        {error && isSubmitted && (
          <p className='p-2 bg-red-700 text-white font-semibold'>{error}</p>
        )}
        <div className='flex flex-col gap-1 text-lg font-semibold mt-5'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className='py-2 px-5 border-2 bg-transparent border-[#f8cd5f] outline-none font-normal'
            placeholder='example@example.com'
            ref={emailRef}
            required
          />
        </div>
        <div className='flex flex-col gap-1 text-lg font-semibold mt-5'>
          <label htmlFor='password'>Password</label>
          <div className='flex py-2 px-5 border-2 border-[#f8cd5f] '>
            <input
              type={visible ? "text" : "password"}
              id='password'
              className='outline-none w-full bg-transparent font-normal'
              placeholder='Your Secure Password'
              ref={passRef}
              required
            />
            <button onClick={handleVisibility}>
              {visible ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
        </div>
        <div className='w-full mt-9 mb-5 flex flex-col gap-4'>
          <button
            type="submit"
            className='border mx-auto w-full py-2 px-6 border-none bg-[#f8cd5f] font-bold'
          >
            Login
          </button>
          <button className='bg-slate-300 py-2 px-5 flex justify-center ' onClick={loginGoogleHandler}>
            <Google />
            <p className='basis-3/5'>Continue with google?</p>
          </button>
        </div>
        <div>
          Maybe you don&apos;t have an account?{" "}
          <Link href='register'>
            <strong className='cursor-pointer'>Register</strong>
          </Link>
        </div>
      </div>
    </form>
  );
}
