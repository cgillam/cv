import React from 'react';
import { Link } from 'react-router-dom'

export default function Project({ project }) {
    const back = <Link to="/">home</Link>
    return (
        <>
            {back}
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <br />
            <a href={project.deployed}>click to see live</a>
            <br />
            <a href={project.github}>click to see code</a>
            <br />
            <div>
                {project.images.map((url) => <img key={url} src={url} alt="meaningful text" />)}
            </div>
            {back}
        </>
    );
}