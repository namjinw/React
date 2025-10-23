import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Square from './Game';

// const user = {
//   name: 'Hedy Lamarr',
//   imgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imgSize: 90,
// };
// const product = [
//   {title: 'Cabbage', isFruit: false, id: 1},
//   {title: 'Garlic', isFruit: false, id: 2},
//   {title: 'Apple', isFruit: true, id: 3},
// ]

// const listItem = product.map(products => 
//   <li
//     key={products.id}
//     style={{
//       color: products.isFruit ? 'magenta' : 'darkgreen'
//     }}
//   >
//     {products.title}
//   </li>
// )

function App() {

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // const [count, setCount] = useState(0);
  
  return (
    <>
      <Square></Square>
    </>
  );

}

export default App;

// function MyButton({count, onClick}) {
//   return (
//     <button onClick={onClick}>
//       clicked {count} times
//     </button>
//   )
// }