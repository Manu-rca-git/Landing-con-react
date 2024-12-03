import React from "react";

const Card = (props) => {
    const {image} = props;
    return (
        <div className="card ">
            <img src={image} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Imagen" />
            <div className="card-body">
                <h4 className="card-title">{props.numero}</h4>
                <p className="card-text">Lorem Ipsum, más palabras y muchas más palabras y esto es una prueba</p>
                <hr style={{ border: 'none', height: '1px', backgroundColor: '#343a40', margin: '0 -15px', marginBottom: '20px' }} />
                <button className="btn btn-primary">
                    Find out More!
                </button>
            </div>
        </div>
        
    );
};

export default Card;
