import React from 'react';
import Wrapper from '../_Wrapper';
import MajorLinks from './MajorLinks';
import MinorLinks from './MinorLinks';
import Features from '../../misc/features';
import { useTranslation } from '../../misc/i18n';
import VectorImages, { WVectorImageDOMConverter } from '../../misc/vectorImages';

import $ from './style.scss';

/* React Components */
const FrontStage: React.SFC = () => {
  const [t] = useTranslation('front');

  /* Render */
  return (
    <Wrapper
      main
      requiredFeatures={[
      ]}
      className={$.wrapper}
    >
      <header>
        <h1>{t('title')}</h1>
        <h2>{t('subtitle')}</h2>
      </header>
      <main>
        <section>
          <h3>{t('index')}</h3>
          <nav>
            <MajorLinks
              hrefs={[
                'https://blog.wldh.org',
                '/projects',
                '/resume',
                'https://github.com/wldh-g/',
              ]}
              labels={[
                t('lBlog'),
                t('lProjects'),
                t('lResume'),
                t('lGithub'),
              ]}
            />
            <MinorLinks
              hrefs={[
                'https://www.instagram.com/with_jio/',
                'https://www.facebook.com/wldh.aa',
                'https://twitter.com/wldh_aa',
                'https://www.linkedin.com/in/wldh/',
                'https://steamcommunity.com/id/2_shakki',
              ]}
              labels={[
                t('lInsta'),
                t('lFb'),
                t('lTwit'),
                t('lLin'),
                t('lSteam'),
              ]}
            />
          </nav>
        </section>
      </main>
      <footer>

      </footer>
    </Wrapper>
  );
};

export default FrontStage;
