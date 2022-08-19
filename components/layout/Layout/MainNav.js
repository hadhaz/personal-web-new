import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import useWidthSize from "../../../hooks/use-width-size"
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function MainNav() {
  const dispatch = useDispatch();
  const width = useWidthSize();
  const isMobile = useSelector(state => state.ui.isMobile)

  useEffect(() => {
    dispatch(uiActions.setIsMobile(width))
  }, [width, dispatch])

  return (
    <Fragment>
      {isMobile && <MobileNav/>}
      {!isMobile && <DesktopNav/>}
    </Fragment>
  );
}

export default MainNav;
