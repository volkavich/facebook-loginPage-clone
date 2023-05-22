import Image from "next/image";
import facesvg from "../public/images/facebook.svg";

function Facebook() {
  return (
    <div className="w-3/6 pt-12">
      <div className="pl-2 -mb-3">
        <Image height={105} priority src={facesvg} alt="Facebook Logo" />
      </div>

      <p className="font-sans text-3xl pl-8">
        Facebook helps you connect and share with the people in your life.
      </p>
    </div>
  );
}

export default Facebook;
