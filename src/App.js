import React  from 'react';
import './App.css';
import Receipts from './Receipts';
import './Receipt.css'
import {useState} from 'react'


const initialState = [
  {
    id: 1,
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Korchata',
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: 'Jerrica',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
];

// const [receiptState, setReceiptState] = useState(initialState)

function App() {

  // const [paid, setPaid] = useState(initialState.paid)
  // const [formState, setFormState] = useState(initialState)

  // const paymentClicked = ev => {
  //   ev.preventDefault()
  //   setFormState({...formState, [formState.paid] : true})
  // }

//   const togglePaid = () => {
//     initialState.paid = true
//     console.log({togglePaid});
// }
  return (
    <>
      <header>
        <h1 className="name">Korilla</h1>
        <Receipts initialState={initialState} paid={initialState.paid}/>
      </header>
      <main>

      </main>
    </>
  );
}

export default App;