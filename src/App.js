
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"


function App() {

  const travelData = data.map(singleCard => {
    return (<Card 
      {...singleCard} 
      />
    )
  })
  

  return(
    <div className='app-container'>
      <Header />
      {travelData}
    </div>
  )
}

export default App;
