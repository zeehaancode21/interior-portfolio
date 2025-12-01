import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroVilla from "@/assets/hero-villa.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroVilla})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        </div>
        
        <div className="relative z-10 text-center text-ivory px-6 max-w-5xl mx-auto">
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <p className="font-sans text-sm uppercase tracking-[0.3em] mb-6 text-gold">Interior Designer</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-[1.1]">
              Curating Timeless<br />Spatial Poetry
            </h1>
            <p className="font-sans text-lg md:text-xl text-ivory/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Specializing in contemporary luxury interiors for discerning clients worldwide
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-charcoal font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300 group"
            >
              View Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent mb-4">Selected Works</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground">
              Portfolio Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <Link
                key={index}
                to={project.link}
                className="group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] bg-muted overflow-hidden mb-6 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
                </div>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-2">
                  {project.category}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {project.location}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 font-sans text-sm uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors duration-300 group"
            >
              View All Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent mb-6">Design Philosophy</p>
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mb-8 leading-relaxed">
              "Every space tells a story. I craft narratives through materiality, light, and form—creating environments where luxury meets livability."
            </h2>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-sans text-sm uppercase tracking-[0.2em] text-foreground hover:text-accent transition-colors duration-300 group"
            >
              Learn More About My Approach
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const featuredProjects = [
  {
    title: "Dubai Hills Villa",
    category: "Luxury Residential",
    location: "Dubai, UAE • 2025",
    image: "/placeholder.svg",
    link: "/projects/dubai-villa",
  },
  {
    title: "Maldives Resort Suite",
    category: "5-Star Hospitality",
    location: "Maldives • 2024",
    image: "/placeholder.svg",
    link: "/projects/maldives-suite",
  },
  {
    title: "Contemporary Restaurant",
    category: "Commercial Design",
    location: "Mumbai, India • 2025",
    image: "/placeholder.svg",
    link: "/projects/restaurant",
  },
];

export default Home;

// Add fadeIn animation to index.css
