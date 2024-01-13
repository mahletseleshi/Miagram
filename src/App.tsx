import { Route, Routes } from "react-router-dom"
import "./globals.css"


const App = () => {
  return (
    <main className="flex h-screen">
     <Routes>
        {/* Public Route*/}
        <Route path="/sign-in" element={<SigninForm />} />


         {/* Public Route*/}
         <Route index element={<Home/>}/>
     </Routes>
    </main>
  )
}

export default App
