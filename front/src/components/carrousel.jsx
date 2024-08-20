import React from 'react';


const Carrousel = () => {
  return (
    <div>
      <header>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active custom-height" style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?planets)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="carousel-caption">
                <h5 className="roboto-black">Space Exploration</h5>
                <p>Discover the wonders of space.</p>
              </div>
            </div>
            <div className="carousel-item custom-height" style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?galaxy)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="carousel-caption">
                <h5 className="roboto-black">Galaxy</h5>
                <p>Explore the vastness of galaxies.</p>
              </div>
            </div>
            <div className="carousel-item custom-height" style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?planetarium)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="carousel-caption">
                <h5 className="roboto-black">Planetarium</h5>
                <p>Experience the beauty of planetariums.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Carrousel;
