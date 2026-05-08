import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          اكتشف مستقبل
          <span> الذكاء الاصطناعي</span>
          في صناعة المحتوى
        </h1>

        <p>
          منصتنا تعرض وسائط متعددة مبتكرة تم إنشاؤها باستخدام تقنيات الذكاء
          الاصطناعي التوليدي، مع لمسات مونتاج وإخراج بشري احترافي لإظهار القوة
          الإبداعية للتقنيات الحديثة بطريقة سينمائية وعصرية.
        </p>

        <button className="hero-btn">
          استكشف المعرض
        </button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Media Gallery AI" />
      </div>
    </section>
  );
}