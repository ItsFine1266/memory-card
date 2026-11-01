export default function Title() {
  return (
    <div className="header">
      <div className="info">
        <h1 className="main-title">Pokemon Memory Game</h1>
        <p className="instructions">Click on an image to gain points, but don't click on it twice!</p>
      </div>
      <div className="points">
        <h3 className="running-points">Current: 0</h3>
        <h3 className="highest-points">Highest: 0</h3>
      </div>
    </div>
  )
}