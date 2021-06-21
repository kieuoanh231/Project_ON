import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter();
  return (
    <ul className="breadcrumb">
      <li>
        <Link href="/">Home /</Link>
      </li>
      {(() => {
        if (router.pathname === "/cart") {
          return (
            <li>
              <Link href="/"> Cart </Link>
            </li>
          );
        } else if (router.pathname === "/register") {
          return (
            <>
              <li>
                <Link href="/"> Account /</Link>
              </li>
              <li>
                <Link href="/register"> Register </Link>
              </li>
            </>
          );
        } else if (router.pathname === "/login") {
          return (
            <>
              <li>
                <Link href="/"> Account /</Link>
              </li>
              <li>
                <Link href="/register"> Login </Link>
              </li>
            </>
          );
        }
      })()}
    </ul>
  );
};
export default Breadcrumb;
