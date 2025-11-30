import React from 'react';

const GetInTouch = () => {
    return (
        <div className='text-center flex justify-center items-center'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-3xl logotext">
                    <h1 className='text-3xl md:text-5xl font-bold logotext capitalize border-b-2'>get in touch</h1>
                </legend>
                <div className="join">
                    <input type="text" className="input join-item" placeholder="Email" />
                    <button className="btn join-item">Join Community</button>
                </div>
            </fieldset>
        </div>
    );
};

export default GetInTouch;