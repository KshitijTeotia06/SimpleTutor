import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'About Us',
    paragraph: 'Learn more about the team and tutors behind our organization.'  
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" id = "about"/>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Founder / President / AMC 8 Instructor
                  </div>
                <h3 className="mt-0 mb-12">
                  Nitish Omprakash
                  </h3>
                <p className="m-0">
                Founder and instructor for the AMC 8 Prep class at Simple Tutor. Nitish is going into Junior year of highschool at Evergreen Valley High. He has 3 years of teaching experience, from founding simple tutor summer of 2020, and teaching private classes at other organizations. He has a great interest in mathematics, and is here to share his passion with the community. Holding a score of 22 out of 25 on the AMC 8, he can’t wait to teach students how to tackle the exam this year. He is also an avid mountain biker, and competitive soccer player for the school’s team.  
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/nitish.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder / Algebra 2 Instructor
                </div>
                <h3 className="mt-0 mb-12">
                  Aniket Gupta
                </h3>
                <p className="m-0">
                Co-founder and Algebra 2 instructor, Aniket is an 11th grader at Silver Creek High School. He has 2 years of Java coding experience as well as a year of teaching Scratch programming language to kids. He also has more experience in his high school Computer Science club in which he volunteered teaching Java and also participated in a hack-a-thon this past year. He has participated in many math competitions in middle school. He likes to play video games with his friends, go biking, play the clarinet, and loves to play tennis.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/aniket.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder
                  </div>
                <h3 className="mt-0 mb-12">
                  Sanjith Raman
                  </h3>
                <p className="m-0">
                Co-founder and former English teacher, Sanjith is an 11th grader at Evergreen Valley High School. He has a year of experience as a volunteer teaching math to 6th grade students and over 100 volunteer hours in 2020. He has participated in several math and English competitions throughout middle school and has a passion for both subjects. He likes to go biking, play video games with friends, and play basketball.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/sanju.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>


            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder
                  </div>
                <h3 className="mt-0 mb-12">
                  Hemanth Nandakumar
                  </h3>
                <p className="m-0">
                Description
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div> */}

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Co-Founder / Head of Software Development
                  </div>
                <h3 className="mt-0 mb-12">
                  Kshitij Teotia
                  </h3>
                <p className="m-0">
                    Head of Software Devolpment and Creator of Website, Kshitij Teotia is a 11th grader at Evergreen Valley High School. He is experienced in various computer science topics and mathematical concepts. He is an AIME qualifier and is experienced in math olympiad related topics. He designs websites for many non-profits and is fluent in full-stack webdesign. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/kshitij.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder / Algebra 1 instructor
                </div>
                <h3 className="mt-0 mb-12">
                Saurav Rekapalli
                  </h3>
                <p className="m-0">
                Co-founder and Algebra 1 instructor, Saurav Rekapalli is a 11th grader at Evergreen Valley High School. He is an experienced teacher, and is qualified in the field of mathematics. Saurav excels in his highschool classes and competes in many math competitions. He is a block-chain enthusiast, musician, and entrepreneur. He loves to bike, practice carnatic music, and spend time with his friends and family. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/saurav.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Co-Founder / Head of Speech and Debate
                </div>
                <h3 className="mt-0 mb-12">
                Barath Muthusamy
                  </h3>
                <p className="m-0">
                Co-founder and Head of Speech and Debate at Simple Tutor, Barath Muthusamy is an 11th grader at Archbishop Mitty High School. He has multiple summers of experience as a volunteer, teaching math to 4th - 5th grade students and through his running program, Evergreen Run Club. He has over 50 volunteer hours in 2021 - 2022. He has participated in several Speech and Debate competitions throughout High School and has a passion for both forms of speaking. He likes to go Mountain Biking, run XC and Track, and code.                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/saurav.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;