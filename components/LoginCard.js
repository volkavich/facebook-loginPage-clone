import Link from "next/link";

function LoginCard() {
  return (
    <div className="text-center">
      <div className="w-96 flex flex-col rounded-lg shadow-xl text-center bg-white">
        <div className="flex flex-col justify-center text-center p-4 gap-3">
          <form className="flex flex-col gap-4 justify-center">
            <input
              type="email"
              placeholder="Email address or phone number"
              className="rounded shadow-inner h-12 border-black/20"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="rounded shadow-inner h-12 border-black/20"
            ></input>
            <button className="font-bold text-lg bg-facebookBlue rounded text-white p-2">
              Log in
            </button>
          </form>
          <span className="text-facebookBlue text-sm hover:underline">
            <Link href={"#"}>Forgotten password?</Link>
          </span>
        </div>
        <hr className="ml-4 mr-4" />
        <div className="p-6">
          <button className="font-bold  text-lg rounded bg-facebookGreen pt-2 pb-2 pr-3 pl-3 text-white">
            Create new account
          </button>
        </div>
      </div>
      <div className="pt-6"> 
      <p className="font-sans text-sm"><b className="hover:underline text-black/80">Create a Page</b> for a celebrity, brand or business.</p>
      </div>
      
      
    </div>
  );
}

export default LoginCard;
