import React from 'react';

function TourCard({ tour, removeTour }) {
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-details">
        <h3>{name}</h3>
        <p>{info}</p>
        <h4>${price}</h4>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard;