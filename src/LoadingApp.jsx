import React, { useEffect } from "react";
import App from "./App";
import Loading from "./Loading";
function LoadingApp() {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return <div>{loading ? <Loading /> : <App />}</div>;
}

export default LoadingApp;
