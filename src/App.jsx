import './App.css'
import React from 'react'
import NavBar from './Components/Nav/NavBar'
import Footer from './Components/Nav/Footer'
import Slider from './Components/Slider'
import Button from './Components/Button'
import Item from './Components/Main/Item'
import { initialState } from './data/plant'

const prices = [...new Set(initialState.map((item) => item.price))].sort((a, b) => b - a).slice(0, 10); 

let activeCategory = "All";

const filterablePrices = {
	All: [...new Set(initialState.map((item) => item.price))],
	Indore: [...new Set(initialState.filter((item) => item.type === "Indore").map((item) => item.price))],
	Calathea: [...new Set(initialState.filter((item) => item.type === "Calathea").map((item) => item.price))],
	Dracaena: [...new Set(initialState.filter((item) => item.type === "Dracaena").map((item) => item.price))],
	Ficus: [...new Set(initialState.filter((item) => item.type === "Ficus").map((item) => item.price))],
	Orchids: [...new Set(initialState.filter((item) => item.type === "Orchids").map((item) => item.price))],
};

const reducer = (state, action) => {

	switch (action.type) {

		case "All": {
			return initialState;
		}

		case "Indore": {
			activeCategory = "Indore";
			return initialState.filter((item) => item.type == "Indore");
		}

		case "Calathea": {
			activeCategory = "Calathea";
			return initialState.filter((item) => item.type == "Calathea");
		}

		case "Dracaena": {
			activeCategory = "Dracaena";
			return initialState.filter((item) => item.type == "Dracaena");
		}

		case "Ficus": {
			activeCategory = "Ficus";
			return initialState.filter((item) => item.type == "Ficus");
		}

		case "Orchids": {
			activeCategory = "Orchids";
			return initialState.filter((item) => item.type == "Orchids");
		}
	
		default: {
			activeCategory = "All";
			return initialState;
		}

	}
};

const ItemContext = React.createContext();

function App() {

	const [items, dispatch] = React.useReducer(reducer, initialState);

	return (
		<div>
			<ItemContext.Provider
						value={{
							items: items,
							itemDispatch: dispatch,
							activeCategory: activeCategory,
							itemCurrentPage: 1,
							filterPrice: filterablePrices[activeCategory],
						}}
					>
					<NavBar />

					<Slider></Slider>

					<div className="max-w-7xl mx-auto mt-6 flex flex-wrap justify-center gap-2">
						{prices.map((price) => (
						<Button key={price} text={price}></Button>
						))}
					</div>

					<div className="max-w-7xl mx-auto mt-6">
						<Item></Item>
					</div>
					</ItemContext.Provider>

			<Footer></Footer>
		</div>
	)
}

export { ItemContext };
export default App
