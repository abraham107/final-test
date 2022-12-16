import React, {useEffect} from 'react';

function Home()
{
    useEffect(() =>{
        document.title = "Home";
    },[]);

    return(
        <div className="container">
            <h1 id="WelcomeHeader">Replace with your content</h1>
            <hr/>
        </div>
        
    );
}

export default Home;