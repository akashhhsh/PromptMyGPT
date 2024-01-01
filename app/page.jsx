import Feed from "@components/Feed";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI powered prompt</span>
      </h1>
      <p className="desc text-center">
        PromptmyGPT is a service based website which will provide you usefull
        prompts that helps GPT & you to give more amazing and resourcefull
        answers.
      </p>
      <Feed />
    </section>
  );
}

export default Home;
