import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        // console.log(formData.entries())
        const newCoffee = Object.fromEntries(formData.entries()) // collecting form's all fields value
        console.log(newCoffee)

        // Post data to db
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(`Coffee data added to Database`)
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }

    return (
        <div className='p-28 bg-base-300 text-center'>
            <div className='space-y-5'>
                <h1 className='text-6xl font-semibold'>Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            <form action="" onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-5'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name='name' placeholder="Coffee name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" name='price' placeholder="Price" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" name='supplier' placeholder="supplier" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2">
                        <label className="label">Taste</label>
                        <input type="text" className="input w-full" name='taste' placeholder="taste" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2">
                        <label className="label">Category</label>
                        <input type="text" className="input w-full" name='category' placeholder="category" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" name='details' placeholder="details" />
                    </fieldset>
                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-2 mb-3">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" name='photo' placeholder="Photo URL" />
                </fieldset>

                <input type="submit" className="btn w-full" value='Add Coffee' />
            </form>
        </div>
    );
};

export default AddCoffee;