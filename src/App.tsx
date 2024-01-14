import { Route, Routes } from "react-router-dom"
import SigninForm from "./_auth/Forms/SigninForm"
import SignupForm from "./_auth/Forms/SignupForm"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
import {Home} from "./_root/Pages/index"
import "./globals.css"



const App = () => {
  return (
    <main className="flex h-screen">
     <Routes>
        {/* Public Route*/}
        <Route element={<AuthLayout/>}>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
        </Route>

         {/* Public Route*/}
         <Route element={<RootLayout />}>
         <Route index element={<Home/>}/>
         </Route>
     </Routes>
    </main>
  )
}

export default App
