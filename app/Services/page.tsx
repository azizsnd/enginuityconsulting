import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-primary py-20 text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center">

        {/* Texte centré */}
        <div className="md:w-1/2 px-10 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            We bring your business to new heights
          </h1>
          <p className="text-lg mb-6">
            Strategic excellence | Business consulting | Innovation
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-secondary px-6 py-2 rounded text-white font-semibold hover:bg-blue-800">
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
      <div className="bg-white text-primary w-full px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex gap-4 items-center justify-center md:flex-col">
          <h2 className="text-4xl  font-bold">1k+</h2>
          <p className='w-52'>Supported businesses</p>
        </div>
        <div className="flex gap-4 items-center justify-center md:flex-col">
          <h2 className="text-4xl font-bold">1k+</h2>
          <p className='w-52'>Projects done</p>
        </div>
        <div className="flex gap-4 items-center justify-center md:flex-col">
          <h2 className="text-4xl font-bold">4k+</h2>
          <p className='w-52'>Clients worldwide</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-background text-primary py-16">
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

        <div className="bg-primary text-white py-10 flex flex-col items-center gap-4 text-2xl font-semibold" >
          <p>Want to know more?</p>
          <p>Contact with our business consultant</p> 
          <button className="bg-secondary px-6 py-2 rounded text-xl font-semibold hover:bg-blue-800">
              Learn more
          </button>   
        </div> 
        {/* New Section Added */}
      <div className="bg-white text-primary py-20">
        <div className="container mx-auto  flex flex-col md:flex-row items-center">
          {/* Left Part - Image */}
          <div className="md:w-max flex justify-center">
            <img
              src="img33.png"
              alt="Industrial Innovation"
              className="w-2/3 max-w-max  shadow-lg"
            />
          </div>
          {/* Right Part - Text Content */}
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-6">
            <h2 className="text-3xl font-bold mb-6">
              We work with you to make your vision a reality
            </h2>
            <p className="text-lg text-textcolor">
            Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam malesuada varius felis. 
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}
