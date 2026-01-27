import { Code, Database, Layers, Settings } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Data Engineering',
      icon: <Code className="w-6 h-6" />,
      skills: [
        'Python',
        'SQL',
        'PySpark',
        'Apache Spark',
        'Spark SQL',
        'Scala',
        'Apache Beam',
        'Shell Scripting',
        'SAS'
      ],
    },
    {
      title: 'Cloud & Platforms',
      icon: <Database className="w-6 h-6" />,
      skills: [
        'Google Cloud Platform (GCP)',
        'Amazon Web Services (AWS)',
        'BigQuery',
        'Google Cloud Storage (GCS)',
        'Amazon S3',
        'Amazon Redshift',
        'Dataproc',
        'Amazon EMR',
        'Databricks'
      ],
    },
    {
      title: 'Ingestion & Streaming',
      icon: <Settings className="w-6 h-6" />,
      skills: [
        'Batch Data Pipelines',
        'Incremental Loads',
        'Event-Driven Pipelines',
        'Apache Kafka',
        'Google Pub/Sub',
        'Amazon Kinesis',
        'Amazon SQS & SNS',
        'Sqoop'
      ],
    },
    {
      title: 'Data Modeling & Ops',
      icon: <Layers className="w-6 h-6" />,
      skills: [
        'dbt',
        'Dataform',
        'Medallion Architecture',
        'Layered Data Lake Design',
        'Workflow Orchestration',
        'Apache Airflow',
        'Cloud Composer',
        'CI/CD Pipelines'
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Section */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Core Proficiencies
          </h3>

          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Python & SQL</span>
                <span className="text-gray-500">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Apache Spark & PySpark</span>
                <span className="text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">Cloud Data Platforms (GCP & AWS)</span>
                <span className="text-gray-500">88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-orange-600 h-3 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
