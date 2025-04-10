import './App.css'
import Things from './things/Things'
import MensShoes from './things/ThingsJs'


function App() {

  return (
    <>
    {
      MensShoes.map((item,i) => (
        <Things
        key={i}
        photo={item.Image}
        saxeli={item.Name}
        agwera={item.Description}
        fasi={item.Price}
        />
      ))
    }
    </>
  )
}

export default App
