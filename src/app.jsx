import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import Planet from './components/planet';
import { motion } from 'framer-motion';

const useLineReveal = () => {
  useEffect(() => {
    const lines = document.querySelectorAll('.line-reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      { threshold: 0.8 }
    );

    lines.forEach(line => observer.observe(line));
    return () => lines.forEach(line => observer.unobserve(line));
  }, []);
};

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const App = () => {
  useLineReveal();

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden isolate">
      {/* === 3D Background Canvas === */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
          <Stars radius={100} depth={100} count={5000} factor={4} fade />
        </Canvas>
      </div>

      {/* === Starfield Overlay === */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="main opacity-100 scale-[1]"></div>
        <div className="main opacity-70 scale-[1.5]"></div>
        <div className="main opacity-40 scale-[2]"></div>
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* === Hero Section === */}
      <section className="h-screen flex items-center justify-center relative">
        <h1 className="m-0 p-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-text text-[6rem] md:text-[10rem] tracking-widest font-[superbrigade] zoom-in text-center">
          KYLE GENARIE
        </h1>
      </section>

<main className="relative z-10 w-full space-y-16 text-custom-blue -mt-4 pb-40">

    <div className="absolute w-full h-full z-0 isolate">
  <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
  <Planet textureUrl="/textures/earth.jpg" position={[-5.5, 6.5, -14]} size={1.5} />
  <Planet textureUrl="/textures/mars.jpg" position={[5.5, 4.5, -14]} size={1.5} />
  <Planet textureUrl="/textures/neptune.jpg" position={[-5.5, -4, -14]} size={1.5} />
    <Planet textureUrl="/textures/moon.jpg" position={[6, -5, -14]} size={1.5} />
</Canvas>
  </div>

  <section className="pt-8 text-center pb-10">
    <h2 className="text-9xl opacity-70 font-[sddystopian] mb-10 line-reveal" data-delay="0">About Me</h2>
    <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="200">
      I am a passionate and adaptable Software Developer with a strong academic foundation and hands-on experience in designing and delivering full-stack </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="400">
      applications for real-world clients. With a B.S. in Computer Science from the University of Houston–Clear Lake and an A.S. in Computer Science from College of the </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="600">
      Mainland, I bring both formal education and practical problem-solving to every project I take on. Over the past few years, I’ve built and deployed production-ready </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="800">
      applications for small businesses as a freelance consultant, specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I have also worked extensively </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="1000">
      with modern technologies such as Python, Java, C#, C++, SQL, Next.js, ASP.NET Core, and CesiumJS for building scalable systems, cloud-hosted tools, and </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="1200">
      interactive 3D experiences.My work includes integrating third-party APIs like Stripe, Google Maps, OpenTripMap, and Yelp to deliver features such as geolocation, </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="1400">
      real-time reviews, secure payments, and dynamic search. I have designed responsive UIs that adapt to all devices, optimized backend performance with custom </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="1600">
      REST APIs, and implemented CI/CD pipelines using Docker and GitHub Actions to streamline deployment workflows. I enjoy creating user-centered solutions that </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="1800">
      blend functionality with seamless experience — from a 3D globe-based travel planner to weather apps powered by OpenAI and real-time APIs. I am experienced </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="2000">
      with Agile methodologies and believe in iterative development, clear communication, and constant learning. Whether collaborating with a team or working </p>
      <p className="text-base font-sans max-w-6xl mx-auto line-reveal" data-delay="2200">
      independently, I strive to write clean, maintainable code and deliver high-quality software that makes an impact. </p>
  </section>
  <section className="px-[10vw] py-20 text-custom-blue">
  <h2 className="text-9xl opacity-70 font-[sddystopian] mb-20 text-center line-reveal">Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* === Project Card 1 === */}
    <div className="bg-[#1a1a1a] p-2 rounded-t-xl overflow-hidden border-b border-gray-800 line-reveal" data-delay= "500">
  <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-inner">
    <img
      src="/images/traverse.jpg"
      alt="Travel Itinerary Planner"
      className="w-full h-full object-contain"
    />
  </div>
      <div className="p-8">
        <h3 className="text-3xl font-semibold mb-2 tracking-wide">Travel Itinerary Planner</h3>
        <p className="italic text-sm text-gray-400 mb-4">CesiumJS, OpenTripMap API, Google Places</p>
        <p className="text-base mb-6">
          A 3D globe-based travel planner where users can search for cities, view POIs like restaurants and attractions,
          and save trip itineraries with notes. Integrated with Cesium World Terrain and third-party APIs.
        </p>
        <div className="text-center">
        <a
          href="https://youtu.be/7bnjq6lKPgc?si=LdrDHS16bb3Mby3j"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            View Live Demo
          </a>
        </div>
      </div>
    </div>

    {/* === Project Card 2 === */}
    <div className="bg-[#1a1a1a] p-2 rounded-t-xl overflow-hidden border-b border-gray-800 line-reveal" data-delay= "1000">
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-inner">
        <img
          src="/images/bth-demo.jpg"
          alt="Beat The Hero"
          className="w-full h-full object-contain pt-0"
        />
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-semibold mb-2 tracking-wide">Beat the Hero Game</h3>
        <p className="italic text-sm text-gray-400 mb-4">Unity, C#</p>
        <p className="text-base mb-6">
          A hero vs villain 2D platform game where the hero must reach the end of three levels to beat the game.
          The villain's goal is to place traps in the way of the hero to stop them from completing the level. 
        </p>
        <div className="text-center">
          <a
            href="https://youtu.be/VMI4HcZAxj8?si=CWWEAiqI5oIi63YX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            View Live Demo
          </a>
        </div>
      </div>
    </div>

  </div>
</section>


  <section className="py-20  text-custom-blue text-center line-reveal mb-20">
  <h2 className="text-9xl opacity-70 font-[sddystopian] mb-0">Contact</h2>
  {/* === Contact Form === */}
  <h2 className="text-base text-white font-sans md-10">Let's Connect!</h2>
  <form
    action="https://formsubmit.co/kylegnre118@gmail.com"
    method="POST"
    className="max-w-3xl mx-auto space-y-6 px-4 md:px-0 text-left"
  >

    <div className="flex flex-col md:flex-row gap-6 mt-5">
      <input
        type="text"
        name="First Name"
        placeholder="First Name"
        required
        className="w-full p-3 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="Last Name"
        placeholder="Last Name"
        required
        className="w-full p-3 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <input
      type="email"
      name="Email"
      placeholder="Email Address"
      required
      className="w-full p-3 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      name="Comments"
      placeholder="Comments..."
      required
      rows="5"
      className="w-full p-3 rounded bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>

    {/* Optional Hidden Inputs */}
    <input type="hidden" name="_subject" value="New Portfolio Contact" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />

    <div className="text-center">
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-sm font-semibold transition duration-200"
  >
    Submit 
  </button>
</div>


  </form>
  
  <div className="flex justify-center gap-12 items-center mt-10">
    {/* Gmail */}
    <a href="mailto:kylegnre118@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
      <img src="/icons/gmail.jpg" alt="Gmail" className="w-12 h-12" />
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/kyle-genarie-2ba31b328/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
      <img src="/icons/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
    </a>

    {/* GitHub */}
    <a href="https://github.com/kyleGnre" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
      <img src="/icons/github.png" alt="GitHub" className="w-12 h-12" />
    </a>
  </div>
</section>


</main>


    </div>
  )
}

export default App


