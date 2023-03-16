import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import video from '../sections/autoVid.mov';



const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Auto = ({
    
    header, 
    description,
    useVideo,
    videoURL,
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

    const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

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
    title: header,
    paragraph: description  
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" id = "about"/>
    {useVideo ? (    
        
        // <Modal
        //         id="video-modal"
        //         show={videoModalActive}
        //         handleClose={closeModal}
        //         video="https://youtu.be/u20f3Vbwvio"
        //         videoTag="iframe" />   

        <div className="video-responsive center-content">
            <iframe
            style={{borderRadius: "15px"}}
            width="853"
            height="480"
            src={videoURL}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
        </div>

        // <video width="750" height="500" controls >
        //     <source src={video} type="video/mov"/>
        // </video>
                
            
            ) : (
            <div className="center-content" > 
                <img width={"450"} style={{borderRadius: "15px"}} src={require('./roboPic.jpg')} />
            </div>
            
            )}
          
        </div>
      </div>
    </section>
  );
}

Auto.propTypes = propTypes;
Auto.defaultProps = defaultProps;

export default Auto;