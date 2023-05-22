import LoginCard from "@/components/LoginCard";
import Facebook from "../components/Facebook";

export default function Home() {
  return (
    <div className="bg-facebookBackgroundWhite flex items-center h-screen">
        <div className="flex justify-around pr-44 pl-44">
          <Facebook />
          <LoginCard />
        </div>
    </div>
  );
}
