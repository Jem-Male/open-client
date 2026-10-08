import { client } from "../Base/init";

export const GetCredits = async () => {
    const response = await client.GET("/credits");
    return response.data;
};