import React from 'react';
import { useNavigate } from 'react-router';

const categories = [
  {
    name: 'Pain Relief',
    slug: 'pain-relief',
    image: 'https://i.ibb.co/j63dfW9/pain-relief.jpg',
    medicineCount: 24,
  },
  {
    name: 'Cold & Fever',
    slug: 'cold-fever',
    image: 'https://i.ibb.co/0q5HtnN/cold-fever.jpg',
    medicineCount: 18,
  },
  {
    name: 'Diabetes',
    slug: 'diabetes',
    image: 'https://i.ibb.co/HVjMhZX/diabetes.jpg',
    medicineCount: 15,
  },
  {
    name: 'Heart Care',
    slug: 'heart-care',
    image: 'https://i.ibb.co/0Mrvq2F/heart-care.jpg',
    medicineCount: 10,
  },
  {
    name: 'Skin Care',
    slug: 'skin-care',
    image: 'https://i.ibb.co/Tq0F7P2/skin-care.jpg',
    medicineCount: 12,
  },
  {
    name: 'Supplements',
    slug: 'supplements',
    image: 'https://i.ibb.co/2N0vL6V/supplements.jpg',
    medicineCount: 20,
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-red-500">Categories of Medicine</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.slug}
              onClick={() => navigate(`/category/${category.slug}`)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-blue-100"
              title={`View all medicines in ${category.name}`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-blue-600">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.medicineCount} medicines</p>
                <button className="mt-3 px-4 py-1 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-full">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
