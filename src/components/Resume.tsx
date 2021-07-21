import Layout from './shared/Layout'

function Resume() {
  return (
    <Layout>
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
                          <strong>Thesis:</strong> The use of neural networks in forecasting the stock market and development automated information system for analysis and market forecasting.
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
                    <div className = 'where'>Combination AB </div>
                    <div className = 'year'>2021 - present</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>Sr. Software Development Engineer</div>
                    <div className = 'description'>
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>EPAM Systems </div>
                    <div className = 'year'>2020 - 2021</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>Sr. Software Development Engineer</div>
                    <div className = 'description'>
                      Developed an innovative platform for data-driven facility management decision-making for United States Golf Association, employing scalable microservice architecture on Microsoft Azure cloud infrastructure. Designed and maintained RESTful APIs services build on top of ASP.NET Core, Entity Core, Microsoft. SQL Server, Kafka, Autofac, and AutoMapper. Created extensive unit, and integration tests in a test-driven development environment.<br />
                      <br />
                      Led and mentored a team of interns working on the random coffee website that helps build great relationships with the company members. Involved in gathering and in understanding the business requirements of the project. Helped interns to create short-term and long-term goals and supported them along the way. Offered guidance to deal with challenging problems and meet deadlines.
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>Intel </div>
                    <div className = 'year'>2018 - 2020</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>Senior Software Engineer Technical Lead</div>
                    <div className = 'description'>
                      Took the role of team leader for the new team in Nizhny Novgorod. Actively participated in hiring and team building process by mentoring almost all hired employees and ensuring their quick and efficient integration. In addition, drove engagement with business-critical stakeholders and organization of product building and distribution processes.<br />
                      <br />
                      Led building of new project infrastructure and helped to set up new continuous integration infrastructure in a very short time. As the result, drastically reduced project build time, significantly improved code management and review process using best-known development and testing methods.<br />
                      <br />
                      Implemented several business-critical features. Led the implementation of critical security vulnerability fixes that was done in collaboration with other teams in a quick and efficient manner (w/o impact for release). In addition, coordinated the work with customers starting from initial feedback with many reported blocker issues and finishing with fixed product delivery.
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
                      Software engineer responsible for the design, development, and maintenance of the Intel Registration Center  entitlement and download website for Intel software products, focusing on user interface and system APIs.<br />
                      <br />
                      Designed and developed the new website architecture for Intel Registration Center using modern user interface. A primary contributor to migration of ASP.NET web pages to MVC technology. Using MVC pages improves website performance, provides better user experience, and is easier to maintain.<br />
                      <br />
                      Implemented a modern role-based rights model. User account access to web pages can be managed dynamically by assigning them to required roles.<br />
                      <br />
                      Implemented infrastructure and processes for automated project deployment. This includes source code compilation, configuration file transformations, publishing to integration servers in the development and pre-production environments. This allows for automated, error-free, reproducible code migrations.
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>Intel</div>
                    <div className = 'year'>2011 - 2013</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>Software Development Engineer</div>
                    <div className = 'description'>
                      Main software developer for common licensing and installation technologies for Intel software products on Linux. Added the crucial Graphical User Interface functionality. Developed a wizard for the installation client, a tool used to create product installs. Showed quality commitment in developing the Automated Unit Test System to improve the capability to find bugs earlier in the development process.<br />
                      <br />
                      Implemented the code signing interface in the installation client. Also developed and integrated the Smart Cache and Shell Executor features into the installation client for Linux to significantly decrease initialization and common execution time.
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
                  <a href = 'tel:+7 (952) 457 10 55' target = '_blank' rel = 'noreferrer'>
                    <div className = 'icon pull-left text-center'><span className = 'fa fa-phone fa-fw'></span></div>
                    <div className = 'title only'>+7 (952) 457 10 55</div>
                  </a>
                </div>
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
                    <div className = 'descriptio'><small>https://linkedin.com/in/pudov</small></div>
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
                    <div className = 'icons pull-right'>
                      <div style = {{ width: '100%', height: '14px' }} className = 'icons-red' />
                    </div>
                  </div>
                  <div className = 'skill'>
                    English
                    <div className = 'icons pull-right'>
                      <div style = {{ width: '60%', height: '14px' }} className = 'icons-red' />
                    </div>
                  </div>
                </div>
              </div>

              <div className = 'box'>
                <h2>Hobbies</h2>

                <div className = 'hobby'>Paragliding</div>
                <div className = 'hobby'>Running</div>
                <div className = 'hobby'>Cycling</div>
                <div className = 'hobby'>Photography</div>
              </div>
            </div>
          </div>

          <div className = 'col'>
            <div className = 'curriculum-vitae'>
              <h2>Recommendations</h2>

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
                    Andrey and I worked in the same group for a few years in Intel. This group was responsible for the system which registered and distributed Intel software.Andrey showed himself as a UI wizard and a quick learner. He is a person with high levels of professionalism, integrity and above the expert level knowledge of DevOps tools, Bootstrap, AngularJS frameworks. This made Andrey a primary expert in those areas for our team. With people like Andrey on the team lead as well as a project manager you will not have any problems completing any task or project in schedule time with high quality.
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
                  <a href = 'https://www.linkedin.com/in/doug-helbling-9151148/' target = '_blank' rel = 'noreferrer'>Doug Helbling</a>
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