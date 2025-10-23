import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-content">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/1200/600?random=1"
              className="d-block w-100 hero-img"
              alt="New Product Collection"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="fw-bold">New Product Collection</h1>
              <p className="lead">Discover the latest Cohort 61 trends in our store</p>
              <Link to="/catalog" className="btn btn-dark px-4">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://picsum.photos/1200/600?random=2"
              className="d-block w-100 hero-img"
              alt="Home Essentials"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="fw-bold">Home Essentials</h1>
              <p className="lead">Cool stuff for your home</p>
              <Link to="/catalog" className="btn btn-dark px-4">
                Explore
              </Link>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Highlights</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm product-highlight">
              <img
                src="https://picsum.photos/800/600?1"
                className="card-img-top"
                alt="Summer Collection"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Cohort 61 Collection</h4>
                <p className="text-muted">Stylish items for you and your home</p>
                <Link to="/catalog" className="btn btn-outline-dark">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm product-highlight">
              <img
                src="https://picsum.photos/800/600?2"
                className="card-img-top"
                alt="Accessories"
              />
              <div className="card-body text-center">
                <h4 className="card-title">Fashion That's Nerdy</h4>
                <p className="text-muted">It's not cool - let's be honest</p>
                <Link to="/catalog" className="btn btn-outline-dark">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
