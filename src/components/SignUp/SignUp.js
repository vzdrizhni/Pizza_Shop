import React from 'react'

const SignUp = () => {
    return (
        <div>
            <form>
                <label htmlFor="lname">
                  Name:
                  <input type="text" id="lname" name="name" required  />
                </label>
                <label htmlFor="fname">
                  Email:
                  <input type="email" id="fname" name="email" required  />
                </label>
                <label htmlFor="lname">
                  Password:
                  <input type="password" id="lname" name="password" required  />
                </label>
                <input type="submit" value="Sign Up" className="btn" />
            </form>
        </div>
    )
}

export default SignUp
