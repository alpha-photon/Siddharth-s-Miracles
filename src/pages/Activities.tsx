import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Palette, Music, Trophy, PartyPopper, Heart, Users, Award, Sparkles } from "lucide-react";

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
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-maroon mb-6">
              Activities & Development
            </h1>
            <p className="text-lg text-muted-foreground">
              Holistic development through sports, arts, cultural activities, and
              personality development programs.
            </p>
          </motion.div>
        </div>
      </section>

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

      {/* Why Activities Matter */}
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
                Why Co-curricular Activities Matter
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
            >
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Siddharth's Miracles, we believe that education extends far beyond textbooks.
                  Our comprehensive co-curricular program is designed to nurture well-rounded
                  individuals who excel not just academically but in all aspects of life.
                </p>
                <p>
                  Through sports, students learn teamwork, discipline, and physical fitness.
                  Creative activities like drawing and music develop imagination and artistic expression.
                  Cultural programs connect children to their heritage and build confidence in
                  public performance.
                </p>
                <p>
                  Our festival celebrations teach children about Indian traditions and values,
                  while personality development programs prepare them to face challenges with
                  confidence and grace.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
