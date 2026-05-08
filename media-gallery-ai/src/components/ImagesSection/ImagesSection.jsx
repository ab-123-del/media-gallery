import { useState } from "react";
import "./ImagesSection.css";

import humanImg1 from "../../assets/images/human-1.webp";
import humanImg2 from "../../assets/images/human-2.webp";
import humanImg3 from "../../assets/images/human-3.webp";

import aiImg1 from "../../assets/images/ai-1.webp";
import aiImg2 from "../../assets/images/ai-2.webp";
import aiImg3 from "../../assets/images/ai-3.webp";

const imagesData = {
  human: [
    { id: 1, src: humanImg1, title: "تصميم بصري بشري" },
    { id: 2, src: humanImg2, title: "معالجة يدوية للصورة" },
    { id: 3, src: humanImg3, title: " تصميم نيون يدوي" },
  ],
  ai: [
    { id: 1, src: aiImg1, title: "صورة مولدة بالذكاء" },
    { id: 2, src: aiImg2, title: "خيال بصري اصطناعي" },
    { id: 3, src: aiImg3, title: "توليد رقمي إبداعي" },
  ],
};

export default function ImagesSection() {
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <section className="images-section" id="images">
      <div className="images-header">
        <h2>
          معرض <span>الصور</span>
        </h2>

        <p>
          مقارنة بصرية بين الصور المصممة بإبداع بشري والصور التي تم توليدها أو
          تحسينها باستخدام أدوات الذكاء الاصطناعي التوليدي.
        </p>
      </div>

      <div className="images-tabs">
        <button
          className={activeTab === "human" ? "active" : ""}
          onClick={() => setActiveTab("human")}
        >
         تصميم يدوي
        </button>

        <button
          className={activeTab === "ai" ? "active" : ""}
          onClick={() => setActiveTab("ai")}
        >
          مولدة بالذكاء الاصطناعي
        </button>
      </div>

      <div className="images-grid">
        {imagesData[activeTab].map((image) => (
          <div className="image-card" key={image.id}>
            <img src={image.src} alt={image.title} />

            <div className="image-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="image-ai-info">
        <div>
          <h3>إيجابيات توليد الصور بالذكاء الاصطناعي</h3>
          <p>
            يساعد الذكاء الاصطناعي في إنتاج صور مبتكرة بسرعة عالية، ويوفر
            خيارات واسعة للتجريب البصري، كما يتيح إنشاء أفكار يصعب تنفيذها
            بالطرق التقليدية خلال وقت قصير.
          </p>
        </div>

        <div>
          <h3>سلبيات توليد الصور بالذكاء الاصطناعي</h3>
          <p>
            قد ينتج عن هذه الأدوات صور غير دقيقة أو غير واقعية أحيانًا، كما
            يمكن أن تثير أسئلة تتعلق بحقوق الملكية، وأصالة المحتوى، والاعتماد
            الزائد على التقنية بدل الإبداع البشري.
          </p>
        </div>
      </div>
    </section>
  );
}