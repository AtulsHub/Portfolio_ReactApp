import { achievements } from "../data/achievements";

function Achievements() {
  return (
    <section id="achievements" className="mb-6 p-6 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-lg">
      {achievements.map((items, index) => (
         <div key={index} className="mb-6 p-4 bg-blue-200 rounded-lg">
        <h3 className="text-2xl font-semibold text-blue-700">{items.title}</h3>
        <p className="text-gray-700">{items.discreption}</p>
      </div>
      ))}
     
    </section>
  );
}

export default Achievements;