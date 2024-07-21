import Background from "../Components/Background"
import NavBar from "../Components/NavBar"
import transition from "../transiton"

function Notes() {
  return (
    <div>
        <Background/>
        <NavBar/>
    </div>
  )
}

export default transition(Notes)