import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroVilla from "@/assets/hero-villa.jpg";
import heroHotel from "@/assets/hero-hotel.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroJapandi from "@/assets/hero-japandi.jpg";
import heroSpa from "@/assets/hero-spa.jpg";
import heroOffice from "@/assets/hero-office.jpg";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent mb-6">Portfolio</p>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-foreground mb-8 leading-[1.1]">
              Selected Works
            </h1>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed">
              A curated collection of luxury interior projects spanning hospitality, residential, and commercial design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-24 lg:space-y-32">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={project.link}
                className="group block"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-4">
                      {project.category}
                    </p>
                    <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="font-sans text-sm text-muted-foreground mb-6">
                      {project.location} • {project.area}
                    </p>
                    <p className="font-sans text-base text-foreground/80 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3 font-sans text-sm uppercase tracking-[0.2em] text-foreground group-hover:text-accent transition-colors duration-300">
                      View Project
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const projects = [
  {
    title: "Dubai Hills Luxury Villa",
    category: "Luxury Residential",
    location: "Dubai Hills, UAE",
    area: "400 m² / 4,306 sq ft",
    description: "A contemporary luxury villa embodying refined modernism through curated materiality. Featuring floor-to-ceiling windows, Calacatta marble, natural oak millwork, and bespoke furniture from Minotti and Poliform. Each space flows seamlessly, creating a serene sanctuary of understated opulence.",
    image: heroVilla,
    link: "/projects/dubai-villa",
  },
  {
    title: "Maldives Presidential Suite",
    category: "5-Star Hospitality",
    location: "Overwater Resort, Maldives",
    area: "280 m² / 3,014 sq ft",
    description: "An overwater sanctuary where tropical modernism meets luxury. Natural materials, B&B Italia furniture, and floor-to-ceiling ocean views create an immersive experience. Warm teak, brass accents, and biophilic elements define this serene escape.",
    image: heroHotel,
    link: "/projects/maldives-suite",
  },
  {
    title: "Contemporary Fine Dining",
    category: "Hospitality & F&B",
    location: "Mumbai, India",
    area: "180 m² / 1,938 sq ft",
    description: "A high-end restaurant blending contemporary elegance with atmospheric sophistication. Marble tables with brass inlay, emerald velvet seating, and dramatic lighting create an unforgettable dining experience. Natural oak paneling and a living green wall add organic warmth.",
    image: heroRestaurant,
    link: "/projects/restaurant",
  },
  {
    title: "Japandi Penthouse",
    category: "Luxury Residential",
    location: "Pune, India",
    area: "150 m² / 1,615 sq ft",
    description: "Where Japanese minimalism meets Scandinavian warmth. Clean lines, natural materials, and a muted palette create a tranquil urban retreat. Low-profile furniture in oak and linen, wabi-sabi textures, and curated greenery embody serene sophistication.",
    image: heroJapandi,
    link: "/projects/japandi-penthouse",
  },
  {
    title: "Luxury Wellness Spa",
    category: "Commercial Wellness",
    location: "Confidential",
    area: "120 m² / 1,292 sq ft",
    description: "A sanctuary of rejuvenation featuring organic curves, natural stone, and soft ambient lighting. Cream terrazzo, brass accents, blush velvet, and abundant greenery create a healing environment. A Himalayan salt wall and water features enhance the sensory experience.",
    image: heroSpa,
    link: "/projects/wellness-spa",
  },
  {
    title: "Biophilic Office Lobby",
    category: "Corporate Design",
    location: "Tech Company HQ",
    area: "200 m² / 2,153 sq ft",
    description: "A modern workspace integrating nature through a dramatic living green wall and abundant natural light. Clean contemporary lines meet organic elements with designer lounge seating, natural oak, and hanging botanicals—redefining corporate elegance.",
    image: heroOffice,
    link: "/projects/office-lobby",
  },
];

export default Projects;
