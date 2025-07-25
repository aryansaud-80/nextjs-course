import Card from '@/components/about/Card';
import { Heart, LeafIcon, RecycleIcon, Shield } from 'lucide-react';

type cardType = {
  label: string;
  desc: string;
  Icon: React.ReactNode;
};

const cards: cardType[] = [
  {
    label: '100% Sustainable',
    desc: 'All our products are sourced from sustainable materials and ethical suppliers',
    Icon: <LeafIcon className='w-9 h-9' aria-hidden='true' />,
  },
  {
    label: 'Community First',
    desc: 'We support local communities and fair trade practices worldwide',
    Icon: <Heart className='w-9 h-9' aria-hidden='true' />,
  },
  {
    label: 'Zero Waste',
    desc: 'Our packaging is completely recyclable and biodegradable',
    Icon: <RecycleIcon className='w-9 h-9' aria-hidden='true' />,
  },
  {
    label: 'Quality Assured',
    desc: 'Every product is tested for quality and environmental safety',
    Icon: <Shield className='w-9 h-9' aria-hidden='true' />,
  },
];

const About = () => {
  return (
    <section className='min-h-screen bg-gray-50'>
      <div className='bg-emerald-600 flex items-center justify-center text-center text-white flex-col gap-4 h-[400px] px-4'>
        <h1 className='text-5xl font-bold'>About GreenCart</h1>
        <p className='text-gray-100 text-2xl'>
          Pioneering sustainable commerce for a better tomorrow
        </p>
      </div>

      <div className='flex flex-col gap-10'>
        <div className='bg-gray-50 flex h-auto items-center justify-center text-center text-gray-900 flex-col gap-4 p-4 sm:p-10 md:p-16'>
          <h3 className='text-4xl font-bold'>Our Mission</h3>
          <p className='text-gray-500 max-w-4xl text-lg leading-relaxed'>
            At GreenCart, we believe that every purchase is a vote for the kind
            of world we want to live in. Our mission is to make sustainable,
            eco-friendly products accessible to everyone while supporting
            ethical business practices and environmental conservation.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-10 p-4 sm:p-10 md:p-16 bg-white'>
          <div className='flex-1 flex gap-4 flex-col '>
            <h3 className='text-gray-900 text-4xl font-bold'>Our Story</h3>
            <div className='flex flex-col gap-4 text-gray-500 leading-relaxed text-md'>
              <span>
                Founded in 2020 by a group of environmental enthusiasts,
                GreenCart started as a small initiative to promote sustainable
                living. What began as a weekend farmers market booth has grown
                into a comprehensive platform for eco-conscious consumers.
              </span>
              <span>
                We carefully curate every product in our catalog, working
                directly with artisans, small businesses, and certified
                sustainable manufacturers. Our team travels the world to source
                the finest eco-friendly products while ensuring fair
                compensation for producers.
              </span>
              <span>
                Today, we're proud to serve thousands of customers who share our
                vision of a more sustainable future. Every order placed through
                GreenCart contributes to environmental conservation projects and
                community development initiatives.
              </span>
            </div>
          </div>

          <div className='flex-1 p-10 flex items-center justify-center flex-col gap-6 bg-emerald-200 rounded-md shadow-sm'>
            <LeafIcon
              className='h-36 w-36 text-emerald-600'
              aria-hidden='true'
            />
            <p className='text-emerald-600 font-bold text-xl text-center'>
              Sustainable Since Day One
            </p>
          </div>
        </div>

        <div className='bg-gray-50 p-4 sm:p-10 md:p-16 flex flex-col gap-10'>
          <div className='flex flex-col gap-3 items-center text-center'>
            <h3 className='text-4xl font-bold text-gray-900'>Our Value</h3>
            <p className='text-gray-500 text-lg font-medium'>
              The principles that guide everything we do
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {cards.map((card) => (
              <Card key={card.label} card={card} />
            ))}
          </div>
        </div>

        <div className='bg-emerald-600 flex flex-col gap-4 sm:gap-10 p-4 sm:p-10 md:p-16 items-center justify-center'>
          <h3 className='text-4xl font-bold text-emerald-50'>Our Impact</h3>

          <div className='flex items-center gap-10 w-full p-3 md:justify-evenly flex-col md:flex-row'>
            <div className='text-emerald-200 flex flex-col gap-2 items-center'>
              <h2 className='text-5xl font-bold'>50k+</h2>
              <span className='text-lg'>Happy Customers</span>
            </div>
            <div className='text-emerald-200 flex flex-col gap-2 items-center'>
              <h2 className='text-5xl font-bold'>100+</h2>
              <span className='text-lg'>Sustainable Brands</span>
            </div>
            <div className='text-emerald-200 flex flex-col gap-2 items-center'>
              <h2 className='text-5xl font-bold'>1M+</h2>
              <span className='text-lg'>Trees Planted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
