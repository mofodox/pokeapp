import Image from "next/image";
import Link from "next/link";

const Jumbo = ({ image }) => (
  <header className="d-flex flex-row justify-content-center mt-5 mb-5 h-100 w-100">
    <Link href="/">
      <a>
        <Image
          src={image}
          width={380}
          height={140}
          layout={"fixed"}
          alt="Pokedex Logo"
        />
      </a>
    </Link>
  </header>
);

export default Jumbo;
