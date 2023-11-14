import FeedbackDescription from "./description";
import FeedbackHeading from "./heading";
import SliderButton from "./sliderButtons";
import "./style.css";

function Feedback() {
  return (
    <div className="feedback_content">
      <FeedbackHeading />
      <FeedbackDescription />
      <SliderButton />
    </div>
  );
}
export default Feedback;
