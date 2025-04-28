import React from 'react'; // Import React to use JSX and functional components
import TourCard from './TourCard'; // Import the TourCard component to display individual tours

// Gallery component: Displays a collection of tours using the TourCard component
function Gallery({ tours, setTours }) {
  // Function to remove a tour from the list
  const removeTour = (id) => {
    // Filters out the tour with the matching id and updates the state
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="gallery"> {/* Container for the gallery of tours */}
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
}

export default Gallery; // Export the Gallery component for use in other parts of the app