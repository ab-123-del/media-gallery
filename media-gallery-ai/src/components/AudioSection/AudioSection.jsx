import "./AudioSection.css";
import aiAudio from "../../assets/ai-audio.mp3";

export default function AudioSection() {
  return (
    <section className="audio-section" id="audio">
      <div className="audio-content">
        <h2>
          صوت مولد
          <span> بالذكاء الاصطناعي</span>
        </h2>

        <p>
          نموذج صوتي تم إنشاؤه باستخدام تقنيات الذكاء الاصطناعي التوليدي
          لعرض قدرة هذه الأدوات على إنتاج محتوى سمعي رقمي.
        </p>
      </div>

      <div className="audio-player-card">

        <audio controls preload="metadata">
          <source src={aiAudio} type="audio/mpeg" />
          المتصفح لا يدعم تشغيل الصوت.
        </audio>
      </div>
    </section>
  );
}