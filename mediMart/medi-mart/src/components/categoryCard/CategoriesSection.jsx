import React from 'react';
import { useNavigate } from 'react-router';

const CategoriesSection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Pain Relief',
      image: 'https://i.ibb.co/j63dfW9/pain-relief.jpg',
      medicineCount: 24,
    },
    {
      name: 'Cold & Fever',
      image: 'https://i.ibb.co/0q5HtnN/cold-fever.jpg',
      medicineCount: 18,
    },
    {
      name: 'Diabetes',
      image: 'https://i.ibb.co/HVjMhZX/diabetes.jpg',
      medicineCount: 15,
    },
    {
      name: 'Heart Care',
      image: 'https://i.ibb.co/0Mrvq2F/heart-care.jpg',
      medicineCount: 10,
    },
    {
      name: 'Skin Care',
      image: 'https://i.ibb.co/Tq0F7P2/skin-care.jpg',
      medicineCount: 12,
    },
    {
      name: 'Supplements',
      image: 'https://i.ibb.co/2N0vL6V/supplements.jpg',
      medicineCount: 20,
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-red-500">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <div
              key={i}
              onClick={() => navigate(`/category/${encodeURIComponent(category.name.toLowerCase())}`)}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              title={`View all medicines in ${category.name}`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.medicineCount} medicines</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
