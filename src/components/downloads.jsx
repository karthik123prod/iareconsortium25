import brochure from "../assets/pdfs/brochure.pdf";
import schedule from "../assets/pdfs/schedule.pdf";

function Downloads() {
  return (
    <div>
      <h2>Event Downloads</h2>
      <a href={brochure} target="_blank" rel="noopener noreferrer">
        📄 View Brochure
      </a>
      <br />
      <a href={schedule} download>
        ⬇️ Download Schedule
      </a>
    </div>
  );
}

export default Downloads;
