import Overlay from "../components/overlay/Overlay"
import imageBackground from "../assets/images/background_landscape_2.png"
import Accordion from "../components/accordion/Accordion"

export default function About() {
  return (
    <>
      <Overlay imgSrc={imageBackground}/>
      <div className="About-accordions">
        <Accordion title="Mon titre 1">
          Lorem ipsum dolor sit amet
        </Accordion>
        <Accordion title="Mon titre 1">
          Lorem ipsum dolor sit amet
        </Accordion>
        <Accordion title="Mon titre 1">
          Lorem ipsum dolor sit amet
        </Accordion>
        <Accordion title="Mon titre 1">
          Lorem ipsum dolor sit amet
        </Accordion>
        <Accordion title="Mon titre 1">
          Lorem ipsum dolor sit amet
        </Accordion>
      </div>
    </>
    )
}