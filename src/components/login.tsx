
function LoginComponent(){
    return (
        <div className="w-full h-full absolute bg-black">
        <form
          id="form"
          className="p-10 min-w-min max-w-xl max-h-fit rounded-md border border-white text-white absolute m-auto top-0 bottom-0 right-10 left-10"
        >
  
        <h1 className="sticky text-white text-3xl font-bold text-center mb-5">Sign In</h1>
   
          <input
            className="w-full mb-5 max-h-80 rounded-sm p-2 text-black"
            id="text-name"
            name="text-name"
            placeholder="Enter Username"
          ></input>
           <input
            className="w-full mb-5 max-h-80 rounded-sm p-2 text-black"
            id="text-password"
            name="text-password"
            placeholder="Enter Password"
            type="password"
          ></input>
          <button
            type="button"
            id="play"
            className="flex w-full border border-white p-2 rounded-sm justify-center"
          >
          
           
         Submit
          </button>
       
        </form>
       
      </div>
    )
}
export default LoginComponent;