import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Routine = () => {
   const { data: routines = [] } = useQuery({
      queryKey: ["routine"],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/routine");
         const data = await res.json();
         return data;
      },
   });
   return (
      <div className="mx-5 my-14">
         <div className="max-w-screen-xl mx-auto flex justify-center items-center">
            {routines?.map((r) => (
               <Link
                  to={`/routine/${r._id}`}
                  className="btn btn-info ms-1 text-slate-700 rounded"
                  key={r._id}
               >
                  {r.class}
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Routine;
