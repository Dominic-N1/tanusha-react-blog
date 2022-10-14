import InstagramLinkButton from "./LinkButtons/InstagramLinkButton";
import TelegramLinkButton from "./LinkButtons/TelegramLinkButton";
import HomeLinkButton from "./LinkButtons/HomeLinkButton";
import AboutLinkButton from "./LinkButtons/AboutLinkButton";
import BlogLinkButton from "./LinkButtons/BlogLinkButton";
import styles from "./LinkButtons.module.css";

export default function LinkButtons() {
  return (
    <nav>
      <HomeLinkButton
        title={"home"}
        className={styles["share-icon"]}
        url={"/"}
      />
      <AboutLinkButton
        title={"about"}
        className={styles["share-icon"]}
        url={"/about"}
      />
      <BlogLinkButton
        title={"blog"}
        className={styles["share-icon"]}
        url={"/blog"}
      />
      <InstagramLinkButton
        title={"instagramm"}
        className={styles["share-icon"]}
        url={"https://www.instagram.com/ivanovatanya2508/"}
      />
      <TelegramLinkButton
        title={"telegramm"}
        className={styles["share-icon"]}
        url={"https://t.me/+urBQWzZgBWw3ZDhi"}
      />
    </nav>
  );
}
