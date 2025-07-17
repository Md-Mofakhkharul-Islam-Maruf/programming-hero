import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// Sample medicine data
const medicineData = [
  // Pain Relief
  {
    id: 1,
    name: 'Paracetamol',
    category: 'pain-relief',
    price: 30,
    image: 'https://i.ibb.co/sb9GQqD/paracetamol.jpg',
    description: 'Used to treat pain and fever.',
    type: 'Tablet',
    stock: 20,
  },
  {
    id: 2,
    name: 'Ibuprofen',
    category: 'pain-relief',
    price: 40,
    image: 'https://i.ibb.co/mhW54P2/ibuprofen.jpg',
    description: 'Effective pain relief and anti-inflammatory.',
    type: 'Tablet',
    stock: 35,
  },
  {
    id: 3,
    name: 'Aspirin',
    category: 'pain-relief',
    price: 35,
    image: 'https://i.ibb.co/0Mrvq2F/heart-care.jpg',
    description: 'Used for mild to moderate pain relief.',
    type: 'Tablet',
    stock: 25,
  },

  // Cold & Fever
  {
    id: 4,
    name: 'Cough Syrup',
    category: 'cold-fever',
    price: 15,
    image: 'https://i.ibb.co/DfLcRjZ/cough-syrup.jpg',
    description: 'Relieves cough symptoms effectively.',
    type: 'Syrup',
    stock: 30,
  },
  {
    id: 5,
    name: 'Cold Flu Tablets',
    category: 'cold-fever',
    price: 25,
    image: 'https://i.ibb.co/FmF5X06/cold-flu.jpg',
    description: 'For relief from cold and flu symptoms.',
    type: 'Tablet',
    stock: 40,
  },
  {
    id: 6,
    name: 'Nasal Spray',
    category: 'cold-fever',
    price: 18,
    image: 'https://i.ibb.co/6ZR7D6m/nasal-spray.jpg',
    description: 'Decongestant nasal spray.',
    type: 'Spray',
    stock: 50,
  },

  // Diabetes
  {
    id: 7,
    name: 'Insulin',
    category: 'diabetes',
    price: 450,
    image: 'https://i.ibb.co/WVcGcbd/insulin.jpg',
    description: 'Regulates blood sugar levels.',
    type: 'Injection',
    stock: 10,
  },
  {
    id: 8,
    name: 'Metformin',
    category: 'diabetes',
    price: 60,
    image: 'https://i.ibb.co/3rsTqpp/metformin.jpg',
    description: 'Oral medication for type 2 diabetes.',
    type: 'Tablet',
    stock: 40,
  },
  {
    id: 9,
    name: 'Glipizide',
    category: 'diabetes',
    price: 55,
    image: 'https://i.ibb.co/YjpQ3nB/glipizide.jpg',
    description: 'Helps control blood sugar levels.',
    type: 'Tablet',
    stock: 35,
  },

  // Heart Care
  {
    id: 10,
    name: 'Aspirin',
    category: 'heart-care',
    price: 50,
    image: 'https://i.ibb.co/0Mrvq2F/heart-care.jpg',
    description: 'Used for heart-related conditions.',
    type: 'Tablet',
    stock: 15,
  },
  {
    id: 11,
    name: 'Atorvastatin',
    category: 'heart-care',
    price: 80,
    image: 'https://i.ibb.co/nCK8zXz/atorvastatin.jpg',
    description: 'Lowers cholesterol to prevent heart disease.',
    type: 'Tablet',
    stock: 25,
  },
  {
    id: 12,
    name: 'Beta Blocker',
    category: 'heart-care',
    price: 70,
    image: 'https://i.ibb.co/8mTfNs6/beta-blocker.jpg',
    description: 'Controls heart rate and blood pressure.',
    type: 'Tablet',
    stock: 20,
  },

  // Skin Care
  {
    id: 13,
    name: 'Vitamin Cream',
    category: 'skin-care',
    price: 25,
    image: 'https://i.ibb.co/Tq0F7P2/skin-care.jpg',
    description: 'Helps improve skin health.',
    type: 'Cream',
    stock: 40,
  },
  {
    id: 14,
    name: 'Antifungal Cream',
    category: 'skin-care',
    price: 30,
    image: 'https://i.ibb.co/pLJZytX/antifungal-cream.jpg',
    description: 'Treats fungal skin infections.',
    type: 'Cream',
    stock: 35,
  },
  {
    id: 15,
    name: 'Sunscreen Lotion',
    category: 'skin-care',
    price: 20,
    image: 'https://i.ibb.co/NF3YKYF/sunscreen-lotion.jpg',
    description: 'Protects skin from UV rays.',
    type: 'Lotion',
    stock: 50,
  },

  // Supplements
  {
    id: 16,
    name: 'Multivitamin',
    category: 'supplements',
    price: 35,
    image: 'https://i.ibb.co/2N0vL6V/supplements.jpg',
    description: 'Provides essential vitamins and minerals.',
    type: 'Tablet',
    stock: 50,
  },
  {
    id: 17,
    name: 'Vitamin D',
    category: 'supplements',
    price: 40,
    image: 'https://i.ibb.co/FJrkQTP/vitamind.jpg',
    description: 'Supports bone and immune health.',
    type: 'Tablet',
    stock: 45,
  },
  {
    id: 18,
    name: 'Fish Oil',
    category: 'supplements',
    price: 55,
    image: 'https://i.ibb.co/Rb0pyqR/fish-oil.jpg',
    description: 'Supports heart and brain health.',
    type: 'Capsule',
    stock: 30,
  },
];

