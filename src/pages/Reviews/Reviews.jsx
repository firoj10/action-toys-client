
import  img from "./../../assets/7.jpg"
const Reviews = () => {
    return (
<div className="my-16 ">
  <h2 className="text-center text-4xl font-bold mt-70 mb-10 text-orange-900">SuperToy Review</h2>
<div className="hero bg-base-200" data-aos="fade-up"data-aos-duration="3000">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} className="max-auto rounded-lg shadow-2xl" />
    <div >
      <h1 className="text-5xl font-bold text-orange-900">Guardians of the Galaxy Vol. Dhaka and  Happy Meal Toys Now Available at McDonald’s</h1>
      <p className="py-6">Each Happy Meal box includes one of eight super hero toys  from the super hero toys baby toys  and will be available for a limited time at participating restaurants nationwide, while supplies last..</p>
      <button className=" text-white p-3 rounded bg-orange-900">View Details</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Reviews;