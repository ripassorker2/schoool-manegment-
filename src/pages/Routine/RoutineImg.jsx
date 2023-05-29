import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../Hooks/useAdmin";
import UpdateRoutine1to3 from "../UpdatedRoutine/UpRoutine1to3";
import UpRoutine4and5 from "../UpdatedRoutine/UpRoutine4and5";
import UpdateRestRoutine from "../UpdatedRoutine/UpdateRestRoutine";
import { useState } from "react";

const RoutineImg = () => {
   const [openModal, setOpenModal] = useState(false);
   const { user } = useContext(AuthContext);
   const [isAdmin] = useAdmin(user?.email);
   const routine = useLoaderData();

   console.log(routine);

   return (
      <div className="mx-5">
         <section className="mx-auto max-w-screen-xl">
            <div className="flex justify-end">
               {isAdmin && (
                  <label
                     onClick={() => setOpenModal(true)}
                     className="btn bg-red-600 text-white rounded-full border-none"
                     htmlFor="my-modal"
                  >
                     Update
                  </label>
               )}
            </div>
            <h3 className="text-center md:text-4xl text-2xl font-semibold mb-4 ">
               The Routine of {routine?.class}
            </h3>

            <div>
               <div className="overflow-x-auto mb-8">
                  {(routine?.class === "Class 1") |
                  (routine?.class === "Class 2") |
                  (routine?.class === "Class 3") ? (
                     <>
                        <table className="table table-zebra w-full">
                           <thead>
                              <tr>
                                 <th>Si No</th>
                                 <th>Day</th>
                                 <th>9.30am - 10.30am</th>
                                 <th>10.30am - 11.30am</th>
                                 <th>11.30am - 12.00pm</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th>1</th>
                                 <td>Saturday</td>
                                 {routine?.saturday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr className="active rounded">
                                 <th>2</th>
                                 <td>Sunday</td>
                                 {routine?.sunday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr>
                                 <th>3</th>
                                 <td>Monday</td>
                                 {routine?.monday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr className="active rounded">
                                 <th>4</th>
                                 <td>Tuesday</td>
                                 {routine?.tuesday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr>
                                 <th>5</th>
                                 <td>Wednesday</td>
                                 {routine?.wednesday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr className="active rounded">
                                 <th>6</th>
                                 <td>Thrusday</td>
                                 {routine?.thursday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr>
                                 <th>7</th>
                                 <td>Friday</td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                              </tr>
                           </tbody>
                        </table>
                     </>
                  ) : (
                     <> </>
                  )}
               </div>
               <>
                  {(routine?.class === "Class 4") |
                  (routine?.class === "Class 5") ? (
                     <>
                        <table className="table table-zebra  w-full">
                           <thead>
                              <tr>
                                 <th>Si No</th>
                                 <th>Day</th>
                                 <th>9.30am - 10.30am</th>
                                 <th>10.30am - 11.30am</th>
                                 <th>11.30am - 12.00pm</th>
                                 <th>12.30pm - 1.30pm</th>
                                 <th>1.30pm - 2.30pm</th>
                                 <th>2.30pm - 3.30pm</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th>1</th>
                                 <td>Saturday</td>
                                 {routine?.saturday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr className="active rounded">
                                 <th>2</th>
                                 <td>Sunday</td>
                                 {routine?.sunday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr>
                                 <th>3</th>
                                 <td>Monday</td>
                                 {routine?.monday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr className="active rounded">
                                 <th>4</th>
                                 <td>Tuesday</td>
                                 {routine?.tuesday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr>
                                 <th>5</th>
                                 <td>Wednesday</td>
                                 {routine?.wednesday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr className="active rounded">
                                 <th>6</th>
                                 <td>Thrusday</td>
                                 {routine?.thursday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr>
                                 <th>7</th>
                                 <td>Friday</td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                              </tr>
                           </tbody>
                        </table>
                     </>
                  ) : (
                     <> </>
                  )}
               </>
               <>
                  {(routine?.class === "Class 6") |
                  (routine?.class === "Class 7") |
                  (routine?.class === "Class 8") |
                  (routine?.class === "Class 9") |
                  (routine?.class === "Class 10") |
                  (routine?.class === "Class 11") |
                  (routine?.class === "Class 12") ? (
                     <>
                        <table className="table table-zebra  w-full">
                           <thead>
                              <tr>
                                 <th>Si No</th>
                                 <th>Day</th>
                                 <th>9.30am - 10.30am</th>
                                 <th>10.30am - 11.30am</th>
                                 <th>11.30am - 12.00pm</th>
                                 <th>12.30pm - 1.30pm</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th>1</th>
                                 <td>Saturday</td>
                                 {routine?.saturday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr className="active rounded">
                                 <th>2</th>
                                 <td>Sunday</td>
                                 {routine?.sunday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr>
                                 <th>3</th>
                                 <td>Monday</td>
                                 {routine?.monday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr className="active rounded">
                                 <th>4</th>
                                 <td>Tuesday</td>
                                 {routine?.tuesday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr>
                                 <th>5</th>
                                 <td>Wednesday</td>
                                 {routine?.wednesday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr className="active rounded">
                                 <th>6</th>
                                 <td>Thrusday</td>
                                 {routine?.thursday?.map((s) => (
                                    <td key={s._id}>{s}</td>
                                 ))}
                              </tr>
                           </tbody>
                           <tbody>
                              <tr>
                                 <th>7</th>
                                 <td>Friday</td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                                 <td>Off day </td>
                              </tr>
                           </tbody>
                        </table>
                     </>
                  ) : (
                     <> </>
                  )}
               </>
            </div>
         </section>
         <div className="text-white">
            {openModal &&
               (routine?.class === "Class 1") |
                  (routine?.class === "Class 2") |
                  (routine?.class === "Class 3") && (
                  <>
                     <UpdateRoutine1to3
                        setOpenModal={setOpenModal}
                        routine={routine}
                     />
                  </>
               )}

            {openModal &&
               (routine?.class === "Class 4") |
                  (routine?.class === "Class 5") && (
                  <div>
                     <UpRoutine4and5
                        setOpenModal={setOpenModal}
                        routine={routine}
                     />
                  </div>
               )}

            {openModal &&
               (routine?.class === "Class 6") |
                  (routine?.class === "Class 7") |
                  (routine?.class === "Class 8") |
                  (routine?.class === "Class 9") |
                  (routine?.class === "Class 10") |
                  (routine?.class === "Class 11") |
                  (routine?.class === "Class 12") && (
                  <>
                     <UpdateRestRoutine
                        setOpenModal={setOpenModal}
                        routine={routine}
                     />
                  </>
               )}
         </div>
      </div>
   );
};

export default RoutineImg;
