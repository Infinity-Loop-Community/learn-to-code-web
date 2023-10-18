import Link from "next/link";

export default function PageLinksTwo() {
  return (
    <div className="breadcrumbs mt-10 pt-0 pb-0">
      <div className="breadcrumbs__content">
        <div className="breadcrumbs__item">
          <Link href="/">Home</Link>
        </div>
        <div className="breadcrumbs__item">
          <Link href="#">All courses</Link>
        </div>
        <div className="breadcrumbs__item">
          <Link href={`#`}>Learn Frontend Development</Link>
        </div>
        <div className="breadcrumbs__item">
          <Link href={`#`}>Learn the essentials of the web</Link>
        </div>
      </div>
    </div>
  );
}
