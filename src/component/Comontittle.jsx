import animate from "animejs";
import { useEffect, useRef } from "react";
import comony from "../style/Comontittle.module.css";
export default function Comontittle({ toptx, bomtx, brtx, hasextra }) {
  const textRef = useRef(null);
  const textReftoo = useRef(null);
  const letterRefs = useRef([]);
  const lettertooRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate({
            targets: letterRefs.current,
            opacity: [0, 1],
            translateY: [40, 0],
            delay: animate.stagger(80),
            easing: "easeOutExpo",
          });

          animate({
            targets: lettertooRefs.current,
            opacity: [0, 1],
            translateY: [40, 0],
            delay: animate.stagger(20),
            easing: "easeOutExpo",
          });
        }
      },
      { threshold: 0.5 },
    );

    if (textRef.current) observer.observe(textRef.current);
    if (textReftoo.current) observer.observe(textReftoo.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className={comony.comon_tittle}>
      <div className="container ban_container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className={`${comony.comon_t} ${hasextra ? comony.comochang : ""}`}
            >
              <div className={comony.top_t}>
                <div className={comony.line}></div>
                <p ref={textReftoo}>
                  {toptx.split("").map((char, i) => (
                    <span
                      key={i}
                      ref={(el) => (lettertooRefs.current[i] = el)}
                      style={{ opacity: 0 }}
                    >
                      {char}
                    </span>
                  ))}
                </p>
                <div className={comony.line}></div>
              </div>

              <h1 ref={textRef}>
                {[bomtx, brtx].map((line, lineIndex) => (
                  <div key={lineIndex}>
                    {line.split("").map((char, i) => {
                      const index = lineIndex * 100 + i;
                      return (
                        <span
                          key={index}
                          ref={(el) => (letterRefs.current[index] = el)}
                          style={{ opacity: 0 }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
