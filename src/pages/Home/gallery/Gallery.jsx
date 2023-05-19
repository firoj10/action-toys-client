
import img1 from "./../../../assets/7.jpg"
import img2 from "./../../../assets/8.jpg"
import img3 from "./../../../assets/3.jpg"
import img4 from "./../../../assets/4.jpg"
import img5 from "./../../../assets/5.jpg"
import img6 from "./../../../assets/6.jpg"

const Gallery = () => {
    return (
       
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center mx-auto">
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000"> 
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center" >
  <figure><img  className="h-18 w-18"  src={img6} alt="Shoes" /></figure>
    <h2 className="card-title">Shoes!</h2>
   
  </div>
</div> 
     </div>
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-25 w-25"  src={img5} alt="Shoes" /></figure>
    <h2 className="card-title">Shoes!</h2>
   
  </div>
</div> 
     </div>
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-25 w-25"  src={img4} alt="Shoes" /></figure>
    <h2 className="card-title">Shoes!</h2>
   
  </div>
</div> 
     </div>
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-25 w-25" src={img3} alt="Shoes" /></figure>
    <h2 className="card-title">Shoes!</h2>
   
  </div>
</div> 
     </div>
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-25 w-25"  src={img2} alt="Shoes" /></figure>
    <h2 className="card-title">Shoes!</h2>
   
  </div>
</div> 
     </div>
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-25 w-25"  src={img1} alt="Shoes" /></figure>
    <h2 className="card-title">Shoes!</h2>
   
  </div>
</div> 
     </div>


     
    
 
   
   
  

        </div>
    );
};

export default Gallery;