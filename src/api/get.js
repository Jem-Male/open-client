import axios from 'axios';

export const GetCount = async (BASE_URL, API_KEY) => {
    console.log("Start get");
    console.log(`Input data - base = ${BASE_URL}   api = ${API_KEY}`);
    const GET_URL = BASE_URL + "/credits";
    const response = await axios.get(GET_URL, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    });
    console.log("data", response);
    return response.data;
};


// curl -X 'GET' \
//   'https://openrouter.ai/api/v1/credits' \
//   -H 'accept: */*' \
//   -H 'Authorization: Bearer sk-or-v1-12345678'