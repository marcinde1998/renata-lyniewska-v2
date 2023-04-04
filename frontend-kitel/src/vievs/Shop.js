import { useEffect } from "react";

function RedirectToSplotek() {
  useEffect(() => {
      window.location.replace('https://splotek.pl');
    });
  }; 
  export default RedirectToSplotek;