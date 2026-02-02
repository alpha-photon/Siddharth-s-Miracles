import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Palette, Music, Trophy, PartyPopper, Heart, Users, Award, Sparkles, Brain, Dumbbell } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import heroActivities from "@/assets/herosection/IMG_3249.JPG";

const activities = [
  {
    icon: Palette,
    title: "ચિત્રકામ અને હસ્તકલા",
    titleEn: "Drawing & Craft",
    description: "Creative expression through art, painting, and handcraft activities.",
    color: "from-secondary/30 to-accent/20",
    iconBg: "from-secondary/25 to-accent/25",
  },
  {
    icon: Trophy,
    title: "રમત-ગમત",
    titleEn: "Sports & Games",
    description: "Physical activities including indoor games, outdoor sports, and yoga.",
    color: "from-growth/20 to-growth/10",
    iconBg: "from-growth/25 to-growth/15",
  },
  {
    icon: Music,
    title: "સાંસ્કૃતિક કાર્યક્રમો",
    titleEn: "Cultural Programs",
    description: "Music, dance, drama, and cultural performances throughout the year.",
    color: "from-primary/20 to-primary/10",
    iconBg: "from-primary/25 to-primary/15",
  },
  {
    icon: PartyPopper,
    title: "તહેવાર ઉજવણી",
    titleEn: "Festival Celebrations",
    description: "Celebrating Indian festivals with joy and teaching cultural values.",
    color: "from-maroon/20 to-maroon/10",
    iconBg: "from-maroon/25 to-maroon/15",
  },
  {
    icon: Heart,
    title: "નૈતિક શિક્ષણ",
    titleEn: "Moral Education",
    description: "Character building through stories, values, and ethical teaching.",
    color: "from-secondary/30 to-accent/20",
    iconBg: "from-secondary/25 to-accent/25",
  },
  {
    icon: Users,
    title: "વ્યક્તિત્વ વિકાસ",
    titleEn: "Personality Development",
    description: "Building confidence, communication skills, and leadership qualities.",
    color: "from-growth/20 to-growth/10",
    iconBg: "from-growth/25 to-growth/15",
  },
  {
    icon: Award,
    title: "સ્પર્ધાઓ",
    titleEn: "Competitions",
    description: "Inter-class and external competitions in academics and extracurriculars.",
    color: "from-primary/20 to-primary/10",
    iconBg: "from-primary/25 to-primary/15",
  },
  {
    icon: Sparkles,
    title: "વિશેષ કાર્યક્રમો",
    titleEn: "Special Events",
    description: "Annual day, sports day, science fair, and other memorable events.",
    color: "from-maroon/20 to-maroon/10",
    iconBg: "from-maroon/25 to-maroon/15",
  },
];

