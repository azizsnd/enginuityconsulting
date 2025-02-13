import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-primary py-20 text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center min-h-[80vh]">

        {/* Texte centré */}
        <div className="md:w-1/2 px-10 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Innovative Mechanical Solutions for Modern Industries
          </h1>
          <p className="text-lg mb-6">
            Strategic excellence | Business consulting | Innovation
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded text-white font-semibold">
              Button
            </button>
            <button className="bg-transparent border border-white px-6 py-2 rounded text-white font-semibold hover:bg-blue-800">
              Learn more
            </button>
          </div>
        </div>

        {/* Image à droite, cachée sur mobile */}
        <div className="hidden my-30 md:block md:w-2/5">
          <img
            src="img22.png"
            alt="Industrial Solutions"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="container bg-white text-primary  mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h2 className="text-3xl  font-bold">1k+</h2>
          <p>Supported businesses</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">1k+</h2>
          <p>Projects done</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">4k+</h2>
          <p>Clients worldwide</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 text-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What services do we offer for your business</h2>
          <p className="text-center text-lg mb-12">
            Explore our services and see how we can help transform your business needs into reality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Product Design', description: 'Develop new product concepts and bring innovative designs to life.' },
              { title: 'Engineering Analysis', description: 'Analyze complex systems and provide solutions for optimal performance.' },
              { title: 'Failure Troubleshooting', description: 'Diagnose and solve technical issues effectively.' },
              { title: 'Manufacturing Process', description: 'Optimize your manufacturing processes for better efficiency.' },
              { title: 'Digital Technology', description: 'Leverage modern technologies for smarter solutions.' },
              { title: 'Energy Efficiency', description: 'Implement energy-saving solutions for sustainability.' },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link href="#" className="text-blue-600 hover:underline font-semibold">
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Section Added */}
      <div className="bg-primary text-white ">
  <div className="container mx-auto  flex flex-col md:flex-row items-center">
    {/* Left Part - Image */}
    <div className="md:w-max flex justify-center">
      <img 
        src="img33.png" 
        alt="Industrial Innovation" 
        className="w-full max-w-max  shadow-lg"
      />
    </div>
    
    {/* Right Part - Text Content */}
    <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-6">
      <h2 className="text-3xl font-bold mb-6">
        Precision engineering solutions for a smarter industrial future
      </h2>
      <p className="text-lg">
        We provide cutting-edge mechanical innovations to enhance your business efficiency and growth.
      </p>
    </div>
  </div>
</div>


    </div> 
    
    
  );
}
