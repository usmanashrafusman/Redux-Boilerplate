import { Provider } from 'react-redux';
import './App.css';
import Button from './Components/Button';
import Button2 from './Components/Button2';
import Count from './Components/Count';
import { store } from './Components/State/store';


function App() {
  return (
<>
<Provider store={store}>
<Button2/>
 <Count/>
  <Button/>
  </Provider>
  </>
  );
}

export default App;
