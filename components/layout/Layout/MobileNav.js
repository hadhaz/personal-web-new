import Link from "next/link";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import Transition from "react-transition-group/Transition";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";


export default function MobileNav() {
  const active = useSelector(state => state.ui.isMenuActive);
  const dispatch = useDispatch();
  const router = useRouter()
  function handleMenu() {
    dispatch(uiActions.toggleMenu())
  }
  function handleToggle() {
    dispatch(uiActions.toggleMenu())
  }

  const navMenu = createPortal(
    <div
      className={`${active ? "overflow-hidden" : ""} w-screen h-full text-xl`}
    >
      <Transition in={active} mountOnEnter unmountOnExit timeout={500}>
        {state => {
          return (
            <nav
              className={` ${
                state === "entering"
                  ? "animate-in "
                  : state === "exiting"
                  ? "animate-out -z-10"
                  : ""
              } fixed z-10 h-full w-full flex pt-20 justify-center bg-primary`}
            >
              <ul className='flex flex-col gap-12 text-center'>
                <li onClick={handleToggle}>
                  <Link href='projects'>Projects</Link>
                </li>
                <li onClick={handleToggle}>
                  <Link href='journals'>Journals</Link>
                </li>
                <li onClick={handleToggle}>
                  <Link href='resume'>Resume</Link>
                </li>
                <li onClick={handleToggle}>
                  <Link href='contact'>Contact</Link>
                </li>
              </ul>
            </nav>
          );
        }}
      </Transition>
    </div>,
    document.getElementById("modal")
  );

  return (
    <header className='bg-primary'>
      <div className='flex justify-between p-7 font-bold'>
        <h1 className='tracking-[0.16em]'><Link href='/'>HADZAMI</Link></h1>
        <button onClick={handleMenu}>
          {!active ? (
            <div className='flex items-center gap-1'>
              <MenuIcon fontSize='small' />
              <p>Menu</p>
            </div>
          ) : (
            <div className='flex items-center gap-1'>
              <CloseIcon fontSize='small' />

              <p className=' '>Close</p>
            </div>
          )}
        </button>
      </div>
      {navMenu}
    </header>
  );
}
