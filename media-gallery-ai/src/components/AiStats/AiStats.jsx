import "./AiStats.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { year: "2020", ai: 8, human: 92 },
  { year: "2021", ai: 14, human: 86 },
  { year: "2022", ai: 28, human: 72 },
  { year: "2023", ai: 45, human: 55 },
  { year: "2024", ai: 57, human: 43 },
  { year: "2025", ai: 68, human: 32 },
  { year: "2026", ai: 76, human: 24 },
];

export default function AiStats() {
  return (
    <section className="ai-stats" id="stats">
      <div className="stats-header">
        <h2>
          رواج الوسائط المنتجة
          <span> بالذكاء الاصطناعي</span>
        </h2>

        <p>
          يوضّح الرسم البياني ازدياد الاعتماد على أدوات الذكاء الاصطناعي
          التوليدي في إنتاج الصور والفيديوهات مقارنة بالإنتاج البشري التقليدي
          منذ عام 2020 حتى الآن.
        </p>
      </div>

      <div className="stats-chart-card">
        <ResponsiveContainer width="100%" height={420}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="aiColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff7a00" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#ff7a00" stopOpacity={0.03} />
              </linearGradient>

              <linearGradient id="humanColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#222222" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#222222" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="4 4" stroke="#eeeeee" />

            <XAxis
              dataKey="year"
              tick={{ fill: "#666", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#666", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              formatter={(value) => `${value}%`}
              contentStyle={{
                border: "none",
                borderRadius: "18px",
                boxShadow: "0 14px 35px rgba(0,0,0,0.1)",
                direction: "rtl",
              }}
            />

            <Legend />

            <Area
              type="monotone"
              dataKey="ai"
              name="محتوى مولد بالذكاء الاصطناعي"
              stroke="#ff7a00"
              strokeWidth={4}
              fill="url(#aiColor)"
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />

            <Area
              type="monotone"
              dataKey="human"
              name="محتوى مصمم بشريًا"
              stroke="#222222"
              strokeWidth={4}
              fill="url(#humanColor)"
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <p className="stats-note">
        الأرقام المعروضة تقديرية بهدف التوضيح البصري داخل المشروع، وليست
        إحصائية رسمية دقيقة.
      </p>
    </section>
  );
}