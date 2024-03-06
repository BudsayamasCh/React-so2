import { useState } from "react";
import ShowName from "./Showname";

export default function Form(){
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState(false);

    const handelChange = (event) => {
        console.log(event);
        setName(event.target.value);
    };
    const handelSubmit = (event) => {
        event.preventDefault();
        alert("A name was submitted: " + name);
        console.log("A name was submitted : "+ name);

        name.length >= 5 ? setDisplayName(true) : setDisplayName(false);
    };

    return(
        <div>
            <h1>Form to Input Data</h1>
            <form action="">
                <label htmlFor="">
                    Name :
                    <input type="text" value={name} onChange={handelChange} />
                </label>
                <input type="submit" value="Submit" onClick={handelSubmit} />
            </form>
            <ShowName name={name} show={displayName} />
        </div>
    );
}