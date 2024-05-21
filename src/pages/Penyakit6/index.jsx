import FrameComponent3 from "../../componentpenyakit6/FrameComponent3";
import FrameComponent2 from "../../componentpenyakit6/FrameComponent2";
import FrameComponent4 from "../../componentpenyakit6/FrameComponent4";
import FrameComponent5 from "../../componentpenyakit6/FrameComponent5";
import "./style.css";

const DirektoriPenyakit = () => {
  return (
    <div className="direktori-penyakit-6">
      <section className="hero-wrapper">
        <div className="hero">
          <div className="hero-child" />
          <img
            className="hero-item"
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
          <div className="frame-parent">
            <div className="g8-parent">
              <img className="g8-icon" alt="" src="/g8.svg" />
              <b className="mindfulcare">Mindfulcare</b>
            </div>
            <div className="home-parent">
              <div className="home">Home</div>
              <div className="about">About</div>
              <div className="services">Services</div>
              <div className="page">Page</div>
            </div>
            <div className="button">
              <b className="see-detail">Contact Us</b>
            </div>
          </div>
          <div className="about-us-parent">
            <div className="about-us">About Us</div>
            <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam adipiscing feugiat interdum mattis. Placerat donec risus diam sed et. A in ullamcorper ipsum. `}</div>
          </div>
          <div className="hero-inner" />
          <FrameComponent3 />
          <div className="directory-title-wrapper">
            <div className="directory-title">
              <div className="directory-title-background" />
              <div className="direktori-penyakit-wrapper">
                <h1 className="direktori-penyakit">Direktori Penyakit</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-43-wrapper">
        <img
          className="image-43-icon"
          loading="lazy"
          alt=""
          src="/image-43@2x.png"
        />
      </section>
      <section className="disease-container-wrapper">
        <div className="disease-container">
          <FrameComponent2 />
          <FrameComponent4 />
        </div>
      </section>
      <FrameComponent5 />
    </div>
  );
};

export default DirektoriPenyakit;