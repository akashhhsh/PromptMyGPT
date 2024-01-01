import Prompt from "@models/prompt";
import { connectToDB } from "@utils/dababase"

export const GET = async (req) => {
    try {
        await connectToDB();
        const prompt = await Prompt.find({}).populate("creator");
        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch", { status: 500 });
    }
}