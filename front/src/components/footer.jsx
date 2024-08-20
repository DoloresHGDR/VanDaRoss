import React from 'react';
import '../style/style.css'

const footer = () => {
  return (
    <div>
      <footer className="text-center" style={{ backgroundColor: '#212121' }}>
        <div className="container pt-4">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg neon-icon m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg neon-icon m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg neon-icon m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-google"></i>
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg neon-icon m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg neon-icon m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg neon-icon m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-github"></i>
            </a>
          </section>
        </div>
        
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright
          
        </div>
      </footer>
    </div>
  );
}

export default footer;
