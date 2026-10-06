import { API_KEY, BASE_URL } from '../config/config';
import { GetCount } from '../api/get';
import { useEffect, useState } from 'react';

export function Count() {
    const [credits, setCredits] = useState('Loading...');
    
    useEffect(() => {
        const load = async () => {
            try{
                const res = await GetCount(BASE_URL, API_KEY);
                const {total_credits, total_usage} = res.data;
                setCredits(total_credits - total_usage);
            } catch (err){
                console.log(`Error - ${err}`)
                setCredits('Error: ' + err.message)
            }
        };
        
        load();
    },[]);
    
    return (
        <span>Your data - {credits}</span>
    );
}