import React from "react";
import { useReactPWAInstall } from "react-pwa-install";
import myLogo from "./img/logo.png";
function App() {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();

  const handleClick = () => {
    pwaInstall({
      title: "Install Well Way",
      logo: myLogo,
      features: (
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Works offline</li>
        </ul>
      ),
      description: "This is a very good app that does a lot of useful stuff. ",
    })
      .then(() => alert("App installed successfully!"))
      .catch(() => alert("User opted out from installing"));
  };

  return (
    <div style={{padding: '20px'}}>
      <h1>Welcome to WellWay </h1>
      <p>The Install App button would show only if the app is not already installed on the device. </p>
      {supported() && !isInstalled() && (
        <button type="button" onClick={handleClick}>
          Install App
        </button>
      )}
    </div>
  );
}

export default App;