import React, { useContext } from 'react';
import { AssetContext } from './Familytree';

const Special = ({asset}) => {
    const newAsset= useContext(AssetContext)
    return (
        <div>
            <h3>Special</h3>
            <p>{asset}</p>
        </div>
    );
};

export default Special;