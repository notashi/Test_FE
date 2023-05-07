import { React, useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Homepage/Navbar';
import MovieTime from './Homepage/MovieTime';
import MovieSelection from './Homepage/MovieSelection';
import MovieSeats from './Homepage/MovieSeats';
import BookingDetails from './Homepage/BookingDetails'
import axios from "axios"
import{ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const URL = 'http://localhost:5000/v1/api/'


function App() {

  const [lastBookingDetails, setLastBookingDetails] = useState([]);

  const [update,setUpdate] = useState(false);


  const [body, setBody] = useState({
    movie: "",
    time: "",
    seats: 1
  });
  const moviedata = (movieName) => {
    setBody({
      ...body, movie: movieName
    })

  }

  const timeData = (movieTime) => {
    setBody({
      ...body, time: movieTime
    })
  }
  ///do this////////////////////////here
  const createData = async (e) => {
    console.log(body)
    e.preventDefault();
    if (!body.movie) {
      toast.error("Please select a movie.",{ autoClose: 1000 });
      return;
    }
  
    if (!body.time) {
      toast.error("Please select a movie time.",{ autoClose: 1000 });
      return;
    }

    try {
      await axios.post(`${URL}/selectmovie`, body)
      toast.success(successToast());

    } catch (error) {
      console.log(error)
    }
finally{
  lastBooking()
}
  }

  
  //getLastBookingDetails
  const lastBooking = async () => {

    try {
      let response = await axios.get(`${URL}/getdata`)
      console.log(response.data)
      setLastBookingDetails(response.data)
    } catch (error) {
      console.log(error)
    }
      
        finally{
          setUpdate(true)
        }
      }
  

  useEffect(() => {
    lastBooking()
  }, [update])


  const successToast = () => {
    toast("Ticket booked",{
      className: "custom-toast",
      draggable:false,
      position: toast.POSITION.TOP_RIGHT,
      autoClose:1000

    })
  }

  // useEffect(() => {
  //   lastBooking
  // },)

  //toast.error("booking confirm");
  return (
    <div className=" w-full min-h-screen" id="bgBC">
    
      <Navbar />
      <MovieSelection moviedata={moviedata} />
      <BookingDetails lastBookingDetails={lastBookingDetails} />
      <MovieTime timeData={timeData} />
      <MovieSeats />
      <ToastContainer/>
      <span className="button">
        {/* insert onsubmit below */}
        <form onSubmit={createData}>
          <button // onClick={successToast}
           class="btn btn-outline-success">Book now</button>
        </form>
      </span>
    </div>
  );
}

export default App;
