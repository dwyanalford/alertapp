export default function Signup() {
  
    return (
      <div className="wrapper">
      <div className="title-text">
        <div className="title signup">Register</div>
      </div>
      <div className="form-container">
        <div className="form-inner">
          <form action="#" className="signup">
            <div className="field">
              <input type="text" placeholder="Email Address" required/>
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required/>
            </div>
            <div className="field">
              <input type="password" placeholder="Confirm password" required/>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  
    )
  }
  