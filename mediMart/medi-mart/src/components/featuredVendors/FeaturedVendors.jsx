import React from 'react';

const vendors = [
  {
    id: 1,
    name: 'HealthPlus Pharmacy',
    banner: 'https://i.ibb.co/yP8nPPF/pharma-banner1.jpg',
    rating: 4.9,
    location: 'Dhaka, BD',
  },
  {
    id: 2,
    name: 'MediCare Store',
    banner: 'https://i.ibb.co/ckFv3w8/pharma-banner2.jpg',
    rating: 4.7,
    location: 'Chattogram, BD',
  },
  {
    id: 3,
    name: 'Green Pharma',
    banner: 'https://i.ibb.co/jhsVprz/pharmacy3.png',
    rating: 4.8,
    location: 'Sylhet, BD',
  },
  {
    id: 4,
    name: 'Blue Pharma',
    banner: 'https://i.ibb.co/fvxPSM4/pharmacy1.png',
    rating: 4.8,
    location: 'Rangpur, BD',
  },
];

const FeaturedVendors = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
          🏥 Trusted Vendor Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-60"
            >
              <img
                src={vendor.banner}
                alt={vendor.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold">{vendor.name}</h3>
                <p className="text-sm">{vendor.location}</p>
                <p className="text-yellow-400 font-semibold text-sm">
                  ⭐ {vendor.rating} / 5.0
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
