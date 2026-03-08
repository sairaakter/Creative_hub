import Comontittle from "../Comontittle";
import Review from "../Review";
import Teamp from "../Teamp";
import Technology from "../Technology";
import Testimonial from "../Testimonial";
export default function About() {
  return (
    <>
      <Technology />
      <Comontittle
        toptx="our team member"
        bomtx="Meet Our Experience"
        brtx="Professional IT Employee"
      />
      <Teamp />
      <Review />
      <Comontittle
        toptx="Testimonial"
        bomtx="Our Client's Review"
        brtx="About Us"
        hasextra={true}
      />
      <Testimonial />
    </>
  );
}
