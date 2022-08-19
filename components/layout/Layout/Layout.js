import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { verifyIsLoggedIn } from "../../../store/auth-actions";
import MainNav from "./MainNav";

function Layout(props) {
  const isMenuActive = useSelector(state => state.ui.isMenuActive);
  const isLoading = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(verifyIsLoggedIn());
  }, [dispatch])

  

  return (
    <Fragment>
      {!isLoading && (
        <div
          className={`w-screeen h-screen ${
            isMenuActive ? "overflow-hidden" : ""
          }`}
        >
          <MainNav />
          <div id='modal'></div>
          <main>{props.children}</main>
        </div>
      )}
    </Fragment>
  );
}

export default Layout;
