import {Button} from "../components"


const Login = () => {
  return (
    <div className="mx-auto w-1/3 h-fit bg-neutral-800 rounded-lg text-white flex flex-col items-center py-8 gap-4 mt-56">
      <span className="text-lg font-semibold">Sign In or Sign Up</span>
      <div className="border border-neutral-600 w-3/4 px-4 py-2 focus-within:border-neutral-400 rounded-lg">
        <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full" autoFocus/>
      </div>
      <div className="border border-neutral-600 w-3/4 px-4 py-2 focus-within:border-neutral-400 rounded-lg">
        <input type="password" placeholder="Password" className="bg-transparent outline-none w-full" autoFocus/>
      </div>
      <div className="w-3/4 flex gap-4 justify-center">
        <Button text="Sign In" isSecondary={false}/>
        <Button text="Sign Up" isSecondary={true}/>
      </div>
    </div>
  )
}

export default Login