import './styles/Singup.css'

export default function Singup(){
    return(
        <div className="signup-container">
            <h1>Sign up for easy trip booking...</h1>
            <div className='signup-input-container'>

                <div className='names-container'>
                    <input placeholder='First name..' className='inputs' id="firstname"></input>
                    <input placeholder='Last name..' className='inputs' id="lastname"></input>
                </div>

                <div className='email-container'>
                    <input placeholder='E-mail' className='inputs'></input>
                </div>

                <div className='password-container'>
                    <input placeholder='Password' className='inputs'></input>
                    <input placeholder='Confirm password' className='inputs'></input>
                </div>

                <div className='terms-and-conditions'>
                    <input type='checkbox'></input>
                    <p>I accept the Terms of use & Privacy policy</p>
                </div>

                <div className='sign-up-but-wrap'>
                    <button id="sign-up-but">Sign Up</button>
                </div>

                <div className='add-text'>
                    <p>Already have an account?</p>
                    <p id="login-here">Login here</p>
                </div>

            </div>
        </div>
    );
}