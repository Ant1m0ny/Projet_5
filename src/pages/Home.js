import Gallery from '../components/gallery/Gallery';
import Overlay from '../components/overlay/Overlay';

import imgBackground from '../assets/images/background_landscape_1.png';

export default function Home() {
  return (
    <>
        <Overlay imgSrc={imgBackground} text="Chez vous, partout et ailleurs" />
        <Gallery />
    </>
  )
}