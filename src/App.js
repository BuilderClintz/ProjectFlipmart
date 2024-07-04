import Body from "./Body";
import Footer from "./Footer";
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Body style={{marginTop:"-20px"}} />
      <Footer/>
    </div>
  );
}

export default App;
