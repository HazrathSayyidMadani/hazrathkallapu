import SectionHeading from "./SectionHeading";
import school from "../config/school";

function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          title="About Us"
          subtitle="Building character, knowledge, and confidence"
        />

        {/* History */}
        <div
          className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 mb-8 md:mb-10 border border-gray-100"
          data-aos="fade-up"
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "var(--primary)" }}
          >
            Our History
          </h3>

          <p className="text-gray-600 leading-relaxed md:leading-8 text-sm md:text-base whitespace-pre-line">
            {school.history}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Vision */}
          <div
            className="text-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl"
            style={{
              background:
                "linear-gradient(to bottom right, var(--primary), var(--primary-light))",
            }}
            data-aos="fade-right"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Vision
            </h3>

            <ul className="space-y-3 text-sm md:text-base">
              {school.vision.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    className="shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    ✦
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl"
            style={{
              background:
                "linear-gradient(to bottom right, var(--accent), var(--accent-light))",
              color: "var(--primary)",
            }}
            data-aos="fade-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h3>

            <ul className="space-y-3 text-sm md:text-base">
              {school.mission.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;