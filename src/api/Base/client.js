import axios from 'axios';

export class Client{
    constructor(BASE_URL, API_KEY){
        this.BASE_URL = BASE_URL;
        this.API_KEY = API_KEY;
    };

    async GET(patch){
        const get_url = `${this.BASE_URL}${patch}`;
        const response = await axios.get(get_url, {
            headers: {
                Authorization: `Bearer ${this.API_KEY}`
            }
        });

        return response.data
    }

    async POST(patch, body){
        const post_url = this.BASE_URL + patch;
        const response = await axios.post(post_url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.API_KEY}`
            },
            body: {
                body
            }
        });

        return response.data;
    };
};

export default Client;