import './App.css';
import CounterParent from './components/CounterParent';
// import Button from './components/Button';
// import Form from './components/Form';
// import Header from './components/Header';

function App() {
  // const btnButton = [
  //   {
  //     id: 1,
  //     text: 'ღილაკი 1',
  //   },
  //   {
  //     id: 2,
  //     text: 'ღილაკი 2',
  //   },
  //   {
  //     id: 3,
  //     text: 'ღილაკი 3',
  //   },
  //   {
  //     id: 4,
  //     text: 'ღილაკი 4',
  //   }

  // ]

  return (
    <div className="App">
      {/* <Header /> */}
      <div className='mainDiv'>
        {/* {
          btnButton.filter((object) => object.id > 1).map((item, index) =>{
            return(
              <Button key={item.id} text={item.text}/>
            )
          })
        }
        <Form /> */}
        <CounterParent />
      </div>
    </div>
  );
}

export default App;
