import { saints } from "../data/saints";

function Saint() {
const dayIndex = new Date().getDate() % saints.length;
const saint = saints[dayIndex];
  return (
    <section className="py-20 px-6 bg-white" id="saints"> 
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Saint Spotlight
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={saint.image}
            alt={saint.name}
            className="rounded-3xl h-[400px] w-full object-cover"
          />

          <div>
            <p className="text-amber-600 font-semibold mb-2">
              {saint.church}
            </p>

            <h3 className="text-3xl font-bold mb-4">
              {saint.name}
            </h3>

            <p className="text-slate-600 leading-8">
              {saint.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Saint;


// import { useEffect, useState } from "react";
// import { getTodaySaint } from "../services/saintService";

// function Saint() {
//   const [saint, setSaint] = useState(null);

//   useEffect(() => {
//     async function loadSaint() {
//       const data = await getTodaySaint();
//       setSaint(data);
//     }

//     loadSaint();
//   }, []);

//   if (!saint) {
//     return (
//       <section className="py-20 text-center">
//         Loading Saint...
//       </section>
//     );
//   }

//   const image =
//     saint.icons?.[0]?.url;

//     console.log(saint);
// console.log(saint.icons);
// console.log(saint.icons?.[0]?.url);
//   return (
//     <section
//       className="py-20 px-6 bg-white"
//       id="saints"
//     >
//       <div className="max-w-6xl mx-auto">

//         <h2 className="text-4xl font-bold text-center mb-12">
//           Saint Of The Day
//         </h2>

//         <div className="grid md:grid-cols-2 gap-10 items-center">

//           <img
//             src={image}
//             alt={saint.name}
//             className="rounded-3xl h-[450px] w-full object-cover"
//           />

//           <div>

//             <p className="text-amber-600 font-semibold mb-2">
//               Orthodox Calendar
//             </p>

//             <h3 className="text-3xl font-bold mb-4">
//               {saint.name}
//             </h3>

//             <p className="text-slate-600 leading-8">
//               Commemorated today in the Orthodox Church calendar.
//             </p>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Saint;