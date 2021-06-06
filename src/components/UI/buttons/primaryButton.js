import React from 'react'

const PrimaryButton = ({ title, clickHandler }) => {
    return (
        <button
            onClick={clickHandler}
            className="bg-CTA px-4 py-2 text-white font-medium rounded-lg focus:outline-none">
            {title}
        </button>
    )
}

export default PrimaryButton
