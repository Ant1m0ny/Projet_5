import './Overlay.css';

export default function Overlay({ imgSrc, text }) {
  return (
    <div className="Overlay" style={{ '--overlay-img-url': `url(${imgSrc})` }}>
        <div className="OverlayBrithLess"></div>
        <p>{text}</p>
    </div>
  )
}