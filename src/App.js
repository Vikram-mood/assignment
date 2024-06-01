import './App.css';
import Body from './components/Body';
import Header from './components/Header';


// 1. Header
// 2. Body
//  - Banner
//  - middle container
//  - FAQ's 
//  - Banner
//  -Footer

function App() {
  return (
    <div className="px-0 sm:px-28">
      
      <Header />
      <Body />
    </div>
  );
}

export default App;
