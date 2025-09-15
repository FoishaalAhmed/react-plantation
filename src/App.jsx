import './App.css'
import { useState } from 'react'
import NavBar from './Components/Nav/NavBar'
import Footer from './Components/Nav/Footer'
import Slider from './Components/Slider'
import Button from './Components/Button'
import Item from './Components/Main/Item'
import { initialState } from './data/plant'

function App() {

  const prices = [...new Set(initialState.map((item) => item.price))].sort((a, b) => b - a).slice(0, 10); 

  let ActiveCategory = "All";

  const filterablePrices = {
    All: [...new Set(initialState.map((item) => item.price))],
    Indore: [...new Set(initialState.filter((item) => item.type === "Indore").map((item) => item.price))],
    Calathea: [...new Set(initialState.filter((item) => item.type === "Calathea").map((item) => item.price))],
    Dracaena: [...new Set(initialState.filter((item) => item.type === "Dracaena").map((item) => item.price))],
    Ficus: [...new Set(initialState.filter((item) => item.type === "Ficus").map((item) => item.price))],
    Orchids: [...new Set(initialState.filter((item) => item.type === "Orchids").map((item) => item.price))],
  };

  return (
    <div>
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

      <Footer></Footer>
    </div>
  )
}

export default App
