import Image from "next/image";
import { signInWithGoogle, verifyIsLoggedIn } from "../store/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useRef } from "react";
import { storyActions } from "../store/story-slice";

const Hero = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const titleRef = useRef();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); 
  const submitHandler = async () => {
    dispatch(storyActions.saveTitle(titleRef.current.value))
    if (!isLoggedIn) {
      router.push('/login')
    } else {
      router.push('/create')
    }
  };

  return (
    <div className='sm:bg-hero bg-hero-mobile'>
      <div className='sm:max-w-[550px] md:max-w-[625px] lg:max-w-[700px] xl:max-w-[725px] px-4 sm:px-2 mx-auto'>
        <h1 className='pt-12 pb-16 sm:pb-20 md:pb-24 lg:pb-28 text-3xl md:text-4xl font-extrabold text-center'>
          Not only see my journals, You can also share your own lovely story
          here
        </h1>
      </div>
      <div className='relative w-[250px] h-[215px] sm:w-[325px] sm:h-[279.5px] md:w-[360px] md:h-[309.6px] z-0 left-1/2 -translate-x-1/2 -translate-y-[20%]'>
        <Image src='/hero.png' layout='fill' alt='hero' />
      </div>
      <div>
        <p className="text-center mb-2">Share Your Story Now</p>
      </div>
      <div className='flex flex-col sm:flex-row md:text-base items-center justify-center text-sm'>
        <input
          type='text'
          className='w-[330px] md:w-[380px] p-4 outline-none bg-white border-2 border-yellow-400'
          placeholder='Your First Title Story'
          ref={titleRef}
        />
        <button
          onClick={submitHandler}
          className='w-[330px] hover:-translate-y-1 hover:bg-[#FCDD8E] hover:color[#793D13] hover:shadow-md p-4 border-2 border-transparent bg-[#f8cd5f] md:w-[380px] font-semibold text-[#320101]'
        >
          Create Your First Story
        </button>
      </div>
      <div>
        <p className='max-w-[1000px] mx-auto text-center p-6 md:p-8 lg:p-12 md:text-lg lg:text-xl'>
          &quot;The simple act of writing something down lets your brain know
          you want to remember it. That&apos;s why note-taking is such an
          effective practice when learning something new.&quot;
        </p>
      </div>
    </div>
  );
};

export default Hero;
