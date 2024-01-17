import {Outlet, Navigate} from "react-router-dom";
import sideImg from "../assets/images/sideImg.svg";


const AuthLayout = () => {
  const isAuth = false; 


  return ( 
    <div>
      <>
     {isAuth?(
      <Navigate to = "/"/>
     ) :
     <>
     <section className="flex flex-1 items-center justify-center flex-col py-10">
      <Outlet />
     </section>

     <img
            src={sideImg}
            alt="logo"
            className="hidde lg:block h-screen w-1/2"
          />

     
     </>
     
     }      
      </>
      
    </div>
  )
}

export default AuthLayout
