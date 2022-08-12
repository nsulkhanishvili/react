import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Prodacts() {
    const [fetchDate, setFetchDate ] = useState([]);

    useEffect(() => {
        fetch("https://lindagiorgadze.github.io/FakeServer/products.json")
            .then((response) => response.json())
            .then((data) => setFetchDate(data.Products));
    }, []);

    return(
            <div className="divProdacts">
                {fetchDate.map((obj ) => {
                    return (
                          <div key={obj.id} className="Prodacts">
                            <h4>{obj.title}</h4>
                            <img src={obj.img} alt={obj.title}/>
                            <Link to={`${obj.id}`} >Visit</Link>

                          </div>
                    )
                })}
            </div>
    );
}