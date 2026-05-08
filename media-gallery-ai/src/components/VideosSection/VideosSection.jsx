import { useState } from "react";
import "./VideosSection.css";

import humanVideo from "../../assets/videos/human-video.mp4";
import aiVideo from "../../assets/videos/ai-video.mp4";

const videosData = {
  human: [
    {
      id: 1,
      src: humanVideo,
      title: "مونتاج وإخراج بشري",
    },
  ],

  ai: [
    {
      id: 1,
      src: aiVideo,
      title: "فيديو مولد بالذكاء الاصطناعي",
    },
  ],
};

export default function VideosSection() {
  const [activeTab, setActiveTab] = useState("human");

  return (
    <section className="videos-section" id="videos">

      <div className="videos-header">

        <h2>
          معرض <span>الفيديوهات</span>
        </h2>

        <p>
          مقارنة بين الفيديوهات التقليدية والمحتوى الذي تم إنتاجه أو تحسينه
          باستخدام أدوات الذكاء الاصطناعي الحديثة.
        </p>

      </div>

      <div className="videos-tabs">

        <button
          className={activeTab === "human" ? "active" : ""}
          onClick={() => setActiveTab("human")}
        >
          فيديوهات بشرية
        </button>

        <button
          className={activeTab === "ai" ? "active" : ""}
          onClick={() => setActiveTab("ai")}
        >
          فيديوهات بالذكاء الاصطناعي
        </button>

      </div>

      <div className="videos-grid">
        {videosData[activeTab].map((video) => (
          <div className="video-card" key={video.id}>
            <video key={video.src} controls muted preload="metadata">
              <source src={video.src} type="video/mp4" />
            </video>

            <div className="video-card-info">
              <h3>{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="videos-ai-info">

        <div>
          <h3>إيجابيات استخدام AI بالفيديو</h3>

          <p>
            يساعد الذكاء الاصطناعي في تسريع إنتاج الفيديوهات وإضافة مؤثرات
            بصرية متقدمة مع تقليل الوقت والتكلفة المطلوبة لإنشاء المحتوى.
          </p>
        </div>

        <div>
          <h3>سلبيات استخدام AI بالفيديو</h3>

          <p>
            قد تؤدي بعض أدوات الذكاء الاصطناعي إلى إنتاج محتوى غير واقعي أو
            معلومات مضللة، بالإضافة إلى مخاوف تتعلق بالمصداقية وحقوق النشر.
          </p>
        </div>

      </div>

    </section>
  );
}