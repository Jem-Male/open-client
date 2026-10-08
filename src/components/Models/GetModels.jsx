import { useEffect, useState } from "react";
import { GetModels } from "../../api/Models/GetModels";

const Models = () => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const load = async () => {
            try{
                const response = await GetModels();
                setModels(response);
            } catch (err) {
                console.log(`Error - ${err}`);
                setModels(`Error - ${err.message}`);
            };
        };

        load();
    }, []);

    return (
        <>
            {models.map((model) =>(
                <>
                    <h3>Models name: {model.name}</h3>
                    <div>model id: {model.id}</div>
                    <div>canonical_slug: {model.canonical_slug}</div>
                    <div>description: {model.description}</div>
                </>
            ))}
        </>
    );
};

export default Models;