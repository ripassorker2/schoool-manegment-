import SuccessCard from "./SuccessCard";
import student1 from "../../../assets/photos/student1.webp"
import student2 from "../../../assets/photos/student2.jpeg";
import student3 from "../../../assets/photos/student3.jpeg";

const SuccessfulStudens = () => {

  const datas = [
    {
      name: "Siam Khondokar",
      class: "9-10 (science)",
      story:
        "In the board exam, this exceptional student soared to remarkable heights, leaving an indelible mark of success. With unwavering dedication and a thirst for knowledge, they embarked on a journey of academic excellence that yielded remarkable results. Their meticulous preparation and tireless efforts manifested  ",
      img: student1,
    },
    {
      name: "Samir Molla",
      class: "8",
      story:
        "In the board exam, this exceptional student soared to remarkable heights, leaving an indelible mark of success. With unwavering dedication and a thirst for knowledge, they embarked on a journey of academic excellence that yielded remarkable results. Their meticulous preparation and tireless efforts manifested  ",
      img: student2,
      bg: "bg-blue-400",
    },

    {
      name: "Akif Hossain",
      class: "5",
      story:
        "In the board exam, this exceptional student soared to remarkable heights, leaving an indelible mark of success. With unwavering dedication and a thirst for knowledge, they embarked on a journey of academic excellence that yielded remarkable results. Their meticulous preparation and tireless efforts manifested  ",
      img: student3,
    },
  ];

    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                What our clients are saying
              </h1>

              <div className="flex mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>

            <div className="flex justify-between mt-8 md:mt-0">
              <button
                title="left arrow"
                className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                title="right arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            {datas.map((data, i) => <SuccessCard data={data} key={i}/>)}
          </section>
        </div>
      </section>
    );
};

export default SuccessfulStudens;