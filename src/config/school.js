import principalImage from "../assets/gallery/principal.jpg";

const school = {
  id: "kallapu",
  name: "Sayyid Madani",
  fullName: "Sayyid Madani English Medium School - Kallapu",
  tagline: "Learning Today, Leading Tomorrow",
  subtitle: "English Medium School · Kallapu",
  motto: "Excellence in education, strength in character",
  established: "2008",
  grades: "LKG to 10th Standard",
  trust: "Sayyid Madani Charitable Trust (R), Ullal",

  colors: {
    primary: "#1B4332",
    primaryLight: "#2D6A4F",
    accent: "#F4A261",
    accentLight: "#F7BC8B",
  },

  contact: {
    address: "Kallapu, Ullal, Dakshina Kannada, Karnataka - 575020",
    phone: "919741787534",
    email: "seyyidmadanikallapu2@gmail.com",
    whatsapp: "919741787534",
  },

  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5!2d74.84!3d12.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKallapu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  stats: [
    { number: "560", label: "Students" },
    { number: "18", label: "Teachers" },
    { number: "26", label: "Years of Excellence" },
    { number: "96%", label: "Pass Rate" },
  ],

  classes: [
    "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
    "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  ],

  history: `Sayyid Madani English Medium School, Kallapu serves the Kallapu community and surrounding areas with quality English medium education from LKG to 10th Standard. Managed by Seyyid Madani Charitable Trust (R), Ullal, our school is recognized by the Government of Karnataka.

We focus on building strong academic foundations while instilling moral values, discipline, and confidence in every student. Our dedicated faculty and supportive environment help children reach their full potential.`,

  vision: [
    "Be a leading educational institution in the Kallapu region",
    "Empower students with knowledge, skills, and strong ethical values",
    "Make quality education accessible to all sections of society",
    "Prepare students for higher education and meaningful careers",
  ],

  mission: [
    "Provide comprehensive education from early childhood to SSLC",
    "Use innovative teaching methods and technology in classrooms",
    "Promote sports, arts, and extracurricular activities",
    "Build a partnership between school, parents, and community",
  ],

  principal: {
    name: "NASEEMA BANU",
    message: `Welcome to Sayyid Madani School, Kallapu. Our mission is to nurture young minds in a warm, supportive environment where every child feels valued. We invite you to join our school family and discover the difference quality education makes.`,
    image:principalImage,
  },

  facilities: [
    { title: "Smart Classrooms", description: "Interactive digital boards and modern teaching aids." },
    { title: "Library", description: "A quiet space for reading and research." },
    { title: "Science Labs", description: "Well-equipped labs for science experiments." },
    { title: "Computer Lab", description: "Computers and internet for digital literacy." },
    { title: "Playground", description: "Open spaces for sports and outdoor activities." },
    { title: "Transport", description: "Reliable school bus service for students." },
  ],

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
    { label: "Alumni", href: "#alumni" },
  ],
};

export default school;
