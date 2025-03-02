export default function About() {
    return (
      <div className="prose prose-lg dark:prose-invert max-w-none px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-normal mb-6 sm:mb-8">about</h1>
        
        <div className="space-y-4 sm:space-y-6">
          <p className="text-lg sm:text-xl">
            Hello. This is a space for my thoughts and reflections on AI, technology, learning, and whatever else crosses my mind.
          </p>
          
          <h2 className="text-xl sm:text-2xl font-normal mt-8 sm:mt-12 mb-3 sm:mb-4">contact</h2>
          <p className="text-lg sm:text-xl">
            If you'd like to get in touch, you can reach me at <a href="mailto:junupark1@cau.ac.kr" className="underline text-[#ccbbac]">junupark1@cau.ac.kr</a>.
          </p>
        </div>
      </div>
    );
  }