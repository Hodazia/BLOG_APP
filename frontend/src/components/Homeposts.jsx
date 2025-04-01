
const HomePosts = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEaeovV57e79hf86twNnk8IwJAHJPhcsjVQ&s" alt="" className="object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      AI in Everyday Life
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@zia23hoda</p>
       <div className="flex space-x-2 text-sm">
       <p>22/2/25</p>
       <p>12:05</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">
        Prominent example of AI nowadays include chatgpt, claude , mistral and with some of its models it is 
        gpt-3.5 to gpt-4-o, metaAI, deepSeek AI by chinese company, and so on. Continuing with text-to image generation, 
        voice to text and LLM which can undertand context behind the questions.
      </p>
    </div>

    </div>
  )
}

export default HomePosts