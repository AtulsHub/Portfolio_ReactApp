import react from 'react';
import { Link } from 'react-router-dom';

const Card = ({key,name, icon,path}) => {
return (
    <div 
    key={key}
    className='flex flex-col justify-evenly m-2 items-center p-4 max-w-50 md:max-h-60 bg-gray-50 shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer'
    onClick={() => window.open(path, '_blank')}>
<div className='p-6 rounded-2xl bg-white'>
    <img src= {icon} alt="Contact" className=' object-contain rounded-2xl mb-2 '  />

</div>
<h1 className='font-bold text-xl'>{name} </h1>

</div>
)
}

export default Card;