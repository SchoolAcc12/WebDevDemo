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

            </div>
        </div>
    );
}