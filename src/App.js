import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import NavigationBar from './components/NavBar.js'
import { Button } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Header /> */}
      <body>
        <h1> The Body</h1>
        <Button basic color='orange'>
      Click me
    </Button>
      </body>

      <Footer />
    </div>
  );
}

export default App