import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import Logo from '../assets/logo.png';

const Header = () => {
    return (    
        <Navbar light color='transparent' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={Logo} alt='speechsparklogo' className='float-start'/>
                <h1 className='mt-1'>SpeechSpark</h1>
            </NavbarBrand>

        </Navbar>
    )
};

export default Header;