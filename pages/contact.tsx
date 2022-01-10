import Link from "next/link";
import Layout from "../components/Layout";

const ContactPage = () => (
  <Layout title="Contact">
    <div className="contact-page basis-11/12 flex">
      <div className="contact-image bg-[url('../images/login.jpg')] bg-no-repeat bg-cover bg-center w-1/2 h-full" />
      <div className="contact-info">
        <div className="contact-bullet-point">
          <div className="bullet-point">
            <div className="text">307-677-5546</div>
          </div>
          <div className="bullet-point">
            <div className="text">abgonzdev@gmail.com</div>
          </div>
          <div className="bullet-point">
            <div className="text">Salt Lake City, UT</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
