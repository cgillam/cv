import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ projects }) {
    return (
        <>
            <p>Name</p>
            <p><a href="https://github.com/username">GitHub</a></p>
            <ul>
                {projects.map(project =>
                    <li key={project.slug}>
                        <Link to={`/project/${project.slug}`}>{project.title}</Link>
                    </li>
                )}
            </ul>
        </>
    );
}