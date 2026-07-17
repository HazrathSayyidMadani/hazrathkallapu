import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { submitContact } from "../utils/api";
import SectionHeading from "./SectionHeading";
import school from "../config/school";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await submitContact({
        school: school.id,
        ...form,
      });

      setStatus({
        type: "success",
        message: result.message,
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-200 px-5 py-4 rounded-2xl text-base bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30";

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gray-50 pb-32 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Us"
          subtitle="Reach out for admissions, inquiries, or campus visits"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-start">

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl shadow-xl max-w-md mx-auto lg:max-w-none w-full"
            data-aos="fade-right"
          >
            {status.message && (
              <div
                className={`mb-4 p-4 rounded-xl text-sm ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className={inputClass}
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={inputClass}
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              className={inputClass}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Your Message *"
              required
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60"
              style={{
                backgroundColor: "var(--primary)",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* School Information */}
          <div className="space-y-5" data-aos="fade-left">
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              School Information
            </h3>

            {[
              {
                icon: FaMapMarkerAlt,
                title: "Address",
                value: school.contact.address,
              },
              {
                icon: FaPhone,
                title: "Phone",
                value: school.contact.phone,
                href: `tel:${school.contact.phone}`,
              },
              {
                icon: FaEnvelope,
                title: "Email",
                value: school.contact.email,
                href: `mailto:${school.contact.email}`,
              },
            ].map(({ icon: Icon, title, value, href }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{
                    backgroundColor: "var(--primary)",
                  }}
                >
                  <Icon />
                </div>

                <div>
                  <h4
                    className="font-bold mb-1"
                    style={{ color: "var(--primary)" }}
                  >
                    {title}
                  </h4>

                  {href ? (
                    <a
                      href={href}
                      className="text-gray-600 hover:text-[var(--primary)] transition"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map */}
        <div data-aos="fade-up">
          <h3
            className="text-xl md:text-2xl font-bold text-center mb-6"
            style={{ color: "var(--primary)" }}
          >
            Find Us on Map
          </h3>

          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title={`${school.fullName} Location`}
              src={school.mapEmbed}
              width="100%"
              height="350"
              className="md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;