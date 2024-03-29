import Prompt from "@models/prompt";
import { connectToDB } from "@utils/dababase"

// GET request
export const GET = async (req, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate("creator");
        if (!prompt) {
            return new Response("Prompt not found!", { status: 404 });
        }
        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch", { status: 500 });
    }
}

// PATCH (to update)
export const PATCH = async (req, { params }) => {
    const { prompt, tags } = await req.json();

    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Prompt not found!", { status: 404 });
        }
        existingPrompt.prompt = prompt;
        existingPrompt.tags = tags;

        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), { status: 200 })

    } catch (error) {
        return new Response("Failed to update prompt", { status: 500 })
    }

}


// Delete (to delete)
export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();
        await Prompt.findByIdAndRemove(params.id);
        return new Response("Prompt deleted Successfully", { status: 200 })

    } catch (error) {
        return new Response("Failed to delete prompt", { status: 500 })
    }
}