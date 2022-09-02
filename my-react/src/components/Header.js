import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import ThemeContext from "./ThemeContext";

export default function Header() {
    const {theme, setTheme} = useContext(ThemeContext);
    const { t} = useTranslation();
    const navigation = ['Home', 'About', 'Contact', 'Prodacts']
    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark')
        }else {
            setTheme('light')
        }
    }
    return(
        <header>
            <nav>
                <ul>
                    {
                        navigation.map((li, index) => {
                            return(
                                <li key={index} >
                                    <Link to={`${li === 'Home' ? '/' : li}`}>
                                        {t(li)}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    {/* <li>
                       <Link to={'/'}>Home</Link> 
                    </li>
                    <li>
                       <Link to={'about'}>About</Link> 
                    </li>
                    <li>
                       <Link to={'contact'}>Contact</Link> 
                    </li> */}
                </ul>
            </nav>
            <button onClick={changeTheme}>Change{theme} Theme</button>
        </header>
    )
}