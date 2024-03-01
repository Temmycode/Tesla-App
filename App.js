import React, { useState } from "react";
import Navigation from "./navigation/Index.js";
import useCachedResources from "./hooks/useCachedResources.js";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    return <Navigation loggedIns={isLoggedIn} />;
  }
};

export default App;
