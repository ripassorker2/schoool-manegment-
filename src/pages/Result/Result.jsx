import { useEffect, useState } from "react";
import Table from "./Table";

const Result = () => {
   const [inputValue, setInputValue] = useState("");
   const [data, setData] = useState([]);
   const [classname, setClassname] = useState("");

   console.log(classname);

   const [marks, setMarks] = useState({});
   useEffect(() => {
      fetch(`http://localhost:5000/results/${inputValue}`)
         .then((res) => res.json())
         .then((data) => setMarks(data));
   }, [inputValue, marks]);

   const handleResult = (e) => {
      e.preventDefault();
      const form = e.target;
      const roll = form.roll.value;
      setInputValue(roll);

      const newData = [...data];
      newData.push(inputValue);
      setData(newData);
   };

   return (
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
         <div className="mx-auto max-w-lg">
            <form
               onSubmit={handleResult}
               className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
               <p className="text-center text-lg font-medium">
                  Get Your Result
               </p>

               <div>
                  <label htmlFor="term" className="sr-only">
                     Term
                  </label>

                  <div className="relative">
                     <input
                        type="text"
                        name="term"
                        required
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Exam Term"
                     />
                  </div>
               </div>

               <div>
                  <label htmlFor="name" className="sr-only">
                     Name
                  </label>

                  <div className="relative">
                     <input
                        type="text"
                        name="name"
                        required
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Name"
                     />
                  </div>
               </div>

               <div>
                  <select
                     name="class"
                     onChange={(e) => setClassname(e.target.value)}
                     className="select w-full rounded-lg border-gray-200 "
                  >
                     <option disabled selected>
                        Select your class
                     </option>
                     <option>Class 1</option>
                     <option>Class 2</option>
                     <option>Class 3</option>
                     <option>Class 4</option>
                     <option>Class 5</option>
                     <option>Class 6</option>
                     <option>Class 7</option>
                     <option>Class 8</option>
                     <option>Class 9</option>
                     <option>Class 10</option>
                     <option>Class 11</option>
                     <option>Class 12</option>
                  </select>
               </div>

               <div>
                  <label htmlFor="roll" className="sr-only">
                     Roll
                  </label>

                  <div className="relative">
                     <input
                        type="text"
                        name="roll"
                        required
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Roll"
                     />
                  </div>
               </div>

               <button
                  type="submit"
                  className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
               >
                  Result
               </button>
            </form>
            {/* { 
            results .filter((data) =>
            data.roll.toLowerCase().toString().includes(inputValue) )
            .map((result, index) => <Table key={index} result={result} />)
        } */}

            {/* {
          results.map((result, index) => <Table key={index} result={result} />)
        } */}

            <Table result={marks} />
         </div>
      </div>
   );
};

export default Result;
