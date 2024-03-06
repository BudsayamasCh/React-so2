import PropTypes from "prop-types";

export default function Showname({name, show}){
    console.log("name:", name);
    console.log("show:", show);

    return <div>{show && <h2>Your name is : {name}</h2>}</div>;
}

Showname.propTypes = {
    name: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
};