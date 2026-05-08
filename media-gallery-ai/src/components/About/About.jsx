import "./About.css";
import aboutVideo from "../../assets/videos/intoduction.mp4";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>
          الذكاء الاصطناعي
          <span> والوسائط المتعددة</span>
        </h2>

        <p>
          يعرض موقع Media Gallery AI أمثلة حديثة لاستخدام تقنيات الذكاء
          الاصطناعي التوليدي في إنشاء الصور والفيديوهات والمحتوى الرقمي،
          مع توضيح دور هذه التقنيات في تطوير صناعة الوسائط المتعددة.
        </p>
      </div>

      <div className="about-video">
        <video controls muted preload="metadata">
          <source src={aboutVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}