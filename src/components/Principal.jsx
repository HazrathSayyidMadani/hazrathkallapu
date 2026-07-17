import school from "../config/school";

function Principal() {
  return (
    <section id="principal" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
          data-aos="fade-up"
        >
          <div className="grid lg:grid-cols-3 gap-0 items-center">

            {/* Principal Image */}
            <div className="flex justify-center p-8 md:p-12 bg-gradient-to-br from-green-50 to-white">
              <div
                className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 shadow-2xl"
                style={{ borderColor: "var(--accent)" }}
              >
                <img
                  src={school.principal.image}
                  alt={school.principal.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Principal Message */}
            <div className="lg:col-span-2 p-8 md:p-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{
                  backgroundColor: "var(--accent-light)",
                  color: "var(--primary)",
                }}
              >
               Message
              </span>

              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "var(--primary)" }}
              >
                A Message from Our Head Mistress
              </h2>

              <p className="text-gray-600 leading-8 text-base md:text-lg">
                {school.principal.message}
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  {school.principal.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  Head Mistress
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Principal;