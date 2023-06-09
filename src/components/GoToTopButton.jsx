import { useState } from "react";
import Button from "./Button";

function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div 
      onClick={handleClick}
      className={`${isVisible ? "opacity-100" : "opacity-0"} transition duration-300 bottom-5 right-5 fixed `}
    >
        <Button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
        </Button>
    </div>
  );
}

export default GoToTopButton;