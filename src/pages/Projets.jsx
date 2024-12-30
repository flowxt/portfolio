import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import projects from '../data/data.json';

const Projets = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5, ease: 'power2.out' } });
    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50, rotation: -10 },
      { opacity: 1, y: 0, rotation: 0, stagger: 0.2 }
    );
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Mes Projets</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.projects.map((project, index) => (
          <li
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card bg-base-100 w-96 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <figure>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">
                {project.title}
                
              </h3>
              <p>{project.description}</p>
              <div className="card-actions justify-start">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="badge badge-outline">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="card-actions justify-start mt-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Voir le projet
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projets;