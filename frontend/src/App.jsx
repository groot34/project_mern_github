import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { ExplorerPage } from "./pages/ExplorerPage";
import { LikesPage } from "./pages/LikesPage";
import toast, { Toaster } from 'react-hot-toast';

import { Sidebar } from "./components/Sidebar";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser, loading}= useAuthContext();

  if(loading) return null;

  return (
    <div className="flex text-white">
      <Sidebar />
      <div className="max-w-5xl my-5 text-white mx-auto transition-all flex-1">
        <Routes>
          <Route path="/" element={authUser ? <HomePage/> : <Navigate to={"/signup"} />}/>
          <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to={"/"} />}/>
          <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to={"/"} />}/>
          <Route path="/explore" element={authUser ? <ExplorerPage/> : <Navigate to={"/login"} />} />
          <Route path="/likes" element={authUser ? <LikesPage/> : <Navigate to={"/login"} />}/>
        </Routes>
        <Toaster />
      </div>
    </div>
  );       
}

export default App;
