import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import designerPortrait from "@/assets/designer-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent mb-6">About</p>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-foreground mb-8 leading-[1.1]">
              Crafting Spatial Excellence
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Portrait */}
            <div className="relative">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img 
                  src={designerPortrait} 
                  alt="Mohammed Zeeshan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 space-y-4">
                <div>
                  <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-2">Based in</p>
                  <p className="font-sans text-base text-foreground">India, GCC & Worldwide</p>
                </div>
                <div>
                  <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-2">Specializations</p>
                  <p className="font-sans text-base text-foreground">Contemporary Luxury, Modern Minimalist, Arabian Modern, Japandi, 5-Star Hospitality</p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  My journey into luxury interior design is rooted in a foundation most designers don't possess—structural precision. With a background in civil engineering, I approach every project with an architect's eye for spatial integrity and a designer's passion for aesthetic refinement.
                </p>
                
                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  This unique intersection allows me to envision interiors that are not only visually stunning but structurally intelligent. I understand how spaces are built, which enables me to push creative boundaries while respecting the architecture's inherent logic. Every material choice, every custom detail, every lighting decision is informed by both technical mastery and artistic intuition.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  My portfolio reflects a dedication to contemporary luxury across diverse typologies—from 400m² private villas in Dubai Hills to presidential suites in the Maldives, from Michelin-caliber restaurants to serene Japandi penthouses. Each project is a bespoke narrative, carefully curated to reflect the client's aspirations while embodying timeless sophistication.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  I specialize in creating environments where luxury is felt, not announced. My design language favors curated materiality—Calacatta marble, natural oak, brushed brass, hand-tufted textiles—paired with statement furniture from Minotti, B&B Italia, Poliform, and Fendi Casa. The result is spaces that breathe elegance and invite you to experience them fully.
                </p>

                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  Whether collaborating with hospitality groups, private villa owners, or commercial developers, I bring the same meticulous attention to detail and commitment to excellence. My goal is always to exceed expectations, delivering interiors that feel as exceptional in person as they appear in renders.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="pt-8 border-t border-border">
                <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-6">Technical Expertise</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-sans text-base text-foreground mb-1">SketchUp 2025</p>
                    <p className="font-sans text-sm text-muted-foreground">3D Modeling</p>
                  </div>
                  <div>
                    <p className="font-sans text-base text-foreground mb-1">Lumion 2025</p>
                    <p className="font-sans text-sm text-muted-foreground">Visualization</p>
                  </div>
                  <div>
                    <p className="font-sans text-base text-foreground mb-1">LayOut</p>
                    <p className="font-sans text-sm text-muted-foreground">Documentation</p>
                  </div>
                  <div>
                    <p className="font-sans text-base text-foreground mb-1">Adobe Photoshop</p>
                    <p className="font-sans text-sm text-muted-foreground">Post-Production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent mb-12 text-center">Core Values</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const values = [
  {
    title: "Timelessness",
    description: "Designs that transcend trends, remaining relevant and refined for decades to come.",
  },
  {
    title: "Precision",
    description: "Every detail matters—from material selections to millwork specifications and lighting placement.",
  },
  {
    title: "Authenticity",
    description: "Creating genuine, bespoke environments that reflect each client's unique story and aspirations.",
  },
];

export default About;
