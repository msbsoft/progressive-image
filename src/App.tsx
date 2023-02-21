import "./styles.css";
import ProgressiveImage from "./components/progressive-image/progressive-image";
import ladybugsmall from "./images/lady-bug-small.jpg";
import ladybuglarge from "./images/lady-bug-large.jpg";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ProgressiveImage
        placeholderImageSrc={ladybugsmall}
        imageSrc={ladybuglarge}
        />
    </div>
  );
}
