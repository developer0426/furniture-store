// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

export default function Home() {
  return (
    <div className="container-fluid d-flex align-items-center" 
         style={{ backgroundColor: "#2f4f4f", minHeight: "100vh", padding: "50px 0" }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
        
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fw-bold" style={{ color: "#d4edda", fontSize: "2rem" }}>
              Modern Interior Design <br className="d-none d-md-block" /> Studio
            </h1>
            <p className="text-light">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet 
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="mt-4">
              <button className="btn me-3 px-4 py-2" 
                      style={{ backgroundColor: "#ffc107", color: "#2f2f2f", fontWeight: "bold" }}>
                Shop Now
              </button>
              <button className="btn btn-outline-light px-4 py-2">Explore</button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 text-center">
            <div className="d-flex align-items-center justify-content-center rounded shadow mx-auto" 
                 style={{ height: "300px", maxWidth: "100%", backgroundColor: "#ffffff", padding: "10px" }}>
              <img src="/sofa.png" alt="Interior Design" className="img-fluid rounded" 
                   style={{ maxHeight: "250px", width: "auto" }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
