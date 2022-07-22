import './App.css';
import { SecuredComponent } from './components/SecuredComponent';
import { SecureComponent } from './components/SecureComponent';
import { HeaderComponent } from './components/HeaderComponent';

function App() {

  return (<>
    <HeaderComponent />
    <div className="bodyContainer">
      <SecureComponent securedComponent={<SecuredComponent />} />
    </div>
  </>);
}

export default App;
