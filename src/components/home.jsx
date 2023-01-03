import React, { useEffect, useState } from 'react';
import LoadingPage from './loadingPage';
import Portfolio from './portfolio';


function Home() {

    const [done, setDone] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDone(true);
        }, 4000)
    },[]);

    return (
        <div>
            {!done ? <LoadingPage/> : <Portfolio/>}
        </div>
    );
}

export default Home;