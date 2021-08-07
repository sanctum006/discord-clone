import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chatbox from "./components/chatbox/Chatbox";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import {
  selectChannelId,
  selectChannelName,
} from "./features/counter/appSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chatbox channelId={channelId} channelName={channelName} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
