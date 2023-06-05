import { useTranslation } from 'react-i18next';
import Layout from './shared/Layout'

const Resume = () => {
  const { t } = useTranslation();

  return (
    <Layout title = { 'Resume' }>
      <div className = 'container'>
        <h1>{t('Resume.Resume')}</h1>

        <p className = 'lead text-muted mb-5'>
          {t('Resume.DrivenProfessional')}
        </p>

        <div className = 'row'>
          <div className = 'col-xs-12 col-sm-7'>
            <div className = 'curriculum-vitae'>
              <div className = 'box'>
                <h2>{t('Resume.Education')}</h2>
                <ul id = 'education' className = 'clearfix'>
                  <li>
                    <div className = 'year pull-left'>1989</div>
                    <div className = 'description pull-right'>
                      <h3>{t('Resume.IWasBorn')}</h3>
                      <p>{t('Resume.TheCapitalCity')}</p>
                    </div>
                  </li>
                  <li>
                    <div className = 'year pull-left'>2002</div>
                    <div className = 'description pull-right'>
                      <h3>{t('Resume.MusicalSchool')}</h3>
                      <p>{t('Resume.MasterInMusic')}</p>
                    </div>
                  </li>
                  <li>
                    <div className = 'year pull-left'>2006</div>
                    <div className = 'description pull-right'>
                      <h3>{t('Resume.HighSchool')}</h3>
                      <p></p>
                    </div>
                  </li>
                  <li>
                    <div className = 'year pull-left'>2011</div>
                    <div className = 'description pull-right'>
                      <h3>{t('Resume.UniversityGraduation')}</h3>
                      <p>{t('Resume.MADI')}</p>
                      <p>
                        <small>
                          <strong>{t('Resume.Thesis')}:</strong>&nbsp;{t('Resume.TheUseOfNeuralNetworks')}
                        </small>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className = 'year pull-left'>2016</div>
                    <div className = 'description pull-right'>
                      <h3>{t('Resume.Enrolled')}</h3>
                      <p>{t('Resume.Vodnyk')}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className = 'box'>
                <h2>{t('Resume.Experience')}</h2>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>{t('Resume.CombinationAB')}</div>
                    <div className = 'year'>{t('Resume.2021ToPresent')}</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>{t('Resume.SrEngineer')}</div>
                    <div className = 'description'>
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>{t('Resume.EPAM')}</div>
                    <div className = 'year'>2020 - 2021</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>{t('Resume.SrEngineer')}</div>
                    <div className = 'description'>
                      {t('Resume.DevelopedAnInnovative')}<br />
                      <br />
                      {t('Resume.LedAndMentoredATeam')}
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>{t('Resume.Intel')}</div>
                    <div className = 'year'>2018 - 2020</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>{t('Resume.TechnicalLead')}</div>
                    <div className = 'description'>
                      {t('Resume.TookTheRoleOfTeamLeader')}<br />
                      <br />
                      {t('Resume.LedBuildingOfNewProjectInfrastructure')}<br />
                      <br />
                      {t('Resume.ImplementedSeveralBusinessCriticalFeatures')}
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>{t('Resume.Intel')}</div>
                    <div className = 'year'>2013 - 2018</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>{t('Resume.SrEngineer')}</div>
                    <div className = 'description'>
                      {t('Resume.SoftwareEngineerResponsibleForTheDesign')}<br />
                      <br />
                      {t('Resume.DesignedAndDevelopedTheNewWebsiteArchitecture')}<br />
                      <br />
                      {t('Resume.ImplementedAModernRoleBasedRightsModel')}<br />
                      <br />
                      {t('Resume.ImplementedInfrastructure')}
                    </div>
                  </div>
                </div>
                <div className = 'job clearfix row'>
                  <div className = 'col-sm-3'>
                    <div className = 'where'>{t('Resume.Intel')}</div>
                    <div className = 'year'>2011 - 2013</div>
                  </div>
                  <div className = 'col-sm-9'>
                    <div className = 'profession'>{t('Resume.Engineer')}</div>
                    <div className = 'description'>
                      {t('Resume.MainSoftwareDeveloperForCommonLicensing')}<br />
                      <br />
                      {t('Resume.ImplementedTheCodeSigningInterface')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className = 'col-xs-12 col-sm-5'>
            <div className = 'curriculum-vitae'>
              <div className = 'box clearfix'>
                <h2>{t('Resume.Contact')}</h2>
                <div className = 'contact-item'>
                  <a href = 'mailto:mail@andreypudov.com' target = '_blank' rel = 'noreferrer'>
                    <div className = 'icon pull-left text-center'><span className = 'fa fa-envelope fa-fw'></span></div>
                    <div className = 'title only'>mail@andreypudov.com</div>
                  </a>
                </div>
                <div className = 'contact-item'>
                  <a href = 'https://linkedin.com/in/pudov' target = '_blank' rel = 'noreferrer'>
                    <div className = 'icon pull-left text-center'><span className = 'fa fa-linkedin fa-fw'></span></div>
                    <div className = 'title'>{t('Resume.LinkedIn')}</div>
                    <div className = 'description'><small>https://linkedin.com/in/pudov</small></div>
                  </a>
                </div>
              </div>

              <div className = 'box'>
                <h2>{t('Resume.Skills')}</h2>
                <div className = 'skills'>
                  <div className = 'item-skills' data-percent = '0.90' style = {{ width: '90%' }}>C#</div>
                  <div className = 'item-skills' data-percent = '0.75' style = {{ width: '75%' }}>ASP.NET MVC / Core</div>
                  <div className = 'item-skills' data-percent = '0.75' style = {{ width: '75%' }}>TypeScript</div>
                  <div className = 'item-skills' data-percent = '0.60' style = {{ width: '60%' }}>React / Redux</div>
                  <div className = 'item-skills' data-percent = '0.25' style = {{ width: '25%' }}>CSS / Sass / LESS</div>
                  <div className = 'skills-legend clearfix'>
                    <div className = 'legend-left legend'><small>{t('Resume.Beginner')}</small></div>
                    <div className = 'legend-left legend'><span><small>{t('Resume.Proficient')}</small></span></div>
                    <div className = 'legend-right legend'><span><small>{t('Resume.Expert')}</small></span></div>
                    <div className = 'legend-right legend'><small>{t('Resume.Master')}</small></div>
                  </div>
                </div>
              </div>

              <div className = 'box'>
                <h2>{t('Resume.Languages')}</h2>

                <div id = 'language-skills'>
                  <div className = 'skill'>
                    {t('Resume.Russian')}
                  </div>
                  <div className = 'skill'>
                    {t('Resume.English')}
                  </div>
                </div>
              </div>

              <div className = 'box'>
                <h2>{t('Resume.Hobbies')}</h2>

                <div className = 'hobby'>{t('Resume.Aviation')}</div>
                <div className = 'hobby'>{t('Resume.Photography')}</div>
                <div className = 'hobby'>{t('Resume.Running')}</div>
                <div className = 'hobby'>{t('Resume.Cycling')}</div>
              </div>
            </div>
          </div>

          <div className = 'col'>
            <div className = 'curriculum-vitae'>
              <h2>{t('Resume.Recommendations')}</h2>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    {t('Resume.AndreyWasATechnicalLeaderInMyTeam')}
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/viktorya-gvozdeva-154046120/' target = '_blank' rel = 'noreferrer'>{t('Resume.ViktoryaGvozdeva')}</a>
                </figcaption>
              </figure>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    {t('Resume.AndreyAndIWorkedInTheSameGroup')}
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/tanya-zaslavsky-905aa53/' target = '_blank' rel = 'noreferrer'>{t('Resume.TanyaZaslavsky')}</a>
                </figcaption>
              </figure>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    {t('Resume.IWorkedWithAndreyAsPart')}
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/doug-helbling-9151148/' target = '_blank' rel = 'noreferrer'>{t('Resume.DougHelbling')}</a>
                </figcaption>
              </figure>

              <figure className = 'recommendations'>
                <blockquote className = 'blockquote'>
                  <p>
                    {t('Resume.IWorkedWithAndreyForManyYears')}
                  </p>
                </blockquote>
                <figcaption className = 'blockquote-footer'>
                  <a href = 'https://www.linkedin.com/in/paul-frumkin/' target = '_blank' rel = 'noreferrer'>{t('Resume.PaulFrumkin')}</a>
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