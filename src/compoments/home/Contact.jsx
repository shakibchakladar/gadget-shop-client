const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here, like sending data to an API
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="container my-5">
      <h3 className="text-center text-danger">Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
