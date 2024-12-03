import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

 
const cardImage = [
	{
		imagen: "https://picsum.photos/seed/picsum/200/300",
	  },
];

//create your first component
const Home = () => {
	const card = [1,2,3,4]
	return (
		
		<div className="text-center">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-12 col-sm-6 col-md-4 col-lg-12 mb-4 d-flex">
						{card.map((el)=><Card key={el} numero={el}/>)}
						
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
