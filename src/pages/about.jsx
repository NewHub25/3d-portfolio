import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Terry
        </span>{" "}
        👋
      </h1>
      <div className="mt-5 text-slate-500">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          obcaecati ut explicabo! Nam nihil debitis expedita nemo, sed cumque?
          Nihil eius libero in repellendus fugit, voluptatem voluptatibus
          provident! Iste reprehenderit, officiis non in voluptatem
          exercitationem alias repellendus tempora unde eveniet, rem earum
          quisquam reiciendis qui, quia ratione praesentium fuga. Enim!
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src={skill.imageUrl}
                  alt={skill.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 text-slate-500">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            obcaecati ut explicabo! Nam nihil debitis expedita nemo, sed cumque?
            Nihil eius libero in repellendus fugit, voluptatem voluptatibus
            provident! Iste reprehenderit, officiis non in voluptatem
            exercitationem alias repellendus tempora unde eveniet, rem earum
            quisquam reiciendis qui, quia ratione praesentium fuga. Enim!
          </p>
        </div>
        <div className="mt-12 flex">
          {/* React vertical timeline component */}
        </div>
      </div>
    </section>
  );
};

export default About;
