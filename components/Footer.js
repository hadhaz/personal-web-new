import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className='flex flex-wrap z-30 bg-black text-slate-300'>
      <FooterAbout />
      <FooterContact />
    </footer>
  );
}

const FooterAbout = () => {
  return (
    <div className='order-2 flex items-center lg:basis-1/2 px-8 md:px-16 py-10 md:py-12 lg:py-24 text-[#999] font-pt-serif'>
      <div className='flex flex-col gap-2 lg:max-w-[35vw]'>
        <h2 className='text-lg font-bold mb-5 font-lato text-slate-100'>
          HADZAMI SETIAWAN
        </h2>
        <p>
          This website is built using{" "}
          <a href='https://nextjs.org' className='underline'>
            Next JS
          </a>{" "}
          js and{" "}
          <a href='https://tailwindcss.com/' className='underline'>
            Tailwindcss
          </a>
          . Don&apos;t forget to follow me on{" "}
          <a
            href='https://www.instagram.com/hzmisetiawan'
            className='underline'
          >
            Instagram
          </a>{" "}
          and{" "}
          <a href='https://twitter.com/HadzamiS' className='underline'>
            Twitter
          </a>
          . if you want to see this website source code, you can check my{" "}
          <a href='https://github.com/hadhaz' className='underline'>
            Github
          </a>{" "}
          Repository (will be open source soon). This website be always
          developed and maintained.
        </p>
        <p className='text-sm'>
          © Copyright 2022 Achmad Hadzami Setiawan. All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export const FooterContact = () => {
  return (
    <div id='contact' className='order-1 lg:order-2 lg:basis-1/2 py-10 px-8 md:py-12 lg:py-24 border-t-2 md:border-t-0 w-full border-white md:px-16 text-[#999] font-pt-serif'>
      <div className='flex flex-col gap-4'>
        <h3 className='font-lato font-bold text-lg'>CONTACT</h3>
        <div>
          <a
            href='https://goo.gl/maps/7uSaw7KGkEkUuXVH9'
            className='flex gap-4 items-center'
          >
            <LocationOnIcon fontSize='large' />
            <h3>Yogyakarta, Indonesia</h3>
          </a>
        </div>
        <div>
          <a
            href='mailto:hadzami.id@gmail.com'
            className='flex gap-4 items-center'
          >
            <EmailIcon fontSize='large' />
            <h3>hadzami.id@gmail.com</h3>
          </a>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/achmad-hadzami-setiawan-0b7549230/'
            className='flex gap-4 items-center'
          >
            <LinkedInIcon fontSize='large' />
            <h3>Achmad Hadzami Setiawan</h3>
          </a>
        </div>
      </div>
    </div>
  );
};
