import Link from "next/link";

export default function PageLinksTwo({courseTitle = "No Course Title", courseStepTitle = "No Course Step Title"}: { courseTitle: string, courseStepTitle: string }) {
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
          <Link href={`#`}>{courseTitle}</Link>
        </div>
        <div className="breadcrumbs__item">
          <Link href={`#`}>{courseStepTitle}</Link>
        </div>
      </div>
    </div>
  );
}
