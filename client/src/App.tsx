import { Routes, Route } from "react-router-dom";
import SignIn from "./components/authentication/auth/SignIn";
import SignUp from "./components/authentication/auth/SignUp";
import AuthLayout from "./components/authentication/AuthLayout";

function App() {
  return (
    <main className="flex h-screen w-full">
    <Routes>
      {/* public routes */}
      <Route element={<AuthLayout/>}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>

      {/* private routes */}

    </Routes>
  </main>
  );
}

export default App;
