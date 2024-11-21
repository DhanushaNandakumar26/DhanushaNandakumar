import React, { useState, useEffect, useRef } from 'react';
import './ExperienceSidebar.css';

const ExperienceSidebar = () => {
    const [selectedMenu, setSelectedMenu] = useState('experience');
    const experienceContentRef = useRef(null);
    const internshipContentRef = useRef(null);
    const projectContentRef = useRef(null);



    const handleScroll = () => {
        const viewportHeight = window.innerHeight;

        const experienceTop = experienceContentRef.current.getBoundingClientRect().top;
        const internshipTop = internshipContentRef.current.getBoundingClientRect().top;
        const projectTop = projectContentRef.current.getBoundingClientRect().top;

        if (projectTop < viewportHeight / 2) {
            setSelectedMenu('project');
        } else if (internshipTop < viewportHeight / 2) {
            setSelectedMenu('internship');
        } else if (experienceTop < viewportHeight / 2) {
            setSelectedMenu('experience');
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        if (menu === 'experience') {
            window.scrollTo({ top: experienceContentRef.current.offsetTop, behavior: 'smooth' });
        } else if (menu === 'internship') {
            window.scrollTo({ top: internshipContentRef.current.offsetTop, behavior: 'smooth' });
        } else if (menu === 'project') {
            window.scrollTo({ top: projectContentRef.current.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div className="experience-section">
            <div className="menu">
                <div
                    className={`menu-item ${selectedMenu === 'experience' ? 'selected' : ''}`}
                    onClick={() => handleMenuClick('experience')}
                >
                    Experience
                </div>
                <div
                    className={`menu-item ${selectedMenu === 'internship' ? 'selected' : ''}`}
                    onClick={() => handleMenuClick('internship')}
                >
                    Internship
                </div>
                <div
                    className={`menu-item ${selectedMenu === 'project' ? 'selected' : ''}`}
                    onClick={() => handleMenuClick('project')}
                >
                    Projects
                </div>
            </div>
            <div className="contentSec">
                <div ref={experienceContentRef} className={`content-item ${selectedMenu === 'experience' ? 'visible' : ''}`}>
                    <h2>Software Engineer <li className='companyName'><span>Pumex Infotech Pvt. Ltd.</span></li> </h2>
                    <span><b>July 2022 - Present</b></span>
                    <p>With over two years of professional experience as a software developer at Pumex Infotech Pvt. Ltd., I have cultivated a strong foundation in both front-end and back-end technologies. My expertise spans across HTML, CSS, JavaScript, React.js, React with Typescript, Tailwind CSS for creating dynamic and responsive user interfaces, as well as Node.js and Express for building robust server-side applications. I've worked extensively with Redux for state management and have a solid grasp of database technologies like MongoDB and MySQL. Throughout my career, I have contributed to diverse projects, which have honed my problem-solving skills and adaptability. My experience has equipped me with a comprehensive understanding of software development practices and a commitment to delivering high-quality solutions.</p>
                    <span className='skillHead'><b>Skills</b></span>
                    <div className="skills">
                        <div className="skill-tag">React.js</div>
                        <div className="skill-tag">Next.js</div>
                        <div className="skill-tag">Node.js</div>
                        <div className="skill-tag">Express</div>
                        <div className="skill-tag">MongoDB</div>
                        <div className="skill-tag">HTML</div>
                        <div className="skill-tag">CSS</div>
                        <div className="skill-tag">Sass</div>
                        <div className="skill-tag">Tailwind CSS</div>
                        <div className="skill-tag">JavaScript</div>
                        <div className="skill-tag">Typescript</div>
                        <div className="skill-tag">Redux</div>
                        <div className="skill-tag">Redux Toolkit</div>
                        <div className="skill-tag">Context API</div>
                        <div className="skill-tag">RESTful APIs</div>
                        <div className="skill-tag">Debugging</div>
                        <div className="skill-tag">Agile Methodologies</div>
                        <div className="skill-tag">Verion Control(Git)</div>
                        <div className="skill-tag">Flux</div>
                        <div className="skill-tag">AWS</div>
                        <div className="skill-tag">Wordpress</div>
                    </div>
                </div>
                <div ref={internshipContentRef} className={`content-item ${selectedMenu === 'internship' ? 'visible' : ''}`}>
                    <h2>Software Engineer Intern <li className='companyName'><span>Pumex Infotech Pvt. Ltd.</span></li> </h2>
                    <span><b>April - July 2022</b></span>
                    <p>During my 3 month internship as a Software Engineer at Pumex Infotech Pvt. Ltd., I gained hands-on experience in both front-end and back-end development, collaborating closely with senior developers and participating in Agile practices. A notable project I worked on was Billezy, a utility management system developed as a sample demo project. For Billezy, I utilized HTML, CSS, and React.js to create a responsive user interface, and Node.js with Express for a robust back-end. The project also involved setting up a MySQL database and developing RESTful APIs for seamless data flow. This internship enhanced my technical skills, teamwork abilities, and understanding of real-world software development processes.</p>
                    <span className='skillHead'><b>Skills</b></span>
                    <div className="skills">
                        <div className="skill-tag">HTML</div>
                        <div className="skill-tag">CSS</div>
                        <div className="skill-tag">Sass</div>
                        <div className="skill-tag">React.js</div>
                        <div className="skill-tag">Node.js</div>
                        <div className="skill-tag">Express</div>
                        <div className="skill-tag">Bootstrap</div>
                        <div className="skill-tag">MySQL</div>
                        <div className="skill-tag">ORM</div>
                        <div className="skill-tag">Responsiveness</div>
                        <div className="skill-tag">Frontend Development</div>
                        <div className="skill-tag">Software Development Life Cycle</div>
                    </div>
                </div>
                <div ref={projectContentRef} className={`content-item ${selectedMenu === 'project' ? 'visible' : ''}`}>
                <>
                        <h2>Cloud management Dashboard<li className='companyName'><span>Fullstack Developer</span></li> </h2>
                        <span><b>React with Typescript and Node js</b></span>
                        <p>
                        The cloud management dashboard provides a centralized overview of all resources within the company’s AWS account, offering detailed insights into each resource. It enables users to monitor usage, performance, and costs efficiently in real time. With its intuitive interface, the dashboard simplifies resource management and enhances operational visibility.
                        </p>
                        <span className='skillHead'><b>Skills</b></span>
                        <div className="skills">
                            <div className="skill-tag">React</div>
                            <div className="skill-tag">Typescript</div>
                            <div className="skill-tag">Node js</div>
                            <div className="skill-tag">Material UI</div>
                            <div className="skill-tag">Responsiveness</div>
                            <div className="skill-tag">Functional components</div>
                            <div className="skill-tag">React query</div>
                            <div className="skill-tag">Code optimization</div>
                            <div className="skill-tag">Git</div>
                            <div className="skill-tag">Gitlab</div>
                            <div className="skill-tag">Agile Methodologies</div>
                        </div>
                    </>
                <>
                        <h2>Furniture Management system<li className='companyName'><span>Frontend Engineer</span></li> </h2>
                        <span><b>Next.js</b></span>
                        <p>
                        This web-based application simplifies furniture ordering and management by offering a user-friendly platform to browse products, place orders, and track inventory in real time. It caters to both customers and businesses, ensuring seamless order processing and inventory updates. With features like order history, status tracking, and notifications, it enhances the overall shopping experience. The application’s efficient system optimizes operations and supports better decision-making for inventory management.
                        </p>
                        <span className='skillHead'><b>Skills</b></span>
                        <div className="skills">
                        <div className="skill-tag">Next js</div>
                        <div className="skill-tag">Typescript</div>
                            <div className="skill-tag">Tailwind CSS</div>
                            <div className="skill-tag">Responsiveness</div>
                            <div className="skill-tag">Functional components</div>
                            <div className="skill-tag">React query</div>
                            <div className="skill-tag">Redux Toolkit</div>
                            <div className="skill-tag">Code optimization</div>
                            <div className="skill-tag">Git</div>
                            <div className="skill-tag">Bitbucket</div>
                            <div className="skill-tag">Agile Methodologies</div>
                        </div>
                    </>
                <>
                        <h2>Data management application<li className='companyName'><span>Frontend Engineer</span></li> </h2>
                        <span><b>React with Typescript</b></span>
                        <p>
                        This web-based application is designed to streamline Starlink order processing, enhance connectivity solutions, and manage industrial data efficiently. It empowers organizations to optimize network connections and ensure seamless data flow, catering to industries that require reliable and high-performance connectivity. By integrating advanced management tools, the platform simplifies operations and enhances decision-making. Its focus on efficiency and reliability makes it a vital solution for industries dependent on uninterrupted network access.
                        </p>
                        <span className='skillHead'><b>Skills</b></span>
                        <div className="skills">
                        <div className="skill-tag">React</div>
                            <div className="skill-tag">Tailwind CSS</div>
                            <div className="skill-tag">Responsiveness</div>
                            <div className="skill-tag">Typescript</div>
                            <div className="skill-tag">Functional components</div>
                            <div className="skill-tag">Redux</div>
                            <div className="skill-tag">Redux Toolkit</div>
                            <div className="skill-tag">Code optimization</div>
                            <div className="skill-tag">Git</div>
                            <div className="skill-tag">Github</div>
                            <div className="skill-tag">Agile Methodologies</div>
                        </div>
                    </>
                <>
                        <h2>Certification Management Portal<li className='companyName'><span>Frontend Engineer</span></li> </h2>
                        <span><b>React js</b></span>
                        <p>
                        This web application is tailored for certified professionals to showcase their achievements. It provides a platform to display earned certifications and digital badges in a visually appealing and organized manner. Users can manage their credentials, share their profiles, and enhance their professional visibility. The app ensures credibility and authenticity, making it a valuable tool for career advancement.
                        </p>
                        <span className='skillHead'><b>Skills</b></span>
                        <div className="skills">
                        <div className="skill-tag">React.js</div>

                            <div className="skill-tag">CSS</div>
                            <div className="skill-tag">Responsiveness</div>
                            <div className="skill-tag">Class components</div>
                            <div className="skill-tag">Redux</div>
                            <div className="skill-tag">Code optimization</div>
                            <div className="skill-tag">Git</div>
                            <div className="skill-tag">Github</div>
                            <div className="skill-tag">Agile Methodologies</div>
                        </div>
                    </>
                <>
                        <h2>BillEazy<li className='companyName'><span>Utility Management System</span></li> </h2>
                        <span><b>Fullstack project</b></span>
                        <p>
                        This project is a web-based application designed to streamline utility management and bill payment for apartment complexes. Built with React.js for the front end and Node.js with MySQL for the backend, the platform offers an intuitive interface for users to manage and track utility bills such as electricity, water, and maintenance. Each user can view their outstanding dues, make payments securely, and access historical billing records for better financial planning. Apartment administrators can monitor bill statuses, generate invoices, and maintain a centralized database for utility usage. The application ensures efficient communication between residents and management, reducing manual efforts and paperwork. With features like automated reminders for due payments and real-time updates, it enhances convenience and operational transparency. The secure and scalable architecture ensures reliability and accommodates the needs of both small and large apartment complexes.
                        </p>
                        <span className='skillHead'><b>Skills</b></span>
                        <div className="skills">
                            <div className="skill-tag">HTML</div>
                            <div className="skill-tag">CSS</div>
                            <div className="skill-tag">Javascript</div>
                            <div className="skill-tag">React.js</div>
                            <div className="skill-tag">Node Js</div>
                            <div className="skill-tag">MySQL</div>
                            <div className="skill-tag">REST API</div>
                            <div className="skill-tag">ORM(Object Relational Model)</div>

                        </div>
                    </>
                 
                    <>
                        <h2>Recipe Finder<li className='companyName'><span>MCA Academic project in 2022</span></li> </h2>
                        <span><b>Deep learning - Faster RCNN project</b></span>
                        <p>People often tire of eating the same foods repeatedly, leading them to opt for restaurant or junk food, which negatively impacts their health due to the suboptimal quality of ingredients. The proposed system addresses this by suggesting recipes based on the vegetables available to the user. By scanning the available vegetables, the web application quickly displays a list of possible recipes. A key feature of the project is using a Deep Learning approach with Faster RCNN to detect multiple objects, accurately identifying vegetables and discarding similar-looking non-vegetable items. The system leverages the "Fruits and Vegetables Image Recognition Dataset" from Kaggle to enhance its predictive capabilities. This web application aims to provide healthier eating options by making meal planning more convenient and tailored to the user's available ingredients.
                        </p>
                        <span className='skillHead'><b>Skills</b></span>
                        <div className="skills">
                            <div className="skill-tag">Python</div>
                            <div className="skill-tag">Faster RCNN</div>
                            <div className="skill-tag">Image Annotation</div>
                            <div className="skill-tag">HTML</div>
                            <div className="skill-tag">CSS</div>
                        </div>
                    </>
                    <>
                        <h2>Care and Cure<li className='companyName'><span>BCA Academic project in 2020</span></li> </h2>
                        <span><b>Node js project</b></span>
                        <p>The "Care and Cure" project is a web-based application that provides detailed information about hospitals, including services and contact details. It offers a platform for online consultations, allowing patients to connect with doctors remotely. The application also facilitates knowledge sharing and communication regarding blood donation requests, enabling users to post and respond to urgent needs for blood. With a user-friendly interface, it ensures a seamless and secure experience for users. Overall, "Care and Cure" aims to enhance healthcare accessibility and community support.
                        </p>
                        <span className='skillHead'><b>Skills</b></span>
                        <div className="skills">
                            <div className="skill-tag">HTML</div>
                            <div className="skill-tag">CSS</div>
                            <div className="skill-tag">Javascript</div>
                            <div className="skill-tag">Node Js</div>
                            <div className="skill-tag">MySQL</div>
                        </div>
                    </>
                   
                </div>
            </div>
        </div>
    );
};

export default ExperienceSidebar;
