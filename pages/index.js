import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Content from "../components/Content";
import { Fab, MenuItem, MenuList, Popper } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Person, Close, ExitToApp, Description } from "@mui/icons-material";
import { logout } from "../store/auth-actions";
import Footer from "../components/Footer";

export default function Home() {
  let photo = useSelector(state => state.auth.photo)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [floatMenu, setFloatMenu] = useState(false);
  const dispatch = useDispatch();

  const handleFab = () => {
    setFloatMenu(value => !value);
  };

  const handleExit = () => {
    dispatch(logout());
  };

  let FloatingMenu;

  if (isLoggedIn) {
    FloatingMenu = (
      <div className='fixed right-5 flex flex-col gap-3 bottom-5'>
        {floatMenu && (
          <Fab size='medium' onClick={handleExit}>
            <ExitToApp />
          </Fab>
        )}
        {floatMenu && (
          <Fab size='medium'>
            <Description />
          </Fab>
        )}
        <Fab
          onClick={handleFab}
          size='medium'
          style={{
            background: "#f8cd5f",
          }}
        >
          {floatMenu && <Close />}
          {!photo && !floatMenu && <Person />}
          {photo && !floatMenu && (
            <Image
              src={photo}
              layout='fill'
              alt='user profile'
              style={{ borderRadius: 999 }}
            />
          )}
        </Fab>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Hadzami&apos;s Personal Web</title>
        <meta
          name='description'
          content="Hadzami's Website that contains collection of project, journals, and summary of Hadzami"
        />
        <link rel='icon' href='/profile.ico' />
      </Head>
      <Hero />
      <Content />
      {FloatingMenu}
      <Footer />
    </Fragment>
  );
}
