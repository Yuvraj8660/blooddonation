
import { Route, Routes } from 'react-router-dom'
import DonateKhoon from './components/DonateKhoon'
import CollectKhoon from './components/ViewAllDonars'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import SingUp from './components/SignUp'
import Footer from './components/Footer'
import { createContext, useState } from 'react'
import VerifyAccount from './pages/VerifyAccount'
import { useSelector } from 'react-redux'
import SecureRoute from './components/SecureRoute'
import ForgetPassword from './components/ForgetPassword'
import ForGotPasswordForm from './components/ForGotPasswordForm'
export const myContext = createContext();
const App = () => {
  const { user } = useSelector((state) => state.auth)
  console.log(user);

  const [email, setEmail] = useState("");


  return (
    <myContext.Provider value={{ email, setEmail }}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/donate" element={<DonateKhoon />} />
          <Route path="/collect" element={<CollectKhoon />} /> */}
          <Route
            path="/donate"
            element={
              <SecureRoute>
                <DonateKhoon />
              </SecureRoute>
            }
          />

          <Route
            path="/collect"
            element={
              <SecureRoute>
                <CollectKhoon />
              </SecureRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route path="/send/otp/forgot-password" element={<ForgetPassword />} />
          <Route path="/change-password" element={<ForGotPasswordForm />} />
        </Routes>
        <Footer />
      </div>
    </myContext.Provider>
  )
}

export default App
