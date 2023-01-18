import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import UserPlan from './components/UserPlan/UserPlan';
import AddonsStep from './components/Addons/AddonsStep';
import FinishingUp from './components/FinishingUp/FinishingUp';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalInfo/>} />
        <Route path="/plan" element={<UserPlan/>} />
        <Route path="/addons" element={<AddonsStep/>} />
        <Route path="/finishing" element={<FinishingUp/>} />
        <Route path="/summary" element={<Summary/>} />
      </Routes>
    </Router>
  );
}

export default App;
