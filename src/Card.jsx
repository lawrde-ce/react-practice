function Card({ image, title, text }) {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="picture" />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default Card;
