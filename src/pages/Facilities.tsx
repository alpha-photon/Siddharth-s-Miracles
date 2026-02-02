import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Building2, Shield, TreePine, BookOpen, Palette, FlaskConical, Heart, Users, MessageSquare, Target, Laptop, Dumbbell, Sparkles, DoorOpen, Video, Lock, Flame, AlertTriangle, UserCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
<<<<<<< HEAD
import { AnimatedCardBackground } from "@/components/ui/AnimatedCardBackground";
import heroFacilities from "@/assets/herosection/IMG_3237.JPG";
=======
import { heroFacilities } from "@/lib/cloudinary-images";
>>>>>>> 4544427f728db9e528813022768c6d2862ea9554

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
        backgroundImage={heroFacilities}
        overlayOpacity="light"
      />

      {/* Facilities Grid - aligned with Activities page */}
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
              Our Campus
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Facilities
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Comfortable, secure and student-friendly environment
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.titleEn}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-full bg-card rounded-3xl p-6 relative overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-secondary/50 group-hover:-translate-y-2">
                  <AnimatedCardBackground index={index} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:ring-2 group-hover:ring-secondary/30 group-hover:scale-110 transition-all duration-500">
                      <facility.icon className="h-7 w-7 text-maroon group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-maroon mb-1 group-hover:text-secondary transition-colors duration-300">
                      {facility.titleEn}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-3">{facility.title}</p>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
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
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-primary/10 text-primary border border-primary/20 shadow-sm tracking-wide">
              Our Campus
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Infrastructure
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              World-class facilities for an enriching learning experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 md:mb-12"
          >
            <div className="card-premium bg-card rounded-2xl p-6 md:p-8 text-center border-l-4 border-primary">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                We, at SIDDHARTH'S MIRACLES SCHOOL, believe in nurturing the idea of school being the 'Second Home' to our students.
                It is essential to provide them with a spacious and comfortable environment. We aim at giving an enriching classroom
                experience to our children with our world-class infrastructure.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Building2, label: "Classrooms", color: "from-primary/20 to-primary/10" },
              { icon: TreePine, label: "Playground", color: "from-growth/20 to-growth/10" },
              { icon: FlaskConical, label: "Science lab", color: "from-secondary/20 to-accent/10" },
              { icon: Laptop, label: "Computer lab", color: "from-maroon/20 to-maroon/10" },
              { icon: Palette, label: "Art and Craft room", color: "from-primary/20 to-primary/10" },
              { icon: Dumbbell, label: "Indoor games hall", color: "from-growth/20 to-growth/10" },
              { icon: Sparkles, label: "Activity room", color: "from-secondary/20 to-accent/10" },
              { icon: BookOpen, label: "Library", color: "from-maroon/20 to-maroon/10" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 relative overflow-hidden flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-20 rounded-bl-3xl pointer-events-none`} />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-primary/30 transition-all shadow-md">
                      <item.icon className="h-7 w-7 text-maroon" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-maroon group-hover:text-primary transition-colors">{item.label}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Attention Section */}
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
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold mb-5 bg-maroon/10 text-maroon border border-maroon/20 shadow-sm tracking-wide">
              Our Approach
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Personal Attention and Affective Communication
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Every student is unique and deserves personalized support
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 md:mb-12"
          >
            <div className="card-premium bg-card rounded-2xl p-6 md:p-8 text-center border-l-4 border-primary">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                At Siddharth's Miracles school, we believe every student is unique and deserves personalized attention to thrive
                academically, socially, and emotionally. Our dedicated teachers and staff are committed to understanding and
                catering to the individual needs of each student.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Target, title: "Individual Learning Plans", description: "We develop tailored learning plans for each student, taking into account their strengths, areas for improvement, and interest. This ensures that every student can learn at their own pace and achieve their fullest potential.", color: "from-primary/20 to-primary/10" },
              { icon: Users, title: "Small Class Sizes", description: "Our small class sizes allow teachers to give focused attention to each student, facilitating better understanding and retention of the material.", color: "from-secondary/20 to-accent/10" },
              { icon: BookOpen, title: "Regular Assessment and Feedback", description: "Continuous assessment is an integral part of our teaching methodology. Regular feedback helps students understand their progress and areas where they can improve.", color: "from-primary/20 to-primary/10" },
              { icon: MessageSquare, title: "Open Communication Channels", description: "We maintain open communication channels between teachers, students, and parents. Regular parent-teacher meetings and progress reports keep parents informed.", color: "from-secondary/20 to-accent/10" },
              { icon: Heart, title: "Counseling and Support Services", description: "Our school offers robust counseling and support services to address the emotional and psychological needs of students.", color: "from-primary/20 to-primary/10" },
              { icon: Users, title: "Encouraging Student Voice", description: "We encourage students to express their thoughts, ideas and concerns. Student voices are heard and valued in our school community.", color: "from-secondary/20 to-accent/10" },
              { icon: Palette, title: "Extra-curricular Activities", description: "A wide range of extra-curricular activities are available to cater to the diverse interests of our students.", color: "from-primary/20 to-primary/10" },
              { icon: Target, title: "Personalized Attention Beyond Academics", description: "Our commitment to personalized attention extends beyond academics. We focus on the overall development of each student.", color: "from-secondary/20 to-accent/10" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-20 rounded-bl-3xl pointer-events-none`} />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-primary/30 transition-all shadow-md">
                      <item.icon className="h-7 w-7 text-maroon" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-maroon mb-2 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 md:mt-12"
          >
            <div className="card-premium bg-card rounded-2xl p-6 md:p-8 text-center bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20">
              <p className="text-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                At Siddharth's Miracles School, we are dedicated to creating a nurturing and inclusive environment where every student
                feels valued and supported. Our personalized attention and effective communication practices ensure that each child has
                the opportunity to succeed and excel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety Section */}
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
              Security
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-maroon mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
              Safe Campus
            </h2>
            <div className="w-16 h-1 mx-auto mb-5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              Every child's comfort, safety and security are our utmost priority
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 md:mb-12"
          >
            <div className="card-premium bg-card rounded-2xl p-6 md:p-8 text-center border-l-4 border-primary">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                Siddharth's Miracles School offers a space where every child's comfort, safety and security are an utmost priority.
                We want our children to learn with love and enthusiasm, hence ensure a safe and sound learning environment
                where they can broaden their mind, expand their imagination and master their skills without any stress or fear.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, label: "Male and Female staff", color: "from-primary/20 to-primary/10" },
              { icon: DoorOpen, label: "Classroom doors without lock", color: "from-secondary/20 to-accent/10" },
              { icon: Video, label: "360 degree surveillance through CCTV cameras", color: "from-maroon/20 to-maroon/10" },
              { icon: Lock, label: "Security controlled entry and exit", color: "from-primary/20 to-primary/10" },
              { icon: Flame, label: "Fire compliance", color: "from-secondary/20 to-accent/10" },
              { icon: AlertTriangle, label: "Periodic emergency drill", color: "from-maroon/20 to-maroon/10" },
              { icon: UserCheck, label: "Background check on every staff", color: "from-primary/20 to-primary/10" },
              { icon: Heart, label: "Medical room", color: "from-secondary/20 to-accent/10" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="card-3d h-full card-premium bg-card rounded-2xl p-6 relative overflow-hidden flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-20 rounded-bl-3xl pointer-events-none`} />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-14 h-14 mb-4 rounded-2xl bg-gradient-to-br from-secondary/25 to-accent/25 flex items-center justify-center ring-2 ring-secondary/20 group-hover:ring-primary/30 transition-all shadow-md">
                      <item.icon className="h-7 w-7 text-maroon" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-maroon group-hover:text-primary transition-colors leading-tight">{item.label}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
