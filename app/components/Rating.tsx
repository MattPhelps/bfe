import React, { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState<number>(1); // Default rating
  const [isVisible, setIsVisible] = useState<boolean>(true); // Controls component visibility

  const handleRatingChange = (value: number) => {
    setRating(value); // Update the selected rating
    console.log(`User selected rating: ${value}`); // Log the rating to the console

    // Set timeout to hide the component after 1 second
    setTimeout(() => {
      setIsVisible(false); // Hide the component
    }, 1000); // 1000ms = 1 second
  };

  if (!isVisible) {
    return null; // Stop rendering the component
  }

  return (
    <div className="fixed bottom-4 right-4 text-black p-4 rounded-lg shadow-lg flex items-center space-x-4">
      <span className="text-lg">Rate this Estimate</span>
      <div className="rating flex items-center gap-2">
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-red-400"
          onChange={() => handleRatingChange(1)}
          checked={rating === 1}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-orange-400"
          onChange={() => handleRatingChange(2)}
          checked={rating === 2}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-yellow-400"
          onChange={() => handleRatingChange(3)}
          checked={rating === 3}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-lime-400"
          onChange={() => handleRatingChange(4)}
          checked={rating === 4}
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-green-400"
          onChange={() => handleRatingChange(5)}
          checked={rating === 5}
        />
      </div>
    </div>
  );
}