const CategoryDetailsPage = () => {
  const { categoryName } = useParams(); // from URL param
  const [medicines, setMedicines] = useState([]);
  const [modalMedicine, setModalMedicine] = useState(null);

  useEffect(() => {
    const filtered = medicineData.filter((med) => med.category === categoryName);
    setMedicines(filtered);
  }, [categoryName]);

  const handleSelect = (medicine) => {
    alert(`${medicine.name} added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-red-500 mb-6 capitalize text-center">
        {categoryName.replace('-', ' ')} Medicines
      </h2>

      {medicines.length === 0 ? (
        <p className="text-center text-gray-500">No medicines found for this category.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded shadow-sm table-auto">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Type</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med) => (
                <tr
                  key={med.id}
                  className="border-t text-center hover:bg-gray-100 align-middle"
                  style={{ verticalAlign: 'middle' }}
                >
                  <td className="p-2 align-middle">
                    <img
                      src={med.image}
                      alt={med.name}
                      className="w-16 h-16 object-cover mx-auto rounded"
                    />
                  </td>
                  <td className="p-2 font-semibold align-middle">{med.name}</td>
                  <td className="p-2 align-middle">{med.type}</td>
                  <td className="p-2 align-middle">৳{med.price}</td>
                  <td className="p-2 align-middle">{med.stock}</td>
                  <td className="p-2 mt-4 flex items-center justify-center gap-2 align-middle">
                    <button
                      onClick={() => handleSelect(med)}
                      className="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1"
                    >
                      Select
                    </button>
                    <button
                      onClick={() => setModalMedicine(med)}
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-1"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modalMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative border-2 border-blue-500">
            <button
              onClick={() => setModalMedicine(null)}
              className="absolute top-3 right-3 text-xl text-red-600 hover:text-red-800"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">{modalMedicine.name}</h3>
            <img
              src={modalMedicine.image}
              alt={modalMedicine.name}
              className="w-full h-48 object-cover rounded mb-4 border"
            />
            <p><strong>Type:</strong> {modalMedicine.type}</p>
            <p><strong>Price:</strong> ৳{modalMedicine.price}</p>
            <p><strong>Stock:</strong> {modalMedicine.stock}</p>
            <p className="mt-2">{modalMedicine.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetailsPage;
