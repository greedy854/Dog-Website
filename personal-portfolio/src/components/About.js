import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';

export const About = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About me!</h2>
              <p>
                I'm a software developer with an insatiable appetite for success. 
                Driven by an inherent sense of ambition, I relentlessly pursue excellence 
                in every project I undertake. My thirst for knowledge and mastery in coding 
                languages fuels my desire to continuously innovate and optimize solutions. 
                Greed, in my context, is my unwavering drive to achieve more, learn faster, 
                and push the boundaries of what's possible. With a keen eye for detail and 
                a passion for problem-solving, I thrive in dynamic environments where challenges 
                are the norm. Whether it's developing cutting-edge applications or enhancing 
                existing systems, my goal is always to deliver top-tier results, pushing myself 
                and my team to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
export default About;