import React from 'react';
import { useParams } from 'react-router';

const allMedicines = [
  // Sample data, add your own fields as needed
  {
    id: 1,
    name: 'Paracetamol',
    category: 'pain relief',
    price: 50,
    available: true,
    expiryDate: '2025-12-31',
  },
  {
    id: 2,
    name: 'Ibuprofen',
    category: 'pain relief',
    price: 80,
    available: false,
    expiryDate: '2024-06-30',
  },
  {
    id: 3,
    name: 'Cough Syrup',
    category: 'cold & fever',
    price: 120,
    available: true,
    expiryDate: '2025-03-15',
  },
  {
    id: 4,
    name: 'Insulin',
    category: 'diabetes',
    price: 500,
    available: true,
    expiryDate: '2026-01-01',
  },
  {
    id: 5,
    name: 'Vitamin C',
    category: 'supplements',
    price: 200,
    available: true,
    expiryDate: '2025-08-15',
  },
  // Add more medicine entries...
];

const CategoryDetails = () => {
  const { categoryName } = useParams();

  // Filter medicines by category (case-insensitive)
  const medicines = allMedicines.filter(
    (med) => med.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 capitalize text-red-500">
        Medicines in "{categoryName.replace(/-/g, ' ')}"
      </h1>

      {medicines.length === 0 ? (
        <p className="text-center text-gray-500">No medicines found in this category.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="text-left py-3 px-4">Medicine Name</th>
                <th className="text-left py-3 px-4">Price (৳)</th>
                <th className="text-left py-3 px-4">Availability</th>
                <th className="text-left py-3 px-4">Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med) => (
                <tr key={med.id} className="border-b hover:bg-green-50">
                  <td className="py-3 px-4">{med.name}</td>
                  <td className="py-3 px-4">{med.price}</td>
                  <td className="py-3 px-4">
                    {med.available ? (
                      <span className="text-green-600 font-semibold">Available</span>
                    ) : (
                      <span className="text-red-600 font-semibold">Out of Stock</span>
                    )}
                  </td>
                  <td className="py-3 px-4">{med.expiryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;
