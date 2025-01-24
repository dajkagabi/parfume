

const Contact = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Location</h3>
            <p className="text-gray-600">123 Main Street</p>
            <p className="text-gray-600">Budapest, Hungary</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Email Us</h3>
            <p className="text-gray-600">support@example.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Opening Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
