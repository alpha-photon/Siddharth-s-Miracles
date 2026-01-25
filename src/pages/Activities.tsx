import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Palette, Music, Trophy, PartyPopper, Heart, Users, Award, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import heroCultural from "@/assets/hero-cultural.jpg";

const activities = [
  {
    icon: Palette,
    title: "ચિત્રકામ અને હસ્તકલા",
    titleEn: "Drawing & Craft",
    description: "Creative expression through art, painting, and handcraft activities.",
    color: "bg-secondary/20",
  },
  {
    icon: Trophy,
    title: "રમત-ગમત",
    titleEn: "Sports & Games",
    description: "Physical activities including indoor games, outdoor sports, and yoga.",
    color: "bg-growth/10",
  },
  {
    icon: Music,
    title: "સાંસ્કૃતિક કાર્યક્રમો",
    titleEn: "Cultural Programs",
    description: "Music, dance, drama, and cultural performances throughout the year.",
    color: "bg-primary/10",
  },
  {
    icon: PartyPopper,
    title: "તહેવાર ઉજવણી",
    titleEn: "Festival Celebrations",
    description: "Celebrating Indian festivals with joy and teaching cultural values.",
    color: "bg-maroon/10",
  },
  {
    icon: Heart,
    title: "નૈતિક શિક્ષણ",
    titleEn: "Moral Education",
    description: "Character building through stories, values, and ethical teaching.",
    color: "bg-secondary/20",
  },
  {
    icon: Users,
    title: "વ્યક્તિત્વ વિકાસ",
    titleEn: "Personality Development",
    description: "Building confidence, communication skills, and leadership qualities.",
    color: "bg-growth/10",
  },
  {
    icon: Award,
    title: "સ્પર્ધાઓ",
    titleEn: "Competitions",
    description: "Inter-class and external competitions in academics and extracurriculars.",
    color: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "વિશેષ કાર્યક્રમો",
    titleEn: "Special Events",
    description: "Annual day, sports day, science fair, and other memorable events.",
    color: "bg-maroon/10",
  },
];

const Activities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        badge="Holistic Development"
        title="Activities & Development"
        description="Holistic development through sports, arts, cultural activities, and personality development programs."
        backgroundImage={heroCultural}
        icon={Trophy}
      />

      {/* Activities Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.titleEn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-hover"
              >
                <div className="h-full bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <div className={`w-14 h-14 mb-4 rounded-xl ${activity.color} flex items-center justify-center`}>
                    <activity.icon className="h-7 w-7 text-maroon" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-maroon mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">{activity.titleEn}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Development */}
      <section className="py-16 md:py-24 bg-pattern-dots">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
                Holistic Development
              </h2>
              <p className="text-muted-foreground">
                Holistic development is a comprehensive approach to learning that focuses on nurturing 
                various facts of human potential. Unlike traditional education system that prioritize 
                intellectual growth, holistic development aims at fostering physical, emotional, social, 
                and cognitive ability in individuals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 mb-8"
            >
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We believe that our role as a school extends to overall development. Our school is 
                inclined to creating responsible global citizens and lifelong learners.
              </p>
              
              <h3 className="font-heading text-xl font-bold text-maroon mb-4">Benefits of holistic development in education:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span><strong>Intellectual Growth:</strong> Encourages critical thinking, problem solving, creativity, and preparing students for real-world challenges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span><strong>Emotional well-being:</strong> Fosters self-awareness, empathy and resilience's, equipping students to manage emotions and build health relationship</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span><strong>Physical Health:</strong> Promotes an active lifestyle, good nutrition and self-care habits, contributing to overall physical well-being.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span><strong>Social skills:</strong> Develops communication, collaboration and teamwork skills, essential for success in personal and professional life.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span><strong>Creative Expression:</strong> Cultivates imagination, innovation, and artistic talent, fostering a sense of identity and self-expression.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Activities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-4">
              Holistic Development Activities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Dance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-maroon" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-maroon">Dance</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Increases muscular strength, endurance and motor fitness</li>
                <li>• Improved muscle tone and strength</li>
                <li>• Better coordination, agility and flexibility</li>
                <li>• Greater self-confidence and self-esteem</li>
                <li>• Social skills</li>
              </ul>
            </motion.div>

            {/* Life Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-maroon" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-maroon">Life Skill Programme</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Self-awareness: The ability to look at oneself and one's activities being unbiased</li>
                <li>• Communication skills: Enables individuals to convey things the way they want</li>
                <li>• Empathy: Helps students connect with others and feel their feelings</li>
                <li>• Thinking outside the box: Helps face issues head-on and find innovative solutions</li>
                <li>• Critical Thinking: Allows people to make smart judgments</li>
                <li>• Problem-solving skills: Helps achieve long-term and short-term goals</li>
                <li>• Decision-making skill: Students make well-informed decisions</li>
              </ul>
            </motion.div>

            {/* Visual Arts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-growth/20 flex items-center justify-center">
                  <Palette className="h-8 w-8 text-maroon" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-maroon">Visual Arts</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Increases creativity and innovation</li>
                <li>• Develops the ability of observation</li>
                <li>• Improves motor skills</li>
                <li>• Develops the power of problem solving</li>
                <li>• Builds confidence</li>
                <li>• Builds the ability to be patient</li>
                <li>• Increases focus</li>
                <li>• Helps child to bond with others</li>
                <li>• Develops determination</li>
                <li>• Acquires a sense of style and beauty</li>
              </ul>
            </motion.div>

            {/* Sports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-maroon/20 flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-maroon" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-maroon">Sports</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Character Building Traits:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Manage emotions, Discipline, Social skill, Patience</li>
                    <li>• Perseverance, Accept defeat, Team work</li>
                    <li>• Respect authority, Leadership skills, Lifelong habits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Physiological Benefits:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Increased cardiovascular fitness, Healthy growth</li>
                    <li>• Improves energy levels, Improves co-ordination and balance</li>
                    <li>• Creates happiness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Performance Enhancement:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Academic performance, Find their passion, Stay on the right track</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Speech and Drama */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 md:col-span-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Music className="h-8 w-8 text-maroon" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-maroon">Speech and Drama</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Social and emotional development:</h4>
                  <p className="text-muted-foreground text-sm">
                    Children learn to empathize with others and develop emotional intelligence by acting 
                    out scenes and interacting with peers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cognitive Development:</h4>
                  <p className="text-muted-foreground text-sm">
                    Children sharpen critical thinking and problem-solving skills as children analyze scripts, 
                    create characters, and make artistic choice. Memorizing lines and following cues enhances 
                    memory and concentration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Language and communication skills:</h4>
                  <p className="text-muted-foreground text-sm">
                    Participation in speech and drama hones verbal and non-verbal communication skills. 
                    Children expand their vocabulary, improve articulation, and refine listening skills through 
                    dialogue and feedback.
                  </p>
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
