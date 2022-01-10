import Layout from "../components/Layout";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactPage = () => (
  <Layout title="Contact">
    <div className="contact-page basis-11/12 w-full grid grid-cols-2">
      <div className="contact-image bg-[url('../images/login.jpg')] bg-no-repeat bg-cover bg-center w-full h-full" />
      <div className="contact-info">
        <div className="contact-bullet-point bg-black text-white h-full flex flex-col">
          <div className="bullet-point basis-1/3 flex items-center justify-center ">
            {" "}
            <div className="font-awesome-icon text-6xl">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="text-3xl ml-14">307-677-5546</div>
          </div>
          <div className="bullet-point basis-1/3 flex items-center justify-center ">
            <div className="font-awesome-icon text-6xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text-3xl ml-14">abgonzdev@gmail.com</div>
          </div>
          <div className="bullet-point basis-1/3 flex items-center justify-center ">
            <div className="font-awesome-icon text-6xl">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </div>
            <div className="text-3xl ml-14">Salt Lake City, UT</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
