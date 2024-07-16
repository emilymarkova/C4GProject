import { Typography } from "@mui/material";


export default function AboutContent() {
  return (
    <div
    className="aboutContent">
      <Typography
        variant="h3"
        fontFamily={'Gaegu'}
        paddingTop={'28vh'}
        color={'#b2dbd7'}
        textAlign={'center'}>
          About
      </Typography>
      <Typography
        variant="h5"
        fontFamily={'Gaegu'}
        paddingTop={'2vh'}
        color={'#b2dbd7'}
        textAlign={'center'}
        >
          This calender was designed in order to further assist students with their studies.<br/> This website was created by Emily, Alex, Suvit, and Nandana during <br/> their summer internship as Colorado School of Mines. This website uses react, html, and Material UI.
        </Typography>
    </div>
  );
}
