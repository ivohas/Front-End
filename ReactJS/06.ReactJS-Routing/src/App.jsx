import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import NotFound from './components/NotFound';
import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import OurValues from './components/OurValues';

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="us" element={<AboutUs />} />
                    <Route path="mission" element={<Mission />} />
                    <Route path="values" element={<OurValues />} />
                </Route>
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <footer>All rights reserved &copy;</footer>
        </>
    )
}

export default App
