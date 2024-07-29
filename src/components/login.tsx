import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/cusip');
  }
  return (
    <div className="w-full h-full absolute bg-gradient-to-t from-cablue to-cadarkblue">
      <form
        id="form"
        className="p-10 min-w-min max-w-xl max-h-fit rounded-md border border-white text-white absolute m-auto top-0 bottom-0 right-10 left-10"
      >

        <h1 className="sticky text-white text-3xl font-bold text-center mb-5 relative">Sign In
          <span className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 h-[2px] w-[130px] bg-red-500 rounded-full"></span>
        </h1>
        <div className="text-left">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full mb-5 max-h-80 rounded-sm p-2 text-black"
            id="username"
            name="text-name"
            placeholder="Enter Username"
          ></input>
        </div>
        <div className="text-left">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full mb-5 max-h-80 rounded-sm p-2 text-black"
            id="text-password"
            name="password"
            placeholder="Enter Password"
            type="password"
          ></input>
        </div>
        <button
          type="button"
          id="play"
          className="flex w-full p-2 bg-cadeepdark rounded-sm justify-center  shadow-md shadow-white-500/20 transition-all hover:shadow-lg hover:shadow-white-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleLogin}
        >
          Submit
        </button>

      </form>

    </div>
  )
}
export default LoginComponent;