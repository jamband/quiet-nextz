import Link from "next/link";
import { LinkExternal } from "../../components/link-external";
import styles from "./style.module.scss";

export const Component: React.FC = () => (
  <footer className="fixed-bottom py-3 text-center bg-light">
    <nav className={styles.contents} aria-label="Footer navigation">
      <ul className="list-inline m-0">
        <li className="list-inline-item">
          <Link href="/about" className="px-3 py-2">
            About
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/contact" className="px-3 py-2">
            Contact
          </Link>
        </li>
        <li className="list-inline-item">
          <LinkExternal
            href="https://github.com/jamband/suerte"
            className="px-3 py-2"
          >
            GitHub
          </LinkExternal>
        </li>
      </ul>
    </nav>
  </footer>
);
