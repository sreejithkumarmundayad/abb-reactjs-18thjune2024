import Welcome from '../welcome/Welcome';
import './App.css';

function App() {
  /*
  const welcomeElement = Welcome()
  return (
    <div className="App">
      {welcomeElement}
    </div>
  );
  */
  const message = 'Welcome to React JS'
  const mouseOverHandler = (value: string) => {
    console.log('on mouse over')
    return <span>hello &nbsp;{value}</span>
  }
  // const welcomeElement = Welcome({ messageValue: message, mouseOverHandlerFn: mouseOverHandler })
  // console.log(welcomeElement);
  return (
    <div className='App'>
      {

        <Welcome
          messageValue={message}
          mouseOverHandlerFn={mouseOverHandler}
        />

        /*welcomeElement*/
      }
      <br />
      <Welcome mouseOverHandlerFn={mouseOverHandler} />
    </div>
  )
}

export default App;

/**
 * Welcome(
 * {
 *  messageValue:undefined|message},
 *  mouseOverHandlerFn:[Function]
 * }
 * )
 */
