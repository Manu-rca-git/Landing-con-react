import React from "react";

function Jumbotron() {
  return (
    <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
      <div className="container-fluid py-5 text-start">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum y más palabras, más texto, más texto, bla bla bla y más texto para que sirva de ejemplo
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Call to action!
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;