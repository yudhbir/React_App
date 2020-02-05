import React from 'react';
function gallery() {
  return (
     <section id="gallery" className="wow fadeInUp">

      <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>
      </div>
      <div className="owl-carousel gallery-carousel">
        <a href="img/gallery/1.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/1.jpg" alt="1"/></a>
        <a href="img/gallery/2.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/2.jpg" alt="2"/></a>
        <a href="img/gallery/3.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/3.jpg" alt="3"/></a>
        <a href="img/gallery/4.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/4.jpg" alt="4"/></a>
        <a href="img/gallery/5.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/5.jpg" alt="5"/></a>
        <a href="img/gallery/6.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/6.jpg" alt="6"/></a>
        <a href="img/gallery/7.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/7.jpg" alt="7"/></a>
        <a href="img/gallery/8.jpg" className="venobox" data-gall="gallery-carousel"><img src="img/gallery/8.jpg" alt="8"/></a>
      </div>

    </section>
  );
}

export default gallery;