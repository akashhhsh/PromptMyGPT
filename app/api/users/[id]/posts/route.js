
import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/dababase"

export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const user = await User.findById({
            _id: params.id
        })
        const prompt = await Prompt.find({
            creator: params.id,
        }).populate("creator");
        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch", { status: 500 });
    }
}