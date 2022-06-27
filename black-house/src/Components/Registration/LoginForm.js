import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom'
 

export default function LoginForm({Login, error}) {
  const [details, setDetails] = useState({email: "", password: ""})

  const submitHandler = e => {
    e.preventDefault()

    Login(details)
  }
  
    
    return(
        <>
        <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <form onSubmit={submitHandler}>
              <h1 style={{marginBottom: '100px'}}>Black <span style={{color : 'red'}}>House</span></h1>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              <div className="form-floating">
                <input 
                type="email" 
                className="form-control m-1" 
                id="floatingInput"
                placeholder="name@example.com" 
                name="email"
                onChange={e => setDetails({...details, email: e.target.value})} value={details.email}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" 
                className="form-control m-1" 
                id="floatingPassword" 
                placeholder="Password" 
                name="password"
                onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
                />
                <label for="floatingPassword">Password</label>
              </div>
              <button  className="w-100 btn btn-lg btn-primary m-1" type="submit">
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
            </form>
          </div>
        </div>
      </div>;
        </>
     )
}
