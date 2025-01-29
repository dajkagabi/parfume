const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          About Essentia
        </h2>

        <div className="prose lg:prose-xl text-gray-700 text-justify">
          <p>
            Welcome to Essentia, your premier destination for exquisite
            perfumes. We are dedicated to offering our customers a curated
            selection of high-quality fragrances that captivate the senses and
            leave a lasting impression.
          </p>
          <br />
          <p>
            Our journey began with a passion for the art of perfumery. We
            believe that a great fragrance can transform your mood, evoke
            memories, and express your unique personality. At Essentia, we are
            committed to bringing you the finest perfumes crafted by talented
            artisans from around the world.
          </p>
          <br />
          <p>
            We take pride in our meticulous selection process, ensuring that
            each perfume in our collection meets our high standards of quality
            and craftsmanship. Our perfumes are made with the finest
            ingredients, sourced ethically and sustainably.
          </p>
          <br />
          <p>
            At Essentia, we value transparency and integrity. We work closely
            with our suppliers to ensure fair pricing and ethical practices. Our
            mission is to provide you with exceptional fragrances while
            supporting sustainable and responsible sourcing.
          </p>
          <br />
          <p>
            We invite you to explore our collection and discover the perfect
            scent that resonates with you. Whether you are looking for a
            signature fragrance or a special gift, Essentia has something for
            everyone.
          </p>
          <br />
          <p>
            <strong>Our Values:</strong>
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>
              <strong>Quality:</strong> We are committed to offering only the
              highest quality perfumes.
            </li>
            <li>
              <strong>Sustainability:</strong> We strive to minimize our
              environmental impact and support sustainable practices.
            </li>
            <li>
              <strong>Ethical Sourcing:</strong> We work closely with our
              suppliers to ensure fair pricing and ethical sourcing.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> We are dedicated to
              providing exceptional customer service.
            </li>
          </ul>
          <br />
          Have any questions? Feel free to{" "}
          <a href="/contact" className="text-red-600 hover:underline">
            contact us
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default About;
