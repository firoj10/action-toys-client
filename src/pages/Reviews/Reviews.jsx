
import  img from "./../../assets/7.jpg"
const Reviews = () => {
    return (
<div>
  <h2 className="text-center text-4xl font-bold mt-30 mb-10">SuperToy Review</h2>
<div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} className="max-auto rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Guardians of the Galaxy Vol. 3’ Happy Meal Toys Now Available at McDonald’s</h1>
      <p className="py-6">Each Happy Meal box includes one of eight super hero toys based on characters from the movie, and will be available for a limited time at participating restaurants nationwide, while supplies last..</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Reviews;