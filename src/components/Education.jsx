import { useNavigate } from 'react-router-dom';
import { educationData } from '../data/education';

function Education() {
  const navigate = useNavigate();

  return (
    <section id="education" className="  rounded-lg">
      {educationData.map((item, index) => (
        <div
          key={index}
          className="mb-6 p-4 bg-blue-50 rounded-lg cursor-pointer hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">{item.degree}</h3>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <p className="text-gray-600"><label className='font-bold'>Institution/Board: </label> {item.institution}</p>
          <p className="text-gray-600"><label className='font-bold'>Location: </label> {item.location}</p>
          <p className="text-gray-600">
            <label className='font-bold'>Duration: </label> {item.startYear} - {item.endYear}
          </p>
          {item.grade && <p className="text-gray-600"><label className='font-bold'>Grade: </label> {item.grade}</p>}
        </div>
      ))}
      
    </section>
  );
}

export default Education;