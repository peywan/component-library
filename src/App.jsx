import './App.css'
import Button from '../src/components/Button.jsx';
import Alert from "./components/Alert.jsx";
import { FiAlertCircle } from 'react-icons/fi';

function App(){

  return (
      <>
          <Button/>
          <div>
              <h1>Mina komponenter</h1>
              <Button size="large" color="blue" disabled={false}>Stor Blå Knapp</Button>
              <Button size="small" color="red" disabled={true}>Liten Röd Knapp</Button>

              <Alert color="success" icon={FiAlertCircle}>Det här är ett framgångsmeddelande!</Alert>
              <Alert color="warning" icon={FiAlertCircle}>Det här är en varning!</Alert>
              <Alert color="error" icon={FiAlertCircle}>Det här är ett felmeddelande!</Alert>

          </div>
      </>
  )
}

export default App
