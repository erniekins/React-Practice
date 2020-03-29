import React from 'react';

const ProjectPage = (props) => {
    return (
        <div>
            <p>I made some stuff</p>
            <p>This is project number {props.match.params.id}</p>
        </div>
    );
}

export default ProjectPage;