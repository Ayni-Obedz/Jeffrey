import WorkList from "./WorkList";
import { works } from "../data/content";

export default function Work() {
  return (
    <section id="work" className=" py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Work</h2>
        <p className="mt-4 max-w-2xl text-white/60">
          Each case study starts with a business problem and ends with a result. Filter by the kind of work you care about.
        </p>
        <div className="mt-12">
          <WorkList items={works} filterable />
        </div>
      </div>
    </section>
  );
}