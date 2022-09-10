import './App.css';
import { BrowserRouter,
          Routes,
          Route,
} from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Aboutus } from './Components/Aboutus/Aboutus';
import { Blog } from './Components/Blog/Blog';
import { Contact } from './Components/Contact/Contact';
import { FoodMenu } from './Components/FoodMenu/FoodMenu';
import { Gallery } from './Components/Gallery/Gallery';
import { Offer } from './Components/Offer/Offer';
import { Team } from './Components/Team/Team';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/foodmenu' element={<FoodMenu/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/offer' element={<Offer/>}/>
            <Route path='/team' element={<Team/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
