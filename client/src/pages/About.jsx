import React from 'react'

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      
      {/* HEADING */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Our Store
      </h1>

      {/* INTRO */}
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        Welcome to Ecom — your one-stop destination for quality products at the
        best prices. We aim to provide a seamless shopping experience with
        trusted products and fast delivery.
      </p>

      {/* SECTION 1 */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
          alt="shopping"
          className="w-full h-64 object-cover rounded-xl"
        />

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Who We Are
          </h2>
          <p className="text-gray-600">
            We are a passionate team focused on delivering high-quality products
            across categories. Our mission is to make online shopping simple,
            affordable, and reliable for everyone.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            What We Offer
          </h2>
          <p className="text-gray-600">
            From electronics to fashion, we bring a wide range of products with
            secure payments and smooth user experience. Our platform is built
            using modern technologies to ensure speed and reliability.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a"
          alt="products"
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>

      {/* SECTION 3 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620"
          alt="delivery"
          className="w-full h-64 object-cover rounded-xl"
        />

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-600">
            We focus on customer satisfaction, fast delivery, and easy returns.
            Our goal is to build trust and provide a smooth shopping journey
            every time you visit our platform.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About
