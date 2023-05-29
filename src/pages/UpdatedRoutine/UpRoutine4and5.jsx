import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpRoutine4and5 = ({ routine, setOpenModal }) => {
   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;

      const saturdayFrist = form.saturdayFrist.value;
      const saturdaySecond = form.saturdaySecond.value;
      const saturdayThird = form.saturdayThird.value;
      const saturdayFour = form.saturdayFour.value;
      const saturdayFive = form.saturdayFive.value;
      const saturdaySix = form.saturdaySix.value;

      const sundayFrist = form.sundayFrist.value;
      const sundaySecond = form.sundaySecond.value;
      const sundayThird = form.sundayThird.value;
      const sundayFour = form.sundayFour.value;
      const sundayFive = form.sundayFive.value;
      const sundaySix = form.sundaySix.value;

      const mondayFrist = form.mondayFrist.value;
      const mondaySecond = form.mondaySecond.value;
      const mondayThird = form.mondayThird.value;
      const mondayFour = form.mondayFour.value;
      const mondayFive = form.mondayFive.value;
      const mondaySix = form.mondaySix.value;

      const tuesdayFrist = form.tuesdayFrist.value;
      const tuesdaySecond = form.tuesdaySecond.value;
      const tuesdayThird = form.tuesdayThird.value;
      const tuesdayFour = form.tuesdayFour.value;
      const tuesdayFive = form.tuesdayFive.value;
      const tuesdaySix = form.tuesdaySix.value;

      const wednesdayFrist = form.wednesdayFrist.value;
      const wednesdaySecond = form.wednesdaySecond.value;
      const wednesdayThird = form.wednesdayThird.value;
      const wednesdayFour = form.wednesdayFour.value;
      const wednesdayFive = form.wednesdayFive.value;
      const wednesdaySix = form.wednesdaySix.value;

      const thursdayFrist = form.thursdayFrist.value;
      const thursdaySecond = form.thursdaySecond.value;
      const thursdayThird = form.thursdayThird.value;
      const thursdayFour = form.thursdayFour.value;
      const thursdayFive = form.thursdayFive.value;
      const thursdaySix = form.thursdaySix.value;

      const updatedClass = {
         class: routine.class,
         saturday: [
            saturdayFrist,
            saturdaySecond,
            saturdayThird,
            saturdayFour,
            saturdayFive,
            saturdaySix,
         ],
         sunday: [
            sundayFrist,
            sundaySecond,
            sundayThird,
            sundayFour,
            sundayFive,
            sundaySix,
         ],
         monday: [
            mondayFrist,
            mondaySecond,
            mondayThird,
            mondayFour,
            mondayFive,
            mondaySix,
         ],
         tuesday: [
            tuesdayFrist,
            tuesdaySecond,
            tuesdayThird,
            tuesdayFour,
            tuesdayFive,
            tuesdaySix,
         ],
         wednesday: [
            wednesdayFrist,
            wednesdaySecond,
            wednesdayThird,
            wednesdayFour,
            wednesdayFive,
            wednesdaySix,
         ],
         thursday: [
            thursdayFrist,
            thursdaySecond,
            thursdayThird,
            thursdayFour,
            thursdayFive,
            thursdaySix,
         ],
      };
      console.log(updatedClass);

      fetch(`http://localhost:5000/routine/${routine._id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(updatedClass),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               toast.success("Routine succesfully updated...");
               setOpenModal(false);
               navigate(`/routine/${routine._id}`);
            } else {
               console.log("not updated data ");
            }
         });
   };
   return (
      <div>
         <input type="checkbox" id="my-modal" className="modal-toggle" />
         <div className="modal text-gray-900">
            <div className="modal-box max-w-5xl">
               <div className="modal-action ">
                  <label
                     htmlFor="my-modal"
                     className="btn btn-xs rounded-full bg-red-600 border-none"
                  >
                     X
                  </label>
               </div>
               <h3 className="font-semibold text-3xl mb-3">
                  Update your Routine {routine?.class}
               </h3>
               <form onSubmit={handleSubmit}>
                  <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
                     <h2 className="text-2xl pt-4">Saturday</h2>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">9.30am-10.20am</span>
                        </label>
                        <input
                           type="text"
                           name="saturdayFrist"
                           placeholder="Class name....."
                           defaultValue={routine?.saturday[0]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">10.30am-11.30am</span>
                        </label>
                        <input
                           type="text"
                           name="saturdaySecond"
                           placeholder="Class name....."
                           defaultValue={routine?.saturday[1]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">11.30am-12.00pm</span>
                        </label>
                        <input
                           type="text"
                           name="saturdayThird"
                           placeholder="Class name....."
                           defaultValue={routine?.saturday[2]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">12.40pm-1.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="saturdayFour"
                           placeholder="Class name....."
                           defaultValue={routine?.saturday[3]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div></div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">1.30pm-2.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="saturdayFive"
                           placeholder="Class name....."
                           defaultValue={routine?.saturday[4]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>

                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">2.30pm-3.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="saturdaySix"
                           placeholder="Class name....."
                           defaultValue={routine?.saturday[5]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                  </div>
                  <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
                     <h2 className="text-2xl pt-4">Sunday</h2>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">9.30am-10.20am</span>
                        </label>
                        <input
                           type="text"
                           name="sundayFrist"
                           placeholder="Class name....."
                           defaultValue={routine?.sunday[0]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">10.30am-11.30am</span>
                        </label>
                        <input
                           type="text"
                           name="sundaySecond"
                           placeholder="Class name....."
                           defaultValue={routine?.sunday[1]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">11.30am-12.00pm</span>
                        </label>
                        <input
                           type="text"
                           name="sundayThird"
                           placeholder="Class name....."
                           defaultValue={routine?.sunday[2]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">12.40pm-1.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="sundayFour"
                           placeholder="Class name....."
                           defaultValue={routine?.sunday[3]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div></div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">1.30pm-2.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="sundayFive"
                           placeholder="Class name....."
                           defaultValue={routine?.sunday[4]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>

                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">2.30pm-3.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="sundaySix"
                           placeholder="Class name....."
                           defaultValue={routine?.sunday[5]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                  </div>
                  <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
                     <h2 className="text-2xl pt-4">Monday</h2>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">9.30am-10.20am</span>
                        </label>
                        <input
                           type="text"
                           name="mondayFrist"
                           placeholder="Class name....."
                           defaultValue={routine?.monday[0]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">10.30am-11.30am</span>
                        </label>
                        <input
                           type="text"
                           name="mondaySecond"
                           placeholder="Class name....."
                           defaultValue={routine?.monday[1]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">11.30am-12.00pm</span>
                        </label>
                        <input
                           type="text"
                           name="mondayThird"
                           placeholder="Class name....."
                           defaultValue={routine?.monday[2]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">12.40pm-1.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="mondayFour"
                           placeholder="Class name....."
                           defaultValue={routine?.monday[3]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div></div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">1.30pm-2.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="mondayFive"
                           placeholder="Class name....."
                           defaultValue={routine?.monday[4]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">2.30pm-3.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="mondaySix"
                           placeholder="Class name....."
                           defaultValue={routine?.monday[5]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                  </div>
                  <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
                     <h2 className="text-2xl pt-4">Tuesday</h2>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">9.30am-10.20am</span>
                        </label>
                        <input
                           type="text"
                           name="tuesdayFrist"
                           placeholder="Class name....."
                           defaultValue={routine?.tuesday[0]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">10.30am-11.30am</span>
                        </label>
                        <input
                           type="text"
                           name="tuesdaySecond"
                           placeholder="Class name....."
                           defaultValue={routine?.tuesday[1]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">11.30am-12.00pm</span>
                        </label>
                        <input
                           type="text"
                           name="tuesdayThird"
                           placeholder="Class name....."
                           defaultValue={routine?.tuesday[2]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">12.40pm-1.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="tuesdayFour"
                           placeholder="Class name....."
                           defaultValue={routine?.tuesday[3]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div></div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">1.30pm-2.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="tuesdayFive"
                           placeholder="Class name....."
                           defaultValue={routine?.tuesday[4]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>

                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">2.30pm-3.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="tuesdaySix"
                           placeholder="Class name....."
                           defaultValue={routine?.tuesday[5]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                  </div>
                  <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
                     <h2 className="text-2xl pt-4">Wednesday</h2>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">9.30am-10.20am</span>
                        </label>
                        <input
                           type="text"
                           name="wednesdayFrist"
                           placeholder="Class name....."
                           defaultValue={routine?.wednesday[0]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">10.30am-11.30am</span>
                        </label>
                        <input
                           type="text"
                           name="wednesdaySecond"
                           placeholder="Class name....."
                           defaultValue={routine?.wednesday[1]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">11.30am-12.00pm</span>
                        </label>
                        <input
                           type="text"
                           name="wednesdayThird"
                           placeholder="Class name....."
                           defaultValue={routine?.wednesday[2]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">12.40pm-1.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="wednesdayFour"
                           placeholder="Class name....."
                           defaultValue={routine?.wednesday[3]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div></div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">1.30pm-2.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="wednesdayFive"
                           placeholder="Class name....."
                           defaultValue={routine?.wednesday[4]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>

                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">2.30pm-3.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="wednesdaySix"
                           placeholder="Class name....."
                           defaultValue={routine?.wednesday[5]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                  </div>
                  <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 mb-5">
                     <h2 className="text-2xl pt-4">Thursday</h2>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">9.30am-10.20am</span>
                        </label>
                        <input
                           type="text"
                           name="thursdayFrist"
                           placeholder="Class name....."
                           defaultValue={routine?.thursday[0]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">10.30am-11.30am</span>
                        </label>
                        <input
                           type="text"
                           name="thursdaySecond"
                           placeholder="Class name....."
                           defaultValue={routine?.thursday[1]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">11.30am-12.00pm</span>
                        </label>
                        <input
                           type="text"
                           name="thursdayThird"
                           placeholder="Class name....."
                           defaultValue={routine?.thursday[2]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">12.40pm-1.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="thursdayFour"
                           placeholder="Class name....."
                           defaultValue={routine?.thursday[3]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                     <div></div>
                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">1.30pm-2.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="thursdayFive"
                           placeholder="Class name....."
                           defaultValue={routine?.thursday[4]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>

                     <div className="form-control w-full max-w-xs">
                        <label className="label">
                           <span className="label-text">2.30pm-3.30pm</span>
                        </label>
                        <input
                           type="text"
                           name="thursdaySix"
                           placeholder="Class name....."
                           defaultValue={routine?.thursday[5]}
                           className="input border focus:border-gray-700 focus:outline-none border-gray-400 w-full max-w-xs"
                           required
                        />
                     </div>
                  </div>

                  <div className="flex justify-end items-center">
                     <button
                        type="submit"
                        className="btn bg-red-600 text-white rounded-full border-none"
                     >
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default UpRoutine4and5;
