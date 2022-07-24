import './App.css';
import Button from './components/Button';
import {Fragment}  from 'react';

function App() {
  const colors = [
    'green',
    'red',
    'black'
  ]
  return (
    <div className="App">
      <Button  text='ღილაკი 1'/>
      <Button text='ღილაკი 2'  btClass='specialButton' btStyle={{fontsize: '30px', color: 'green'}} />
      {
        colors.map((color, index)=>{
          return(
            <Fragment  key={index}>
              <h3>color</h3>
              <Button text={color} btStyle={{backgroundColor: color, color: 'white'}} onClick={()=> alert(color)} />
            </Fragment>
          )
        })
      }
    </div>
  );
}

export default App;
