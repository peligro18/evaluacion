
import Navbar from './Components/NavBar';
import Body from './Components/Body';
import Buttons from './Components/Buttons';
import './App.css'; 
import imageUrl from './assets/images.jpg'; 
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Body
        title="Computer And Laptop Accessories"
        subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or..."
        imageUrl={imageUrl}
      />
      <Buttons />
    </div>
  );
};

export default App;