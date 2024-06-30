import imageToAdd from "../assets/background.png";

export default function Background() {
  return (
     <div style={{
      position: "absolute",
      zIndex: -1,
      width: "100%",
      height: "100vh",
     backgroundImage: `url(${imageToAdd})` }}>
     </div>
  )
}
