import AboutContent from "../Components/AboutContent";
import Background from "../Components/Background";
import NavBar from "../Components/NavBar";
import transition from "../transiton";


function About() {
  return (
    <div>
        <Background/>
        <NavBar/>
        <AboutContent/>
    </div>
  );
}

export default transition(About);