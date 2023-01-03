import React from 'react';
import '../css/loadingPage.css'

function loadingPage() {
    return (
        <body className='loadingbody'>
            <div className='bg-area layer-1'></div>
            <div className='bg-area layer-2'></div>
            <div className='bg-area layer-3'></div>
            <div className='banner-text'>
                <h2>Dhruv Bahl</h2>
                <h3>Welcome to my Portfolio!</h3>
            </div>
        </body>
    );
}

export default loadingPage;