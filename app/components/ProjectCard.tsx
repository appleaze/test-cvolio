import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Image */}
      <img 
        src={imageUrl}  // Image URL pointing to the public folder
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="flex space-x-2 mb-4">
          {technologies.map((tech, index) => (
            <li key={index} className="bg-indigo-100 text-indigo-800 text-sm font-medium py-1 px-3 rounded-full">
              {tech}
            </li>
          ))}
        </ul>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
