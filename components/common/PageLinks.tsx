import Link from "next/link";

export default function PageLinks({courseTitle, courseStepTitle}: { courseTitle: string, courseStepTitle: string }) {
  return (
    <div className="breadcrumbs mt-10 pt-0 pb-0">
      <div className="breadcrumbs__content">
        <div className="breadcrumbs__item">
          <Link href="/quizzes/">Home</Link>
        </div>
        <div className="breadcrumbs__item">
          <span style={{lineHeight: '25px', fontSize: '13px'}}>{courseTitle}</span>
        </div>
        <div className="breadcrumbs__item">
          <Link href={`/quizzes/`}>Quizzes</Link>
        </div>
        <div className="breadcrumbs__item">
          <Link href={`#`}>{courseStepTitle}</Link>
        </div>
      </div>
    </div>
  );
}
