import { SITE_TITLE } from "../../config";
import LinkButtons from "./HeaderComponents/LinkButtons";
import "./HeaderSection.css";

function HeaderSection() {
  return (
    <header className="header">
      <article>
        <h1>
          <a href="/">
            <img src="/leaf-heart.svg" alt="Logo" />
            <span>{SITE_TITLE}</span>
          </a>
        </h1>
        {/* <UserSettings /> */}
      </article>
      <LinkButtons />
    </header>
  );
}

export default HeaderSection;
