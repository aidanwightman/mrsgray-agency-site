import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Instagram, X } from "lucide-react";

interface Athlete {
  id: number;
  name: string;
  club: string;
  position: string;
  age: number;
  nationality: string;
  bio: string;
  instagramUrl: string;
}

const athletes: Athlete[] = [
  {
    id: 1,
    name: "Player One",
    club: "FC Example",
    position: "Forward",
    age: 24,
    nationality: "English",
    bio: "An electric forward with pace and technical ability to match. Has been a consistent performer at club level and is attracting interest from top-flight clubs across Europe.",
    instagramUrl: "https://www.instagram.com/p/DRKfOZCCATv/",
  },
  {
    id: 2,
    name: "Player Two",
    club: "City United",
    position: "Midfielder",
    age: 22,
    nationality: "Irish",
    bio: "A creative central midfielder with an exceptional range of passing and an eye for goal. Quickly establishing himself as one of the most exciting young talents in the league.",
    instagramUrl: "https://www.instagram.com/p/DQtf7aDiLOn/",
  },
  {
    id: 3,
    name: "Player Three",
    club: "Athletic Club",
    position: "Defender",
    age: 26,
    nationality: "Scottish",
    bio: "A commanding centre-back known for his reading of the game and composed distribution from the back. Has captained his side to back-to-back promotions.",
    instagramUrl: "https://www.instagram.com/p/DOtlhwMCPca/",
  },
  {
    id: 4,
    name: "Player Four",
    club: "Rovers FC",
    position: "Winger",
    age: 21,
    nationality: "Welsh",
    bio: "A skilful and direct winger who torments defenders with his pace and dribbling. Already making waves at under-21 international level.",
    instagramUrl: "https://www.instagram.com/p/DMcolcVIAsg/",
  },
  {
    id: 5,
    name: "Player Five",
    club: "Town AFC",
    position: "Goalkeeper",
    age: 25,
    nationality: "English",
    bio: "A shot-stopper with exceptional reflexes and commanding presence in the box. Known for his calm distribution and leadership qualities at the back.",
    instagramUrl: "https://www.instagram.com/p/DLaIG8woG8a/",
  },
];

const Athletes = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selected, setSelected] = useState<Athlete | null>(null);

  return (
    <section id="athletes" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
            Roster
          </span>
          <h2 className="editorial-heading mb-8">Our Athletes</h2>
          <p className="body-text max-w-2xl">
            We represent a focused roster of players. Click any card to learn more.
          </p>
        </div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {athletes.map((athlete, index) => (
            <div
              key={athlete.id}
              onClick={() => setSelected(athlete)}
              className={`group relative aspect-[3/4] bg-muted overflow-hidden cursor-pointer transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 75}ms` }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 group-hover:brightness-125 transition-all duration-300 flex items-center justify-center">
                <Instagram
                  size={32}
                  className="text-muted-foreground/30 group-hover:text-gold transition-colors duration-300"
                />
              </div>

              {/* Gold border glow on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/60 transition-all duration-300 pointer-events-none" />

              {/* Hover overlay — name + club only */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm leading-tight">
                  {athlete.name}
                </p>
                <p className="text-gold text-xs mt-0.5 tracking-wide">
                  {athlete.club}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            We update this roster publicly on Instagram — follow{" "}
            <a
              href="https://www.instagram.com/mrsgrayagency/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              @mrsgrayagency
            </a>{" "}
            for daily highlights and client news.
          </p>
        </div>
      </div>

      {/* Player Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-background border border-border w-full max-w-3xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Card — left panel */}
            <div className="relative w-full md:w-2/5 aspect-[3/4] md:aspect-auto bg-muted flex-shrink-0 flex items-center justify-center min-h-[260px]">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <Instagram size={48} className="text-gold/40" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold text-base">{selected.name}</p>
                <p className="text-gold text-sm mt-0.5">{selected.club}</p>
              </div>
            </div>

            {/* Info — right panel */}
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-normal text-foreground mb-1">
                  {selected.name}
                </h3>
                <p className="text-gold text-sm tracking-wide uppercase">
                  {selected.club}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Position
                  </p>
                  <p className="text-foreground text-sm">{selected.position}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Age
                  </p>
                  <p className="text-foreground text-sm">{selected.age}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Nationality
                  </p>
                  <p className="text-foreground text-sm">{selected.nationality}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {selected.bio}
              </p>

              <a
                href={selected.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors"
              >
                <Instagram size={14} />
                View on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Athletes;
