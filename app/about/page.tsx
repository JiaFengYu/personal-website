import Image from 'next/image';

export const metadata = {
  title: "About | Jayden Yu",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-4xl text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Left column with image */}
        <div className="md:w-1/3">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md border border-indigo-300 glow-effect">
            <Image
              src="/images/about-image.jpg" // Add this image to your public/images folder
              alt="Jayden Yu working on projects"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        
        {/* Right column with text */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-indigo-200"> 🏃‍♂️ Long-Distance Runner by Day, Math Nerd by Night 💻 </h2>
          
          <p className="mt-4 text-gray-200">
            Hello! I'm Jayden, a software engineer with a deep passion for computer science, mathematics, and creative problem solving!
            When I'm not writing code, you'll either find me training for my next marathon, trying to learn a new sport, tinkering 
            with hardware to optimize GIMPS contribution, or daydreaming about being an astronaut!
          </p>
          
          <p className="mt-4 text-gray-200">
            With a rich background in Computer Science and Mathematics, I enjoy tackling complex, open-ended problems and 
            coming up with elegant, creative solutions. My technical expertise includes full-stack development, machine learning, 
            and systems engineering.
          </p>
        </div>
      </div>
      
      <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg border border-indigo-800 mb-8">
        <h2 className="text-2xl font-bold text-indigo-200">Education</h2>
        <p className="mt-2 text-gray-200">
          Bachelor of Mathematics (Honours) in Computer Science, 
          minor in Pure Mathematics<br />
          University of Waterloo, 2020-2025
        </p>
      </div>
      
      <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg border border-indigo-800 mb-8">
        <h2 className="text-2xl font-bold text-indigo-200">Skills</h2>
        <ul className="mt-2 space-y-1 text-gray-200">
          <li>Languages: JavaScript, TypeScript, Python, C++</li>
          <li>Frameworks: React, Next.js, Node.js, Express</li>
          <li>Other: AWS, Docker, Kubernetes, Machine Learning</li>
        </ul>
      </div>
      
      <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-lg border border-indigo-800">
        <h2 className="text-2xl font-bold text-indigo-200">Interests</h2>
        <p className="mt-2 text-gray-200">
          When I'm not at work or working on side projects, I try to challenge myself in any and every possible way.
          I've been enjoying endurance running, you can find previous races I've ran{' '}
          <a href="https://sportstats.one/profile/222115"
            className="underline text-indigo-300 hover:text-indigo-200" >here</a>!
          I enjoy going to the gym and try to go at least 4 days a week.
          I also try to play basketball, volleyball recreationally whenever I have the chance and a new sport I'm 
          trying to pick up is swimming!
          <br /> 
          Outside the gym, I'm also a hobby mathematician; my favourite class at uWaterloo was undoutably PMATH348, which 
          introduces the wonderful world of Galois Theory. Whenever I have the free time (and the brainpower to), I try to learn about 
          abstract algebra, algebraic geometry, and one day, I'd like to understand category theory (*fingers crossed*).
          As of writing, I am reading Jean-Pierre Serre's {" "}
          <a href="https://www.numdam.org/article/AIF_1956__6__1_0.pdf"
            className="underline text-indigo-300 hover:text-indigo-200" >
          Géométrie algébrique et géométrie analytique</a>. <br />
          As a Montréal kid and <em> un enfant de la loi 101</em>, I've been incredibly blessed to have had the opportunity to 
          learn 4 languages: French as the primary language of education until grade 11, English as a second language, 
          Spanish as part of the IB curriculum, and my parents's native language of Mandarin Chinese. Out of these languages,
          I'm the weakest at Spanish but I absolutely love the language and the entire latin american world. 
          I'm always trying to find opportunities to practice <em>hablar en español y si puedes practicar conmigo, por favor contáctame!</em>
          <br />
          Finally, a fun fact about me is that I'd love to one day raise a fold of Highland Cows on a self sustaining homestead!
          I am a big dairy enjoyer and would love to raise my fold as pets primarily but also with the ability to benefit from a little 
          bit of highland milk! To protect my fold of highland cattle (and other farm animals too), I would want to raise a little family 
          of Great Pyrenees LGD's!
        </p>
      </div>
    </article>
  );
}
