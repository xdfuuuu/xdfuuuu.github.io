document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.tilt');

    projects.forEach((project) => {
        project.addEventListener('mouseover', () => {
            project.style.transform = 'rotate(0.2deg) translateY(-0.2em)';
            project.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
            project.style.boxShadow = '2px 6px 12px rgba(0, 0, 0, 0.3)'; 
        });

        project.addEventListener('mouseout', () => {
            project.style.transform = 'rotate(0deg)';
            project.style.boxShadow = '4px 6px 15px rgba(0, 0, 0, 0)'; // Revert to the original shadow
        });
    });
});
