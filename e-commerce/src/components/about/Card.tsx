type propType = {
  label: string;
  desc: string;
  Icon: React.ReactNode;
};

const Card = ({ card }: { card: propType }) => {
  return (
    <div className='p-8 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center flex-col  gap-3 text-center '>
      <div className='bg-emerald-100 p-4 text-emerald-700 rounded-full'>
        {card.Icon}
      </div>

      <h3 className='text-2xl font-bold text-gray-900 '>{card.label}</h3>

      <p className='text-gray-500'>{card.desc}</p>
    </div>
  );
};
export default Card;
