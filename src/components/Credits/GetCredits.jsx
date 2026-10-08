import { GetCredits } from '../../api/Credits/GetCredits';
import { useEffect, useState } from 'react';

const Credits = () => {
    const [credits, setCredits] = useState('Loading...');
    
    useEffect(() => {
        const load = async () => {
            try{
                const response = await GetCredits();
                const {total_credits, total_usage} = response;
                setCredits(total_credits - total_usage);
            } catch (err){
                console.log(`Error - ${err}`)
                setCredits(`Error: ${err.message}`)
            };
        };
        
        load();
    },[]);
    
    return (
        <span>Your data - {credits}</span>
    );
}

export default Credits;