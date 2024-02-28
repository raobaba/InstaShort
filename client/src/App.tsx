import { Routes, Route } from "react-router-dom";
import SignIn from "./components/authentication/auth/SignIn";
import SignUp from "./components/authentication/auth/SignUp";
import AuthLayout from "./components/authentication/AuthLayout";
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
  Notification,
  Message,
} from "./root/pages";
import RootLayout from "./root/RootLayout";

function App() {
  return (
    <main className="flex h-screen w-full">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/message" element={<Message />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
