import { useEffect, useState } from "react";
import "./App.css";

// state management
// useState is a hook that allows you to add state to functional components.
// useEffect is a hook that allows you to perform side effects in functional components.
const Card = ({ title }) => {
  const [hasLiked, setHasLikend] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(
      `Card ${title} has been mounted or updated. ${
        hasLiked ? "Liked" : "Not Liked"
      }`
    );
  }, [hasLiked, title]);

  return (
    <div className="card">
      <h2 onClick={(e) => {
          e.preventDefault()
         setCount(count + 1)}}>
        {title} - <be /> {count || null}
      </h2>
      <button
        onClick={(e) => {
          e.preventDefault();
          setHasLikend(!hasLiked);
        }}
        className="like-button"
      >
        {hasLiked ? "🍀" : "♥️"}
      </button>
    </div>
  );
};

const App = () => {
  // const [hasLiked, setHasLikend]= useState( false);

  return (
    <div className="card-container">
      <h1>Welcome to React</h1>
      <Card title="start wars" rating={5} />
      <Card title="Avator" />
      <Card title="Hollywood" />
    </div>
  );
};

export default App;
