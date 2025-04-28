import React from 'react'; // Import React to use JSX and functional components

// TourCard component: Displays individual tour details
function TourCard({ tour, removeTour }) {
  // Destructure the tour object to extract its properties
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card"> {/* Container for the tour card */}
      <img src={image} alt={name} /> {/* Displays the tour image */}
      <div className="tour-details"> {/* Wrapper for tour details */}
        <h3>{name}</h3> {/* Displays the tour name */}
        <p>{info}</p> {/* Displays the tour description */}
        <h4>${price}</h4> {/* Displays the tour price */}
        {/* Button to remove the tour from the list */}
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </div>
  );
}

export default TourCard; // Export the TourCard component for use in other parts of the app