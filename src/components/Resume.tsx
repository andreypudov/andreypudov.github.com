import React from 'react';
import Layout from './shared/Layout'

function Resume() {
  return (
    <Layout>
      <div className = 'container'>
        <h1>Resume</h1>

        <p className = 'lead'>
          Driven professional with broad technical skill set. Thrives in environments that constantly embrace new technologies. Interested in challenging and varied position that will enable me to capitalize on sound  technical and project management expertise, with opportunities for personal and professional growth.
        </p>

        <div>
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
                <div className = 'job clearfix'>
                  <div className = 'col-xs-3'>
                    <div className = 'where'>Intel </div>
                    <div className = 'year'>2018 - present</div>
                  </div>
                  <div className = 'col-xs-9'>
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
                <div className = 'job clearfix'>
                  <div className = 'col-xs-3'>
                    <div className = 'where'>Intel</div>
                    <div className = 'year'>2013 - 2018</div>
                  </div>
                  <div className = 'col-xs-9'>
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
                <div className = 'job clearfix'>
                  <div className = 'col-xs-3'>
                    <div className = 'where'>Intel</div>
                    <div className = 'year'>2011 - 2013</div>
                  </div>
                  <div className = 'col-xs-9'>
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
                  <a href = 'tel:+7 (952) 457 10 55' target = '_blank'>
                    <div className = 'icon pull-left text-center'><span className = 'fa fa-phone fa-fw'></span></div>
                    <div className = 'title only pull-right'>+7 (952) 457 10 55</div>
                  </a>
                </div>
                <div className = 'contact-item'>
                  <a href = 'mailto:mail@andreypudov.com' target = '_blank'>
                    <div className = 'icon pull-left text-center'><span className = 'fa fa-envelope fa-fw'></span></div>
                    <div className = 'title only pull-right'>mail@andreypudov.com</div>
                  </a>
                </div>
                <div className = 'contact-item'>
                  <a href = 'https://linkedin.com/in/pudov' target = '_blank'>
                    <div className = 'icon pull-left text-center'><span className = 'fa fa-linkedin fa-fw'></span></div>
                    <div className = 'title pull-right'>LinkedIn</div>
                    <div className = 'description pull-right'><small>https://linkedin.com/in/pudov</small></div>
                  </a>
                </div>
                <div className = 'contact-item'>
                  <a href = 'https://www.facebook.com/andreypudov' target = '_blank'>
                    <div className = 'icon pull-left text-center'><span className = 'fa fa-facebook fa-fw'></span></div>
                    <div className = 'title pull-right'>Facebook</div>
                    <div className = 'description pull-right'><small>https://facebook.com/andreypudov</small></div>
                  </a>
                </div>
              </div>

              <div className = 'box'>
                <h2>Skills</h2>
                <div className = 'skills'>
                  <div className = 'item-skills' data-percent = '0.90' style = {{ width: '414px' }}>C#</div>
                  <div className = 'item-skills' data-percent = '0.75' style = {{ width: '345px' }}>ASP.NET MVC / Core</div>
                  <div className = 'item-skills' data-percent = '0.75' style = {{ width: '345px' }}>TypeScript</div>
                  <div className = 'item-skills' data-percent = '0.60' style = {{ width: '276px' }}>React / Redux</div>
                  <div className = 'item-skills' data-percent = '0.25' style = {{ width: '115px' }}>CSS / Sass / LESS</div>
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
        </div>
      </div>
    </Layout>
  );
}

export default Resume;