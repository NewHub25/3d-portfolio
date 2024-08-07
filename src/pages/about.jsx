import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, skills } from "../constants";
import CTA from "../components/cta";

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
            <div
              key={`skill-${skill.name}`}
              className="block-container w-20 h-20"
            >
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
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="w-full h-full flex justify-center items-center">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  backgroundColor: experience.iconBg,
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