const Activities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="ACTIVITIES & DEVELOPMENT"
        subtitle="Beyond Books, Towards Holistic Growth"
        description=""
        backgroundImage={heroActivities}
        overlayOpacity="light"
      />

      {/* Activities Grid */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20 shadow-sm tracking-wide">
              Our Programs
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Activities & Co-curricular
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Diverse programs for holistic development beyond the classroom
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.titleEn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full bg-card rounded-3xl p-6 md:p-8 text-center relative overflow-hidden flex flex-col border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                  <AnimatedCardBackground index={index} />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${activity.iconBg} flex items-center justify-center ring-2 ring-secondary/20 group-hover:scale-110 group-hover:rotate-3 group-hover:ring-secondary/40 transition-all duration-500 shadow-md`}>
                      <activity.icon className="h-8 w-8 md:h-10 md:w-10 text-maroon group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-maroon mb-2 group-hover:text-secondary transition-colors duration-300 leading-tight">
                      {activity.titleEn}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-3 tracking-wide">{activity.title}</p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Development - aligned with Activities & Co-curricular above */}
      <section className="py-16 md:py-24 bg-pattern-dots relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-maroon/10 text-maroon border border-maroon/20 shadow-sm tracking-wide">
              Our Philosophy
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Holistic Development
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Holistic development is a comprehensive approach to learning that focuses on nurturing 
              various facets of human potential. Unlike traditional education that prioritizes 
              intellectual growth alone, holistic development aims at fostering physical, emotional, social, 
              and cognitive abilities in every individual.
            </p>
          </motion.div>

          {/* Intro card - full width like section above */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 md:mb-12"
          >
            <div className="card-premium bg-card rounded-2xl p-6 md:p-8 text-center border-l-4 border-primary">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                We believe that our role as a school extends to overall development. Our school is 
                inclined to creating responsible global citizens and lifelong learners.
              </p>
            </div>
          </motion.div>

          {/* Benefits - same grid as Activities & Co-curricular: 4 cols, same gap */}
          <h3 className="font-heading text-xl md:text-2xl font-bold text-maroon mb-6 text-center">
            Benefits of holistic development in education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Brain, title: "Intellectual Growth", description: "Encourages critical thinking, problem solving, creativity, and prepares students for real-world challenges.", color: "from-primary/20 to-primary/10" },
                { icon: Heart, title: "Emotional Well-being", description: "Fosters self-awareness, empathy and resilience, equipping students to manage emotions and build healthy relationships.", color: "from-maroon/20 to-maroon/10" },
                { icon: Dumbbell, title: "Physical Health", description: "Promotes an active lifestyle, good nutrition and self-care habits, contributing to overall physical well-being.", color: "from-growth/20 to-growth/10" },
                { icon: Users, title: "Social Skills", description: "Develops communication, collaboration and teamwork skills, essential for success in personal and professional life.", color: "from-secondary/20 to-accent/10" },
                { icon: Sparkles, title: "Creative Expression", description: "Cultivates imagination, innovation, and artistic talent, fostering a sense of identity and self-expression.", color: "from-secondary/30 to-accent/20" },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${benefit.color} opacity-20 rounded-bl-2xl pointer-events-none`} />
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 ring-2 ring-secondary/20 group-hover:ring-primary/30 transition-all shadow-md`}>
                        <benefit.icon className="h-7 w-7 text-maroon group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-maroon mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Detailed Activities */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-secondary/20 text-maroon border border-secondary/30 shadow-sm tracking-wide">
              Deep Dive
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Holistic Development Activities
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              In-depth programmes that shape mind, body and character
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Dance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/20 to-accent/10 opacity-20 rounded-bl-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-primary/30 transition-all shadow-md">
                      <Palette className="h-7 w-7 text-maroon" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-maroon">Dance</h3>
                  </div>
                  <ul className="space-y-2.5 text-muted-foreground text-sm md:text-base leading-relaxed flex-1">
                    <li className="flex items-start gap-2"><span className="text-secondary font-bold shrink-0">•</span> Increases muscular strength, endurance and motor fitness</li>
                    <li className="flex items-start gap-2"><span className="text-secondary font-bold shrink-0">•</span> Improved muscle tone and strength</li>
                    <li className="flex items-start gap-2"><span className="text-secondary font-bold shrink-0">•</span> Better coordination, agility and flexibility</li>
                    <li className="flex items-start gap-2"><span className="text-secondary font-bold shrink-0">•</span> Greater self-confidence and self-esteem</li>
                    <li className="flex items-start gap-2"><span className="text-secondary font-bold shrink-0">•</span> Social skills</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Life Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-primary/10 opacity-20 rounded-bl-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/25 to-primary/15 flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-primary/30 transition-all shadow-md">
                      <Heart className="h-7 w-7 text-maroon" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-maroon">Life Skill Programme</h3>
                  </div>
                  <ul className="space-y-2.5 text-muted-foreground text-sm leading-relaxed flex-1">
                    <li className="flex items-start gap-2"><span className="text-primary font-bold shrink-0">•</span> Self-awareness: The ability to look at oneself and one's activities being unbiased</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold shrink-0">•</span> Communication skills: Enables individuals to convey things the way they want</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold shrink-0">•</span> Empathy: Helps students connect with others and feel their feelings</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold shrink-0">•</span> Thinking outside the box: Helps face issues head-on and find innovative solutions</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold shrink-0">•</span> Critical Thinking: Allows people to make smart judgments</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold shrink-0">•</span> Problem-solving skills: Helps achieve long-term and short-term goals</li>
                    <li className="flex items-start gap-2"><span className="text-primary font-bold shrink-0">•</span> Decision-making skill: Students make well-informed decisions</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Visual Arts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-growth/20 to-growth/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-growth/20 to-growth/10 opacity-20 rounded-bl-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-growth/25 to-growth/15 flex items-center justify-center ring-2 ring-growth/20 group-hover:ring-primary/30 transition-all shadow-md">
                      <Palette className="h-7 w-7 text-maroon" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-maroon">Visual Arts</h3>
                  </div>
                  <ul className="space-y-2.5 text-muted-foreground text-sm leading-relaxed flex-1">
                    <li className="flex items-start gap-2"><span className="text-growth font-bold shrink-0">•</span> Increases creativity and innovation</li>
                    <li className="flex items-start gap-2"><span className="text-growth font-bold shrink-0">•</span> Develops the ability of observation</li>
                    <li className="flex items-start gap-2"><span className="text-growth font-bold shrink-0">•</span> Improves motor skills, problem solving, confidence</li>
                    <li className="flex items-start gap-2"><span className="text-growth font-bold shrink-0">•</span> Builds patience, focus and determination</li>
                    <li className="flex items-start gap-2"><span className="text-growth font-bold shrink-0">•</span> Helps child bond with others; acquires a sense of style and beauty</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Sports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 to-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-maroon/20 to-maroon/10 opacity-20 rounded-bl-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-maroon/25 to-maroon/15 flex items-center justify-center ring-2 ring-maroon/20 group-hover:ring-primary/30 transition-all shadow-md">
                      <Trophy className="h-7 w-7 text-maroon" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-maroon">Sports</h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="p-3 rounded-xl bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Character Building Traits</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">Manage emotions, discipline, social skills, patience, perseverance, teamwork, respect, leadership and lifelong habits.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Physiological Benefits</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">Increased cardiovascular fitness, healthy growth, better energy, coordination and balance, and overall happiness.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Performance Enhancement</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">Supports academic performance, helps students find their passion and stay on the right track.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Speech and Drama */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group md:col-span-2"
            >
              <div className="card-3d card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/20 to-accent/10 opacity-20 rounded-bl-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-primary/30 transition-all shadow-md">
                      <Music className="h-7 w-7 text-maroon" />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-maroon">Speech and Drama</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-2">Social & emotional development</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Children learn to empathize with others and develop emotional intelligence by acting 
                        out scenes and interacting with peers.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-2">Cognitive Development</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Children sharpen critical thinking and problem-solving skills as they analyze scripts, 
                        create characters, and make artistic choices. Memorizing lines and following cues enhances 
                        memory and concentration.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-2">Language & communication</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Participation in speech and drama hones verbal and non-verbal communication skills. 
                        Children expand vocabulary, improve articulation, and refine listening skills through 
                        dialogue and feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
