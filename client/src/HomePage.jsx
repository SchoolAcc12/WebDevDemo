import './styles/HomePage.css'

function NavBar(){
    return(
        <nav className='navbar'>

            <div className='logo'>
                <strong><p id="logo">WorldHotels.</p></strong>
            </div>

            <div className='links'>
                <a>Home</a>
                <a>About</a>
                <a>FAQ</a>
            </div>

            <div className='signupbut'>
                <button id="signupbut">Sign up</button>
            </div>

        </nav>
    );
}


export default function HomePage(){

    return(
        <NavBar />
    );
}