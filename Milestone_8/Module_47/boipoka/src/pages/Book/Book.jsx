import React from 'react';

const Book = ({ singlebook }) => {
    console.log(singlebook);
    const { image, } = singlebook

    return (
        <div>
            <div className="card bg-base-200  shadow-sm">
                <figure>
                    <img className='w-3/5 h-[300px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;