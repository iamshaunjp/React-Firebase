import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  const isFlipped = flipped || card.matched

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={isFlipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.png" onClick={handleClick} alt="cover" />
      </div>
    </div>
  )
}
