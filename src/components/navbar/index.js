import { Link } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

const Navbar = () => {
  const [focus, setFocus] = useState(1);

  return (
    <div>
      <Link
        to="/random"
        className={clsx("text-2xl mr-5", {
          "border-b-5 border-sky-500": focus === 1,
        })}
        onClick={() => setFocus(1)}
      >
        Random
      </Link>
      <Link
        to="/most-popular"
        className={clsx("text-2xl mr-5", {
          "border-b-5 border-sky-500": focus === 2,
        })}
        onClick={() => setFocus(2)}
      >
        Most Popular
      </Link>
    </div>
  );
};

export default Navbar;
