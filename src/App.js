import './App.css';
import GreetingCard from "./components/gretting-card/greetingCard";
import ExperienceDescription from "./components/experienceDescription/experienceDescription";
import CourseExpectations from "./components/courseExpectations/courseExpectations";

function App() {
  return (
    <div className="App">
        <GreetingCard />
        <ExperienceDescription />
        <CourseExpectations />
    </div>
  );
}

export default App;
