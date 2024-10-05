import "../../styles/services/services-collage.css";
import TransitionComp1 from "./transition-comp-1";
import TransitionComp2 from "./transition-comp-2";
import servicesImg1 from "../../images-and-icons/services-ill-8.svg";
import servicesImg2 from "../../images-and-icons/services-ill-9.svg";
import servicesImg3 from "../../images-and-icons/services-ill-6.svg";
import checkMark from "../../images-and-icons/check-mint.svg";

function ServicesCollage() {
  return (
    <div className="services-collage-content">
      <div className="services-sec-1">
        <div className="services-ill-container">
          <img src={servicesImg1} alt="" className="services-ill-1" />
        </div>
        <div className="services-text-1">
          <h1>
            Web Design & Development <br />
            <span className="highlight-text">Done Differently</span>
          </h1>
          <p className="p-1">
            What makes us unique in the development world is that we don't use
            WordPress, frameworks, or page builders. We meticulously write the
            code line by line. This gives us much more control over the design,
            and the website performs lightning fast because there's no bloated
            or messy code that slows it down.
          </p>
          <p className="p-2">
            Websites built by hand{" "}
            <span className="purple-text">will out-perform WordPress sites</span>{" "}
            and drag and drop page builders. When it comes to the web, the
            faster and more organized websites win and rank higher on browsers
            like google.
          </p>
        </div>
      </div>
      <TransitionComp1 />
      <div className="services-sec-2">
        <div className="services-text-2">
          <h1>
            Search Engine Optimization <span className="highlight-seo">(SEO)</span>
          </h1>
          <p className="services-p-1">
            If someone tells you they can get you to the front page of Google in
            3 months - RUN! Unless your website was featured by The New York
            Times it could take years to rank in the top of the search results.
          </p>
          <p className="services-p-2">
            We offer a number of the latest search engine optimization techniques
            to make your web presence grow as quickly as possible:
          </p>
          <div className="sec-2-list">
            <div className="services-line-item">
              <img
                src={checkMark}
                alt="svg of a check mark"
                className="check-mark-icon"
              />
              <p>Keyword-Centered Content & Blogs</p>
            </div>
            <div className="services-line-item">
              <img
                src={checkMark}
                alt="svg of a check mark"
                className="check-mark-icon"
              />
              <p>Mobile-First-Optimized for the Best Experience</p>
            </div>
            <div className="services-line-item">
              <img
                src={checkMark}
                alt="svg of a check mark"
                className="check-mark-icon"
              />
              <p>Clean & Organized Code Structure For Web Crawlers</p>
            </div>
            <div className="services-line-item">
              <img src={checkMark} alt="svg of a check mark" className="check-mark-icon" />
              <p>Fully Responsive For Mobile, Tablet, & Desktop</p>
            </div>
          </div>
        </div>
        <div className="services-ill-2-container">
          <img src={servicesImg2} alt="" className="services-ill-2" />
        </div>
      </div>
      <TransitionComp2 />
      <div className="services-sec-3">
        <img src={servicesImg3} alt="" className="services-ill-3" />
        <div className="services-text-3">
          <h1><span className="highlight-seo">Mobile-First</span> <br /> Website Development</h1>
          <p>
            A mobile-first approach ensures your site is fast, accessible, and user-friendly on all devices. With more users browsing on smartphones, mobile optimization is key for better engagement, SEO rankings, and conversion rates.
          </p>
          <div className="services-line-item-sec-3">
            <img src={checkMark} alt="svg of a check mark" className="check-mark-icon-2" />
            <div className="text-content">
              <h5>Built for Mobile</h5>
              <p>
                Our development process starts with mobile in mind, creating a seamless user experience for people on the go.
              </p>
            </div>
          </div>
          <div className="services-line-item-sec-3">
            <img src={checkMark} alt="svg of a check mark" className="check-mark-icon-2" />
            <div className="text-content">
              <h5>Fully Responsive</h5>
              <p>
                Your website will adapt smoothly to any device, whether it’s a phone, tablet, or desktop.
              </p>
            </div>
          </div>
          <div className="services-line-item-sec-3">
            <img src={checkMark} alt="svg of a check mark" className="check-mark-icon-2" />
            <div className="text-content">
              <h5>Mobile SEO Optimized</h5>
              <p>
                We use mobile-friendly SEO techniques to help your website rank better on search engines.
              </p>
            </div>
          </div>
          <div className="services-line-item-sec-3">
            <img src={checkMark} alt="svg of a check mark" className="check-mark-icon-2" />
            <div className="text-content">
              <h5>High Performance</h5>
              <p>
                Clean, efficient code ensures your site runs fast and keeps visitors engaged across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCollage;
