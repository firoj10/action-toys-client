
import img1 from "./../../../assets/7.jpg"
import img2 from "./../../../assets/8.jpg"
import img3 from "./../../../assets/3.jpg"
import img4 from "./../../../assets/4.jpg"
import img5 from "./../../../assets/5.jpg"
import img6 from "./../../../assets/6.jpg"

const Gallery = () => {
    return (
       
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center mx-auto">
   
    <div className="justify-center items-center">
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img6} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> 
     </div>
    <div className="justify-center items-center">
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
<div className="justify-center items-center ">
    <div className="card  bg-base-100 shadow-xl">
  <div className="  text-center"><figure ><img src={img2} alt="Shoes" /></figure></div>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
     </div>
     
    
    <div className="justify-center items-center">
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img4} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
     
     </div>
    <div className="justify-center items-center">
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img5} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
     
     </div>
    <div className="justify-center items-center">
    <div className="card w-86 bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
     
     </div>
   
  

        </div>
    );
};

export default Gallery;