import { useState, useEffect } from 'react'; // Import React hooks for state and lifecycle management
import Gallery from './components/Gallery'; // Import the Gallery component to display tours
import './App.css'; // Import CSS for styling

function App() {
  // State variables
  const [tours, setTours] = useState([]); // Stores the list of tours
  const [loading, setLoading] = useState(true); // Tracks loading state
  const [error, setError] = useState(null); // Tracks error messages

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch('/api/react-tours-project'); // Fetch data from the API
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw error if response is not OK
      }
      const data = await response.json(); // Parse JSON response
      setTours(data); // Update tours state with fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  // useEffect to fetch tours on component mount
  useEffect(() => {
    fetchTours(); // Fetch tours when the component is first rendered
  }, []); // Empty dependency array ensures this runs only once

  // Conditional rendering based on state
  if (loading) {
    return <h2>Loading...</h2>; // Show loading message while fetching data
  }

  if (error) {
    return <h2>Error: {error}</h2>; // Show error message if fetch fails
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2> {/* Message when no tours are available */}
        <button onClick={fetchTours}>Refresh</button> {/* Button to refetch tours */}
      </div>
    );
  }

  // Render the Gallery component with tours data
  return <Gallery tours={tours} setTours={setTours} />;
}

export default App; // Export the App component as default
