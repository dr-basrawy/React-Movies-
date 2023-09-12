import react from "react";
import { Outlet } from "react-router-dom";
import ColorSchemesExample from "../componants/navbar/navbar";
import language from "../store/slices/language";
import { useSelector } from "react-redux";
// import ColorSchemesExample from "./navbar/navbar.jsx";



const Applayout = () => {

    const language=useSelector((state) => state.language.language)
    return (
        <>
        <div dir={`${(language=='en')?'ltr':'rtl'}`}>

            <ColorSchemesExample />
            <Outlet />
        </div>


        </>
    )
}

export default Applayout