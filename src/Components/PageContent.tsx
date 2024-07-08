import { Button } from "@mui/material"
import "./PageContent.css"
import {Link} from 'react-router-dom';

export default function PageContent() {
  return (
    <>
    <div className="TitleContent">
        A calender specialized in education
    </div>
    <div className="TitleContent2">
        Eventide is a calendar that focuses on its 
        <br>
        </br>
        impact on student’s education.
    </div>

    <div
      className="button1">
    <Button
      variant="contained"
      component={Link}
      style={{minWidth: 200, minHeight: 100}}
      to={'/signup'}>
        Sign Up!
    </Button>
    </div>

    <div
      className="button2">
    <Button
      variant = "contained"
      component={Link}
      style={{minWidth:200, minHeight: 100}}
      to={'/signup'}>
        Login!
    </Button>
    </div>
    </>
  )
}
