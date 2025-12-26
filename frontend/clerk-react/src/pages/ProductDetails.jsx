import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ productData }) => {
  // productData will come from backend later
  // Example structure:
  // {
  //   image: "image_url",
  //   description1: "text",
  //   description2: "text"
  // }

  const hasData = productData && productData.description1;

  return (
    <div className="product-page">
      {/* ================= SECTION 1 ================= */}
      <section className="product-section-one">
        <div className="product-grid">
          {/* LEFT SIDE */}
          <div className="product-left">
            {hasData && productData.image ? (
              <img
                src={productData.image}
                alt="Product"
                className="product-image"
              />
            ) : (
              <div className="image-placeholder">
                No Image Preview
              </div>
            )}

            <p className="product-text">
              {hasData
                ? productData.description1
                : "No details found"}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="product-right">
            <h3>Request This Product</h3>

            <form className="product-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
              <textarea placeholder="Message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="product-section-two">
        <p>
          {hasData
            ? productData.description2
            : "No additional product information available."}
        </p>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="product-section-three">
        <p>
          Thank you for choosing Nexxa Auto Parts. Our team will review
          your request and get back to you as soon as possible.
        </p>
      </section>
    </div>
  );
};

export default ProductDetails;
