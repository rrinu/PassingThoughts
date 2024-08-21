import React ,{ useState }  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as BrowserRouter,Routes, Route, NavLink } from 'react-router-dom';
import PersonalThoughts from './PersonalThoughts';
import ProfessionalThoughts from './ProfessionalThoughts';
import './style.css';
import image from "./images/thinking-girl.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faPen , faDotCircle } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  const [personalThoughts, setPersonalThoughts] = useState([]);
  const [professionalThoughts, setProfessionalThoughts] = useState([]);

  const addPersonalThought = (thought) => {
    setPersonalThoughts((prev) => [...prev, { id: Date.now(), text: thought }]);
};

  const removePersonalThought = (id) => {
    setPersonalThoughts((prev) => prev.filter((thought) => thought.id !== id));
  };

  const addProfessionalThought = (thought) => {
    setProfessionalThoughts((prev) => [...prev, { id: Date.now(), text: thought, expiresAt: Date.now() + 15000 }]);
  };

  const removeProfessionalThought = (id) => {
    setProfessionalThoughts((prev) => prev.filter((thought) => thought.id !== id));
  };

  const clearAllPersonalThoughts = () => {
    setPersonalThoughts([]);
  };

  const clearAllProfessionalThoughts = () => {
    setProfessionalThoughts([]);
  };
  return(
  <BrowserRouter>
  <div className="App">
      <header>
      <div className="header-icons">
            <h1>To Do List</h1>
            <div className='icons-only'>
            <FontAwesomeIcon icon={faList} />
            <FontAwesomeIcon icon={faPen} />
            </div>
          </div>
        </header>
      <main>
      <nav className="nav-container">
            <ul>
              <li>
                <NavLink 
                  to="/personal" 
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >{({ isActive }) => (
                  <>
                    {isActive && <FontAwesomeIcon icon={faDotCircle} className="nav-icon" />}
                    Personal
                  </>
                )}
                </NavLink>
                
              </li>
              <li>
                <NavLink 
                  to="/professional" 
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <FontAwesomeIcon icon={faDotCircle} className="nav-icon" />}
                      professional
                    </>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
      <img src={image} alt="thinking girl"/>
      </main>
    </div>
      <Routes>
          <Route path="personal" element={<PersonalThoughts 
          thoughts={personalThoughts}
          addThought={addPersonalThought}
          removeThought={removePersonalThought}
          clearAllThoughts={clearAllPersonalThoughts}/>} />
          <Route path="professional" element={<ProfessionalThoughts 
                thoughts={professionalThoughts}
                addThought={addProfessionalThought}
                removeThought={removeProfessionalThought}
                clearAllThoughts={clearAllProfessionalThoughts} />} />
      </Routes>
    
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));