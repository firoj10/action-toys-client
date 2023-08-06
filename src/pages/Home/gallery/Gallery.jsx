
import img1 from "./../../../assets/gallery/1.jpg"
import img2 from "./../../../assets/gallery/2.jpg"
import img3 from "./../../../assets/gallery/3.jpg"
import img4 from "./../../../assets/gallery/4.jpg"
import img5 from "./../../../assets/gallery/5.jpg"
import img6 from "./../../../assets/gallery/6.jpg"


const Gallery = () => {
    return (
       <>
       <h2 className="text-center text-4xl font-bold pt-20 pb-8 text-orange-900">Toy Gallery</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center mx-auto">
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000"> 
    <div className="card w-auto bg-base-100 shadow-xl">
  <div className="card-body items-center" >
  <figure><img    src={img6} className="h-[400px] w-full" alt="Shoes" /></figure>
    <h2 className="card-title text-orange-900">Ben Reilly</h2>

   
  </div>
</div> 
     </div>
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-auto bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-[400px] w-full" src={img5} alt="Shoes" /></figure>
    <h2 className="card-title  text-orange-900">Wolverine</h2>
   
  </div>
</div> 
     </div>
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-auto bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-[400px] w-full"  src={img4} alt="Shoes" /></figure>
    <h2 className="card-title  text-orange-900">Daredevil</h2>
   
  </div>
</div> 
     </div>
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-auto bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-[400px] w-full" src={img3} alt="Shoes" /></figure>
    <h2 className="card-title  text-orange-900">Spider-Man</h2>
   
  </div>
</div> 
     </div>
   
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-auto bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-[400px] w-full" src={img1} alt="Shoes" /></figure>
    <h2 className="card-title   text-orange-900">Hobgoblin!</h2>
   
  </div>
</div> 
     </div>
    <div className="justify-center items-center" data-aos="fade-up"data-aos-duration="3000">
    <div className="card w-auto bg-base-100 shadow-xl">
  <div className="card-body items-center">
  <figure><img  className="h-[400px] w-full"  src={img2} alt="Shoes" /></figure>
    <h2 className="card-title mb-0  text-orange-900">Ben Grimm!</h2>
   
  </div>
</div> 
     </div>
    </div>
        </>
    );
};

export default Gallery;