import { Route, Routes } from "react-router-dom"
import SigninForm from "./_auth/Forms/SigninForm"
import SignupForm from "./_auth/Forms/SignupForm"
import {Home} from "./_root/Pages/index"
import "./globals.css"


const App = () => {
  return (
    <main className="flex h-screen">
     <Routes>
        {/* Public Route*/}
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />


         {/* Public Route*/}
         <Route index element={<Home/>}/>
     </Routes>
    </main>
  )
}

export default App
