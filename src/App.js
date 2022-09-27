import './App.css';
import GreetingCard from "./components/gretting-card/greetingCard";
import ExperienceDescription from "./components/experienceDescription/experienceDescription";
import CourseExpectations from "./components/courseExpectations/courseExpectations";
import { Fade, Slide } from 'react-reveal';

function App() {
  return (
    <div className="App">
        <Fade bottom>
            <GreetingCard />
        </Fade>
        <Slide right>
            <ExperienceDescription />
        </Slide>
        <Fade top>
            <CourseExpectations />
        </Fade>
    </div>
  );
}

export default App;
