import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="max-w-2xl mx-auto border-2 my-16 bg-gray-400 rounded-lg p-3">
      <h1 className="text-4xl font-semibold flex items-center justify-center p-2 my-5">
        Sign In
      </h1>
      <form className="flex flex-col gap-7 mx-3 mt-10">
        <input
          type="text"
          placeholder="username"
          className="w-full bg-white p-3 mt-1 rounded-lg font-semibold tracking-wide"
          required
        />
        <input
          type="email"
          placeholder="user123@gmail.com"
          className="w-full bg-white p-3 mt-1 rounded-lg font-semibold tracking-wide"
          required
        />
        <div>
          <button className="w-max text-lg bg-white px-2 py-1 mt-1 mr-4 rounded-lg font-semibold tracking-wide">
            Reset
          </button>
          <button className="w-max text-lg bg-[#036570] text-white px-2 py-1 mt-1 rounded-lg font-semibold tracking-wide">
            <Link to='/'>Sign In</Link>
          </button>
        </div>
        <p className="font-semibold">
          Don`t have an Account?
          <span className="text-white">
            <a href="/sign-up"> Sign-Up</a>
          </span>
        </p>
      </form>
    </div>
  );
}
