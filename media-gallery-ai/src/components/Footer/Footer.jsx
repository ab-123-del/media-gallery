import "./Footer.css";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <img src={logo} alt="Media Gallery AI" />

          <p>
            منصة تعليمية تستعرض استخدام تقنيات الذكاء الاصطناعي التوليدي
            في إنشاء الوسائط المتعددة الحديثة.
          </p>

        </div>

        <div className="footer-links">

          <h3>أقسام الموقع</h3>

          <a href="#home">الرئيسية</a>
          <a href="#about">عن الموقع</a>
          <a href="#images">الصور</a>
          <a href="#videos">الفيديوهات</a>
          <a href="#stats">الإحصائيات</a>

        </div>

        <div className="footer-contact">

          <h3>معلومات المشروع</h3>

          <p>Media Gallery AI</p>
          <p>SVU Multimedia Systems</p>
          <p>2026 ©</p>

          <div className="footer-socials">

            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#">
              <i className="bi bi-youtube"></i>
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          تم تطوير هذا المشروع لأغراض تعليمية ضمن مقرر نظم الوسائط المتعددة.
        </p>
      </div>

    </footer>
  );
}