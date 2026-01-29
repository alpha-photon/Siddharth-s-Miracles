import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Building2, Shield, TreePine, BookOpen, Palette, FlaskConical, Heart, Users, MessageSquare, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import heroSchool from "@/assets/hero-school.jpg";

const facilities = [
  {
    icon: Building2,
    title: "વર્ગખંડો",
    titleEn: "Classrooms",
    description: "Spacious and comfortable classrooms designed for effective learning.",
  },
  {
    icon: TreePine,
    title: "રમતનું મેદાન",
    titleEn: "Playground",
    description: "Dedicated outdoor play area for sports, games, and physical activities.",
  },
  {
    icon: FlaskConical,
    title: "વિજ્ઞાન પ્રયોગશાળા",
    titleEn: "Science Lab",
    description: "Well-equipped science laboratory for hands-on experiments and learning.",
  },
  {
    icon: BookOpen,
    title: "કમ્પ્યુટર લેબ",
    titleEn: "Computer Lab",
    description: "Modern computer lab with latest technology for digital learning.",
  },
  {
    icon: Palette,
    title: "કલા અને હસ્તકલા રૂમ",
    titleEn: "Art and Craft Room",
    description: "Dedicated space for creative expression through art and craft activities.",
  },
  {
    icon: Building2,
    title: "ઇન્ડોર ગેમ્સ હોલ",
    titleEn: "Indoor Games Hall",
    description: "Indoor sports facility for various games and activities.",
  },
  {
    icon: Building2,
    title: "પ્રવૃત્તિ રૂમ",
    titleEn: "Activity Room",
    description: "Multi-purpose activity room for various co-curricular activities.",
  },
  {
    icon: BookOpen,
    title: "પુસ્તકાલય",
    titleEn: "Library",
    description: "Well-stocked library with books, magazines, and educational resources.",
  },
];

const Facilities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title="FACILITIES"
        subtitle="Comfortable, Secure & Student-Friendly Environment"
        description=""
        backgroundImage={heroSchool}
        overlayOpacity="light"
      />

      {/* Facilities Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.titleEn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-hover"
              >
                <div className="h-full bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    <facility.icon className="h-7 w-7 text-maroon" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-maroon mb-1">
                    {facility.titleEn}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">{facility.title}</p>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 md:py-24 bg-pattern-dots">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-maroon" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon">
                  Infrastructure
                </h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We, at SIDDHARTH'S MIRACLES SCHOOL, believe in nurturing the idea of school being the 'Second Home' to our students. 
                  It is essential to provide them with a spacious and comfortable environment. We aim at giving an enriching classroom 
                  experience to our children with our world-class infrastructure.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {["Classrooms", "Playground", "Science lab", "Computer lab", "Art and Craft room", "Indoor games hall", "Activity room", "Library"].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Attention Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-maroon" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon">
                  Personal Attention and Affective Communication
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  At Siddharth's Miracles school, we believe every student is unique and deserves personalized attention to thrive 
                  academically, socially, and emotionally. Our dedicated teachers and staff are committed to understanding and 
                  catering to the individual needs of each student.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maroon mb-2">Individual Learning Plans</h3>
                      <p className="leading-relaxed">
                        We develop tailored learning plans for each student, taking into account their strengths, areas for improvement, 
                        and interest. This ensures that every student can learn at their own pace and achieve their fullest potential.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maroon mb-2">Small Class Sizes</h3>
                      <p className="leading-relaxed">
                        Our small class sizes allow teachers to give focused attention to each student, facilitating better understanding 
                        and retention of the material. This setting also enables teachers to identify and address any learning challenges promptly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maroon mb-2">Regular Assessment and Feedback</h3>
                      <p className="leading-relaxed">
                        Continuous assessment is an integral part of our teaching methodology. Regular feedback helps students understand 
                        their progress and areas where they can improve. This approach ensures that students stay motivated and engaged in 
                        their learning journey.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maroon mb-2">Open Communication Channels</h3>
                      <p className="leading-relaxed">
                        We maintain open communication channels between teachers, students, and parents. Regular parent-teacher meetings 
                        and progress reports keep parents informed about their child's development. Additionally, our teachers are always 
                        approachable for any concerns or discussions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maroon mb-2">Counseling and Support Services</h3>
                      <p className="leading-relaxed">
                        Our school offers robust counseling and support services to address the emotional and psychological need of students. 
                        Our counselors work closely with students to help them navigate any personal or academic challenges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maroon mb-2">Encouraging Student Voice</h3>
                      <p className="leading-relaxed">
                        We encourage students to express their thoughts, ideas and concerns. Through regular class discussions, we ensure 
                        that student voice are heard and valued in our school community.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maroon mb-2">Extra-curricular Activities</h3>
                      <p className="leading-relaxed">
                        A wide range of extra-curricular activities are available to cater to the diverse interests of our students. These 
                        activities provide a platform for students to explore their passions and develop new skills in a supportive environment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maroon mb-2">Personalized Attention Beyond Academics</h3>
                      <p className="leading-relaxed">
                        Our commitment to personalized attention extends beyond academics. We focus on the overall development of each student, 
                        including their social, emotional and physical well-being.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl border border-secondary/20">
                  <p className="text-lg leading-relaxed text-foreground">
                    At Siddharth's Miracles School, we are dedicated to creating a nurturing and inclusive environment where every student 
                    feels valued and supported. Our personalized attention and effective communication practices ensure that each child has 
                    the opportunity to succeed and excel.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 md:py-24 bg-pattern-dots">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-maroon" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon">
                  Safe Campus
                </h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Siddharth's Miracles School offers a space where every child's comfort, safety and 
                  security are an utmost priority. We want our children to learn with love and enthusiasm, 
                  hence ensure a safe and sound learning environment for the child, where he can broaden 
                  his mind, expand his imagination and master his skills without any stress or fear.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>Male and Female staff</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>Classroom doors without lock</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>360 degree surveillance through CCTV cameras</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>Security controlled entry and exit</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>Fire compliance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>Periodic emergency drill</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>Background check on every staff</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">•</span>
                    <span>Medical room</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
