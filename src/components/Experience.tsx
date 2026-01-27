import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
  company: 'Tivity Health',
  role: 'Senior Data Engineer',
  period: 'Dec 2023 – Present',
  description: [
    'Migrated healthcare data from on-prem Teradata and Oracle systems to Google Cloud to support enterprise analytics and reporting.',
    'Built batch, near-real-time, and incremental ingestion pipelines using PySpark on Dataproc, Pub/Sub, and Cloud Functions.',
    'Designed a layered data architecture in Google Cloud Storage and BigQuery and published curated datasets using dbt with data quality and freshness checks.'
  ],
  technologies: [
    'Python',
    'SQL',
    'PySpark',
    'Dataproc',
    'BigQuery',
    'Google Cloud Storage',
    'Pub/Sub',
    'Cloud Functions',
    'dbt',
    'Cloud Composer'
  ]
},
    {
  company: 'Equifax',
  role: 'Senior Data Engineer',
  period: 'Jun 2022 – Dec 2023',
  description: [
    'Migrated enterprise financial data from on-prem Oracle and Teradata systems and external sources into Google Cloud.',
    'Designed batch and event-driven ingestion pipelines using Cloud Functions and Apache Beam on Dataflow.',
    'Built distributed transformation pipelines using Spark on Dataproc and published analytics-ready datasets to BigQuery using Dataform.'
  ],
  technologies: [
    'Python',
    'SQL',
    'Apache Beam',
    'Dataflow',
    'Dataproc',
    'BigQuery',
    'Google Cloud Storage',
    'Dataform',
    'Cloud Composer',
    'Cloud Build'
  ]
},
{
  company: 'Costco IT',
  role: 'Senior Data Engineer',
  period: 'Sep 2021 – Jun 2022',
  description: [
    'Ingested enterprise retail data from transactional and operational systems into a centralized data lake on Amazon S3.',
    'Built scalable batch and incremental ingestion pipelines using AWS Glue and AWS Lambda with event-based triggers.',
    'Developed distributed data processing pipelines on Amazon EMR using Apache Spark and Spark SQL for analytics-ready datasets.'
  ],
  technologies: [
    'Python',
    'SQL',
    'Apache Spark',
    'AWS Glue',
    'AWS Lambda',
    'Amazon EMR',
    'Amazon S3',
    'Amazon Redshift',
    'Apache Airflow'
  ]
},{
  company: 'M&T Bank',
  role: 'Senior Data Engineer',
  period: 'Oct 2020 – Sep 2021',
  description: [
    'Built a centralized banking data platform by ingesting account activity, payment events, and operational data into AWS.',
    'Designed batch and streaming ingestion pipelines using AWS Lambda, Amazon S3, Amazon SQS, and Amazon Kinesis.',
    'Developed data transformation pipelines using Apache Spark on Databricks and implemented Delta Lake for curated datasets with ACID guarantees.'
  ],
  technologies: [
    'Python',
    'SQL',
    'Apache Spark',
    'Databricks',
    'Delta Lake',
    'AWS Lambda',
    'Amazon S3',
    'Amazon Kinesis',
    'Amazon Redshift'
  ]
},
{
  company: 'D4 Insight Pvt Ltd',
  role: 'Big Data Engineer',
  period: 'Jul 2018 – Sep 2020',
  description: [
    'Migrated legacy healthcare and retail data processing workloads from on-prem systems to an AWS-based big data platform.',
    'Built batch and streaming ingestion pipelines using Sqoop, AWS Lambda, Amazon S3, and Apache Kafka.',
    'Developed distributed data processing pipelines using Apache Spark, Spark Streaming, and Spark SQL to prepare analytics-ready datasets.'
  ],
  technologies: [
    'Python',
    'SQL',
    'Apache Spark',
    'Spark Streaming',
    'Kafka',
    'AWS Lambda',
    'Amazon S3',
    'Hive',
    'HDFS'
  ]
},

{
  company: 'Vsplash Techlabs Pvt Ltd',
  role: 'Hadoop Engineer',
  period: 'May 2017 – Jul 2018',
  description: [
    'Supported ingestion of digital marketing and web interaction data from relational databases, flat files, APIs, and streaming sources.',
    'Built batch ingestion pipelines using Sqoop, UNIX Shell Scripting, and SAS and implemented real-time ingestion using Kafka and Spark Streaming.',
    'Converted legacy Oracle and SQL Server logic into distributed processing workflows using Apache Spark and Spark SQL for analytics consumption.'
  ],
  technologies: [
    'Python',
    'SQL',
    'Apache Spark',
    'Spark Streaming',
    'Kafka',
    'Hadoop',
    'Hive',
    'Sqoop',
    'SAS'
  ]
}
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  </div>
                  <p className="text-xl text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-start">
                    <span className="text-blue-600 mr-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
