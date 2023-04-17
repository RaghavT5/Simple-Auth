import { useState, useEffect } from "react";
import { auth } from "../firebase-config";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#051937] to-[#004d7a] flex flex-col items-center justify-center py-10">
      <h1 className="text-6xl font-bold mb-6 text-white">
        {loggedIn ? "Hello World" : "Please Log In"}
      </h1>
    </div>
  );
}
