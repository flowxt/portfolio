import projects from '../data/data.json';

const Projets = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Mes Projets</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.projects.map((project) => (
            <li key={project.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              </figure>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" 
                     className="btn btn-primary">Voir le projet</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Projets;