//  import
import {Link} from 'react-router-dom' 

export default function SignUp() {
  return (
    <div className="p-3 max-w-xl mx-auto">
      <h1 className="text-3xl text-center fontsimibold p-6 ">Sign Up </h1>
      <form className="flex flex-col gap-4">
        <input
          placeholder="Username"
          className="bg-slate-100 rounded-lg p-3 relative mt-2 rounded-md shadow-sm"
          id="username"
          type="text"
        />
        <input
          placeholder="Email"
          className="bg-slate-100 rounded-lg p-3"
          id="email"
          type=""
        />
        <input placeholder="Password" className="bg-slate-100 rounded-lg p-3"id="password" type="password" />
        <button className="bg-slate-700 text-white p-3 rounded-lg
         uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
      </form>
      <div className="flex gap-3 mt-5"><p>Have an account?</p>
      <span className='text-blue-700 '> <Link to='sign-in'>Sign in</Link></span>
      </div>

    </div>
  );
}
