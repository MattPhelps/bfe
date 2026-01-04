export default function SingleReview() {
    return (
      <div className="lg:mt-0 flex mt-20 lg:mt-0 mb-20 lg:mb-0 items-center justify-center">
        <div className="w-full px-6 lg:px-12">
          <div className="flex flex-col items-center justify-center p-6 bg-white">
      {/* Stars */}
      <div className="rating flex justify-center mb-4">
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400"
          defaultChecked
        />
      </div>

      {/* Review Quote */}
      <p className="text-center text-gray-700 text-lg mb-6">
      This AI gave me instant, accurate results that helped me track my progress like never before.
      </p>
      <p className="text-center text-gray-700 text-lg mb-6">
      If you're serious about your fitness, this is a must-have tool.
      </p>

      {/* Profile Picture and Name */}
      <div className="flex flex-col items-center">
        <div className="avatar mb-2">
          <div className="w-16 rounded-full">
            <img src="profiles/matt-phelps.jpeg" alt="User Profile" />
          </div>
        </div>
        <p className="text-lg font-semibold">Matt Phelps</p>
        <p className="text-sm text-gray-500">@skoyig</p>
      </div>
    </div>
  
          </div>
        </div>
    );
  }
  