import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>{" "}
        🖥️
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
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
