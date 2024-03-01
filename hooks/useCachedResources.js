import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadingasyncfunction() {
      try {
        SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }
    loadingasyncfunction();
  }, []);
  return isLoadingComplete;
}
