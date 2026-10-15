import { Navbar } from '../../components/Navbar/Navbar';
import './Header.css'
import logo from '../../assets/GATO1-1.gif'

export const Header = () => {
    return (
    <header className='header'>
        <div className='header__inner'>
            <div className='header__brand'>
                <img className='header__cat' src={logo} alt="Logo del cuaderno" />
                <div className='header__names'>
                    <p className='header__kicker'>Cuaderno de prácticas</p>
                    <p className='header__name'>useState</p>
                </div>
            </div>
            <Navbar />
        </div>
    </header>
    );
};
