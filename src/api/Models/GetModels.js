import { client } from "../Base/init";

export const GetModels = async () => {
    const response = await client.GET('/models?limit=1');
    return response.data;
};