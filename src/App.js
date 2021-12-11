import './styles/main.css';
import LoginForm from './components/Login/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //10159573617364605	token API
  return (
    <div className="container-fluid App">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
