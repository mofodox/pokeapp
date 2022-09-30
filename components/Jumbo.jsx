import Image from "next/image";
import Link from "next/link";

const Jumbo = ({ image }) => (
  <header className="d-flex flex-row justify-content-center mt-4 mb-4">
    <Link href="/">
      <a>
        <img src={image} className={"img-fluid"} />
      </a>
    </Link>
  </header>
);

export default Jumbo;
