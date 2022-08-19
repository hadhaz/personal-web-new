import Login from "../pages/login";

export default function Content() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 border'>
      <div className='flex flex-col gap-5 py-20 px-12 lg:py-28 lg:px-16 xl:text-lg'>
        <h1 className='font-inconsolata font-semibold text-2xl xl:text-3xl'>
          Hi, I&apos;m Hadzami.
        </h1>
        <p>
          I&apos;m Computer Science Students at Gadjah Mada University entering
          my 3rd Semester and currently active contribute at Internal & External
          Division of HIMAKOM UGM and Software Reseacrh & Development Staff at
          Komatik.
        </p>
        <p>
          Currently, I&apos;m strongly dedicate my time for learning Fullstack
          Development with React JS and Express JS without forgetting my
          responsibilites as a Vice Project Officer of LDK MAKOMTI 2022 and
          Project Officer of MMIK Himakom 2022.
        </p>
        <p>
          In addition, recently I have also started a new habit of writing
          journals, essays, and reading insightful books. This new habit that
          encourages me to develop this beloved website.
        </p>
      </div>
      <div className='flex flex-col py-20 px-12 lg:py-28 lg:px-16 gap-5 text-sm border-l'>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl xl:text-2xl mb-2">Read the latest journals:</h2>
          <article>
            <h4 className="text-grayfont">MACHINE LEARNING</h4>
            <p className="underline">I started to be interest in studying data science</p>
          </article>
          <article>
            <h4 className="text-grayfont">PUBLIC SPEAKING</h4>
            <p className="underline">I need more hours to improve my public speaking</p>
          </article>
          <article>
            <h4 className="text-grayfont">LOVE STORY</h4>
            <p className="underline">I fall in deep love with my old father</p>
          </article>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl xl:text-2xl mt-4 mb-1">Browse my popular friend&apos;s story:</h2>
          <article className="underline">Hadzami from my prespective</article>
          <article className="underline">Jogja is special city that holds a lot of longing</article>
          <article className="underline">Baciro, Satria Mandala, and Duo Burjo</article>
        </div>
      </div>
    </div>
  );
}
