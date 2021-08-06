import { useState } from "react";
import Button from '../Button';

const Card = () => {

    const [value, setValue] = useState(0)

    function Incrementar(){
        setValue(value + 1);
    }

    function Decrementar(){
        setValue(value - 1);
    }

    return(
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">

            <Button className="btn btn-success" onClick={Incrementar}>Incrementar</Button>
            <Button className="btn btn-danger" onClick={Decrementar}>Decrementar</Button>

            <p>{value}</p>
            </div>
        </div>
    )
}

export default Card;