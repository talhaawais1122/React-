import React from 'react';
import { useParams } from 'react-router-dom';

export function Users() {

    let { userId } = useParams(); // Destructure userId from useParams()

    return (
        <>
            <div className='bg-black m-5 p-5 whitespace-normal text-slate-100 bg-center text-center'>
                Hi User: {userId};
            </div> 
        </>
    );
}
