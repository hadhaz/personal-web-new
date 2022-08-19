import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";
import { register, signInWithGoogle } from "../store/auth-actions";
import { uiActions } from "../store/ui-slice";

function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    ui: { error, success },
    auth: { isLoggedIn },
  } = useSelector(state => state);

  const [visible, setVisible] = useState({ top: false, bottom: false });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const emailRef = useRef();
  const passRef = useRef();
  const passConfirmRef = useRef();

  if (isLoggedIn) {
    router.replace("/");
  }

  const handleVisibilityTop = e => {
    e.preventDefault();
    setVisible(value => {
      return { ...value, top: !value.top };
    });
  };

  const handleVisibilityBottom = e => {
    e.preventDefault();
    setVisible(value => {
      return { ...value, bottom: !value.bottom };
    });
  };

  const registerHandler = async e => {
    e.preventDefault();
    setIsSubmitted(false);

    // fetch form data
    const email = emailRef.current.value.trim();
    const password = passRef.current.value.trim();
    const passwordConfirm = passConfirmRef.current.value.trim();

    if (password !== passwordConfirm) {
      dispatch(uiActions.setError("Password is not match"));
    } else {
      dispatch(register(email, password));
    }

    setIsSubmitted(true);
  };

  const loginGoogleHandler = e => {
    e.preventDefault();
    setIsSubmitted(false);
    dispatch(signInWithGoogle());
    setIsSubmitted(true);
  };

  const focusFormHandler = () => {
    setIsSubmitted(false);
  };

  return (
    <form
      onSubmit={registerHandler}
      onFocus={focusFormHandler}
      className='bg-login'
    >
      <div className='flex flex-col p-8 sm:max-w-[500px] sm:mx-auto'>
        <div className='my-4'>
          <h1 className='text-2xl text-center font-bold'>Register</h1>
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
              type={visible.top ? "text" : "password"}
              id='password'
              className='outline-none w-full bg-transparent font-normal'
              placeholder='Your Secure Password'
              ref={passRef}
              required
            />
            <button onClick={handleVisibilityTop}>
              {visible.top ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-1 text-lg font-semibold mt-5'>
          <label htmlFor='password-confirm'>Password Confirmation</label>
          <div className='flex py-2 px-5 border-2 border-[#f8cd5f] '>
            <input
              type={visible.bottom ? "text" : "password"}
              id='password-confirm'
              className='outline-none w-full bg-transparent font-normal'
              placeholder='Your Secure Password'
              ref={passConfirmRef}
              required
            />
            <button onClick={handleVisibilityBottom}>
              {visible.bottom ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
        </div>
        <div className='w-full mt-9 mb-5 flex flex-col gap-4'>
          <button
            type='submit'
            className='border mx-auto w-full py-2 px-6 border-none bg-[#f8cd5f] font-bold'
          >
            Register
          </button>
          <button
            className='bg-slate-300 py-2 px-5 flex justify-center'
            onClick={loginGoogleHandler}
          >
            <Google />
            <p className='basis-3/5'>Continue with google?</p>
          </button>
        </div>
        <div>
          Maybe you have an account?{" "}
          <Link href='login'>
            <strong className='cursor-pointer'>Login</strong>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Register;
