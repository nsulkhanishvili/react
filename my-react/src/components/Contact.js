import TodoApp from "./TodoApp";
// import { ReactComponent as Bear } from '../assets/svg/bear.svg';
import Imgnatia from '../assets/img.jpg';

export default function Contact() {
    return(
        <section>
            {/* <Bear /> */}
            <TodoApp />
            <img src={Imgnatia}  alt="Imgnatia"/>
        </section>
    )
    
}