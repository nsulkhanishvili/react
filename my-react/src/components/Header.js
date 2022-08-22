import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

export default function Header() {
    const { t} = useTranslation();
    const navigation = ['Home', 'About', 'Contact', 'Prodacts']
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
        </header>
    )
}