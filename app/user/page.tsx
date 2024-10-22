import Link from "next/link";
import styles from "./UserPage.module.css";
import "tailwindcss/tailwind.css";

export default function UserData() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className={styles.UserPage}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            What if the User Data Is Not Available?
          </h2>
          <p className={styles.description}>
            When a user page is not found, the visitor will receive a customized
            404 page.
          </p>
          <Link href="/anypage" className={styles.link}>
            Click here to see custom 404 page
          </Link>
          <br />
          <div>
            <p className={styles.description}>
              Go to user details page and find out about custon &quot;User Not
              Found&quot;.
            </p>
            <Link href="/user/1" className={styles.link}>
              Click here to see user details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
