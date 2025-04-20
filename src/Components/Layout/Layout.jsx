import QuicklyNavbar from "../QuicklyNavbar/QuicklyNavbar";
import QuicklyFooter from "../QuicklyFooter/QuicklyFooter";

import {Outlet} from "react-router-dom";
// import SocialLoginButtons from "../SocialLoginButtons/SocialLoginButtons";

function Layout(){
    return(
        <>
        <QuicklyNavbar/>
        {/* <SocialLoginButtons/> */}
        <Outlet/>
        <QuicklyFooter/>
        
        </>
    )
}

export default Layout;