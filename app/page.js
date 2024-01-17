import Link from "next/link"

export default function Home() {
  
  return (
    <div className="wrapper">
    <div className="title-text">
      <div className="title login">Login</div>
      
    </div>
    <div className="form-container">
      <div className="form-inner">
        <form action="#" className="login">
          <div className="field">
            <input type="text" placeholder="Email Address" required/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required/>
          </div>
          <div className="pass-link"><a href="#">Forgot password?</a></div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login"/>
          </div>
          <div className="signup-link">Not a member? <Link href="/signup">Signup now</Link></div>
        </form>
      </div>
    </div>
  </div>

  )
}
