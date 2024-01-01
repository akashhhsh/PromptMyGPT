import Prompt from "@models/prompt";
import { connectToDB } from "@utils/dababase"

export const POST = async (req) => {

    const { userId, prompt, tags } = await req.json();

    try {
        await connectToDB();
        const newPrompt = await Prompt({ creator: userId, prompt, tags })
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 })

    } catch (err) {
        console.log(err)
        return new Response("Failed to create a new Prompt", { status: 500 })
    }

}