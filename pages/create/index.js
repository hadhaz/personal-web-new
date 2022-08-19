import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postStory } from "../../store/story-slice";

function Create() {
  const router = useRouter();
  console.log(router);
  const dispatch = useDispatch();
  const { isLoggedIn, email } = useSelector(state => state.auth);

  useEffect(()=>{
    router.prefetch('/')
  })

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/");
    }
  }, [router, isLoggedIn]);

  const titleCtx = useSelector(state => state.story.title);
  const [title, setTitle] = useState(titleCtx || "");
  const contentRef = useRef();

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postStory(email, title, contentRef.current.value));
  };

  return (
    <div className='bg-login'>
      <div className='mx-auto px-5 md:px-10 lg:max-w-3xl'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-2 lg:max-w-[60vw] mx-auto'
        >
          <h1 className='text-2xl lg:text-3xl text-center font-bold mt-6'>
            Create Your Story
          </h1>
          <div className='flex flex-col gap-1'>
            <label htmlFor='title' className='text-lg font-semibold'>
              Title
            </label>
            <input
              type='text'
              required
              onChange={handleTitleChange}
              value={title}
              className='bg-transparent outline-none border-2 border-customYelllor py-2 px-4'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='title' className='text-lg font-semibold'>
              Content
            </label>
            <textarea
              type='text-area'
              required
              ref={contentRef}
              className='bg-transparent outline-none min-h-[40vh] h-fit border-2 border-customYelllor py-2 px-4'
            />
          </div>
          <button className='bg-customYelllor mt-4 p-2 text-lg font-semibold'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
