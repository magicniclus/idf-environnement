import Image from "next/image";

interface HeroPageProps {
  title: string;
  description: string;
  imagePath: string;
}

// This is a server component (no "use client" directive)
const HeroPage = ({ title, description, imagePath }: HeroPageProps) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full" style={{ display: 'block', height: '150px' }} preserveAspectRatio="none">
            <path 
              fill="#FFDE59" 
              fillOpacity="1" 
              d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl text-white">
              {title}
            </h1>
          </div>
          <div className="opacity-0 translate-y-5 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
            <p className="md:text-xl text-sm mb-6 max-w-2xl text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
