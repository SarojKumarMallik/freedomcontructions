import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSolarPanel } from "react-icons/fa";
import "./Blogcontainer.css";

const Blogcontainer = () => {
  // 🔁 Replace with API data later
  const blogs = [];

  return (
    <section className="Blogcontainer-section">
      <div className="Blogcontainer-container">

        {/* ===== Premium Header ===== */}
        <div className="Blogcontainer-header">
          <span className="Blogcontainer-subtitle">Our Blog</span>
          <h2>
            Latest <span>Solar Insights</span>
          </h2>
          <p>
            Explore expert knowledge, solar innovations, and energy-saving
            strategies from Freedom Contructions.
          </p>
        </div>

        {/* ===== If No Blogs ===== */}
        {blogs.length === 0 ? (
          <div className="Blogcontainer-empty">
            <div className="Blogcontainer-empty-icon">
              <FaSolarPanel />
            </div>

            <h3>No Blogs Available</h3>

            <p>
              We are currently preparing high-quality solar articles and
              industry insights. Please check back soon for updates.
            </p>

            <Link to="/services/on-grid-solar-system" className="Blogcontainer-btn">
              Explore Our Services <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="Blogcontainer-grid">
            {blogs.map((blog) => (
              <div className="Blogcontainer-card" key={blog.id}>
                <div className="Blogcontainer-image">
                  <img src={blog.image} alt={blog.title} />
                  <span className="Blogcontainer-category">
                    {blog.category}
                  </span>
                </div>

                <div className="Blogcontainer-content">
                  <span className="Blogcontainer-date">{blog.date}</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>

                  <Link to={`/blog/${blog.id}`} className="Blogcontainer-read">
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Blogcontainer;