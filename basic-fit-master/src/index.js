// Import needed files and packages
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Trainen from './pages/Trainen';
import Planning from './pages/Planning'
import Sociaal from './pages/Sociaal';
import Voortgang from './pages/Voortgang';
import VoortgangRecent from './pages/VoortgangRecent';
import Challenges from './pages/Challenges';
import Profiel from './pages/Profiel';
import Statistieken from './pages/Statistieken';
import NoPage from './pages/noPage';
import Vrienden from './pages/Vrienden';
import VriendenDetails from './pages/VriendenDetails';
import WorkoutLevelSelectie from './pages/WorkoutLevelSelectie';
import WorkoutKiezer from './pages/WorkoutKiezer';
import Trainingsschema from './pages/Trainingsschema';
import SchemaGenerator from './pages/SchemaGenerator';
import SchemaKiezer from './pages/SchemaKiezer';
import ChallengeDetail from './pages/ChallengeDetail';
import Krachttraining from './pages/Krachttraining';
import KrachttrainingB from './pages/KrachttrainingB';
import KrachttrainingI from './pages/KrachttrainingI';
import KrachttrainingA from './pages/KrachttrainingA';
import Cardio from './pages/Cardio';
import CardioB from './pages/CardioB';
import CardioI from './pages/CardioI';
import CardioA from './pages/CardioA';
import Yoga from './pages/Yoga';
import YogaB from './pages/YogaB';
import YogaI from './pages/YogaI';
import YogaA from './pages/YogaA';
import OverlayPage from './pages/OverlayPage';
import Overlay from './components/Overlay';
import BewegingsFeedback from './pages/Bewegingsfeedback';

// Function that handles the routing of the page
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OverlayPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/trainen' element={<Trainen />} />
          <Route path='/planning' element={<Planning />} />
          <Route path='/sociaal' element={<Sociaal />} />
          <Route path='/voortgang' element={<Voortgang />} />
          <Route path='/voortgang/recent' element={<VoortgangRecent />} />
          <Route path='/challenges' element={<Challenges />} />
          <Route path='/challenges/:id' element={<ChallengeDetail />} />
          <Route path='/profiel' element={<Profiel />} />
          <Route path='/statistieken' element={<Statistieken />} />
          <Route path='/vrienden' element={<Vrienden />} />
          <Route path='/vriendendetails' element={<VriendenDetails />} />
          <Route path='/workoutlevelselectie' element={<WorkoutLevelSelectie />} />
          <Route path='/workoutkiezer' element={<WorkoutKiezer />} />
          <Route path='/trainingsschema' element={<Trainingsschema />} />
          <Route path='/schemagenerator' element={<SchemaGenerator />} />
          <Route path='/schemakiezer' element={<SchemaKiezer />} />
          <Route path='/overlay' element={<OverlayPage />} />
          <Route path='/krachttraining' element={<Krachttraining />} />
          <Route path='/krachttrainingb' element={<KrachttrainingB />} />
          <Route path='/krachttrainingi' element={<KrachttrainingI />} />
          <Route path='/krachttraininga' element={<KrachttrainingA />} />
          <Route path='/cardio' element={<Cardio />} />
          <Route path='/cardiob' element={<CardioB />} />
          <Route path='/cardioi' element={<CardioI />} />
          <Route path='/cardioa' element={<CardioA />} />
          <Route path='/yoga' element={<Yoga />} />
          <Route path='/yogab' element={<YogaB />} />
          <Route path='/yogai' element={<YogaI />} />
          <Route path='/yogaa' element={<YogaA />} />
          <Route path='/bewegings-feedback' element={<BewegingsFeedback />} />


          {/* <Route path='/visual/path/to/Page' element={<ImportedElement />} /> */}

          {/* 404/page not found page: */}
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// Render the app so that it becomes visible for the end user
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();