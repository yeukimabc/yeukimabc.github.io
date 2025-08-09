var quiz_mid = {
    "count": 76,
    "next": null,
    "previous": null,
    "results": [
        {
            "_class": "assessment",
            "id": 55272318,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The AWS Global infrastructure is built around Regions and Availability Zones (AZs). Each AWS Region is a separate geographic area. Each AWS Region has multiple, isolated locations known as Availability Zones. Availability Zones in a region are connected with low latency, high throughput, and highly redundant networking. These Availability Zones offer AWS customers an easier and more effective way to design and operate applications and databases, making them more highly available, fault tolerant, and scalable than traditional single datacenter infrastructures or multi-datacenter infrastructures.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In addition to replicating applications and data across multiple data centers in the same Region using Availability Zones, you can also choose to increase redundancy and fault tolerance further by replicating data between geographic Regions (especially if you are serving customers from all over the world). You can do so using both private, high speed networking and public internet connections to provide an additional layer of business continuity, or to provide low latency access across the globe.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Deploy the application across multiple Availability Zones and subnets\" is incorrect.</em></strong> A subnet is a range of IP addresses in your VPC. </p><p><br></p><p><strong><em>\"Deploy the application across multiple Availability Zones and Edge locations\" is incorrect. </em></strong>Edge locations are not used to host applications. Edge locations are used by CloudFront to cache and distribute content to your global customers with low latency.</p><p><br></p><p><strong><em>\"Deploy the application across multiple VPC’s and subnets\" is incorrect. </em></strong>VPC refers to the virtual private cloud which is a virtual network that you define. Deploying the application across multiple VPC’s within the same region will not help your global customers.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/about-aws/global-infrastructure/\">https://aws.amazon.com/about-aws/global-infrastructure/</a></p>",
                "answers": [
                    "<p>Deploy the application across multiple Availability Zones and subnets</p>",
                    "<p>Deploy the application across multiple Availability Zones and Edge locations </p>",
                    "<p>Deploy the application across multiple Regions and Availability Zones </p>",
                    "<p>Deploy the application across multiple VPC’s and subnets</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272336,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p> &nbsp; &nbsp; &nbsp; &nbsp;An IAM user group is a collection of IAM users that are managed as a unit. User groups let you specify permissions for multiple users, which can make it easier to manage the permissions for those users. For example, you could have a user group called Admins and give that user group the types of permissions that administrators typically need. Any user in that user group automatically has the permissions that are assigned to the user group. If a new user joins your organization and needs administrator privileges, you can assign the appropriate permissions by adding the user to that user group. Similarly, if a person changes jobs in your organization, instead of editing that user's permissions, you can remove him or her from the old user groups and add him or her to the appropriate new user groups.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"IAM role\"&nbsp;is incorrect. </em></strong>An IAM role is an IAM identity that you can create in your account that has specific permissions. IAM roles allow you to delegate access (for a limited time) to users or services that normally don't have access to your organization's AWS resources. IAM users or AWS services can assume a role to obtain temporary security credentials that can be used to interact with specific AWS resources.&nbsp; </p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;You can use roles to delegate access to users, applications, or services that don't normally have access to your AWS resources. For example, you might want to grant users in your AWS account access to resources they don't usually have, or grant users in one AWS account access to resources in another account. Or you might want to allow a mobile app to use AWS resources, but not want to embed AWS keys within the app. Sometimes you want to give AWS access to users who already have identities defined outside of AWS, such as in your corporate directory. Or, you might want to grant access to your account to third parties so that they can perform an audit on your resources. For these scenarios, you can delegate access to AWS resources using an IAM role.</p><p><br></p><p><strong><em>\"IAM users\"&nbsp;is incorrect. </em></strong>An IAM user is an entity that you create in AWS to represent the person or application that uses it to directly interact with AWS. A primary use for IAM users is to give people the ability to sign in to the AWS Management Console for interactive tasks and to make programmatic requests to AWS services using the API or CLI. A user in AWS consists of a name, a password to sign into the AWS Management Console, and up to two access keys that can be used with the API or CLI. When you create an IAM user, you grant it permissions by making it a member of a user group that has appropriate permission policies attached (recommended), or by directly attaching policies to the user.</p><p><br></p><p>Additional information:</p><p>An IAM role is similar to an IAM user, in that it is an AWS identity with permission policies that determine what the identity can and cannot do in AWS. However, instead of being uniquely associated with one person, a role is intended to be assumable by anyone (or any service, application, ...etc) who needs it. Also, a role does not have standard long-term credentials such as a password or access keys associated with it. Instead, when you assume a role, it provides you with temporary security credentials for your role session. IAM roles are meant to be assumed by authorized entities, such as IAM users, applications, or an AWS service such as Amazon EC2.</p><p><br></p><p><strong><em>\"AWS Organizations\" is incorrect. </em></strong>AWS Organizations can be used to group AWS accounts, not IAM users (the employees). AWS Organization helps you to centrally manage billing; control access, compliance, and security; and share resources across multiple AWS accounts.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html</a></p>",
                "answers": [
                    "<p>IAM roles</p>",
                    "<p>IAM user groups</p>",
                    "<p>IAM users</p>",
                    "<p>AWS Organizations</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Security, Identity, & Compliance",
            "question_plain": "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272340,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>What is the AWS&nbsp;feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; AWS Multi-Factor Authentication (MFA) is a simple best practice that adds an extra layer of protection on top of your user name and password. With MFA enabled, when a user signs in to an AWS website, they will be prompted for their user name and password (the first factor—what they know), as well as for an authentication code from their AWS MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for your AWS account settings and resources.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Encrypted keys\" is incorrect.</em></strong> Logging into the AWS management console doesn’t require encrypted keys.</p><p><br></p><p><strong><em>\"Email verification\"&nbsp;is incorrect.</em></strong> Email verification is the process of verifying your ownership of an account’s e-mail address.</p><p><br></p><p><strong><em>\"AWS&nbsp;KMS\" is incorrect. </em></strong>AWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/iam/details/mfa/\">https://aws.amazon.com/iam/details/mfa/</a></p>",
                "answers": [
                    "<p>Encrypted keys</p>",
                    "<p>Email verification</p>",
                    "<p>AWS&nbsp;KMS</p>",
                    "<p>AWS&nbsp;MFA</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Security, Identity, & Compliance",
            "question_plain": "What is the AWS&nbsp;feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272346,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. Amazon Aurora combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases. It delivers up to five times the throughput of standard MySQL and up to three times the throughput of standard PostgreSQL. Amazon Aurora is designed to be compatible with MySQL and with PostgreSQL, so that existing applications and tools can run without requiring modification. It is available through Amazon Relational Database Service (RDS), freeing you from time-consuming administrative tasks such as provisioning, patching, backup, recovery, failure detection, and repair.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"A MySQL database installed on an EC2 instance\" is incorrect. </em></strong>You can Install MySQL on an EC2 instance, but in this scenario, you would have to manage the database and the backup processes yourself; it would not be automatic.</p><p><br></p><p><strong><em>\"Amazon DynamoDB\" is incorrect. </em></strong>Amazon DynamoDB does not support MySQL. Amazon DynamoDB is a NoSQL database service.</p><p><br></p><p><strong><em>\"Amazon Neptune\" is incorrect.</em></strong> Amazon Neptune is a graph database service, not a MySQL database service. Amazon Neptune is used to build and run applications that work with highly connected datasets, such as social networking, recommendation engines, and knowledge graphs.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/rds/aurora/\">https://aws.amazon.com/rds/aurora/</a></p>",
                "answers": [
                    "<p>A MySQL database installed on an EC2 instance</p>",
                    "<p>Amazon DynamoDB</p>",
                    "<p>Amazon Aurora&nbsp; </p>",
                    "<p>Amazon Neptune</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Database",
            "question_plain": "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272348,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Which of the below is a best-practice when designing solutions on AWS?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>The Well-Architected Framework identifies a set of general design principles to facilitate good design in the cloud:</p><p>1- Stop guessing your capacity needs: Eliminate guessing about your infrastructure capacity needs. When you make a capacity decision before you deploy a system, you might end up sitting on expensive idle resources or dealing with the performance implications of limited capacity. With cloud computing, these problems can go away. You can use as much or as little capacity as you need, and scale up and down automatically.</p><p>2- Test systems at production scale: In the cloud, you can create a production-scale test environment on demand, complete your testing, and then decommission the resources. Because you only pay for the test environment when it's running, you can simulate your live environment for a fraction of the cost of testing on premises.</p><p>3- Automate to make architectural experimentation easier: Automation allows you to create and replicate your systems at low cost and avoid the expense of manual effort. You can track changes to your automation, audit the impact, and revert to previous parameters when necessary.</p><p>4- Allow for evolutionary architectures: Allow for evolutionary architectures. In a traditional environment, architectural decisions are often implemented as static, one-time events, with a few major versions of a system during its lifetime. As a business and its context continue to change, these initial decisions might hinder the system's ability to deliver changing business requirements. In the cloud, the capability to automate and test on demand lowers the risk of impact from design changes. This allows systems to evolve over time so that businesses can take advantage of innovations as a standard practice.</p><p>5- Drive architectures using data: In the cloud you can collect data on how your architectural choices affect the behavior of your workload. This lets you make fact-based decisions on how to improve your workload. Your cloud infrastructure is code, so you can use that data to inform your architecture choices and improvements over time.</p><p>6- Improve through game days: Test how your architecture and processes perform by regularly scheduling game days to simulate events in production. This will help you understand where improvements can be made and can help develop organizational experience in dealing with events.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Provision a large compute capacity to handle any spikes in load\" is incorrect. </em></strong>Instead of provisioning a large compute capacity to handle the spikes in load, it is recommended to use the AWS Auto Scaling service to add or remove instances based on demand. The AWS Auto Scaling service allows you to automatically provision new resources to meet demand and maintain performance. When demand drops, AWS Auto Scaling will automatically remove any excess resource capacity, so you avoid overspending.</p><p><br></p><p><strong><em>\"Use AWS reservations to reduce costs when testing your production environment\" is incorrect. </em></strong>Reservations in AWS are not an appropriate choice when you need to test your production environment, AWS reservations have a minimum term of one year.</p><p><br></p><p><strong><em>\"Invest heavily in architecting your environment, as it is not easy to change your design later\" is incorrect.</em></strong> In AWS, you can test and provision your resources on-demand and pay only for what you use with no long-term contracts. This enables you to make any changes you want in your architecture design at any time without any risks.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/wellarchitected/latest/framework/wellarchitected-framework.pdf\">https://docs.aws.amazon.com/wellarchitected/latest/framework/wellarchitected-framework.pdf</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;page 4</p>",
                "answers": [
                    "<p>Provision a large compute capacity to handle any spikes in load</p>",
                    "<p>Use AWS reservations to reduce costs when testing your production environment</p>",
                    "<p>Automate wherever possible to make architectural experimentation easier</p>",
                    "<p>Invest heavily in architecting your environment, as it is not easy to change your design later</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "Which of the below is a best-practice when designing solutions on AWS?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272314,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;With On-Demand instances, you pay for compute capacity by the hour or second (minimum of 60 seconds) with no long-term commitments. You can increase or decrease your compute capacity depending on the demands of your application and only pay for what you use.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The use of On-Demand instances frees you from the costs and complexities of planning, purchasing, and maintaining hardware and transforms what are commonly large fixed costs into much smaller variable costs. On-Demand instances also remove the need to buy “safety net” capacity to handle periodic traffic spikes.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Reserved instances\" is incorrect. </em></strong>Reserved instances are not appropriate in this case because the shortest reservation length is one year.</p><p><br></p><p><strong><em>\"Spot instances\" is incorrect.</em></strong> Spot instances is not the right choice because the application must run without interruption. </p><p><br></p><p><strong><em>\"Dedicated instances\" is incorrect. </em></strong>Dedicated instances can be used if you require your instance be physically isolated at the host hardware level from instances that belong to other AWS accounts.</p><p>&nbsp;</p><p><strong>References:&nbsp;</strong></p><p><a href=\"https://d1.awsstatic.com/whitepapers/aws-overview.pdf\">https://d1.awsstatic.com/whitepapers/aws-overview.pdf</a></p>",
                "answers": [
                    "<p>Reserved instances </p>",
                    "<p>Spot instances </p>",
                    "<p>Dedicated instances </p>",
                    "<p>On-demand instances </p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Pricing Models",
            "question_plain": "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272316,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; AWS Database Migration Service (DMS) helps you migrate databases to AWS easily and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. The AWS Database Migration Service can migrate your data to and from most widely used commercial and open-source databases. The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to Amazon Aurora or Microsoft SQL Server to MySQL. It also allows you to stream data to Amazon Redshift from any of the supported sources including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, SAP ASE, and SQL Server, enabling consolidation and easy analysis of data in the petabyte-scale data warehouse. AWS Database Migration Service can also be used for continuous data replication with high availability.&nbsp;&nbsp;&nbsp;</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"AWS OpsWorks\"&nbsp;is incorrect. </em></strong>AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet.</p><p><br></p><p><strong><em>“AWS Application Migration Service” is incorrect.</em></strong> AWS Application Migration Service is a highly automated lift-and-shift (rehost) solution that simplifies the process of migrating applications from physical, virtual, and cloud-based infrastructure, ensuring that they are fully operational in any AWS Region without compatibility issues.</p><p><br></p><p><strong><em>\"AWS Application Discovery Service\" is incorrect.</em></strong> AWS Application Discovery Service helps enterprise customers plan migration projects by gathering information about their on-premises data centers.</p><p>&nbsp;</p><p><strong>References:&nbsp;</strong></p><p><a href=\"https://d1.awsstatic.com/whitepapers/aws-overview.pdf\">https://d1.awsstatic.com/whitepapers/aws-overview.pdf</a></p>",
                "answers": [
                    "<p>AWS OpsWorks</p>",
                    "<p>AWS Application Migration Service</p>",
                    "<p>AWS Application Discovery Service </p>",
                    "<p>AWS Database Migration Service </p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Migration & Transfer",
            "question_plain": "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272320,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>Which service provides object-level storage in AWS?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; Amazon S3 is an object level storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices. It is designed to deliver 99.999999999% durability, and stores data for millions of applications used by market leaders in every industry.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon EFS\" is incorrect. </em></strong>Amazon EFS is a <strong>file-level </strong>storage technology that provides massively parallel shared access to thousands of Amazon EC2 instances, enabling your applications to achieve high levels of aggregate throughput and IOPS with consistently low latencies.</p><p><br></p><p><strong><em>\"Amazon EBS\" is incorrect. </em></strong>Amazon EBS is a <strong>block-level</strong> storage that provides storage volumes for use with Amazon EC2 and Amazon RDS instances.</p><p><br></p><p><strong><em>\"Amazon Instance Store\" is incorrect. </em></strong>An instance store provides temporary <strong>block-level</strong> storage for your EC2 instances. Instance store is ideal for temporary storage of information that changes frequently, such as buffers, caches, scratch data, and other temporary content.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/s3/\">https://aws.amazon.com/s3/</a></p><p><a href=\"https://aws.amazon.com/what-is-cloud-object-storage/\">https://aws.amazon.com/what-is-cloud-object-storage/</a></p>",
                "answers": [
                    "<p>Amazon EFS</p>",
                    "<p>Amazon S3 </p>",
                    "<p>Amazon EBS </p>",
                    "<p>Amazon Instance Store</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Storage",
            "question_plain": "Which service provides object-level storage in AWS?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272332,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>Which of the following is an example of horizontal scaling in the AWS&nbsp;Cloud?</p>",
                "explanation": "<p><strong>Horizontal Scaling:</strong></p><p>&nbsp; &nbsp; &nbsp; &nbsp;Scaling horizontally takes place through an increase in the number of resources (e.g., adding more hard drives to a storage array or adding more servers to support an application). This is a great way to build Internet-scale applications that leverage the elasticity of cloud computing.</p><p><br></p><p><strong>Vertical Scaling:</strong></p><p>&nbsp; &nbsp; &nbsp; &nbsp; Scaling vertically takes place through an increase in the specifications of an individual resource (e.g., upgrading a server with a larger hard drive, adding more memory, or provisioning a faster CPU). On Amazon EC2, this can easily be achieved by stopping an instance and resizing it to an instance type that has more RAM, CPU, I/O,or networking capabilities. This way of scaling can eventually hit a limit and it is not always a cost efficient or highly available approach. However, it is very easy to implement and can be sufficient for many use cases especially as a short term solution.</p><p><br></p><p><strong>Additional information:</strong></p><p>Vertical-scaling is often limited to the capacity constraints of a single machine, scaling beyond that capacity often involves downtime and comes with an upper limit. With horizontal-scaling it is often easier to scale dynamically by adding more machines in parallel. Hence, in most cases, horizontal-scaling is recommended over vertical-scaling.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p>All other options are examples of Vertical Scaling.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://wa.aws.amazon.com/wat.concept.horizontal-scaling.en.html\">https://wa.aws.amazon.com/wat.concept.horizontal-scaling.en.html</a></p>",
                "answers": [
                    "<p>Adding more RAM capacity to an EC2 instance</p>",
                    "<p>Adding more EC2 instances of the same size to handle an increase in traffic</p>",
                    "<p>Replacing an existing EC2 instance with a larger, more powerful one</p>",
                    "<p>Increasing the compute capacity of a single EC2 instance to address the growing demands of an application</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "Which of the following is an example of horizontal scaling in the AWS&nbsp;Cloud?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272350,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; You should attempt to build as much automation as possible in both detecting and reacting to failure. You can use services like ELB and Amazon Route53 to configure health checks and mask failure by only routing traffic to healthy endpoints. In addition, Auto Scaling can be configured to automatically replace unhealthy nodes. You can also replace unhealthy nodes using the Amazon EC2 auto-recovery feature or services such as AWS OpsWorks and AWS Elastic Beanstalk. It won’t be possible to predict every possible failure scenario on day one. Make sure you collect enough logs and metrics to understand normal system behavior. After you understand that, you will be able to set up alarms that trigger automated response or manual intervention.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>ECR is incorrect. </em></strong>Amazon Elastic Container Registry (Amazon ECR) is a Docker container registry that allows developers to store, manage, and deploy Docker container images.</p><p><br></p><p><strong><em>Amazon Athena&nbsp;is incorrect. </em></strong>Amazon Athena is an interactive query service that is mainly used to analyze data in Amazon S3 using standard SQL.</p><p><br></p><p><strong><em>Amazon EC2 is incorrect. </em></strong>Amazon EC2 is a server-based compute service. Fault tolerance is not built-in, you have to architect for fault tolerance using the services we mentioned above.</p><p>Additional information:</p><p>Lambda is a serverless compute service. Serverless computing provides built-in fault tolerance. You don't need to architect for this capability since the service provides it by default.</p><p><strong>&nbsp;</strong></p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html\">https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html</a></p><p><a href=\"https://aws.amazon.com/elasticloadbalancing/\">https://aws.amazon.com/elasticloadbalancing/</a></p>",
                "answers": [
                    "<p>ELB</p>",
                    "<p>ECR</p>",
                    "<p>Auto Scaling</p>",
                    "<p>Amazon Athena</p>",
                    "<p>Amazon EC2</p>"
                ]
            },
            "correct_response": [
                "a",
                "c"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272322,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;For managed services such as Amazon Elastic MapReduce (Amazon EMR) and DynamoDB, AWS is responsible for performing all the operations needed to keep the service running. </p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Amazon EMR launches clusters in minutes. You don’t need to worry about node provisioning, infrastructure setup, Hadoop configuration, or cluster tuning. Amazon EMR takes care of these tasks so you can focus on analysis.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DynamoDB is serverless with no servers to provision, patch, or manage and no software to install, maintain, or operate. DynamoDB automatically scales tables up and down to adjust for capacity and maintain performance. Availability and fault tolerance are built in, eliminating the need to architect your applications for these capabilities.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>Other managed services include:</strong> AWS&nbsp;Lambda, Amazon RDS, Amazon Redshift, Amazon CloudFront, Amazon S3 and several other services.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;For these managed services, AWS is responsible for most of the configuration and management tasks, but customers are still responsible for managing their data (including encryption options), classifying their assets, and using IAM tools to apply the appropriate permissions. </p><p><br></p><p><strong>NOTE:</strong></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;The AWS managed services we mentioned above are different than the AWS Managed Services (AMS) service. AMS is an AWS service that operates AWS on behalf of enterprise customers and partners. Enterprises want to adopt AWS at scale but often the skills that have served them well in traditional IT do not always translate to success in the cloud. AWS Managed Services (AMS) enables them to migrate to AWS at scale more quickly, reduce their operating costs, improve security and compliance and focus on their differentiating business priorities.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon VPC\" is incorrect. </em></strong>Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment. Amazon VPC is not a managed service, you are responsible for managing almost everything when using the Amazon VPC service.</p><p><br></p><p><strong><em>\"Amazon Elastic Compute Cloud\" is incorrect. </em></strong>Amazon Elastic Compute Cloud (Amazon EC2) is a service that gives you complete control over your compute resources. Apart from patching the underlying host - which is the responsibility of AWS - you are responsible for managing almost everything in your server instances when using Amazon EC2.</p><p><br></p><p><strong><em>\"AWS IAM\" is incorrect. </em></strong>AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and user groups, and use permissions to allow and deny their access to AWS resources.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/dynamodb/\">https://aws.amazon.com/dynamodb/</a></p><p><a href=\"https://aws.amazon.com/emr/\">https://aws.amazon.com/emr/</a></p>",
                "answers": [
                    "<p>Amazon VPC</p>",
                    "<p>Amazon Elastic MapReduce</p>",
                    "<p>Amazon Elastic Compute Cloud </p>",
                    "<p>Amazon DynamoDB </p>",
                    "<p>AWS IAM</p>"
                ]
            },
            "correct_response": [
                "b",
                "d"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272328,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>Which of the following is <strong>NOT</strong> correct regarding Amazon EC2 On-demand instances?</p>",
                "explanation": "<p>There are no startup or termination fees associated with Amazon EC2.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"The on-demand instances follow the AWS pay-as-you-go pricing model\" is incorrect. </em></strong>AWS pay-as-you-go pricing model<strong><em> </em></strong>is similar to how you pay for utilities like water and electricity. With Amazon EC2 <em>on-demand instances,</em><strong><em> </em></strong>you only pay for the compute capacity you consume, and once you stop using them, there are no additional costs or termination fees.</p><p><br></p><p><strong><em>\"With on-demand instances, no longer-term commitments or upfront payments are needed\" is incorrect. </em></strong>With On-Demand instances, you pay for compute capacity by the hour or the second depending on which instances you run. No longer-term commitments or upfront payments are needed.</p><p><br></p><p><strong><em>\"When using on-demand Linux instances, you are charged per second based on an hourly rate\" is incorrect. </em></strong>With per-second billing, you pay for only what you use. It takes cost of unused minutes and seconds in an hour off of the bill, so you can focus on improving your applications instead of maximizing usage to the hour. Especially, if you manage instances running for irregular periods of time, such as dev/testing, data processing, analytics, batch processing and gaming applications, can benefit.</p><p>Per-second billing is available for instances launched in:</p><p>- On-Demand, Reserved and Spot forms</p><p>- All regions and Availability Zones</p><p>- Amazon Linux, Windows and Ubuntu</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/ec2/pricing/\">https://aws.amazon.com/ec2/pricing/</a></p>",
                "answers": [
                    "<p>The on-demand instances follow the AWS pay-as-you-go pricing model</p>",
                    "<p>You have to pay a start-up fee when launching a new instance for the first time</p>",
                    "<p>With on-demand instances, no longer-term commitments or upfront payments are needed</p>",
                    "<p>When using on-demand Linux instances, you are charged per second based on an hourly rate </p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Pricing Models",
            "question_plain": "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272352,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Spot instances provide a discount (up to 90%) off the On-Demand price. The Spot price is determined by long-term trends in supply and demand for EC2 spare capacity. If the Spot price exceeds the maximum price you specify for a given instance or if capacity is no longer available, your instance will automatically be interrupted. </p><p>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;Spot Instances are a cost-effective choice if you can be flexible about when your applications run and if you don't mind if your applications get interrupted. For example, Spot Instances are well-suited for data analysis, batch jobs, background processing, and optional tasks.&nbsp;</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Reserved instances\" is incorrect. </em></strong>Reserved instances are recommended for Customers who can commit to using EC2 over a 1 or 3-year term to reduce their total computing costs. Even if the project will last for more than a year, the cost-benefit for acquiring Reserved Instances is not as great as the cost-benefit from using Spot Instances. The Spot option provides the largest discount (up to 90%).</p><p><br></p><p><strong><em>\"On-demand instances\" is incorrect.</em></strong> On-demand instances are significantly less cost-effective than spot instances.</p><p><br></p><p><strong><em>\"Dedicated instances\" is incorrect. </em></strong>Dedicated instances are used when you need your instances to be physically isolated at the host hardware level from instances that belong to other AWS accounts. Dedicated instances are significantly more expensive than Spot Instances</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html</a></p>",
                "answers": [
                    "<p>Reserved Instances </p>",
                    "<p>Spot Instances </p>",
                    "<p>On-demand Instances </p>",
                    "<p>Dedicated Instances </p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Pricing Models",
            "question_plain": "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272354,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Which statement is true regarding the AWS Shared Responsibility Model?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Customers should be aware that their responsibilities may vary depending on the AWS services chosen.&nbsp; For example, when using Amazon EC2, you are responsible for applying operating system and application security patches regularly. However, such patches are applied automatically when using Amazon RDS.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Security of the IaaS services is the responsibility of AWS\" is incorrect. </em></strong>AWS products that fall into the well-understood category of Infrastructure as a Service (IaaS) - such as Amazon EC2, and Amazon VPC -&nbsp; are completely under your control and require you to perform all of the necessary security configuration and management tasks. For example, for EC2 instances, you’re responsible for management of the guest OS (including updates and security patches), any application software or utilities you install on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance. These are basically the same security tasks that you’re used to performing no matter where your servers are located.</p><p><br></p><p><strong><em>\"Security of the managed services is the responsibility of the customer\" is incorrect. </em></strong>AWS is responsible for the security configuration of its managed services. Examples of these types of services include Amazon DynamoDB, Amazon RDS, Amazon Redshift, and Amazon Elastic MapReduce. For most of these services, all you have to do is to configure logical access controls on the resources and protect your account credentials, but overall, the security configuration work is performed by the service.</p><p><br></p><p><strong><em>\"Patching the guest OS is always the responsibility of AWS\" is incorrect.</em></strong> </p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A computer on which AWS runs one or more virtual machines is called a <strong>host</strong> machine, and each virtual machine is called a <strong>guest</strong> machine. AWS drives the concept of virtualization by allowing the physical host machine to operate multiple virtual machines as guests (for multiple customers) to help maximize the effective use of computing resources such as memory, network bandwidth and CPU cycles.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Patching the <strong>guest</strong> operating system is the responsibility of AWS for the managed services only (such as Amazon RDS). The customer is responsible for patching the guest OS for other services (such as Amazon EC2).</p><p>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;AWS is responsible for patching the underlying <strong>hosts</strong>, upgrading the firmware, and fixing flaws within the infrastructure for all services, including Amazon EC2.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>",
                "answers": [
                    "<p>Security of the IaaS services is the responsibility of AWS</p>",
                    "<p>Security of the managed services is the responsibility of the customer</p>",
                    "<p>Responsibilities vary depending on the services used</p>",
                    "<p>Patching the guest OS is always the responsibility of AWS</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "Which statement is true regarding the AWS Shared Responsibility Model?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272356,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>What is the AWS database service that allows you to upload data structured in key-value format?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; Amazon&nbsp;DynamoDB is a NoSQL database service. NoSQL databases are used for non-structured data that are typically stored in JSON-like, key-value documents.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>Amazon Redshift is incorrect. </em></strong>Amazon Redshift is a data warehouse service that only supports relational data, NOT key-value data. </p><p>Additional information:</p><p>Amazon Redshift is a fast, fully managed data warehouse service that is specifically designed for online analytic processing (OLAP) and business intelligence (BI) applications, which require complex queries against large datasets. </p><p><br></p><p><strong><em>Amazon Aurora is incorrect. </em></strong>Amazon Aurora is a MySQL and PostgreSQL-compatible relational database NOT a key-value database.</p><p><br></p><p><strong><em>Amazon RDS is incorrect. </em></strong>Amazon RDS is a relational database NOT a key-value database.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/dynamodb/\">https://aws.amazon.com/dynamodb/</a></p><p><a href=\"https://aws.amazon.com/products/databases/\">https://aws.amazon.com/products/databases/</a></p>",
                "answers": [
                    "<p>Amazon Redshift</p>",
                    "<p>Amazon Aurora </p>",
                    "<p>Amazon RDS </p>",
                    "<p>Amazon DynamoDB </p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Database",
            "question_plain": "What is the AWS database service that allows you to upload data structured in key-value format?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272364,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Which of the below options are related to the reliability of AWS? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The reliability term encompasses the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues. The automatic provisioning of resources and the ability to recover from failures meet these criteria.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Applying the principle of least privilege to all AWS resources\" is incorrect.</em></strong> Principle of least privilege is a security concept&nbsp; related to access management.</p><p><br></p><p><strong><em>\"Providing compensation to customers if issues occur\" is incorrect.</em></strong> AWS generally does not provide compensation to customers if issues occur and doing so has nothing to do with reliability.</p><p><br></p><p><strong><em>\"All AWS services are considered Global Services, and this design helps customers serve their international users\" is incorrect.</em></strong> AWS services are either Global, Regional or specific to an Availability Zone. Among all the services that AWS offers, only a few of them are considered global services. <strong>Examples of AWS global services include: Amazon CloudFront, AWS Shield, AWS Identity and Access Management (AWS IAM) and Amazon Route 53.</strong> This answer is incorrect because NOT ALL AWS Services are Global.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/wellarchitected-reliability-pillar.pdf\">https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/wellarchitected-reliability-pillar.pdf</a></p>",
                "answers": [
                    "<p>Ability to recover quickly from failures</p>",
                    "<p>Applying the principle of least privilege to all AWS resources</p>",
                    "<p>Automatically provisioning new resources to meet demand</p>",
                    "<p>Providing compensation to customers if issues occur</p>",
                    "<p>All AWS services are considered Global Services, and this design helps customers serve their international users</p>"
                ]
            },
            "correct_response": [
                "a",
                "c"
            ],
            "section": "Cloud Computing Benefits",
            "question_plain": "Which of the below options are related to the reliability of AWS? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272366,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. </p><p>What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp;When your needs change, you can exchange your Convertible Reserved Instances and continue to benefit from the reservation's pricing discount. With Convertible RIs, you can exchange one or more Reserved Instances for another Reserved Instance with a different configuration, including <strong>instance family, operating system, and tenancy. </strong>There are no limits to how many times you perform an exchange, as long as the new Convertible Reserved Instance is of an equal or higher value than the original Convertible Reserved Instances that you are exchanging.</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Standard RIs\"&nbsp;is incorrect. </em></strong>You cannot <strong>exchange</strong> Standard Reserved Instances, but you can <strong>modify</strong> them. You can modify attributes such as the Availability Zone, instance size (<strong>within the same instance family</strong>), and scope of your Reserved Instance (regional or zonal). Standard RIs provide the most significant discount (up to 72% off On-Demand) and are best suited for steady-state usage. </p><p><br></p><p><strong><em>\"Elastic RIs\" and \"Premium RIs\" are not valid RI types.</em></strong></p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/ec2/pricing/reserved-instances/\">https://aws.amazon.com/ec2/pricing/reserved-instances/</a></p><p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-convertible-exchange.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-convertible-exchange.html</a></p>",
                "answers": [
                    "<p>Standard RI</p>",
                    "<p>Convertible RI</p>",
                    "<p>Premium RI</p>",
                    "<p>Elastic RI</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Pricing Models",
            "question_plain": "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272370,
            "assessment_type": "multi-select",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>Which of the following is not a benefit of Amazon S3? (Choose TWO)</p>",
                "explanation": "<p><strong><em>\"Amazon S3 can run any type of application or backend system\"</em></strong> is not a benefit of S3 and thus is a correct answer. Amazon S3 is a storage service not a compute service.</p><p><strong><em>\"Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere\"</em></strong> is not a benefit of S3 and thus is a correct answer. Amazon S3 scales automatically to store and retrieve any amount of data from anywhere.</p><p><br></p><p>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Companies today need the ability to simply and securely collect, store, and analyze their data at a massive scale. Amazon S3 is object storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices.&nbsp; It’s a simple storage service that offers highly available, and infinitely scalable data storage infrastructure at very low costs. It is designed to deliver 99.999999999% durability, and stores data for millions of applications used by market leaders in every industry. S3 provides comprehensive security and compliance capabilities that meet even the most stringent regulatory requirements. It gives customers flexibility in the way they manage data for cost optimization, access control, and compliance. S3 provides query-in-place functionality, allowing you to run powerful analytics directly on your data at rest in S3. And Amazon S3 is the most supported cloud storage service available, with integration from the largest community of third-party solutions, systems integrator partners, and other AWS services.</p><p><br></p><p>&nbsp; &nbsp; &nbsp; &nbsp;Amazon S3 stores any number of objects, but each object does have a size limitation. Individual Amazon S3 objects can range in size from a minimum of 0 bytes to a maximum of 5 terabytes.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/s3/\">https://aws.amazon.com/s3/</a></p>",
                "answers": [
                    "<p>Amazon S3 provides unlimited storage for any type of data</p>",
                    "<p>Amazon S3 stores any number of objects, but with object size limits</p>",
                    "<p>Amazon S3 provides 99.999999999% (11 9’s) of data durability</p>",
                    "<p>Amazon S3 can run any type of application or backend system</p>",
                    "<p>Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere</p>"
                ]
            },
            "correct_response": [
                "d",
                "e"
            ],
            "section": "AWS Storage",
            "question_plain": "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272372,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;Each AWS Region is a separate geographic area. Each AWS Region has multiple, isolated locations known as Availability Zones. When designing your AWS Cloud architecture, you should make sure that your system will continue to run even if failures happen. You can achieve this by deploying your AWS resources in multiple Availability zones. Availability zones are isolated from each other; therefore, if one availability zone goes down, the other Availability Zones will still be up and running, and hence your application will be more fault-tolerant. In addition to availability zones, you can build a disaster recovery solution by deploying your AWS resources in other regions. If an entire region goes down, you will still have resources in another region able to continue to provide a solution. Finally, you can use the Elastic Load Balancing service to regularly perform health checks and distribute traffic only to healthy instances.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Multi-factor authentication\" is incorrect. </em></strong>AWS Multi-Factor Authentication (MFA) is a simple best practice that adds an extra layer of protection on top of your user name and password. Multi-Factor Authentication is much more related to security, not fault tolerance.</p><p><br></p><p><strong><em>\"Penetration testing\" is incorrect. </em></strong>Penetration testing is the practice of testing a network or web application to find security vulnerabilities that an attacker could exploit. Penetration testing is much more related to security, not fault tolerance.</p><p><br></p><p><strong><em>\"Vertical Scaling\" is incorrect. </em></strong>A \"vertically scalable\" system is constrained to running its processes on only one computer; in such systems, the only way to increase performance is to add more resources into one computer in the form of faster (or more) CPUs, memory, or storage. Vertical scaling may improve performance, but not fault-tolerance; because if this \"one computer\" fails, the whole system will fail.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html</a></p><p><a href=\"https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html\">https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html</a></p>",
                "answers": [
                    "<p>Availability Zones </p>",
                    "<p>Multi-factor authentication</p>",
                    "<p>Penetration testing</p>",
                    "<p>Elastic Load Balancing</p>",
                    "<p>Vertical Scaling</p>"
                ]
            },
            "correct_response": [
                "a",
                "d"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272374,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The only way to reduce latency for the US users is to provision new Amazon EC2 instances in a Region closer to or in the US, OR by using Amazon CloudFront to cache copies of the content in edge locations close to the US users. In both cases, user requests will travel a shorter distance over the network, and the performance will improve.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>“Building a new data center in the US and implementing a hybrid model” is incorrect. </em></strong>Building a new data center in the US is significantly expensive.</p><p><br></p><p><strong><em>“Applying the Amazon Connect latency-based routing policy” is incorrect. </em></strong>Latency-based routing is a feature of Amazon Route 53, not Amazon Connect. Amazon Connect is a cloud-based contact center service that helps businesses to deliver customer service at a low cost.</p><p><br></p><p><strong><em>“Registering a new US domain name to serve the users in the US” is incorrect.</em></strong> There is no relation between domain names and latency. Domain names are global and not tied to a specific region.</p><p>A Domain name (example.com) is just a way to direct end-users to a specific website\\application instead of using IP addresses (116.203.247.177, for example), which are very difficult to remember.</p><p><br></p><p><strong><em>References:</em></strong></p><p><a href=\"https://docs.aws.amazon.com/wellarchitected/latest/framework/wellarchitected-framework.pdf\">https://docs.aws.amazon.com/wellarchitected/latest/framework/wellarchitected-framework.pdf</a></p>",
                "answers": [
                    "<p>Building a new data center in the US and implementing a hybrid model</p>",
                    "<p>Deploying new Amazon EC2 instances in a Region located in the US</p>",
                    "<p>Applying the Amazon Connect latency-based routing policy</p>",
                    "<p>Registering a new US domain name to serve the users in the US</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Global Infrastructure",
            "question_plain": "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272378,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Amazon S3 Glacier Deep Archive is an extremely low-cost storage service that provides secure, durable, and flexible storage for long-term data backup and archival. With Amazon S3 Glacier Deep Archive, customers can reliably store their data for as little as $1 per terabyte per month, a significant savings compared to on-premises solutions. Amazon Glacier enables customers to offload the administrative burdens of operating and scaling storage to AWS, so that they don’t have to worry about capacity planning, hardware provisioning, data replication, hardware failure detection and repair, or time-consuming hardware migrations.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"S3 Intelligent-Tiering\"&nbsp;is incorrect. </em></strong>S3 Intelligent-Tiering is ideal for data with unknown or changing access patterns.</p><p>S3 Intelligent-Tiering is the first cloud object storage class that delivers automatic cost savings by moving data between two access tiers - frequent access and infrequent access - when access patterns change.</p><p><br></p><p><strong><em>\"AWS Marketplace\" is incorrect.</em></strong> AWS Marketplace is a curated digital catalog that makes it easy for customers to find, buy, deploy, and manage third-party software and services that customers need to build solutions and run their businesses. AWS Marketplace includes thousands of software listings from popular categories such as security, networking, storage, machine learning, business intelligence, database, and DevOps. AWS Marketplace also simplifies software licensing and procurement with flexible pricing options and multiple deployment methods. Customers can quickly launch pre-configured software with just a few clicks, and choose software solutions in AMI and SaaS formats, as well as other formats. Flexible pricing options include free trial, hourly, monthly, annual, multi-year, and BYOL, and get billed from one source, AWS.</p><p><br></p><p><strong><em>\"Amazon EBS\" is incorrect. </em></strong>Amazon EBS is a block level storage that provides storage volumes for use with Amazon EC2 and Amazon RDS. Amazon EBS is not a cost-effective choice here.</p><p><br></p><p><strong>References:&nbsp;</strong></p><p><a href=\"https://aws.amazon.com/glacier/\">https://aws.amazon.com/glacier/</a></p>",
                "answers": [
                    "<p>S3 Intelligent-Tiering</p>",
                    "<p>AWS Marketplace</p>",
                    "<p>Amazon S3 Glacier Deep Archive</p>",
                    "<p>Amazon EBS </p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Storage",
            "question_plain": "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272382,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Before cloud computing, you had to overprovision infrastructure to ensure you had enough capacity to handle your business operations at the peak level of activity. Now, you can provision the amount of resources that you actually need, knowing you can instantly scale up or down with the needs of your business. This reduces costs and improves your ability to meet your users’ demands.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The concept of Elasticity involves the ability of a service to scale its resources out or in (up or down) based on changes in demand. For example, Amazon EC2 Autoscaling can help automate the process of adding or removing Amazon EC2 instances as demand increases or decreases.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"By reducing interdependencies between application components wherever possible\" is incorrect.</em></strong> Reducing interdependencies between application components is much more related to the concept of “Loose Coupling”. Loose coupling is an approach that involves interconnecting the components in a system or network so that those components depend on each other to the least extent practical. Engineers should architect their system or application such that failure in one component does not negatively affect other components. Loosely coupled components make the system resilient and allow it to recover gracefully from failure.</p><br></p><p><strong><em>\"By automatically scaling your on-premises resources based on changes in demand\" is incorrect.</em></strong> It is not possible to scale on-premises resources automatically. When deploying on-premises, you have to guess on your infrastructure capacity needs.</p><p><br></p><p><strong><em>\"By automatically scaling your AWS resources using an Elastic Load Balancer\" is incorrect.</em></strong>&nbsp;Elastic Load Balancers do not scale resources. Elastic Load Balancers distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/ec2/autoscaling/\">https://aws.amazon.com/ec2/autoscaling/</a></p><p><a href=\"https://wa.aws.amazon.com/wat.concept.elasticity.en.html\">https://wa.aws.amazon.com/wat.concept.elasticity.en.html</a></p>",
                "answers": [
                    "<p>By reducing interdependencies between application components wherever possible</p>",
                    "<p>By automatically scaling your on-premises resources based on changes in demand</p>",
                    "<p>By automatically provisioning the required AWS resources based on changes in demand</p>",
                    "<p>By automatically scaling your AWS resources using an Elastic Load Balancer</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272384,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It is a fully managed cloud database and supports both document and key-value store models. Its flexible data model, reliable performance, and automatic scaling of throughput capacity, makes it a great fit for mobile, web, gaming, ad tech, IoT, and many other applications.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon Elastic Block Store\" is incorrect. </em></strong>Amazon Elastic Block Store (Amazon EBS) is a storage service, NOT a database service.</p><p><br></p><p><strong><em>\"Amazon Aurora\" is incorrect. </em></strong>Amazon Aurora doesn’t support NoSQL databases. Amazon Aurora is a MySQL and PostgreSQL-compatible relational database.</p><p><br></p><p><strong><em>\"Amazon Redshift\" is incorrect.</em></strong> Amazon Redshift doesn’t support non-relational data. Amazon Redshift is a fully managed data warehouse service that allows you to run complex analytic queries against petabytes of structured data using standard SQL and your existing Business Intelligence (BI) tools.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/dynamodb/\">https://aws.amazon.com/dynamodb/</a></p>",
                "answers": [
                    "<p>Amazon Elastic Block Store</p>",
                    "<p>Amazon Aurora </p>",
                    "<p>Amazon Redshift</p>",
                    "<p>Amazon DynamoDB </p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Database",
            "question_plain": "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272392,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?</p>",
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AWS&nbsp;Auto Scaling is the feature that automates the process of adding/removing server capacity (based on demand). Autoscaling allows you to reduce your costs by automatically turning off resources that aren’t in use. On the other hand, Autoscaling ensures that your application runs effectively by provisioning more server capacity if required.</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"AWS Budgets\"&nbsp;is incorrect. </em></strong>AWS Budgets gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.</p><p><br></p><p><strong><em>\"AWS Elastic Load Balancer\" is incorrect. </em></strong>AWS Elastic Load Balancer (ELB) is a service that distributes the incoming application traffic to multiple targets that you define.</p><p><br></p><p><strong><em>\"AWS Cost Explorer\" is incorrect. </em></strong>AWS Cost Explorer provides an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/autoscaling/\">https://aws.amazon.com/autoscaling/</a></p>",
                "answers": [
                    "<p>AWS Budgets</p>",
                    "<p>AWS Elastic Load Balancer </p>",
                    "<p>AWS Auto Scaling </p>",
                    "<p>AWS Cost Explorer</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Management & Governance",
            "question_plain": "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272394,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?</p>",
                "explanation": "<p> &nbsp; &nbsp; &nbsp; &nbsp; Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizable capacity while automating time-consuming administration tasks such as hardware provisioning, operating system maintenance, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need. </p><p> &nbsp; &nbsp; &nbsp; &nbsp; Amazon RDS can be used to host Amazon Aurora, PostgreSQL, <strong>MySQL</strong>, MariaDB, Oracle, and Microsoft SQL Server databases.</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon Redshift\" is incorrect.</em></strong> Amazon Redshift is not a MySQL database service. Amazon Redshift is a fully managed data warehouse service that makes it simple and cost-effective to analyze all your data using standard SQL and your existing Business Intelligence (BI) tools.</p><p><br></p><p><strong><em>\"Amazon DynamoDB\" is incorrect.</em></strong> Amazon DynamoDB is not a MySQL database service. Amazon DynamoDB is a fully managed NoSQL database service.</p><p><br></p><p><strong><em>\"Amazon CloudWatch\" is incorrect. </em></strong>Amazon CloudWatch is not a database service. Amazon CloudWatch is a monitoring service that gives you complete visibility of your cloud resources and applications</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/rds/\">https://aws.amazon.com/rds/</a></p>",
                "answers": [
                    "<p>Amazon Redshift </p>",
                    "<p>Amazon RDS </p>",
                    "<p>Amazon DynamoDB </p>",
                    "<p>Amazon CloudWatch </p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Database",
            "question_plain": "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272404,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; AWS customers are allowed to carry out security assessments and penetration tests against their AWS infrastructure without prior approval for 15 services (no need to memorize these services):</p><p>1- Amazon EC2 instances, WAF, NAT Gateways, and Elastic Load Balancers.</p><p>2- Amazon RDS.</p><p>3- Amazon CloudFront.</p><p>4- Amazon Aurora.</p><p>5- Amazon API Gateways.</p><p>6- AWS Lambda and Lambda Edge functions.</p><p>7- Amazon Lightsail resources.</p><p>8- Amazon Elastic Beanstalk environments.</p><p>9- AWS AppSync</p><p>10- Amazon Elastic Container Service</p><p>11- AWS Fargate</p><p>12- Amazon Elasticsearch</p><p>13- Amazon FSx</p><p>14- Amazon Transit Gateway</p><p>15- S3 hosted applications (targeting S3 buckets is strictly prohibited) </p><p><br></p><p><strong><em>The other options are incorrect.</em></strong></p><p><br></p><p><strong><em>\"Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure\" is incorrect. </em></strong>The AWS customers are responsible for performing penetration tests against their AWS infrastructure.</p><p><br></p><p><strong><em>\"Penetration testing is not allowed in AWS\" is incorrect. </em></strong>AWS customers are allowed to perform penetration tests against their AWS infrastructure, but they must ensure that their activities are aligned with AWS policies.</p><p><br></p><p><strong><em>\"The AWS customers are only allowed to perform penetration testing on services managed by AWS\" is incorrect.</em></strong> AWS customers are allowed to perform penetration testing on both AWS-managed services such as Amazon RDS and customer-managed services such as Amazon EC2.</p><p><br></p><p><strong>Additional information:</strong></p><p><br></p><p><strong>The difference between AWS-managed services and customer-managed services:</strong></p><p><br></p><p>For AWS-managed services such as Amazon RDS and Amazon DynamoDB, AWS is responsible for performing all the operations needed to keep the service running.</p><p>The AWS-managed services automate time-consuming administration tasks such as hardware provisioning, software setup, patching and backups. The AWS-managed services free customers to focus on their applications so they can give them the fast performance, high availability, security and compatibility they need.</p><p>Examples of AWS-managed services include Amazon RDS, Amazon DynamoDB, Amazon Redshift, Amazon CloudFront, Amazon CloudSearch, and several other services.</p><p>On the other hand, customer-managed services are services that are completely managed by the customer. For example, a service such as Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and, as such, requires the customer to perform all of the necessary security configuration and management tasks. Customers that deploy an Amazon EC2 instance are responsible for the management of the guest operating system (including updates and security patches), any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance.</p><p>Examples of customer-managed services include Amazon Elastic Compute Cloud (Amazon EC2), Amazon Virtual Private Cloud (Amazon VPC), and AWS Identity And Access Management (AWS IAM).</p><p><br></p><p><strong>References:&nbsp;</strong></p><p><a href=\"https://aws.amazon.com/security/penetration-testing/\">https://aws.amazon.com/security/penetration-testing/</a></p>",
                "answers": [
                    "<p>Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure</p>",
                    "<p>Penetration testing is not allowed in AWS</p>",
                    "<p>Penetration testing can be performed by the customer on their own instances without prior authorization from AWS</p>",
                    "<p>The AWS customers are only allowed to perform penetration testing on services managed by AWS</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272308,
            "assessment_type": "multi-select",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>What are the benefits of having infrastructure hosted in AWS? (Choose TWO)</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;All of the physical security are taken care of for you. Amazon data centers are surrounded by three physical layers of security. “Nothing can go in or out without setting off an alarm”. It’s important to keep bad guys out, but equally important to keep the data in which is why Amazon monitors incoming gear, tracking every disk that enters the facility. And “if it breaks we don’t return the disk for warranty. The only way a disk leaves our data center is when it’s confetti.”</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Most (not all) data and network security are taken care of for you. When we talk about the data/network security, AWS has a “shared responsibility model” where AWS and the customer share the responsibility of securing them. For example, the customer is responsible for creating rules to secure their network traffic using the security groups and is also responsible for protecting data with encryption.</p><p><br></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\"Increasing speed and agility\" is also a correct answer<strong><em> </em></strong>because<strong><em> </em></strong>in a cloud computing environment, new IT resources are only a click away, which means it requires less time to make those resources available to developers - from weeks to just minutes. This results in a dramatic increase in agility for the organization, since the cost and time it takes to experiment and develop is significantly lower.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Gaining complete control over the physical infrastructure\" is incorrect.</em></strong> The Physical infrastructure is a responsibility of AWS, not the customer.</p><p><br></p><p><strong><em>\"Operating applications on behalf of customers\"&nbsp;is incorrect.</em></strong> AWS customers are responsible for building and operating their applications.</p><p><br></p><p><strong><em>\"There is no need to worry about security\"&nbsp;is incorrect. </em></strong>As mentioned above, security is a shared responsibility between AWS and the customer. For example, the customer has to manage who can access and use AWS resources using the IAM service.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/six-advantages-of-cloud-computing.html\">https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/six-advantages-of-cloud-computing.html</a></p>",
                "answers": [
                    "<p>All of the physical security and most of the data/network security are taken care of for you</p>",
                    "<p>Gaining complete control over the physical infrastructure</p>",
                    "<p>Increasing speed and agility</p>",
                    "<p>Operating applications on behalf of customers</p>",
                    "<p>There is no need to worry about security</p>"
                ]
            },
            "correct_response": [
                "a",
                "c"
            ],
            "section": "Cloud Computing Benefits",
            "question_plain": "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272312,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>Which of the following does NOT belong to the AWS Cloud Computing models?</p>",
                "explanation": "<p>There are three Cloud Computing Models:&nbsp;</p><p>1) Infrastructure as a Service (IaaS) - Infrastructure as a Service (IaaS) contains the basic building blocks for cloud IT and typically provide access to networking features, computers (virtual or on dedicated hardware), and data storage space. IaaS provides you with the highest level of flexibility and management control over your IT resources and is most similar to existing IT resources that many IT departments and developers are familiar with today.&nbsp;&nbsp;&nbsp;</p><p>2) Platform as a Service (PaaS) - Platform as a Service (PaaS) removes the need for your organization to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications. This helps you be more efficient as you don’t need to worry about resource procurement, capacity planning, software maintenance, patching, or any of the other undifferentiated heavy lifting involved in running your application.&nbsp;&nbsp;&nbsp;</p><p>3) Software as a Service (SaaS) - Software as a Service (SaaS) provides you with a completed product that is run and managed by the service provider. In most cases, people referring to Software as a Service are referring to end-user applications. With a SaaS offering you do not have to think about how the service is maintained or how the underlying infrastructure is managed; you only need to think about how you will use that particular piece of software. A common example of a SaaS application is web-based email which you can use to send and receive email without having to manage feature additions to the email product or maintain the servers and operating systems that the email program is running on.&nbsp;</p><p><br></p><p><strong><em>Networking services are provided as part of the IaaS model.</em></strong></p><p><br></p><p><strong>References:&nbsp;</strong></p><p><a href=\"https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/types-of-cloud-computing.html\">https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/types-of-cloud-computing.html</a></p>",
                "answers": [
                    "<p>Infrastructure as a Service (IaaS) </p>",
                    "<p>Networking as a Service (NaaS) </p>",
                    "<p>Platform as a Service (PaaS) </p>",
                    "<p>Software as a Service (SaaS) </p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "Cloud Computing Models",
            "question_plain": "Which of the following does NOT belong to the AWS Cloud Computing models?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272408,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS&nbsp;CLI)?</p>",
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Access keys consist of an access key ID and secret access key, which are used to sign programmatic requests to AWS using the CLI or the SDK.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html\">https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html</a></p>",
                "answers": [
                    "<p>User name and password</p>",
                    "<p>Secret token</p>",
                    "<p>Access keys</p>",
                    "<p>User ID</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Security, Identity, & Compliance",
            "question_plain": "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS&nbsp;CLI)?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272412,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Which S3 storage class is best for data with unpredictable access patterns?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;The S3 Intelligent-Tiering storage class is designed to optimize costs by automatically moving data to the most cost-effective access tier, without performance impact or operational overhead. It works by storing objects in two access tiers: one tier that is optimized for frequent access and another lower-cost tier that is optimized for infrequent access. For a small monthly monitoring and automation fee per object, Amazon S3 monitors access patterns of the objects in S3 Intelligent-Tiering, and moves the ones that have not been accessed for 30 consecutive days to the infrequent access tier. If an object in the infrequent access tier is accessed, it is automatically moved back to the frequent access tier. There are no retrieval fees when using the S3 Intelligent-Tiering storage class, and no additional tiering fees when objects are moved between access tiers. It is the ideal storage class for long-lived data with access patterns that are unknown or unpredictable.</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon S3 Standard\" is incorrect. </em></strong>S3 Standard offers high durability, availability, and performance object storage for frequently accessed data.</p><p><br></p><p><strong><em>\"Amazon S3 Standard-Infrequent Access\" is incorrect.</em></strong> Amazon S3 Standard-Infrequent Access (S3 Standard-IA) is for data that is accessed less frequently, but requires rapid access when needed.</p><p><br></p><p><strong><em>\"Amazon S3 Glacier Flexible Retrieval\" is incorrect. </em></strong>Amazon S3 Glacier Flexible Retrieval (Formerly S3 Glacier) is a low-cost storage class for archive data that is accessed 1 - 2 times per year.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/s3/storage-classes/\">https://aws.amazon.com/s3/storage-classes/</a></p>",
                "answers": [
                    "<p>Amazon S3 Intelligent-Tiering</p>",
                    "<p>Amazon S3 Standard</p>",
                    "<p>Amazon S3 Standard-Infrequent Access</p>",
                    "<p>Amazon S3 Glacier Flexible Retrieval</p>"
                ]
            },
            "correct_response": [
                "a"
            ],
            "section": "AWS Storage",
            "question_plain": "Which S3 storage class is best for data with unpredictable access patterns?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272416,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;In the traditional data center-based model of IT, once infrastructure is deployed, it typically runs whether it is needed or not, and all the capacity is paid for, regardless of how much it gets used. In the cloud, resources are elastic, meaning they can instantly grow ( to maintain performance) or shrink ( to reduce costs).</p><p><br></p><p><strong><em>The other options are incorrect.</em></strong></p><p><br></p><p><strong><em>\"Adopt monolithic architecture\" is incorrect. </em></strong>AWS recommends adopting microservices architecture, not monolithic architecture. With monolithic architectures, application components are <strong>tightly coupled</strong> and run as a single service. With a microservices architecture, an application is built as <strong>loosely coupled</strong> components.</p><p>Benefits of microservices architecture include:</p><p>1- Microservices allow each service to be independently scaled to meet demand for the application feature it supports.</p><p>2- Teams are empowered to work more independently and more quickly.</p><p>3- Microservices enable continuous integration and continuous delivery, making it easy to try out new ideas and to roll back if something doesn’t work.</p><p>4- Service independence increases an application’s resistance to failure. In a monolithic architecture, if a single component fails, it can cause the entire application to fail. With microservices, applications handle total service failure by degrading functionality and not crashing the entire application.</p><p><br></p><p><strong><em>\"Parallelize tasks\" is incorrect. </em></strong>An<strong><em> </em></strong>example of parallelization is when you use a load balancer to distribute the incoming requests across multiple asynchronous instances or when you use the AWS multipart upload to upload large objects in parts. Adjusting capacity up or down based on demand defines the AWS Cloud elasticity not the parallelization.</p><p><br></p><p><strong><em>\"Build Security in every layer\" is incorrect. </em></strong>This option is related to security.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://wa.aws.amazon.com/wat.concept.elasticity.en.html\">https://wa.aws.amazon.com/wat.concept.elasticity.en.html</a></p><p><a href=\"http://aws001.s3.amazonaws.com/trailhead/TrailHead_ArchitectingInTheCloud.pdf\">http://aws001.s3.amazonaws.com/trailhead/TrailHead_ArchitectingInTheCloud.pdf</a></p>",
                "answers": [
                    "<p>Adopt monolithic architecture</p>",
                    "<p>Parallelize tasks</p>",
                    "<p>Build security in every layer</p>",
                    "<p>Implement elasticity</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272436,
            "assessment_type": "multi-select",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>What does AWS Snowball provide? (Choose TWO)</p>",
              	"explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; AWS Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of the AWS cloud. Using Snowball addresses common challenges with large-scale data transfers, including high network costs, long transfer times, and security concerns. AWS&nbsp;Customers use Snowball to migrate analytics data, genomics data, video libraries, image repositories, and backups. Transferring data with Snowball is simple, fast, secure, and can cost as little as one-fifth the cost of using high-speed internet.</p><p>&nbsp; &nbsp; &nbsp; &nbsp;Additionally, With AWS Snowball, you can access the compute power of the AWS Cloud locally and cost-effectively in places where connecting to the internet might not be an option. AWS Snowball is a perfect choice if you need to run computing in rugged, austere, mobile, or disconnected (or intermittently connected) environments.</p><p>&nbsp; &nbsp; &nbsp; &nbsp;With AWS Snowball, you have the choice of two devices, <strong>Snowball Edge</strong> <strong>Compute Optimized</strong> with more computing capabilities, suited for higher performance workloads, or <strong>Snowball Edge</strong> <strong>Storage Optimized</strong> with more storage, which is suited for large-scale data migrations and capacity-oriented workloads.</p><p>&nbsp; &nbsp; &nbsp; &nbsp;Snowball Edge Storage Optimized is the optimal choice if you need to securely and quickly transfer dozens of terabytes to petabytes of data to AWS. It is also a good fit for running general purpose analysis such as IoT data aggregation and transformation. </p><p>&nbsp; &nbsp; &nbsp; &nbsp;Snowball Edge Compute Optimized is the optimal choice if you need powerful compute and high-speed storage for data processing. Examples include high-resolution video processing, advanced IoT data analytics, and real-time optimization of machine learning models.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"A catalog of third-party software solutions that customers need to build solutions and run their businesses\" is incorrect. </em></strong>AWS Marketplace is the service that provides this catalog. AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS. AWS Marketplace includes software listings from categories such as security, networking, storage, machine learning, business intelligence, database, and DevOps.</p><p><br></p><p><strong><em>\"A hybrid cloud storage between on-premises environments and the AWS Cloud\" is incorrect. </em></strong> is the service that enables your on-premises applications to seamlessly use AWS cloud storage.</p><p><br></p><p><strong><em>\"An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS\" is incorrect. </em></strong>AWS Snowmobile is the exabyte-scale data migration service that allows you to move very large datasets from on-premises to AWS.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/snowball/\">https://aws.amazon.com/snowball/</a></p>",
                "answers": [
                    "<p>A catalog of third-party software solutions that customers need to build solutions and run their businesses</p>",
                    "<p>Secure transfer of large amounts of data into and out of the AWS Cloud</p>",
                    "<p>A hybrid cloud storage between on-premises environments and the AWS Cloud</p>",
                    "<p>An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS</p>",
                    "<p>Built-in computing capabilities that allow customers to process data locally</p>"
                ]
            },
            "correct_response": [
                "b",
                "e"
            ],
            "section": "AWS Migration & Transfer",
            "question_plain": "What does AWS Snowball provide? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272418,
            "assessment_type": "multi-select",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>Select TWO examples of the AWS shared controls.</p>",
                "explanation": "<p>&nbsp;&nbsp;&nbsp; Shared Controls are controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives. In a shared control, AWS provides the requirements for the infrastructure and the customer must provide their own control implementation within their use of AWS services.</p><p>Examples include:</p><p>** Patch Management – AWS is responsible for patching the underlying hosts and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications.</p><p>** Configuration Management – AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.</p><p>** Awareness &amp; Training - AWS trains AWS employees, but a customer must train their own employees.</p><p><br></p><p><strong>Additional information:</strong></p><p>A computer on which AWS runs one or more virtual machines is called a <strong>host</strong> machine, and each virtual machine is called a <strong>guest</strong> machine. AWS drives the concept of virtualization by allowing the physical host machine to operate multiple virtual machines as guests (for multiple customers) to help maximize the effective use of computing resources such as memory, network bandwidth and CPU cycles.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Data Center operations\" is incorrect. </em></strong>Data Center operations are an AWS responsibility.</p><p><br></p><p><strong><em>\"VPC Management\" and \"IAM Management\" are incorrect.</em></strong> VPC and IAM management are customer responsibilities.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>",
                "answers": [
                    "<p>Data Center operations</p>",
                    "<p>Patch Management</p>",
                    "<p>Configuration Management</p>",
                    "<p>VPC Management</p>",
                    "<p>IAM Management</p>"
                ]
            },
            "correct_response": [
                "b",
                "c"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "Select TWO examples of the AWS shared controls.",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272420,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?</p>",
                "explanation": "<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Amazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory data store or cache in the cloud. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; The primary purpose of an in-memory data store is to provide ultrafast (submillisecond latency) and inexpensive access to copies of data. Querying a database is always slower and more expensive than locating a copy of that data in a cache. Some database queries are especially expensive to perform. An example is queries that involve joins across multiple tables or queries with intensive calculations. By caching (storing) such query results, you pay the price of the query only once. Then you can quickly retrieve the data multiple times without having to re-execute the query.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"AWS Storage Gateway\" is incorrect. </em></strong>AWS Storage Gateway is not a caching service, it is a hybrid storage service that enables your on-premises applications to seamlessly use AWS cloud storage.</p><p><br></p><p><strong><em>\"Amazon EBS volume\" is incorrect.</em></strong> An Amazon EBS volume is a durable, block-level storage device that you can attach to a single EC2 instance. You can use EBS volumes as primary storage for data that requires frequent updates, such as the system drive for an instance or storage for a database application. You can also use them for throughput-intensive applications that perform continuous disk scans.</p><p><br></p><p><strong><em>\"AWS OpsWorks\" is incorrect.</em></strong> AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. Chef and Puppet are automation platforms that allow you to use code to automate the configurations of your servers. OpsWorks lets you use Chef and Puppet to automate how servers are configured, deployed, and managed across your Amazon EC2 instances or on-premises compute environments.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/elasticache/\">https://aws.amazon.com/elasticache/</a></p>",
                "answers": [
                    "<p>AWS Storage Gateway </p>",
                    "<p>Amazon ElastiCache </p>",
                    "<p>Amazon EBS volume</p>",
                    "<p>AWS OpsWorks</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Database",
            "question_plain": "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272424,
            "assessment_type": "multi-select",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The customer is responsible for securing their network by configuring Security Groups, Network Access control Lists (Network ACLs), and Routing Tables. The customer is also responsible for setting a <strong>password policy</strong> on their AWS account that specifies the complexity and mandatory rotation periods for their IAM users' passwords.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Disk disposal\" is incorrect. </em></strong>Disk disposal ( Storage Device Decommissioning): When a storage device has reached the end of its useful life, AWS procedures include a decommissioning process that is designed to prevent customer data from being exposed to unauthorized individuals. All decommissioned magnetic storage devices are degaussed and physically destroyed in accordance with industry-standard practices.</p><p><br></p><p><strong><em>\"Controlling physical access to compute resources\" is incorrect. </em></strong>AWS is responsible for controlling physical access to the data centers.</p><p><br></p><p><strong><em>\"Patching the Network infrastructure\" is incorrect. </em></strong>Patching the underlying infrastructure is the responsibility of AWS. The customer is responsible for patching the Operating System of their EC2 instances and any software installed on these instances.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>",
                "answers": [
                    "<p>Disk disposal </p>",
                    "<p>Controlling physical access to compute resources</p>",
                    "<p>Configuring network access rules</p>",
                    "<p>Setting password complexity rules</p>",
                    "<p>Patching the Network infrastructure</p>"
                ]
            },
            "correct_response": [
                "c",
                "d"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272430,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>What should you do in order to keep the data on EBS volumes safe? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp;Creating snapshots of EBS Volumes can help ensure that you have a backup of your EBS volumes just in case any issues arise. You can use <strong>Amazon Data Lifecycle Manager (Amazon DLM)</strong> to automate the <strong>creation, retention, and deletion</strong> of EBS snapshots. </p><p>Automating snapshot management with Amazon DLM helps you to:</p><p>- Protect valuable data by enforcing a regular backup schedule.</p><p>- Retain backups as required by auditors or internal compliance.</p><p>- Reduce storage costs by deleting outdated backups.</p><p>- Create disaster recovery backup policies that back up data to isolated accounts.</p><p><br></p><p>&nbsp; &nbsp; &nbsp; &nbsp;<strong>Amazon EBS encryption</strong> offers a straight-forward encryption solution for your EBS resources that doesn't require you to build, maintain, and secure your own key management infrastructure. Encryption operations occur on the servers that host EC2 instances, ensuring the security of both data-at-rest and data-in-transit between an instance and its attached EBS storage.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Prevent any unauthorized access to AWS data centers\" is incorrect. </em></strong>It is the responsibility of AWS to control and restrict access to its data centers.</p><p><br></p><p><strong><em>\"Store a backup daily in an external drive\" is incorrect. </em></strong>To make a backup of your EBS volumes you should use the Snapshot feature. Snapshots can provide a Copy-on-Write Consistency (reflect the exact image of the volume at the point-in-time of the snapshot). </p><p><br></p><p><strong><em>\"Regularly update firmware on EBS devices\" is incorrect. </em></strong>It is the responsibility of AWS to regularly update firmware on hardware devices.</p><p><br></p><p><strong>Additional information:</strong></p><p>EBS Snapshots are incremental backups, which means that only the blocks on the device that have changed after your last snapshot are saved. This minimizes the time required to create the snapshot and saves on storage costs by not duplicating data.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html</a></p><p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html</a></p>",
                "answers": [
                    "<p>Prevent any unauthorized access to AWS data centers</p>",
                    "<p>Create EBS snapshots </p>",
                    "<p>Store a backup daily in an external drive</p>",
                    "<p>Ensure that EBS data is encrypted at rest</p>",
                    "<p>Regularly update firmware on EBS devices</p>"
                ]
            },
            "correct_response": [
                "b",
                "d"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55272432,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Under the shared responsibility model, which of the following is the responsibility of AWS?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Under the shared responsibility model, AWS is responsible for the hardware and software that run AWS services. This includes patching the infrastructure software and configuring infrastructure devices. As a customer, you are responsible for implementing best practices for data encryption, patching guest operating system and applications, identity and access management, and network &amp; firewall configurations.</p><p><br></p><p><strong>The other options are incorrect.</strong></p><p><br></p><p><strong><em>\"Filtering traffic with Security Groups\" is incorrect. </em></strong>The AWS Customer is responsible for all network and firewall configurations, including the configuration of Security Groups, Network Access Control Lists (Network ACLs), and Routing tables.</p><p><br></p><p><strong><em>\"Client-side encryption\" and \"Server-side encryption\" are incorrect.</em></strong> According to the <a href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">AWS Shared Responsibility Model</a>, AWS Customers are responsible for Client-side encryption and Server-side encryption. However, for some AWS fully managed services such as Amazon DynamoDB and Amazon S3, server-side encryption is automatically done by AWS. Amazon DynamoDB transparently encrypts and decrypts all tables when they are written to disk. There is no option to enable or disable Server-side encryption in Amazon DynamoDB. Also, for Amazon S3, starting January 5, 2023, all new object uploads to Amazon S3 will be automatically encrypted at no additional cost.</p><p>Additional information:</p><p>AWS offers a lot of services and features that help AWS customers protect their data in the cloud. Customers can protect their data by encrypting it in transit and at rest. They can use CloudTrail to log API and user activity, including who, what, and from where calls were made. They can also use the AWS Identity and Access Management (IAM) to control who can access or edit their data.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>",
                "answers": [
                    "<p>Filtering traffic with Security Groups</p>",
                    "<p>Client-side encryption</p>",
                    "<p>Configuring infrastructure devices</p>",
                    "<p>Server-side encryption</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "Under the shared responsibility model, which of the following is the responsibility of AWS?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962892,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p> What is the AWS serverless service that allows you to run your applications without any administrative burden?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "answers": [
                    "<p>Amazon EC2 instances</p>",
                    "<p>AWS Lambda</p>",
                    "<p>Amazon LightSail</p>",
                    "<p>Amazon RDS instances </p>"
                ],
                "relatedLectureIds": "",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; AWS Lambda is an AWS-managed compute service. It lets you run code without provisioning or managing servers. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code, and Lambda takes care of everything required to run and scale your code with high availability. You pay only for the compute time you consume - there is no charge when your code is not running.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon EC2 instances\" is incorrect.</em></strong> Amazon Elastic Compute Cloud (Amazon EC2) is a server-based compute service. Amazon EC2 is categorized as Infrastructure as a Service (IaaS) and, as such, requires the customer to perform all of the necessary configurations and management tasks.</p><p><br></p><p><strong><em>\"Amazon Lightsail\" is incorrect. </em></strong>Amazon Lightsail provides a low-cost Virtual Private Server (VPS) in the cloud. Lightsail plans include everything you need to jumpstart your project – virtual machines, containers, databases, CDN, load balancers, SSD-based storage, DNS management, etc. – for a low, predictable monthly price.</p><p><br></p><p><strong><em>\"Amazon RDS instances\" is incorrect. </em></strong>Amazon RDS is a server-based database service that makes it easy to run a relational database in the cloud.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/lambda/\">https://aws.amazon.com/lambda/</a></p>"
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Compute",
            "question_plain": "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962896,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Which of the following describes the payment model that AWS makes available for customers who consistently use Amazon EC2 over a 3-year term to reduce their total computing costs?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; For Customers who can commit to using EC2 over a one or 3-year term, it is better to use Amazon EC2 Reserved Instances or AWS Savings Plans. Reserved Instances and AWS Savings Plans provide a significant discount (up to 72%) compared to On-Demand instance pricing.</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Pay as you go\" is incorrect. </em></strong>Reserved Instances and AWS Savings Plans provide a significant discount (up to 72%) compared to On-Demand (pay-as-you-go) instance pricing.</p><p><br></p><p><strong><em>\"Pay less as AWS grows\"&nbsp;is incorrect.</em></strong> Pay less as AWS grows refers to the discounts that you get over time as AWS grows. This sometimes called “AWS Economies of Scale”. For example, AWS has reduced the per GB storage price of S3 by 80% since the service was first introduced in 2006.</p><p><br></p><p><strong><em>\"Pay less by using more\" is incorrect.</em></strong> “Pay less by using more” means that you get volume based discounts and as your usage increases.&nbsp; For services such as S3, pricing is tiered, meaning the more you use, the less you pay per GB.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/pricing/\">https://aws.amazon.com/pricing/</a></p>",
                "answers": [
                    "<p>Pay as you go</p>",
                    "<p>Save when you commit</p>",
                    "<p>Pay less as AWS grows</p>",
                    "<p>Pay less by using more</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Pricing Models",
            "question_plain": "Which of the following describes the payment model that AWS makes available for customers who consistently use Amazon EC2 over a 3-year term to reduce their total computing costs?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962898,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>These are things that traditional web hosting cannot provide:</p><p>**High-availability (eliminating single points of failure): A system is highly available when it can withstand the failure of an individual component or multiple components, such as hard disks, servers, and network links. The best way to understand and avoid the single point of failure is to begin by making a list of all major points of your architecture. You need to break the points down and understand them further. Then, review each of these points and think what would happen if any of these failed. AWS gives you the opportunity to automate recovery and reduce disruption at every layer of your architecture. </p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Additionally, AWS provides fully managed services that enable customers to offload the administrative burdens of operating and scaling the infrastructure to AWS so that they don’t have to worry about high availability or Single Point of Failures. For example, AWS Lambda and DynamoDB are serverless services; there are no servers to provision, patch, or manage and no software to install, maintain, or operate. Availability and fault tolerance are built-in, eliminating the need to architect your applications for these capabilities.</p><p><br></p><p>**Distributed infrastructure: The AWS Cloud operates in over 75 Availability Zones within over 20 geographic Regions around the world, with announced plans for more Availability Zones and Regions, allowing you to reduce latency to users from all around the world.</p><p><br></p><p>**On-demand infrastructure for scaling applications or tasks: AWS allows you to provision the required resources for your application in minutes and also allows you to stop them when you don’t need them.</p><p><br></p><p>**Cost savings: You don't have to run your own data center for internal or private servers, so your IT department doesn't have to make bulk purchases of servers which may never get used, or may be inadequate. The “pay as you go” model from AWS allows you to pay only for what you use and the ability to scale down to avoid over-spending. With AWS you don't have to pay an entire IT department to maintain that hardware -- you don't even have to pay an accountant to figure out how much hardware you can afford or how much you need to purchase.</p><p><br></p><p><strong><em>The other options are incorrect. </em></strong>Both cloud computing and traditional data centers can provide virtualized compute resources, dedicated hosting and reserved Compute capacity.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/what-is-cloud-computing/\">https://aws.amazon.com/what-is-cloud-computing/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Eliminating Single Points of Failure (SPOFs)</p>",
                    "<p>Virtualized compute resources</p>",
                    "<p>Dedicated hosting</p>",
                    "<p>Distributed infrastructure</p>",
                    "<p>Reserved Compute capacity</p>"
                ]
            },
            "correct_response": [
                "a",
                "d"
            ],
            "section": "Cloud Computing Benefits",
            "question_plain": "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962902,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>What is the AWS service\\feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket. Transfer Acceleration takes advantage of Amazon CloudFront’s globally distributed edge locations. As the data arrives at an edge location, data is routed to Amazon S3 over an optimized network path.</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"AWS&nbsp;Snowball\" is incorrect.</em></strong> AWS&nbsp;Snowball is a petabyte-scale data transport solution that uses devices designed to be secure to transfer large amounts of data into and out of the AWS Cloud.</p><p><br></p><p><strong><em>\"AWS WAF\"&nbsp;is incorrect. </em></strong>AWS WAF refers to the AWS Web Application Firewall service.</p><p><br></p><p><strong><em>\"AWS&nbsp;Snowmobile\" is incorrect. </em></strong>AWS Snowmobile is an Exabyte-scale data transfer service used to move extremely large amounts of data to AWS.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html\">https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>S3 Transfer Acceleration </p>",
                    "<p>AWS&nbsp;Snowball</p>",
                    "<p>AWS WAF</p>",
                    "<p>AWS&nbsp;Snowmobile</p>"
                ]
            },
            "correct_response": [
                "a"
            ],
            "section": "AWS Storage",
            "question_plain": "What is the AWS service\\feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962904,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;An Amazon Machine Image (AMI) is a template that contains a software configuration (for example, an operating system, an application server, and applications). This pre-configured template save time and avoid errors when configuring settings to create new instances. You specify an AMI when you launch an instance, and you can launch as many instances from the AMI as you need. You can also launch instances from as many different AMIs as you need.</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"IAM\" is incorrect.</em></strong> IAM refers to the AWS&nbsp;Identity and Access Management.</p><p><br></p><p><strong><em>\"EBS&nbsp;Snapshot\" is incorrect. </em></strong>An EBS snapshot is a point-in-time copy of your Amazon EBS volume.</p><p><br></p><p><strong><em>\"An internet gateway\" is incorrect. </em></strong>An internet gateway is a VPC component that allows communication between instances in your VPC and the internet.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>IAM</p>",
                    "<p>AMI </p>",
                    "<p>EBS&nbsp;Snapshot</p>",
                    "<p>An internet gateway&nbsp; &nbsp;</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Compute",
            "question_plain": "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962908,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The Multi-AZ principle involves deploying an AWS resource in multiple Availability Zones to achieve high availability for that resource.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid-state disks (SSDs) and is automatically replicated across multiple Availability Zones in an AWS Region, providing built-in fault tolerance in the event of a server failure or Availability Zone outage.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Amazon S3 provides durable infrastructure to store important data and is designed for durability of 99.999999999% of objects. Data in all Amazon S3 storage classes is redundantly stored across multiple Availability Zones (except S3 One Zone-IA).</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon Redshift\" is incorrect.</em></strong> Currently, Amazon Redshift only supports Single-AZ deployments.</p><p><br></p><p><strong><em>\"AWS Snowball\" is incorrect.</em></strong> AWS Snowball is a data transport solution that accelerates moving terabytes to petabytes of data into and out of AWS using storage devices designed to be secure for physical transport. </p><p><br></p><p><strong><em>\"Amazon EBS\" is incorrect. </em></strong>Amazon EBS volume data is replicated across multiple servers within the same Availability Zone.</p><p>Note:</p><p>Amazon EFS data is redundantly stored across multiple Availability Zones providing better durability compared to EBS volumes.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/dynamodb/\">https://aws.amazon.com/dynamodb/</a></p><p><a href=\"https://aws.amazon.com/s3/storage-classes/\">https://aws.amazon.com/s3/storage-classes/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Amazon Redshift</p>",
                    "<p>Amazon DynamoDB </p>",
                    "<p>Amazon Simple Storage Service </p>",
                    "<p>AWS Snowball</p>",
                    "<p>Amazon EBS</p>"
                ]
            },
            "correct_response": [
                "b",
                "c"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962910,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amazon RDS manages the work involved in setting up a relational database, from provisioning the infrastructure capacity you request to installing the database software. Once your database is up and running, Amazon RDS automates common administrative tasks such as performing backups and patching the software that powers your database. With optional Multi-AZ deployments, Amazon RDS also manages synchronous data replication across Availability Zones with automatic failover. Since Amazon RDS provides native database access, you interact with the relational database software as you normally would. This means you're still responsible for managing the database settings that are specific to your application. You'll need to build the relational schema that best fits your use case and are responsible for any performance tuning to optimize your database for your application’s workflow.</p><p>&nbsp;</p><p><strong>The other options are incorrect:</strong></p><p><br></p><p><strong><em>\"Installing the database software\" is incorrect. </em></strong>Installing the database software is AWS’ responsibility.</p><p><br></p><p><strong><em>\"Performing backups\" is incorrect. </em></strong>Performing backups is AWS’ responsibility.</p><p><br></p><p><strong><em>\"Patching the database software\" is incorrect.</em></strong> Patching the database software is AWS’ responsibility.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/rds/faqs/\">https://aws.amazon.com/rds/faqs/</a></p><p><a href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Managing the database settings</p>",
                    "<p>Installing the database software</p>",
                    "<p>Building the relational database schema</p>",
                    "<p>Performing backups</p>",
                    "<p>Patching the database software</p>"
                ]
            },
            "correct_response": [
                "a",
                "c"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962912,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Using Amazon EC2 falls under which of the following cloud computing models?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Infrastructure as a Service (IaaS) contains the basic building blocks for Cloud IT and typically provide access to networking features, computers (virtual or on dedicated hardware), and data storage space. Infrastructure as a Service provides you with the highest level of flexibility and management control over your IT resources and is most similar to existing IT resources that many IT departments and developers are familiar with today. </p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;For example, a service such as Amazon Elastic Compute Cloud (Amazon EC2) is categorized as Infrastructure as a Service (IaaS) and requires the customer to perform all of the configuration and management tasks. Customers that deploy an Amazon EC2 instance are responsible for management of the guest operating system (including updates and security patches), any application software or utilities installed by the customer on the instances, and the configuration of the AWS-provided firewall (called a security group) on each instance.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p>1- Platform as a Service (PaaS) removes the need for your organization to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications. This helps you be more efficient as you don’t need to worry about resource procurement, capacity planning, software maintenance, patching, or any of the other undifferentiated heavy lifting involved in running your application. A common example of a PaaS platform is the AWS Elastic Beanstalk service. Developers simply upload their application, and Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring.</p><p><br></p><p>2- Software as a Service(SaaS) provides you with a completed product that is run and managed by the service provider. In most cases, people referring to Software as a Service are referring to end-user applications. With a SaaS offering you do not have to think about how the service is maintained or how the underlying infrastructure is managed; you only need to think about how you will use that particular piece software. A common example of a SaaS application is web-based email where you can send and receive email without having to manage feature additions to the email product or maintaining the servers and operating systems that the email program is running on.&nbsp;</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://d1.awsstatic.com/whitepapers/aws-overview.pdf\">https://d1.awsstatic.com/whitepapers/aws-overview.pdf</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>SaaS</p>",
                    "<p>IaaS</p>",
                    "<p>PaaS</p>",
                    "<p>IaaS &amp; SaaS</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "Cloud Computing Models",
            "question_plain": "Using Amazon EC2 falls under which of the following cloud computing models?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962914,
            "assessment_type": "multiple-choice",
            "prompt": {
                "answers": [
                    "<p>EC2 instances will be billed on one minute increments, with a minimum of one hour</p>",
                    "<p>EC2 instances will be billed on one second increments, with a minimum of one minute</p>",
                    "<p>EC2 instances will be billed on one hour increments, with a minimum of one day</p>",
                    "<p>EC2 instances will be billed on one day increments, with a minimum of one month</p>"
                ],
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "relatedLectureIds": "",
                "question": "<p>How are AWS customers billed for Linux-based Amazon EC2 usage?</p>",
                "explanation": "<p>Pricing is per instance-hour consumed for each instance, from the time an instance is launched until it is terminated or stopped. Each partial instance-hour consumed will be billed per-second (minimum of 1 minute) for Linux, Windows, or Ubuntu Instances and as a full hour for all other instance types.</p><p><strong>Examples for Linux, Windows, or Ubuntu based instances:</strong></p><p>1- If you run a Linux instance for 4 seconds or 20 seconds or 59 seconds, you will be charged for one minute. (this is what we mean by minimum of 1 minute)</p><p>2- If you run a Linux instance for 1 minute and 3 seconds, you will be charged for 1 minute and 3 seconds.</p><p>3- If you run a Linux instance for 3 hours, 25 minutes and 7 seconds, you will be charged for 3 hours, 25 minutes and 7 seconds.</p><p><strong>Examples for instances launched in other operating systems such as Red Hat, Kali, or CentOS:</strong></p><p>1- If you run an instance for 4 seconds or 20 seconds or 59 seconds, you will be charged for one hour.</p><p>2- If you run an instance for 1 minute and 3 seconds, you will be charged for one hour.</p><p>3- If you run an instance for 3 hours, 25 minutes and 7 seconds, you will be charged for 4 hours.</p><p>&nbsp;</p><p>Per-second billing is available for instances launched in:</p><p>- On-Demand, Reserved and Spot forms</p><p>- All regions and Availability Zones</p><p>- Amazon Linux, Windows, and Ubuntu</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/ec2/pricing/\">https://aws.amazon.com/ec2/pricing/</a></p>"
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Compute",
            "question_plain": "How are AWS customers billed for Linux-based Amazon EC2 usage?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962918,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; <strong>AWS&nbsp;is responsible</strong> for physical controls and environmental controls. Customers inherit these controls from AWS.</p><p><br></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;As mentioned in the <a href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">AWS Shared Responsibility Model page</a>, Inherited Controls are controls which a customer fully inherits from AWS such as physical controls and environmental controls.</p><p><br></p><p>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;As a customer deploying an application on AWS infrastructure, you inherit security controls pertaining to the AWS physical, environmental and media protection, and no longer need to provide a detailed description of how you comply with these control families.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; For example: Let’s say you have built an application in AWS for customers to securely store their data. But your customers are concerned about the security of the data and ensuring compliance requirements are met. To address this, you assure your customer that “our company does not host customer data in its corporate or remote offices, but rather in AWS data centers that have been certified to meet industry security standards.” That includes physical and environmental controls to secure the data, which is the responsibility of Amazon. Companies do not have physical access to the AWS data centers, and as such, they fully inherit the physical and environmental security controls from AWS.</p><p>You can read more about AWS’ data center controls here:</p><p><a href=\"https://aws.amazon.com/compliance/data-center/controls/\">https://aws.amazon.com/compliance/data-center/controls/</a></p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Patch management controls\" is incorrect. </em></strong>Patch Management belongs to the shared controls. AWS is responsible for patching the underlying hosts and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications.</p><p><br></p><p><strong><em>\"Database controls\"&nbsp;is incorrect. </em></strong>Database controls belongs to the shared controls. AWS maintains the configuration of its infrastructure devices that run the database, but customers are responsible for configuring their own databases, and applications.</p><p><br></p><p><strong><em>\"Awareness &amp; Training\" is incorrect.</em></strong> Awareness &amp; Training belongs to the shared controls. AWS trains AWS employees, but customers must train their own employees.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Environmental controls</p>",
                    "<p>Patch management controls</p>",
                    "<p>Database controls</p>",
                    "<p>Physical controls</p>",
                    "<p>Awareness &amp; Training</p>"
                ]
            },
            "correct_response": [
                "a",
                "d"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962922,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>Since the data is <strong>structured</strong>, then it is best to use a relational database service such as Amazon RDS.</p><p>&nbsp;</p><p><strong>The other options are incorrect:</strong></p><p><br></p><p><strong><em>\"Amazon ElastiCache\" is incorrect.</em></strong> ElastiCache is an in-memory data store and cache service.</p><p><br></p><p><strong><em>\"Amazon DynamoDB\" is incorrect.</em></strong> DynamoDB is a NoSQL database service. NoSQL is designed for <strong>unstructured</strong> data.</p><p><br></p><p><strong><em>\"Amazon SNS\" is incorrect.</em></strong> Amazon Simple Notification Service (SNS) is not a database service. Amazon SNS is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/rds/\">https://aws.amazon.com/rds/</a></p>",
                "answers": [
                    "<p>Amazon ElastiCache </p>",
                    "<p>Amazon DynamoDB</p>",
                    "<p>Amazon RDS</p>",
                    "<p>Amazon SNS </p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Database",
            "question_plain": "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962894,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "What does Amazon ElastiCache provide?",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ElastiCache is a web service that makes it easy to set up, manage, and scale a distributed in-memory data store or cache environment in the cloud. It provides a high-performance, scalable, and cost-effective caching solution, while removing the complexity associated with deploying and managing a distributed cache environment. The in-memory caching provided by Amazon ElastiCache can be used to significantly improve latency and throughput for many read-heavy applications (such as social networking, gaming, media sharing and Q&amp;A portals) or compute-intensive workloads (such as a recommendation engine). </p><p>&nbsp; &nbsp; &nbsp; &nbsp; In-memory caching improves application performance by storing critical pieces of data in memory for low-latency access. Cached information may include the results of common database queries or the results of computationally-intensive calculations.</p><p><br></p><p>Additional information:</p><p>&nbsp; &nbsp; &nbsp;The primary purpose of an in-memory data store is to provide ultrafast (submillisecond latency) and inexpensive access to copies of data. Querying a database is always slower and more expensive than locating a copy of that data in a cache. Some database queries are especially expensive to perform. An example is queries that involve joins across multiple tables or queries with intensive calculations. By caching (storing) such query results, you pay the price of the query only once. Then you can quickly retrieve the data multiple times without having to re-execute the query.</p><p>&nbsp; </p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"An online software store that allows Customers to launch pre-configured software with just few clicks\"is incorrect. </em></strong>AWS Marketplace is the service that provides an online software store that helps customers find, buy, and immediately start using the software and services that run on AWS. </p><p><br></p><p><strong><em>\"A domain name system in the cloud\"&nbsp;is incorrect.</em></strong> Route53 is the service that provides DNS in the cloud.</p><p><br></p><p><strong><em>\"An Ehcache compatible in-memory data store\" is incorrect. </em></strong>ElastiCache supports only two cache engines: Redis and Memcached.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/elasticache/\">https://aws.amazon.com/elasticache/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>An online software store that allows Customers to launch pre-configured software with just few clicks</p>",
                    "<p>A domain name system in the cloud</p>",
                    "<p>An Ehcache compatible in-memory data store</p>",
                    "<p>In-memory caching for read-heavy applications</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Database",
            "question_plain": "What does Amazon ElastiCache provide?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962926,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;AWS Identity and Access Management (IAM) is a web service for securely controlling access to AWS services. With IAM, you can centrally manage users, security credentials such as access keys, and permissions that control which AWS resources users and applications can access.</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon RDS\" is incorrect. </em></strong>Amazon RDS is relational database service.</p><p><br></p><p><strong><em>\"Network Access Control Lists\"&nbsp;is incorrect. </em></strong>Network Access Control Lists is a VPC feature that allows you to control traffic at the subnet level.</p><p><br></p><p><strong><em>\"Amazon EMR\" is incorrect.</em></strong> Amazon EMR is used to run and Scale Apache Spark, Hadoop, HBase, Presto, Hive, and other Big Data Frameworks.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/iam/\">https://aws.amazon.com/iam/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Amazon RDS </p>",
                    "<p>Network Access Control Lists</p>",
                    "<p>AWS Identity and Access&nbsp; Management </p>",
                    "<p>Amazon EMR </p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Security, Identity, & Compliance",
            "question_plain": "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962928,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Amazon EC2 provides you the highest level of control over your virtual instances, including root access and the ability to interact with them as you would any machine.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong><em>Amazon DynamoDB, Amazon RDS, and Amazon Redshift </em></strong>belong to the AWS-managed services. The AWS-managed services automate time-consuming administration tasks such as hardware provisioning, software setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/ec2/faqs/\">https://aws.amazon.com/ec2/faqs/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Amazon DynamoDB </p>",
                    "<p>Amazon RDS </p>",
                    "<p>Amazon Redshift</p>",
                    "<p>Amazon EC2 </p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962934,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>What are the AWS services\\features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Amazon EC2 Auto Scaling is a fully managed service designed to launch or terminate Amazon EC2 instances automatically to help ensure you have the correct number of Amazon EC2 instances available to handle the load for your application. Amazon EC2 Auto Scaling helps you maintain application availability and fault tolerance through fleet management for EC2 instances, which detects and replaces unhealthy instances, and by scaling your Amazon EC2 capacity automatically according to conditions you define. You can use Amazon EC2 Auto Scaling to automatically increase the number of Amazon EC2 instances during demand spikes to maintain performance and decrease capacity during lulls to reduce costs.</p><p><br></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Elastic Load Balancing provides an effective way to increase the availability and fault tolerance of a system. First ELB tries to discover the availability of your EC2 instances, it periodically sends pings, attempts connections, or sends requests to test the EC2 instances. These tests are called health checks. The load balancer routes user requests only to the healthy instances. When the load balancer determines that an instance is unhealthy, it stops routing requests to that instance. The load balancer resumes routing requests to the instance when it has been restored to a healthy state.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"CloudFormation\" is incorrect. </em></strong>AWS CloudFormation automates and simplifies the task of creating groups of related resources that power your applications. AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts.</p><p><br></p><p><strong><em>\"Network ACLs\" is incorrect.</em></strong> Network ACLs is used to control traffic at the subnet level.</p><p><br></p><p><strong><em>\"AWS Direct Connect\" is incorrect. </em></strong>AWS Direct Connect allows you to establish a dedicated network connection from your on-premises to AWS.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/ec2/autoscaling/\">https://aws.amazon.com/ec2/autoscaling/</a></p><p><a href=\"https://aws.amazon.com/elasticloadbalancing/\">https://aws.amazon.com/elasticloadbalancing/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Elastic Load Balancer </p>",
                    "<p>CloudFormation</p>",
                    "<p>Network ACLs</p>",
                    "<p>Amazon EC2 Auto Scaling </p>",
                    "<p>AWS Direct Connect</p>"
                ]
            },
            "correct_response": [
                "a",
                "d"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "What are the AWS services\\features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962938,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>An organization needs to analyze and process a large number of data sets. Which AWS service should they use?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Amazon EMR helps you analyze and process vast amounts of data by distributing the computational work across a cluster of virtual servers running in the AWS Cloud. The cluster is managed using an open-source framework called Hadoop. Amazon EMR lets you focus on crunching or analyzing your data without having to worry about time-consuming setup, management, and tuning of Hadoop clusters or the compute capacity they rely on.</p><p><br></p><p><strong><em>All other options are AWS&nbsp;messaging services.</em></strong></p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/emr/\">https://aws.amazon.com/emr/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Amazon SNS </p>",
                    "<p>Amazon SQS&nbsp; </p>",
                    "<p>Amazon EMR&nbsp; </p>",
                    "<p>Amazon MQ</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Analytics",
            "question_plain": "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962920,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Which of the following aspects of security are managed by AWS? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AWS is continuously innovating the design and systems of its data centers to protect them from man-made and natural risks. For example, at the first layer of security, AWS provides a number of security features depending on the location, such as security guards, fencing, security feeds, intrusion detection technology, and other security measures.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; According to the Shared Responsibility model, patching of the underlying hardware is the AWS’ responsibility. AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications.</p><p><br></p><p><strong><em>&nbsp;The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"VPC security\"&nbsp;is incorrect. </em></strong>The configuration and security of the VPC are customer’s responsibilities.</p><p><br></p><p><strong><em>\"Encryption of EBS volumes\" is incorrect.</em></strong> The customer is responsible for encrypting their data on EBS either on the client side or on the server side.</p><p><br></p><p><strong><em>\"Access permissions\" is incorrect.</em></strong> The customer is responsible for managing the IAM permissions.</p><p><br></p><p>Additional information:</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;IAM permissions let the customer specify access to AWS resources. Permissions are granted to IAM entities (users, user groups, and roles) and by default these entities start with no permissions. In other words, IAM entities can do nothing in AWS until you grant them your desired permissions. To give entities permissions, you can attach a policy that specifies the type of access, the actions that can be performed, and the resources on which the actions can be performed. </p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/compliance/shared-responsibility-model/\">https://aws.amazon.com/compliance/shared-responsibility-model/</a></p>",
                "answers": [
                    "<p>Securing global physical infrastructure</p>",
                    "<p>Hardware patching</p>",
                    "<p>VPC security</p>",
                    "<p>Encryption of EBS volumes</p>",
                    "<p>Access permissions</p>"
                ]
            },
            "correct_response": [
                "a",
                "b"
            ],
            "section": "AWS Shared Responsibility Model",
            "question_plain": "Which of the following aspects of security are managed by AWS? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962944,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Amazon S3 Glacier Flexible Retrieval is an Amazon S3 storage class that is suitable for storing ____________ &amp; ______________. (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp;S3 Glacier Flexible Retrieval (Formerly S3 Glacier) delivers the most flexible retrieval options that balance cost with access times ranging from minutes to hours and with free bulk retrievals. Amazon S3 Glacier Flexible Retrieval provides three retrieval options to fit your use case. Expedited retrievals typically return data in 1-5 minutes, and are best used for Active Archive use cases. Standard retrievals typically complete between 3-5 hours work, and work well for less time-sensitive needs like backup data, media editing, or long-term analytics. Bulk retrievals are the free retrieval option, returning large amounts of data within 5-12 hours.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Active databases\" is incorrect. </em></strong>Active databases require consistent and low-latency storage performance. For example, DB instances for Amazon RDS for MySQL, MariaDB, PostgreSQL, Oracle, and Microsoft SQL Server use Amazon Elastic Block Store (Amazon EBS) volumes for database and log storage. S3 Glacier Flexible Retrieval is generally used for data archiving and backup, not for live databases.</p><p><br></p><p><strong><em>\"Cached data\" is incorrect.</em></strong> A cache is a high-speed data storage layer which stores a subset of data, typically transient in nature, so that future requests for that data are served up faster than is possible by accessing the data’s primary storage location. Caching allows you to efficiently reuse previously retrieved or computed data. The data in a cache is generally stored in fast access hardware such as RAM (Random-access memory) and may also be used in correlation with a software component. A cache's primary purpose is to increase data retrieval performance by reducing the need to access the underlying slower storage layer.</p><p><br></p><p><strong><em>\"Dynamic websites’ assets\" is incorrect. </em></strong>Dynamic websites usually require immediate retrieval, which is not available in S3 Glacier Flexible Retrieval.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/glacier/\">https://aws.amazon.com/glacier/</a></p>",
                "answers": [
                    "<p>Active databases </p>",
                    "<p>Long-term analytic data</p>",
                    "<p>Active archives </p>",
                    "<p>Cached data </p>",
                    "<p>Dynamic websites’ assets </p>"
                ]
            },
            "correct_response": [
                "b",
                "c"
            ],
            "section": "AWS Storage",
            "question_plain": "Amazon S3 Glacier Flexible Retrieval is an Amazon S3 storage class that is suitable for storing ____________ &amp; ______________. (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962948,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp;Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. Elastic Load Balancing supports four types of load balancers (Application Load Balancer, Network Load Balancer, Gateway Load Balancer, and Classic Load Balancer). You can select the appropriate load balancer based on your application needs.</p><p>1- If you need to load balance<strong> HTTP\\HTTPS </strong>requests, AWS recommends using the AWS Application Load Balancer.</p><p>2- For network/transport protocols (layer4 – <strong>TCP, UDP</strong>) load balancing and for extreme performance/low latency applications, AWS recommends using the AWS Network Load Balancer.</p><p>3- To manage and distribute traffic across <strong>multiple third-party virtual appliances,</strong> AWS recommends using the AWS Gateway Load Balancer.</p><p>4- If you have an <strong>existing application built within the EC2-Classic network</strong>, you should use the AWS Classic Load Balancer.</p><p><br></p><p>&nbsp; &nbsp; &nbsp; &nbsp;Application Load Balancer is best suited for load balancing of HTTP and HTTPS traffic. In our case, the application receives HTTP traffic. Hence, the Application Load Balancer is the correct answer here.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"AWS&nbsp;Network Load Balancer\" is incorrect.</em></strong> The traffic comes to the instances through HTTP. Network Load Balancer is best suited for load balancing of <strong>TCP and UDP</strong> traffic.</p><p><br></p><p><strong><em>\"AWS Gateway Load Balancer\" is incorrect. </em></strong>AWS Gateway Load Balancer is used to manage and distribute traffic across <strong>multiple third-party virtual appliances.</strong></p><p>Gateway Load Balancer helps you easily deploy, scale, and manage third-party virtual appliances such as firewalls, Anti-malware, deep packet inspection systems, and intrusion detection and prevention systems.</p><p>Gateway Load Balancer gives you one gateway for distributing traffic across multiple virtual appliances while scaling them up or down, based on demand. This decreases potential points of failure in your network and increases availability.</p><p><br></p><p><strong>Additional information:</strong></p><p>What is a virtual appliance?</p><p>A virtual appliance sits in line with network traffic and inspects incoming and outgoing traffic flows. These can be firewalls, deep packet inspection systems, inline analytics, or other inline functions that have traditionally been referred to as network appliances. AWS Customers can find, test, and buy virtual appliances from third-party vendors directly in AWS Marketplace. This integrated experience streamlines the deployment process, so customers see value from their virtual appliances more quickly.</p><p><br></p><p><strong><em>\"AWS&nbsp;Auto Scaling\" is incorrect. </em></strong>AWS Auto Scaling is not for distributing traffic. AWS Auto Scaling monitors your applications and automatically adjusts capacity (up or down) to maintain steady, predictable performance at the lowest possible cost.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://d1.awsstatic.com/whitepapers/aws-overview.pdf\">https://d1.awsstatic.com/whitepapers/aws-overview.pdf</a></p>",
                "answers": [
                    "<p>AWS&nbsp;Network Load Balancer</p>",
                    "<p>AWS&nbsp;Auto Scaling </p>",
                    "<p>AWS Gateway Load Balancer</p>",
                    "<p>AWS&nbsp;Application Load Balancer </p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Networking & Content Delivery",
            "question_plain": "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962954,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>​ What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Amazon Inspector is an automated security assessment service that helps you test the network accessibility of your Amazon EC2 instances and the security state of your applications running on the instances. Amazon Inspector allows you to create assessment templates to automate security vulnerability assessments throughout your development and deployment pipelines or for static production systems.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Security groups\" is incorrect. </em></strong>Security groups can be used to check the network accessibility of your Amazon EC2 instances -at the instance level- but this is not done automatically.</p><p><br></p><p><strong><em>\"Amazon Kinesis\"&nbsp;is incorrect. </em></strong>Amazon Kinesis allows you to collect, process, and analyze video and data streams in real time.</p><p><br></p><p><strong><em>\"AWS Network Access Control Lists\" is incorrect.</em></strong> AWS Network Access Control Lists can be used to check the network accessibility of your Amazon EC2 instances -at the subnet level- but this is not done automatically.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/inspector/\">https://aws.amazon.com/inspector/</a></p>",
                "answers": [
                    "<p>Security groups</p>",
                    "<p>Amazon Kinesis</p>",
                    "<p>Amazon Inspector </p>",
                    "<p>AWS Network Access Control Lists </p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Security, Identity, & Compliance",
            "question_plain": "​ What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962954,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amazon S3 is object storage built to store and retrieve any amount of data from anywhere on the Internet. It is a storage service that offers an extremely durable, highly available, and infinitely scalable data storage infrastructure at very low costs. </p><p><strong>Common use cases of Amazon S3 include:</strong></p><p><strong>Media Hosting</strong> – Build a redundant, scalable, and highly available infrastructure that hosts video, photo, or music uploads and downloads.</p><p><strong>Backup and Storage</strong> – Provide data backup and storage services for others.</p><p><strong>Hosting</strong> <strong>static websites </strong>– Host and manage static websites quickly and easily. </p><p><strong>Deliver content globally</strong> - Use S3 in conjunction with CloudFront to distribute content globally with low latency.</p><p><strong>Hybrid cloud storage </strong>- Create a seamless connection between on-premises applications and Amazon S3 with <strong>AWS Storage Gateway</strong> in order to reduce your data center footprint, and leverage the scale, reliability, and durability of AWS.</p><p>&nbsp; </p><p><strong><em>The other options are incorrect:</em></strong></p><p>&nbsp; </p><p><strong><em>\"Amazon SQS\" is incorrect. </em></strong>Amazon SQS is not a storage service. It is a messaging queuing service that can be used to send messages between application components. SQS enables you to decouple and scale microservices, distributed systems, and serverless applications.</p><p><br></p><p><strong><em>\"Amazon Instance store\" is&nbsp; incorrect. </em></strong>Amazon EC2 Instance Store provides temporary block-level storage for your instance. Instance store is ideal for temporary storage of information that changes frequently, such as buffers, caches, scratch data, and other temporary content, or for data that is replicated across a fleet of instances, such as a load-balanced pool of web servers.</p><p> </p><p><strong><em>\"Amazon EBS\"&nbsp;is incorrect. </em></strong>Amazon EBS is not a cost-effective solution for storing images or videos (compared to Amazon S3). Amazon EBS is a block level storage that can be used as a disk drive for Amazon EC2 or Amazon RDS instances. Amazon EBS is designed for application workloads that benefit from fine tuning for performance and capacity. Typical use cases of Amazon EBS include Big Data analytics engines (like the Hadoop/HDFS ecosystem and Amazon EMR clusters), relational and NoSQL databases (like Microsoft SQL Server and MySQL or Cassandra and MongoDB), stream and log processing applications (like Kafka and Splunk), and data warehousing applications (like Vertica and Teradata).</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/s3/\">https://aws.amazon.com/s3/</a></p>",
                "answers": [
                    "<p>Amazon SQS</p>",
                    "<p>Amazon Instance store </p>",
                    "<p>Amazon S3 </p>",
                    "<p>Amazon EBS&nbsp; </p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Storage",
            "question_plain": "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962992,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Which of the following will impact the price paid for an EC2 instance? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>EC2 instance pricing varies depending on many variables:</p><p>- The buying option (On-demand, Savings Plans, Reserved, Spot, Dedicated)</p><p>- Selected instance type</p><p>- Selected Region</p><p>- Number of instances</p><p>- Load balancing</p><p>- Allocated Elastic IP Addresses</p><p><br></p><p><strong>Load balancing: </strong>The number of hours the Elastic Load Balancer runs and the amount of data it processes contribute to the EC2 monthly cost.</p><p><br></p><p><strong>Instance type:</strong> Amazon EC2 provides a wide selection of instance types optimized to fit different use cases. Instance types comprise varying combinations of CPU, memory, storage, and networking capacity.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p><strong><em>\"The Availability Zone where the instance is provisioned\" is incorrect. </em></strong>Prices of the Amazon EC2 instances may vary depending on the Region where the instances are provisioned.&nbsp;Amazon EC2 instances provisioned in different Availability Zones within the same Region have the same price.</p><p><br></p><p><strong><em>\"Number of private IPs\" is incorrect. </em></strong>There is no charge for private IPs. </p><p>Additional information:</p><p>The number of allocated Elastic IPs is the factor that may affect Amazon EC2 charges. To ensure efficient use of Elastic IP addresses, AWS imposes a small hourly charge if an Elastic IP address is <strong>not associated </strong>with a running instance, or if it is <strong>associated</strong> with a stopped instance. While the instance is running, you are not charged for one Elastic IP address associated with the instance, but additional Elastic IPs are not free.</p><p><br></p><p><strong><em>\"Number of buckets\" is incorrect. </em></strong>A bucket is an Amazon S3 resource, not an Amazon EC2 resource. </p><p>Additional information:</p><p>To upload your data (photos, videos, documents, etc.) to Amazon S3, you must first create an S3 bucket (which is like a file folder) in one of the AWS Regions. You can then upload any number of objects to the bucket. The customer is charged based on the total size of the objects (in GB) stored in their S3 bucket, not for the bucket itself.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/how-aws-pricing-works.pdf\">https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/how-aws-pricing-works.pdf</a></p>",
                "answers": [
                    "<p>The Availability Zone where the instance is provisioned</p>",
                    "<p>Instance type</p>",
                    "<p>Number of private IPs</p>",
                    "<p>Load balancing</p>",
                    "<p>Number of buckets</p>"
                ]
            },
            "correct_response": [
                "b",
                "d"
            ],
            "section": "AWS Compute",
            "question_plain": "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962994,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. It allows you to run complex analytic queries against petabytes of structured data. You can start with just a few hundred gigabytes of data and scale to a petabyte or more. Amazon Redshift manages the work needed to set up, operate, and scale a data warehouse, from provisioning the infrastructure capacity to automating ongoing administrative tasks such as backups, and patching.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon Kinesis\" is incorrect. </em></strong>Amazon Kinesis is used to collect, process, and analyze video and data streams in real time.</p><p><br></p><p><strong><em>\"Amazon RDS\" is incorrect. </em></strong>Amazon Relational Database Service (Amazon RDS) is a managed service that makes it easy to set up, operate, and scale a relational database in the AWS Cloud. Amazon RDS provides you with <strong>six relational database engines</strong> to choose from, including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and Microsoft SQL Server.</p><p><br></p><p><strong><em>\"Amazon DynamoDB\" is incorrect. </em></strong>Amazon DynamoDB is a NoSQL database service.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html\">https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Amazon Kinesis</p>",
                    "<p>Amazon Redshift </p>",
                    "<p>Amazon RDS</p>",
                    "<p>Amazon DynamoDB </p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Database",
            "question_plain": "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54962998,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Which of the following AWS services can be used as a compute resource? (Choose TWO)</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; AWS Lambda is a Serverless computing service. Serverless computing allows you to build and run applications and services without thinking about servers. With serverless computing, your application still runs on servers, but all the server management is done by AWS.</p><p>&nbsp; &nbsp; &nbsp;Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, and resizable compute capacity in the cloud. Unlike AWS Lambda, Amazon EC2 is a server-based computing service, the Customer is responsible for performing all server configurations and management tasks.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>Amazon S3 is incorrect. </em></strong>Amazon S3 is&nbsp;a storage service.</p><p><br></p><p><strong><em>Amazon VPC is incorrect.</em></strong> Amazon VPC is a networking service.</p><p>&nbsp;</p><p><strong><em>Amazon CloudWatch is incorrect. </em></strong>Amazon CloudWatch is a monitoring service.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/lambda/\">https://aws.amazon.com/lambda/</a></p><p><a href=\"https://aws.amazon.com/ec2/\">https://aws.amazon.com/ec2/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Amazon S3</p>",
                    "<p>Amazon EC2</p>",
                    "<p>Amazon VPC</p>",
                    "<p>AWS Lambda</p>",
                    "<p>Amazon CloudWatch</p>"
                ]
            },
            "correct_response": [
                "b",
                "d"
            ],
            "section": "AWS Compute",
            "question_plain": "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54963000,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;You have a variety of options for using new and existing Microsoft software licenses on the AWS Cloud. By purchasing Amazon Elastic Compute Cloud (Amazon EC2) or Amazon Relational Database Service (Amazon RDS) license-included instances, you get <strong>new</strong>, fully compliant Windows Server and SQL Server licenses from AWS. The BYOL model enables AWS customers to use their <strong>existing</strong> server-bound software licenses, including Windows Server, SQL Server, and SUSE Linux Enterprise Server. </p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Your <strong>existing</strong> licenses may be used on AWS with Amazon EC2 Dedicated Hosts, Amazon EC2 Dedicated Instances or EC2 instances with default tenancy using Microsoft License Mobility through Software Assurance. </p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dedicated Hosts provide additional control over your instances and visibility into Host level resources and tooling that allows you to manage software that consumes licenses on a per-core or per-socket basis, such as Windows Server and SQL Server. This is why most BYOL scenarios are supported through the use of Dedicated Hosts, while only certain scenarios are supported by Dedicated Instances.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Dedicated Instances\" is incorrect.</em></strong> Dedicated Hosts is recommended for most BYOL scenarios for the reasons we mentioned above.</p><p><br></p><p><strong><em>\"On-demand Instances\" and \"Reserved Instances\" are incorrect. </em></strong>On-demand instances and Reserved instances don’t support the Bring Your Own License (BYOL) model.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/ec2/dedicated-hosts/\">https://aws.amazon.com/ec2/dedicated-hosts/</a></p>",
                "answers": [
                    "<p>On-demand Instances</p>",
                    "<p>Dedicated Hosts</p>",
                    "<p>Dedicated Instances</p>",
                    "<p>Reserved Instances</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Pricing Models",
            "question_plain": "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54963002,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; With AWS, you can deploy your application in multiple regions around the world. The user will be redirected to the Region that provides the lowest possible latency and the highest performance. You can also use the CloudFront service that uses edge locations (which are located in most of the major cities across the world) to deliver content with low latency and high performance to your global users.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"High availability\"&nbsp;is incorrect.</em></strong> High Availability can be achieved by deploying your application in multiple Availability Zones within a single Region. If one Availability Zone goes down, the others can handle user requests. This may not reduce latency to your international users. In other words, the application will be available for them all the time, but with high latency.</p><p><br></p><p><strong><em>\"Elasticity\" is incorrect.</em></strong> Elasticity refers to the ability of a system to scale the underlying resources up when demand increases (to maintain performance), or scale down when demand decreases (to reduce costs). This option does not indicate whether your resources will be deployed in a single Region or multiple Regions. </p><p><br></p><p><strong><em>\"Data durability\" is incorrect. </em></strong>Durability refers to the ability of a system to assure data is stored and data remains consistent in the system as long as it is not changed by legitimate access. This means that data should not become corrupted or disappear due to a system malfunction. Durability is used to measure the likelihood of data loss. For example, assume you have confidential data stored in your Laptop. If you make a copy of it and store it in a secure place, you have just improved the durability of that data. It is much less likely that all copies will be simultaneously destroyed.</p><p>Data durability can be achieved by replicating data across multiple Availability Zones within a single Region. For example, the S3 Standard Tier is designed for 99.999999999% durability. This means that if you store 100 billion objects in S3, you will lose one object at most. </p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/about-aws/global-infrastructure/\">https://aws.amazon.com/about-aws/global-infrastructure/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>High availability</p>",
                    "<p>Elasticity</p>",
                    "<p>Global reach</p>",
                    "<p>Data durability</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "Cloud Computing Benefits",
            "question_plain": "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54963006,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>The 6 Pillars of the AWS Well-Architected Framework:</p><p>1- Operational Excellence: The operational excellence pillar includes the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.</p><p>2- Security: The security pillar includes the ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies.</p><p>3- Reliability: The reliability pillar includes the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as&nbsp; misconfigurations or transient network issues.</p><p>4- Performance Efficiency: The performance efficiency pillar includes the ability to use computing resources efficiently to meet system requirements. Key topics include selecting the right resource types and sizes based on workload requirements, monitoring performance, and making informed decisions to maintain efficiency as business needs evolve.</p><p>5- Cost Optimization: The cost optimization pillar includes the ability to avoid or eliminate unneeded cost or sub-optimal resources.</p><p>6- Sustainability: The discipline of sustainability addresses the long-term environmental, economic, and societal impact of your business activities. Your business or organization can have negative environmental impacts like direct or indirect carbon emissions, unrecyclable waste, and damage to shared resources like clean water. When building cloud workloads, the practice of sustainability is understanding the impacts of the services used, quantifying impacts through the entire workload lifecycle, and applying design principles and best practices to reduce these impacts.</p><p><br></p><p>Additional information:</p><p>Creating a software system is a lot like constructing a building. If the foundation is not solid, structural problems can undermine the integrity and function of the building. When architecting technology solutions on Amazon Web Services (AWS), if you neglect the five pillars of operational excellence, security, reliability, performance efficiency, and cost optimization, it can become challenging to build a system that delivers on your expectations and requirements. Incorporating these pillars into your architecture helps produce stable and efficient systems. This allows you to focus on the other aspects of design, such as functional requirements. The AWS Well-Architected Framework helps cloud architects build the most secure, high-performing, resilient, and efficient infrastructure possible for their applications.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"The ability of a system to recover gracefully from failure\" is incorrect.</em></strong> This statement is much more related to the Reliability pillar.</p><p><br></p><p><strong><em>\"The efficient use of computing resources to meet requirements\"&nbsp;is incorrect.</em></strong> This statement is much more related to the Performance Efficiency pillar.</p><p><br></p><p><strong><em>\"The ability to manage datacenter operations more efficiently\" is incorrect.</em></strong> Managing datacenter operations is not related to any pillar. It is something that AWS is responsible for, NOT the customer.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/\">https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/</a></p>",
                "answers": [
                    "<p>The ability of a system to recover gracefully from failure</p>",
                    "<p>The ability to monitor systems and improve supporting processes and procedures</p>",
                    "<p>The efficient use of computing resources to meet requirements</p>",
                    "<p>The ability to manage datacenter operations more efficiently</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54963008,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Which of the following procedures will help reduce your Amazon S3 costs?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amazon S3 offers a range of storage classes designed for different use cases. These include S3 Standard for general-purpose storage of frequently accessed data; S3 Intelligent-Tiering for data with unknown or changing access patterns; S3 Standard-Infrequent Access (S3 Standard-IA) and S3 One Zone-Infrequent Access (S3 One Zone-IA) for long-lived, but less frequently accessed data; and Amazon S3 Glacier Instant Retrieval, Amazon S3 Glacier Flexible Retrieval, and Amazon S3 Glacier Deep Archive for long-term archive and digital preservation.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Move all the data stored in S3 standard to EBS\"&nbsp;is incorrect. </em></strong>EBS is a block-level storage service that is significantly more expensive than S3.</p><p><br></p><p><strong><em>\"Pick the right Availability Zone for your S3 bucket\" is incorrect. </em></strong>You don’t have the option to store objects on a specific AZ. You can only choose the AWS Region in which you want your S3 buckets to reside. </p><p>Additional information:</p><p>In general, AWS prices for a resource may change based on the AWS Region where it is created, NOT based on Availability Zones within the same Region.</p><br></p><p><strong><em>\"Use the Import/Export feature to move old files automatically to Amazon Glacier\" is incorrect.</em></strong> Moving old data automatically to Amazon Glacier will help reduce your Amazon S3 costs, but this can be done using Amazon S3 lifecycle policies, NOT the Import/Export feature. In order to reduce your Amazon S3 costs, you should create a lifecycle policy to automatically move old (or infrequently accessed) files to less expensive storage tiers, or to automatically delete them after a specified duration.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/s3/storage-classes/\">https://aws.amazon.com/s3/storage-classes/</a></p>",
                "answers": [
                    "<p>Move all the data stored in S3 standard to EBS</p>",
                    "<p>Pick the right Availability Zone for your S3 bucket</p>",
                    "<p>Use the right combination of storage classes based on different use cases</p>",
                    "<p>Use the Import/Export feature to move old files automatically to Amazon Glacier</p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Storage",
            "question_plain": "Which of the following procedures will help reduce your Amazon S3 costs?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54963010,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Which of the below is a best-practice when building applications on AWS?</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; An application should be designed in a way that reduces interdependencies between its components. A change or a failure in one component should not cascade to other components. If the components of an application are tightly-coupled (interconnected) and one component fails, the entire application will also fail. <strong>Amazon SQS</strong> and <strong>Amazon SNS</strong> are powerful tools that help you build loosely-coupled applications. SQS and SNS can be integrated together to decouple application components so that they run independently, increasing the overall fault tolerance of the application.</p><p><br></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Understanding how SQS and SNS services work is not required for the Cloud Practitioner level, but let’s just take a simple example, let say you have two components in your application, Component A &amp; Component B. Component A sends messages (jobs) to component B to process. Now, what happens if component A sends a large number of messages at the same time? Component B will fail, and the entire application will fail. SQS act as a middleman, receives and stores messages from component A, and component B pull and process messages at its own pace. This way, both components run independently from each other.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Ensure that the application runs on hardware from trusted vendors\" is incorrect. </em></strong>Choosing a specific hardware vendor is not available in AWS.</p><p><br></p><p><strong><em>\"Use IAM policies to maintain performance\" is incorrect. </em></strong>There is no relation between IAM policies and performance. IAM policies are used to grant users permission to perform specific actions on AWS.</p><p><br></p><p><strong><em>\"Strengthen physical security by applying the principle of least privilege\" is incorrect. </em></strong>Physical security is the sole responsibility of AWS.</p><p><br></p><p>Additional information:</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; AWS provides physical data center access only to approved employees. All employees who need data center access must first apply for access and provide a valid business justification. These requests are granted based on the principle of least privilege, where requests must specify to which layer of the data center the individual needs access, and are time-bound. Requests are reviewed and approved by authorized personnel, and access is revoked after the requested time expires.</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The principle of least privilege does not only apply to control physical access. AWS customers should also apply this principle when granting permissions to IAM users. In other words, AWS customers should grant IAM users only the permissions they need to perform a task and nothing more.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/microservices/\">https://aws.amazon.com/microservices/</a></p><p><a href=\"https://aws.amazon.com/sns/\">https://aws.amazon.com/sns/</a></p><p><a href=\"https://aws.amazon.com/sqs/\">https://aws.amazon.com/sqs/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Ensure that the application runs on hardware from trusted vendors</p>",
                    "<p>Decouple the components of the application so that they run independently</p>",
                    "<p>Use IAM policies to maintain performance</p>",
                    "<p>Strengthen physical security by applying the principle of least privilege</p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "Which of the below is a best-practice when building applications on AWS?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54963012,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Savings Plans are available for which of the following AWS compute services? (Choose TWO)</p>",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; Savings Plans are a flexible pricing model that offers low prices on EC2, Lambda, and Fargate usage, in exchange for a commitment to a consistent amount of usage (measured in $/hour) for a 1 or 3 year term. When you sign up for Savings Plans, you will be charged the discounted Savings Plans price for your usage up to your commitment. For example, if you commit to $10 of compute usage an hour, you will get the Savings Plans prices on that usage up to $10 and any usage beyond the commitment will be charged On Demand rates.</p><p><br></p><p><strong>Additional information:</strong></p><p><strong><em>What is the difference between Amazon EC2 Savings Plans and Amazon EC2 Reserved instances?</em></strong></p><p>&nbsp; &nbsp; &nbsp; Reserved Instances are a billing discount applied to the use of On-Demand Compute Instances in your account. These On-Demand Instances must match certain attributes, such as instance type and Region to benefit from the billing discount.</p><p>&nbsp; &nbsp; &nbsp; For example, let say you have a t2.medium instance running as an On-Demand Instance and you purchase a Reserved Instance that matches the configuration of this particular t2.medium instance. At the time of purchase, the billing mode for the existing instance changes to the Reserved Instance discounted rate. The existing t2.medium instance doesn't need replacing or migrating to get the discount.</p><p>&nbsp; &nbsp; &nbsp; After the reservation expires, the instance is charged as an On-Demand Instance. You can repurchase the Reserved Instance to continue the discounted rate on your instance. Reserved Instances act as an automatic discount on new or existing On-Demand Instances in your account.</p><p>&nbsp; &nbsp; &nbsp; Savings Plans also offer significant savings on your Amazon EC2 costs compared to On-Demand Instance pricing. With Savings Plans, you make a commitment to a consistent usage amount, measured in USD per hour. This provides you with the flexibility to use the instance configurations that best meet your needs, instead of making a commitment to a specific instance configuration (as is the case with reserved instances). For example, with Compute Savings Plans, if you commit to $10 of compute usage an hour, you can use as many instances as you need (of any type) and you will get the Savings Plans prices on that usage up to $10 and any usage beyond the commitment will be charged On Demand rates.</p><p><br></p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"AWS Batch\" is incorrect. </em></strong>Savings Plans are not available for AWS Batch. </p><p>AWS Batch is a compute service that allows you to run hundreds of thousands of batch computing jobs on AWS. AWS Batch dynamically provisions the optimal quantity and type of compute resources (e.g., CPU or memory optimized instances) based on the volume and specific resource requirements of the batch jobs submitted.</p><p><br></p><p><strong><em>\"AWS Outposts\" is incorrect. </em></strong>Savings Plans are not available for AWS Outposts. </p><p>AWS Outposts is an AWS service that delivers the same AWS infrastructure, native AWS services, APIs, and tools to virtually any customer on-premises facility. With AWS Outposts, customers can run AWS services locally on their Outpost, including EC2, EBS, ECS, EKS, and RDS, and also have full access to services available in the Region.</p><p>Customers can use AWS Outposts to securely store and process data that needs to remain on-premises or in countries where there is no AWS region. AWS Outposts is ideal for applications that have low latency or local data processing requirements, such as financial services, healthcare, etc.</p><p><br></p><p><strong><em>“Amazon Lightsail” is incorrect. </em></strong>Savings Plans are not available for Amazon Lightsail. </p><p>Amazon Lightsail provides a low-cost Virtual Private Server (VPS) in the cloud.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/savingsplans/\">https://aws.amazon.com/savingsplans/</a></p>",
                "relatedLectureIds": "",
                "answers": [
                    "<p>Amazon EC2</p>",
                    "<p>AWS Lambda</p>",
                    "<p>AWS Batch</p>",
                    "<p>AWS Outposts</p>",
                    "<p>Amazon Lightsail</p>"
                ]
            },
            "correct_response": [
                "a",
                "b"
            ],
            "section": "AWS Pricing Models",
            "question_plain": "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 54963020,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Which of the following services allows you to run containerized applications on a cluster of EC2 instances? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p><strong>&nbsp; &nbsp; &nbsp; Amazon Elastic Container Service (Amazon ECS)</strong> is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS. Amazon ECS eliminates the need for you to install and operate your own container orchestration software, manage and scale a cluster of virtual machines, or schedule containers on those virtual machines.</p><p><strong>&nbsp; &nbsp; &nbsp; Amazon Elastic Kubernetes Service (Amazon EKS)</strong> is a managed service that allows you to use Kubernetes to run and scale containerized applications in the cloud or on-premises.</p><p>Kubernetes is an open-source container orchestration system that allows you to deploy and manage containerized applications at scale.</p><p>AWS handles provisioning, scaling, and managing the Kubernetes instances in a highly available and secure configuration. This removes a significant operational burden and allows you to focus on building applications instead of managing AWS infrastructure.</p><p><br></p><p><strong>On both Amazon EKS and Amazon ECS, you have the option of running your containers on the following compute options:</strong></p><p><strong>AWS Fargate</strong> — a \"serverless\" container compute engine where you only pay for the resources required to run your containers. Suited for customers who do not want to worry about managing servers, handling capacity planning, or figuring out how to isolate container workloads for security.</p><p><strong>EC2 instances </strong>— offers the widest choice of instance types, including processor, storage, and networking. Ideal for customers who want to manage or customize the underlying compute environment and host operating system.</p><p><strong>AWS Outposts </strong>— run your containers using AWS infrastructure on premises for a consistent hybrid experience. Suited for customers who require local data processing, data residency, and hybrid use cases.</p><p><strong>AWS Local Zones </strong>— an extension of an AWS Region. Suited for customers who need the ability to place resources in multiple locations closer to end users.</p><p><strong>AWS Wavelength </strong>— ultra-low-latency mobile edge computing. Suited for 5G applications, interactive and immersive experiences, and connected vehicles.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"AWS Data Pipeline\" is incorrect. </em></strong>AWS Data Pipeline is a web service that makes it easy to schedule regular data movement and data processing activities in the AWS cloud.</p><p><br></p><p>\"<strong><em>AWS Cloud9\" is incorrect. </em></strong>AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser. It includes a code editor, debugger, and terminal.</p><p><br></p><p><strong><em>\"AWS Health Dashboard\" is incorrect. </em></strong>The AWS Health Dashboard is the single place to learn about the availability and operations of AWS services. You can view the overall status of all AWS services, and you can sign in to access a personalized view of the health of the specific services that are powering your workloads and applications. AWS Health Dashboard proactively notifies you when AWS experiences any events that may affect you, helping provide quick visibility and guidance to minimize the impact of events in progress and plan for any scheduled changes, such as AWS hardware maintenance. With AWS Health Dashboard, alerts are triggered by changes in the health of AWS resources, giving you event visibility and guidance to help quickly diagnose and resolve issues.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/containers/\">https://aws.amazon.com/containers/</a></p><p><a href=\"https://aws.amazon.com/ecs/\">https://aws.amazon.com/ecs/</a></p><p><a href=\"https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html\">https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html</a></p><p><a href=\"https://aws.amazon.com/blogs/containers/amazon-ecs-vs-amazon-eks-making-sense-of-aws-container-services/\">https://aws.amazon.com/blogs/containers/amazon-ecs-vs-amazon-eks-making-sense-of-aws-container-services/</a></p>",
                "answers": [
                    "<p>Amazon ECS</p>",
                    "<p>AWS Data Pipeline</p>",
                    "<p>AWS Cloud9</p>",
                    "<p>AWS Health Dashboard</p>",
                    "<p>Amazon Elastic Kubernetes Service</p>"
                ]
            },
            "correct_response": [
                "a",
                "e"
            ],
            "section": "AWS Compute",
            "question_plain": "Which of the following services allows you to run containerized applications on a cluster of EC2 instances? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55030474,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AWS continues to lower the cost of cloud computing for its customers. AWS recently lowered prices again for compute, storage, caching, and database services for all customers, making everything from web apps to big data on AWS even more cost-effective and widening the TCO gap with traditional infrastructure.</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Elasticity is a system’s ability to monitor user demand and automatically increase and decrease deployed resources accordingly. Elasticity is one of the most important advantages of AWS. The purpose of elasticity is to match the resources allocated with actual amount of resources needed at any given point in time. This ensures that you are only paying for the resources you actually need.&nbsp;</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Free technical support\" is incorrect.</em></strong> Technical support is not free in AWS. Technical Support requires subscription to an AWS Support Plan.</p><p><br></p><p><strong><em>\"On-site visits for auditing\" is incorrect.</em></strong> AWS does not allow on-site visits to its datacenters under any circumstances.</p><p><br></p><p><strong><em>\"Free commercial software licenses\" is incorrect.</em></strong> Neither AWS nor on-premises datacenters provide free commercial software licenses. However, AWS allows you to pay for these licenses as-you-go. For example, using license included windows instances allows you access to fully compliant Microsoft software licenses bundled with Amazon EC2 or Amazon RDS instances and pay for them as you go with no upfront costs or long-term investments.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/six-advantages-of-cloud-computing.html\">https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/six-advantages-of-cloud-computing.html</a></p>",
                "answers": [
                    "<p>Free technical support</p>",
                    "<p>On-site visits for auditing</p>",
                    "<p>Cost Savings</p>",
                    "<p>Elastic resources</p>",
                    "<p>Free commercial software licenses</p>"
                ]
            },
            "correct_response": [
                "c",
                "d"
            ],
            "section": "Cloud Computing Benefits",
            "question_plain": "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55030480,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "<p>Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The following questions can help you take decisions on which solutions to include in your architecture:</p><p>- Is this a read-heavy, write-heavy, or balanced workload? How many reads and writes per second are you going to need? How will those values change if the number of users increases?</p><p>- How much data will you need to store and for how long? How quickly do you foresee this will grow? Is there an upper limit in the foreseeable future? What is the size of each object (average, min, max)? How are these objects going to be accessed?</p><p>- What are the requirements in terms of durability of data? Is this data store going to be your “source of truth”?</p><p>- What are your latency requirements? How many concurrent users do you need to support?</p><p>- What is your data model and how are you going to query the data? Are your queries relational in nature (e.g.,JOINs between multiple tables)? Could you denormalize your schema to create flatter data structures that are easier to scale?</p><p>- What kind of functionality do you require? Do you need strong integrity controls or are you looking for more flexibility (e.g.,schema-less data stores)? Do you require sophisticated reporting or search capabilities? Are your developers more familiar with relational databases than NoSQL?</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Data sovereignty\" is incorrect. </em></strong>Data sovereignty is the concept that information which has been converted and stored in binary digital form is subject to the laws of the country in which it is located. Data sovereignty is a factor you should consider when choosing your AWS region NOT the database.</p><p><br></p><p><strong><em>\"Software bugs\" is incorrect.</em></strong> A software bug is an error, flaw, failure, or fault in a system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways. Most bugs are due to human errors made in source code or software design, so if software has bugs, you have to search for a fix. Database technologies cannot help you with application bugs, as they provide services related only to databases.</p><p><br></p><p><strong><em>\"Availability Zones\" is incorrect. </em></strong>Availability zones in a region are all relatively the same. There is no reason to prefer any Availability Zone in which to run a database.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/products/databases/\">https://aws.amazon.com/products/databases/</a></p>",
                "answers": [
                    "<p>The number of reads and writes per second</p>",
                    "<p>Data sovereignty</p>",
                    "<p>Software bugs</p>",
                    "<p>The nature of the queries</p>",
                    "<p>Availability Zones</p>"
                ]
            },
            "correct_response": [
                "a",
                "d"
            ],
            "section": "AWS Database",
            "question_plain": "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55030484,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>Both AWS&nbsp;and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. Amazon EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers the tools to build failure resilient applications and isolate them from common failure scenarios.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Amazon Virtual Private Cloud\" is incorrect. </em></strong>Amazon Virtual Private Cloud&nbsp;(Amazon VPC) is used to create virtual networks in the AWS&nbsp;cloud.</p><p><br></p><p><strong><em>\"AWS Managed Servers\" is incorrect. </em></strong>Amazon EC2 instances are not managed by AWS. It is the responsibility of the customer to manage almost everything related to their instances. </p><p><br></p><p><strong><em>\"Amazon EBS Snapshots\" is incorrect.</em></strong> Amazon EBS Snapshots are copies (backups) of EBS volumes.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/ec2/\">https://aws.amazon.com/ec2/</a></p>",
                "answers": [
                    "<p>Amazon Virtual Private Cloud</p>",
                    "<p>AWS Managed Servers</p>",
                    "<p>Amazon EBS Snapshots</p>",
                    "<p>Amazon EC2 Instances</p>"
                ]
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Compute",
            "question_plain": "Both AWS&nbsp;and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55030486,
            "assessment_type": "multi-select",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "question": "<p>Which of the following AWS services scale automatically without your intervention? (Choose TWO)</p>",
                "explanation": "<p>Amazon S3 and Amazon EFS are storage services that scale automatically in storage capacity without any intervention to meet increased demand.</p><p>Also, AWS Lambda dynamically scales function execution in response to increased traffic.</p><p>&nbsp;</p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>Amazon EMR is incorrect. </em></strong>Amazon EMR doesn’t scale on its own. You have to configure the AWS Auto Scaling feature to scale EMR automatically.</p><p><br></p><p><strong><em>Amazon EC2 is incorrect. </em></strong>Amazon EC2 does scale automatically, but first you have to create an Auto Scaling system by creating a launch configuration, an auto scaling group, and determine the desired, minimum and maximum number of instances to provision.</p><p><strong><em>&nbsp;</em></strong></p><p><strong><em>Amazon EBS is incorrect. </em></strong>Amazon Elastic Block Store (Amazon EBS) provides persistent block level storage volumes for use with Amazon EC2 instances in the AWS Cloud.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://d1.awsstatic.com/whitepapers/aws-overview.pdf\">https://d1.awsstatic.com/whitepapers/aws-overview.pdf</a></p>",
                "answers": [
                    "<p>Amazon S3</p>",
                    "<p>Amazon EMR</p>",
                    "<p>Amazon EC2</p>",
                    "<p>Amazon EBS</p>",
                    "<p>AWS Lambda</p>"
                ],
                "relatedLectureIds": ""
            },
            "correct_response": [
                "a",
                "e"
            ],
            "section": "AWS Best Practices & Design Principles",
            "question_plain": "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55030490,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "question": "<p>A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?</p>",
                "explanation": "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dedicated Instances are Amazon EC2 instances that run in a virtual private cloud (VPC) on hardware that's dedicated to a single customer. Dedicated Instances that belong to different AWS accounts are physically isolated at the hardware level. In addition, Dedicated Instances that belong to AWS accounts that are linked to a single payer account are also physically isolated at the hardware level. However, Dedicated Instances may share hardware with other instances from the same AWS account that are not Dedicated Instances.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Reserved instances\" and \"Spot instances\" and \"On-demand instances\" are incorrect. </em></strong>Reserved, Spot and On-demand instances all share hardware with other customers.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html</a></p>",
                "answers": [
                    "<p>Reserved instances</p>",
                    "<p>Spot instances</p>",
                    "<p>On-demand instances</p>",
                    "<p>Dedicated instances</p>"
                ],
                "relatedLectureIds": ""
            },
            "correct_response": [
                "d"
            ],
            "section": "AWS Pricing Models",
            "question_plain": "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55030494,
            "assessment_type": "multiple-choice",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "question": "<p>​ A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?</p>",
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; An Amazon Machine Image (AMI) provides the information required to launch an instance, which is a virtual server in the cloud. You must specify an AMI when you launch an instance, and you can launch as many instances from the AMI as you need. You can also launch instances from as many different AMIs as you need.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"By installing Aurora on EC2 and launching a new instance from it\" is incorrect. </em></strong>Amazon Aurora is a database service. You cannot use it to launch EC2 instances. Also, you cannot install Aurora on EC2. Aurora is a managed service that is already installed on the AWS Cloud. You can launch Amazon Aurora using the Amazon RDS Management Console.</p><p><br></p><p><strong><em>\"By creating an EBS Snapshot of the old instance\" is incorrect.</em></strong> Amazon EBS Snapshots are just backups for EBS volumes.</p><p><br></p><p><strong><em>\"By creating an AWS Config template from the old instance and launching a new instance from it\"&nbsp;is incorrect.</em></strong> AWS Config is used to record and evaluate configurations of your AWS resources, and is not used to launch new instances.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html\">https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html</a></p>",
                "answers": [
                    "<p>By installing Aurora on EC2 and launching a new instance from it</p>",
                    "<p>By creating an EBS Snapshot of the old instance</p>",
                    "<p>By creating an AMI from the old instance and launching a new instance from it</p>",
                    "<p>By creating an AWS Config template from the old instance and launching a new instance from it</p>"
                ],
                "relatedLectureIds": ""
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Compute",
            "question_plain": "​ A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55030476,
            "assessment_type": "multi-select",
            "prompt": {
                "feedbacks": [
                    "",
                    "",
                    "",
                    "",
                    ""
                ],
                "question": "<p>What are the benefits of using DynamoDB? (Choose TWO)</p>",
                "explanation": "<p>Benefits of DynamoDB include:</p><p>1- Performance at scale:</p><p>DynamoDB supports some of the world’s largest scale applications by providing consistent, single-digit millisecond response times at any scale. You can build applications with virtually unlimited throughput and storage.</p><p>2- Serverless:</p><p>With DynamoDB, there are no servers to provision, patch, or manage and no software to install, maintain, or operate. DynamoDB automatically scales tables up and down to adjust for capacity and maintain performance.</p><p>3- Highly available:</p><p>Availability and fault tolerance are built in, eliminating the need to architect your applications for these capabilities.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>\"Supports the most popular NoSQL database engines such as CouchDB and MongoDB\" is incorrect.</em></strong> DynamoDB does not use or support any other NoSQL database engines. You only have access to DynamoDB's built-in engine.</p><p><br></p><p><strong><em>\"Supports both relational and non-relational data models\" is incorrect. </em></strong>DynamoDB only supports the non-relational data model.</p><p><br></p><p><strong><em>\"Provides resizable instances to match the current demand\"&nbsp;is incorrect. </em></strong>DynamoDB does not provide instances (servers). DynamoDB is serverless with no servers to provision, patch, or manage and no software to install, maintain, or operate. DynamoDB automatically scales tables up and down to adjust for capacity and maintain performance.</p><p>&nbsp;</p><p><strong>References:</strong></p><p><a href=\"https://d1.awsstatic.com/whitepapers/aws-overview.pdf\">https://d1.awsstatic.com/whitepapers/aws-overview.pdf</a></p>",
                "answers": [
                    "<p>Supports the most popular NoSQL database engines such as CouchDB and MongoDB</p>",
                    "<p>Automatically scales to meet required throughput capacity</p>",
                    "<p>Offers extremely low (single-digit millisecond) latency</p>",
                    "<p>Supports both relational and non-relational data models</p>",
                    "<p>Provides resizable instances to match the current demand</p>"
                ],
                "relatedLectureIds": ""
            },
            "correct_response": [
                "b",
                "c"
            ],
            "section": "AWS Database",
            "question_plain": "What are the benefits of using DynamoDB? (Choose TWO)",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55030500,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Databases require high read \\ write performance and as such Amazon EBS is the correct answer. Amazon EBS volumes offer consistent and low-latency performance compared to other storage options. You can use EBS volumes as primary storage for data that requires frequent updates, such as the system drive for an instance or storage for a database application.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>Amazon ECR is incorrect. </em></strong>Amazon Elastic Container Registry (Amazon ECR) is a Docker container registry that allows developers to store, manage, and deploy container images and artifacts.</p><p><br></p><p><strong><em>AWS Storage Gateway is incorrect. </em></strong>AWS Storage Gateway is a hybrid storage service that enables your on-premises applications to seamlessly use AWS cloud storage. You can use the service for backup and archiving, disaster recovery, cloud data processing, storage tiering, and migration.</p><p><br></p><p><strong><em>Amazon S3 is incorrect. </em></strong>Amazon S3 is an object-level storage, not block-level storage. Object storage is not suited for use in a high read/write scenarios because of performance limitations. In contrast, Amazon EBS is a block-level storage that provides an extremely high performance compared to Amazon S3. Amazon S3 is well suited for storing static assets such as photos and videos, backups, and log files.</p><p><br></p><p><strong>References:</strong></p><p><a href='https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html\'>https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html</a></p>",
                "answers": [
                    "<p>Amazon ECR</p>",
                    "<p>AWS Storage Gateway </p>",
                    "<p>Amazon EBS </p>",
                    "<p>Amazon S3 </p>"
                ]
            },
            "correct_response": [
                "c"
            ],
            "section": "AWS Storage",
            "question_plain": "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 55030504,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "<p>What is the AWS Compute service that executes code only when triggered by events?</p>",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "explanation": "<p>        AWS Lambda is a serverless compute service that runs code in response to events. For example, you can create a Lambda function that creates thumbnail images when users upload images to Amazon S3. The Lambda event, in this case, will be the user’s uploads. Once a user uploads an image to Amazon S3, AWS Lambda will automatically run the application and creates a thumbnail for that image.</p><p><br></p><p><strong><em>The other options are incorrect:</em></strong></p><p><br></p><p><strong><em>AWS Transit Gateway is incorrect.</em></strong> AWS Transit Gateway is a network transit hub that customers can use to interconnect their virtual private clouds (VPCs) and their on-premises networks. AWS transit gateway simplifies how customers interconnect all of their VPCs, across thousands of AWS accounts and into their on-premises networks.</p><p><strong><em> </em></strong></p><p><strong><em>Amazon EC2 is incorrect. </em></strong>After provisioning an EC2 instance, it continues to run all the time until being stopped or terminated. But with Lambda, the application code will run only when triggered.</p><p><br></p><p><strong><em>Amazon CloudWatch is incorrect. </em></strong>Amazon CloudWatch is a monitoring service, not a compute service.</p><p><br></p><p><strong>References:</strong></p><p><a href=\"https://aws.amazon.com/lambda/\">https://aws.amazon.com/lambda/</a></p>",
                "answers": [
                    "<p>AWS Transit Gateway</p>",
                    "<p>AWS Lambda</p>",
                    "<p>Amazon CloudWatch</p>",
                    "<p>Amazon EC2 </p>"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "AWS Compute",
            "question_plain": "What is the AWS Compute service that executes code only when triggered by events?",
            "related_lectures": []
        }
    ]
};