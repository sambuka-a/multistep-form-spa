import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import UserPlan from './components/UserPlan/UserPlan';
import AddonsStep from './components/Addons/AddonsStep';
import Summary from './components/Summary/Summary';
import ThankYou from './components/ThankYou/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalInfo/>} />
        <Route path="/plan" element={<UserPlan/>} />
        <Route path="/addons" element={<AddonsStep/>} />
        <Route path="/summary" element={<Summary/>} />
        <Route path="/thankyou" element={<ThankYou/>} />
      </Routes>
    </Router>
  );
}

export default App;
