import React, { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Contexts/UserContexts";
const CatagoryModal = ({booking}) => {
  const { user } = useContext(AuthContext);
    const {companyname,resaleprice}=booking;

    const handleBooking = event => {
      event.preventDefault();
        const form = event.target;
        const location = form.location.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            userName:name,
            userEmail:email,
            itemName:companyname,
            price:resaleprice,
            number:phone,
            location:location
        }
        console.log(booking)
      fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => console.log(data));
  }
    const notify = () => toast("Product Book Successful");
   
  return (
    <>
    <ToastContainer />
      <input type="checkbox" id="catagoryModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
        <label htmlFor="catagoryModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="font-bold text-lg">
           Company name: {companyname}
          </h3>
          <p className="pt-2">
          <span className='font-semibold text-xl'>Resaleprice:</span> {resaleprice}
          </p>
      
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
          <label className='block text-left mt-1 font-bold' htmlFor="name"> User Name: </label>
          <input className='border-black border-2 p-3 rounded-md w-full h-10' type="text" defaultValue={user?.displayName} disabled   name="name" required/>
         
          <label className='block text-left  font-bold' htmlFor="email"> User Email: </label>
          <input className='border-black border-2 p-3 rounded-md w-full h-10' type="text" defaultValue={user?.email} disabled   name="email" required/>
          
          <label className='block text-left  font-bold' htmlFor="phone-number">Phone Number:</label>
          <input className='border-black border-2 p-3 rounded-md w-full h-10' type="text"  name="phone" required/>
        
          <label className='block text-left font-bold' htmlFor="location">Location:</label>
          <input className='border-black border-2 p-3 rounded-md w-full h-10' type="text"  name="location" required/>
        
          <input onClick={()=>notify()} className='btn  w-full' type="submit" value="Submit" />
         
          </form>
        </div>
      </div>
    </>
  );
};

export default CatagoryModal;
