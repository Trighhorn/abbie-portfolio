import Link from "next/link";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => (
  <Layout title="Home">
    <div className="homepage text-white basis-11/12 flex flex-col justify-evenly bg-[url('https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-no-repeat bg-cover bg-center ">
      <img
        className="avatar w-32 h-32 rounded-full"
        alt="Abbie Gonzalez"
        src="https://soe.ukzn.ac.za/wp-content/uploads/2018/04/profile-placeholder.png"
      />
      <div className="bio text-2xl text-center">
        Hello! I'm Abbie and I'm a Full Stack Software Developer.
        <br />
        I'm looking for opportunities in the MERN web development stack Have a
        look around
      </div>
      <div className="links-wrapper flex gap-96 justify-center text-8xl">
        <Link href="https://github.com/Trighhorn">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://www.linkedin.com/in/agonzalez-19/">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="https://drive.google.com/file/d/1FwxHPkf8tlrvWDtTEeHvIVMbcj_ZgkpF/view?usp=sharing">
          <FontAwesomeIcon icon={faFile} />
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
