import Logo from '../assets/images/Tazon.png'
import '../assets/styles/headerStyle.css'

function Header() {
    return ( 
        <header>
            <div className='Logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='name'>
                <h1>DELICHIS</h1>
            </div>
            <div className='container-input'>
                <input type="text" placeholder='Buscador' />
            </div>
            
        </header>
     );
}

export default Header;