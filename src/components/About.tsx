export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>

        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
        <p>
            I am a Senior Data Engineer with over 8 years of experience designing, building, and operating large-scale data platforms across healthcare, banking, retail, and marketing domains. I currently work on modernizing enterprise data systems by migrating legacy on-prem platforms into cloud-native architectures, enabling reliable analytics, reporting, and downstream machine learning use cases in regulated environments.
        </p>

        <p>
            My expertise spans end-to-end data engineering — from batch, streaming, and incremental ingestion to distributed processing, data modeling, orchestration, and analytics enablement. I work primarily with Python, SQL, and Spark-based frameworks, and I have hands-on experience across Google Cloud and AWS. I focus heavily on building scalable, cost-efficient, and well-governed data pipelines, choosing the right design patterns based on data volume, freshness requirements, and business needs rather than over-engineering solutions.
        </p>

        <p>
            As an engineer, I value clean architecture, reliability, and collaboration. I enjoy solving complex data problems, improving pipeline performance, and making data trustworthy for analytics and business teams. I work closely with stakeholders across analytics, product, and engineering to ensure data platforms are not only technically sound but also aligned with real-world reporting and operational requirements.
        </p>
        </div>


        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-green-600 mb-2">6+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-orange-600 mb-2">35+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
