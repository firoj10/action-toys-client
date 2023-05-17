
import img from "../../../assets/1.jpg"
const Banner = () => {
  return (
    <div className=" ">
    <div className="  flex-none md:flex py-8 ">
  <div className=' text-center md:w-1/2 md:h-full'>
  <img src={img} className=" md:w-100 rounded-lg shadow-2xl" />
 
  </div>
      <div className=' space-y-1 w-1/2 p-2'>
      
        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. </p>
        <button className="btn btn-primary">Get More info</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;