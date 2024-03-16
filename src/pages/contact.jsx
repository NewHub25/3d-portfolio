import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/fox";
import Loader from "../components/loader";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Terry",
          email_id: form.email,
          message: form.message,
        },
        { publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        // TODO: Show success message
        // TODO: Hide an alert
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
        // TODO: Show error message
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(setCurrentAnimation, 3000, "idle");
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex flex-1 min-w-[50%] flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="capitalize">
            name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="example"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="capitalize">
            email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="email@thing.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="capitalize">
            your message
            <textarea
              type="text"
              rows={4}
              name="message"
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
