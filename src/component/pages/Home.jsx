import Comontittle from "../Comontittle";
import Habout from "../Habout";
import Hbanner from "../Hbanner";
import Portfolio from "../Portfolio";
import Quality from "../Quality";
import Testimonial from "../Testimonial";
export default function Home() {
  return (
    <>
      <Hbanner />
      <Comontittle
        toptx="Latest service"
        bomtx="Explore Our Best Premium"
        brtx="Quality Service"
      />
      <Quality />
      <Habout />
      <Comontittle
        toptx="LATEST LIVE PROJECT"
        bomtx="Latest completed tech"
        brtx="Portfolio showcase"
      />
      <Portfolio />
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
