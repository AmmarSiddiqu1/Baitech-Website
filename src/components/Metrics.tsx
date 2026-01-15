import { useEffect, useState, type FC } from "react";

const Metrics: FC = () => {
  const [counters, setCounters] = useState({
    supportCalls: 0,
    collections: 0,
    ticketTime: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;

            let step = 0;
            const interval = setInterval(() => {
              step++;
              const progress = step / steps;

              setCounters({
                supportCalls: Math.round(40 * progress),
                collections: Math.round(25 * progress),
                ticketTime: Math.round(5 * progress),
              });

              if (step >= steps) {
                clearInterval(interval);
                setCounters({
                  supportCalls: 40,
                  collections: 25,
                  ticketTime: 5,
                });
              }
            }, stepDuration);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("metrics");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      value: `↓ ${counters.supportCalls}%`,
      label: "fewer support calls",
      description: "(WhatsApp updates)",
      icon: "ph-phone",
      color: "#1ECAD3",
    },
    {
      value: `↑ ${counters.collections}%`,
      label: "faster collections",
      description: "(local payments)",
      icon: "ph-trend-up",
      color: "#84DADE",
    },
    {
      value: `< ${counters.ticketTime} min`,
      label: "average ticket creation time",
      description: "",
      icon: "ph-clock",
      color: "#FF4438",
    },
  ];

  return (
    <section
      id='metrics'
      className='tw-py-80-px bg-light'
      style={{
        background: "linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)",
      }}
    >
      <div className='container'>
        <div className='row gy-4'>
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className='col-md-4 text-center'
              data-aos='fade-up'
              data-aos-delay={index * 150}
            >
              <div
                className='tw-mb-4 mx-auto'
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: `${metric.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className={`ph ${metric.icon}`}
                  style={{
                    fontSize: "36px",
                    color: metric.color,
                  }}
                />
              </div>
              <div
                className='tw-mb-2'
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 700,
                  color: metric.color,
                  fontFamily: "'Filson Pro', sans-serif",
                }}
              >
                {metric.value}
              </div>
              <div
                className='tw-mb-2'
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#002B49",
                  fontFamily: "'Filson Pro', sans-serif",
                }}
              >
                {metric.label}
              </div>
              {metric.description && (
                <div
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    fontFamily: "'Filson Pro', sans-serif",
                  }}
                >
                  {metric.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
