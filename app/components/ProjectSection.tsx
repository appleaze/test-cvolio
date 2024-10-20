// components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Recent Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <ProjectCard
            title="Dummy Project"
            description="This is a dummy project to demonstrate how the image will be displayed."
            technologies={['Next.js', 'React', 'Tailwind CSS']}
            link="#"
            imageUrl="/images/project.jpg"  // Local image URL
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
