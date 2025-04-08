import Layout from './shared/Layout'

const Resume = () => {
  return (
    <Layout title = { 'Resume' }>
      <div className = 'container'>
        <h1>Resume</h1>

        <p className = 'lead text-muted mb-5'>
        Driven professional with broad technical skill set. Thrives in environments that constantly embrace new technologies. Interested in challenging and varied position that will enable me to capitalize on sound  technical and project management expertise, with opportunities for personal and professional growth.
        </p>

        <div className = 'row'>
          <div className = 'col-xs-12 col-sm-7'>
            <div className = 'curriculum-vitae'>
              <div className = 'box'>
                <h2>Education</h2>
                <ul id = 'education' className = 'clearfix'>
                  <li>
                    <div className = 'year pull-left'>1989</div>
                    <div className = 'description pull-right'>
                      <h3>I was born in Cheboksary</h3>
                      <p>The capital city of the Chuvash Republic, Russia and a port on the Volga River.</p>
                    </div>
                  </li>
                  <li>
                    <div className = 'year pull-left'>2002</div>
                    <div className = 'description pull-right'>
                      <h3>Musical school graduation</h3>
                      <p>Master in Music. Specializing in accordion (Russian bayan).</p>
                    </div>
                  </li>
                  <li>
                    <div className = 'year pull-left'>2006</div>
                    <div className = 'description pull-right'>
                      <h3>High school graduation</h3>
                      <p></p>
                    </div>
                  </li>
                  <li>
                    <div className = 'year pull-left'>2011</div>
                    <div className = 'description pull-right'>
                      <h3>University graduation in Computer Science</h3>
                      <p>Moscow State Automobile and Road Technical Institute (State Technical University)</p>
                      <p>
                        <small>
                          <strong>Thesis:</strong>&nbsp;The use of neural networks in forecasting the stock market and development automated information system for analysis and market forecasting.
                        </small>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className = 'year pull-left'>2016</div>
                    <div className = 'description pull-right'>
                      <h3>Enrolled in graduate school</h3>
                      <p>Volga State University of Water Transport</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className = 'box'>
                <h2>Experience</h2>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>Derivco Sports</div>
                    <div className = 'year'>2021 - present</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>Sr. Software Development Engineer</div>
                    <div className = 'description'>
                      Developed and maintained a social platform with a strong focus on media content representation, handling, and user engagement.<br />
                      <br />
                      On the backend, I implemented a machine learning-based ranking and recommendation algorithm to optimize content delivery and enhance user experience across the platform. Additionally, I worked extensively on media post encoding, automated AI-based content moderation processes, and efficient storage solutions to handle high volumes of media content.<br />
                      <br />
                      On the frontend, I was responsible for performance fine-tuning and ensuring visual consistency across multiple end-user platforms. I collaborated closely with the design team to translate their vision into a functional and intuitive interface. By working alongside stakeholders, I ensured that the platform met business requirements while delivering a seamless, high-quality user experience.
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>EPAM Systems</div>
                    <div className = 'year'>2020 - 2021</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>Sr. Software Development Engineer</div>
                    <div className = 'description'>
                      Developed an innovative platform for data-driven facility management decision-making for the United States Golf Association, utilizing a scalable microservice architecture on Microsoft Azure cloud infrastructure. Designed and maintained RESTful API services built on ASP.NET Core, Entity Framework Core, Microsoft SQL Server, Kafka, Autofac, and AutoMapper. Created comprehensive unit and integration tests within a test-driven development environment to ensure system reliability.<br />
                      <br />
                      Led and mentored a team of interns working on a “random coffee” website designed to foster relationships among company members. Actively participated in gathering and understanding the project’s business requirements. Assisted interns in setting both short-term and long-term goals, providing continuous support throughout the project lifecycle. Offered guidance to overcome complex challenges and ensured project deadlines were met.
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>Intel</div>
                    <div className = 'year'>2018 - 2020</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>Senior Software Engineer Technical Lead</div>
                    <div className = 'description'>
                      Assumed the role of Team Leader for a newly established team in Nizhny Novgorod. Played an active role in the hiring and team-building process, mentoring the majority of newly hired employees to ensure their smooth and efficient integration. Additionally, managed engagement with key business stakeholders and oversaw the organization of product build and distribution processes.<br />
                      <br />
                      Led the development of new project infrastructure and contributed to the rapid setup of a continuous integration system, resulting in a significant reduction in project build time. Improved code management and review processes by applying industry-leading development and testing practices.<br />
                      <br />
                      Successfully implemented several business-critical features. Led the quick and effective resolution of critical security vulnerabilities, collaborating with other teams to ensure no impact on release schedules. Coordinated closely with customers, addressing initial feedback on critical issues and ensuring timely delivery of the final product with all reported blockers resolved.
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>Intel</div>
                    <div className = 'year'>2013 - 2018</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>Sr. Software Development Engineer</div>
                    <div className = 'description'>
                      Software engineer responsible for the design, development, and maintenance of the Intel Registration Center’s entitlement and download website for Intel software products, with a focus on enhancing both the user interface and system APIs.<br />
                      <br />
                      Designed and developed a new website architecture for the Intel Registration Center, utilizing modern user interface technologies. Played a key role in migrating ASP.NET web pages to MVC architecture, which improved website performance, enhanced the user experience, and simplified maintenance.<br />
                      <br />
                      Implemented a modern role-based access control model, enabling dynamic management of user access to web pages through role assignments.<br />
                      <br />
                      Developed infrastructure and processes for automated project deployment, encompassing source code compilation, configuration file transformations, and publishing to integration servers in both development and pre-production environments. This automation ensures consistent, error-free, and reproducible code migrations.
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>Intel</div>
                    <div className = 'year'>2011 - 2013</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>Engineer</div>
                    <div className = 'description'>
                      Main software developer responsible for licensing and installation technologies for Intel software products on Linux. Spearheaded the addition of critical Graphical User Interface (GUI) functionality. Designed and developed an installation wizard for the installation client, streamlining the product installation creation process. Demonstrated a strong commitment to quality by developing an Automated Unit Test System, improving early-stage bug detection and overall software reliability.<br />
                      <br />
                      Implemented the code signing interface within the installation client, ensuring secure software deployment. Additionally, developed and integrated the Smart Cache and Shell Executor features, significantly reducing initialization times and improving execution efficiency on Linux platforms.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className = 'col-xs-12 col-sm-5'>
            <div className = 'curriculum-vitae'>
              <div className = 'box clearfix'>
                <h2>Contact</h2>
                <div className = 'contact-item'>
                  <a href = 'mailto:mail@andreypudov.com' target = '_blank' rel = 'noreferrer'>
                    <div className = 'icon pull-left text-center'><span className = 'fa fa-envelope fa-fw'></span></div>
                    <div className = 'title only'>mail@andreypudov.com</div>
                  </a>
                </div>
                <div className = 'contact-item'>
                  <a href = 'https://linkedin.com/in/pudov' target = '_blank' rel = 'noreferrer'>
                    <div className = 'icon pull-left text-center'><span className = 'fa fa-linkedin fa-fw'></span></div>
                    <div className = 'title'>LinkedIn</div>
                    <div className = 'description'><small>https://linkedin.com/in/pudov</small></div>
                  </a>
                </div>
              </div>

              <div className = 'box'>
                <h2>Skills</h2>
                <div className = 'skills'>
                  <div className = 'item-skills' data-percent = '0.90' style = {{ width: '90%' }}>C#</div>
                  <div className = 'item-skills' data-percent = '0.75' style = {{ width: '75%' }}>ASP.NET MVC / Core</div>
                  <div className = 'item-skills' data-percent = '0.75' style = {{ width: '75%' }}>TypeScript</div>
                  <div className = 'item-skills' data-percent = '0.60' style = {{ width: '60%' }}>React / Redux</div>
                  <div className = 'item-skills' data-percent = '0.25' style = {{ width: '25%' }}>CSS / Sass / LESS</div>
                  <div className = 'skills-legend clearfix'>
                    <div className = 'legend-left legend'><small>Beginner</small></div>
                    <div className = 'legend-left legend'><span><small>Proficient</small></span></div>
                    <div className = 'legend-right legend'><span><small>Expert</small></span></div>
                    <div className = 'legend-right legend'><small>Master</small></div>
                  </div>
                </div>
              </div>

              <div className = 'box'>
                <h2>Languages</h2>

                <div id = 'language-skills'>
                  <div className = 'skill'>
                    Russian
                  </div>
                  <div className = 'skill'>
                    English
                  </div>
                </div>
              </div>

              <div className = 'box'>
                <h2>Hobbies</h2>

                <div className = 'hobby'>Aviation</div>
                <div className = 'hobby'>Photography</div>
                <div className = 'hobby'>Running</div>
                <div className = 'hobby'>Cycling</div>
              </div>
            </div>
          </div>

          <div className = 'col'>
            <div className = 'curriculum-vitae'>
              <h2>Recommendations</h2>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    I had the pleasure of working with Andrey, and I can confidently say he is an outstanding developer. He is highly structured, creative, and unafraid to take on new challenges or responsibilities. Andrey is always approachable and responsive, readily offering support to his colleagues.
                  </p>
                  <p>
                    What sets Andrey apart is his ability to bring innovative ideas and smart solutions to the table, consistently improving both processes and outcomes. His collaborative approach and problem-solving mindset made it a true pleasure to work alongside him.
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/elizsma/' target = '_blank' rel = 'noreferrer'>Elizaveta Smirnova</a>
                </figcaption>
              </figure>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    Andrey is a strong software engineer with professional attitude on very high level. He asks provocative technological questions and has the potential to implement every idea. Organized and fantastic person to work with. You can definitely trust him.
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/simeon-petkov-89a879aa/' target = '_blank' rel = 'noreferrer'>Simeon Petkov</a>
                </figcaption>
              </figure>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    Andrey is very responsive and knowledgeable person. It was a pleasure to work with Andrey - Hi is very strong engineer. I think that Andrey will perform well in any team!
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/victor-kuznetsov-6460271a5/' target = '_blank' rel = 'noreferrer'>Victor Kuznetsov</a>
                </figcaption>
              </figure>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    Andrey was a technical leader in my team for approximate 2 years. He is a professional and very experienced engineer! Andrey really helped me on my way from intern to engineer. He gave me an understanding how to resolve technical challenges in the best way. I extend my programming and soft skills very fast with his help and advices. Andrey's background and strong problem resolving skills helped to the team to resolve technical challenges. Working with Andrey was a great opportunity for me!
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/viktorya-gvozdeva-154046120/' target = '_blank' rel = 'noreferrer'>Viktorya Gvozdeva</a>
                </figcaption>
              </figure>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    Andrey and I worked in the same group for a few years in Intel. This group was responsible for the system which registered and distributed Intel software. Andrey showed himself as a UI wizard and a quick learner. He is a person with high levels of professionalism, integrity and above the expert level knowledge of DevOps tools, Bootstrap, AngularJS frameworks. This made Andrey a primary expert in those areas for our team. With people like Andrey on the team lead as well as a project manager you will not have any problems completing any task or project in schedule time with high quality.
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/tanya-zaslavsky-905aa53/' target = '_blank' rel = 'noreferrer'>Tanya Zaslavsky</a>
                </figcaption>
              </figure>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    I worked with Andrey as part of a global team for a number of years. It was a joy to work with such a talented engineer and skilled communicator. He brings his best to every effort.
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/doug-helbling-9151148/' target = '_blank' rel = 'noreferrer'>DougHelbling</a>
                </figcaption>
              </figure>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    I worked with Andrey for many years, and I was his manager for three years.  He is a very strong software engineer, particularly in User Interface but he also can develop middleware and backend database.  He keeps up with technology which allows him to apply the latest techniques for automation problem solving.  He is a quick learner and documents his implementations for other team members to learn and follow.  He is team oriented and communicates well.
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/paul-frumkin/' target = '_blank' rel = 'noreferrer'>Paul Frumkin</a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;