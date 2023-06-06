import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import styled from 'styled-components';


const Cards = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const items = ["Uncover valuable insights and patterns hidden within your data. Our advanced analytics techniques and tools provide actionable intelligence to drive strategic decision-making and optimize business performance.", 'Seamlessly connect and consolidate data from various sources to create a unified view. Our data integration services ensure that you have a reliable, accurate, and up-to-date data foundation for analysis and reporting.', 'Build a scalable and secure data warehousing infrastructure tailored to your organization needs. Our experts design, implement, and manage data warehouses that enable efficient storage, retrieval, and management of large volumes of data.', 'Transform complex data into intuitive visualizations and interactive dashboards. Our data visualization solutions enable you to communicate insights effectively, enabling stakeholders to understand complex information at a glance.', 'Establish robust data governance frameworks to ensure data quality, security, and compliance. We help you define data policies, implement data governance processes, and establish controls to protect and manage your data effectively.', 'Highlight your proficiency in handling large volumes of data and working with big data technologies such as Apache Hadoop, Spark, or other distributed computing frameworks. Showcase your knowledge of data processing, data streaming, and real-time analytics.', 'Emphasize your experience in leveraging cloud platforms such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform for data storage, processing, and analytics. Highlight your expertise in cloud data services, serverless computing, and scalability.', 'Strategy and Consulting: Highlight your ability to provide strategic guidance and consulting services to organizations looking to develop a data-driven culture. Showcase your expertise in defining data strategies, roadmaps, and conducting data maturity assessments.', 'Emphasize your skills in data engineering tasks such as data extraction, data transformation, data pipeline development, and data automation. Mention your proficiency in programming languages such as Python, R, SQL, or other relevant technologies.', ' Showcase your understanding of data security best practices, compliance regulations (such as GDPR or CCPA), and data privacy measures. Highlight your expertise in implementing data encryption, access controls, and data anonymization techniques.'];
  const titles = ["Data Analytics", "Data Integration", "Data Warehousing", "Data Visualization", "Data Governance", "Big Data Technologies", "Cloud Computing", "Data Strategy and Consulting", "Data Engineering", "Data Security and Privacy"]
  const duplicatedItems = [...items, ...items, ...items,...items,...items,...items,];
  const duplicatedtitles = [...titles, ...titles, ...titles,...titles,...titles,...titles,];

  const Cont = styled.div`
    width : 1600px;
    margin-bottom:50px;
`;

const CardHeader = styled.h3`
font-size: 18px;
font-weight: bold;
margin-bottom: 10px;
color:black;
font-weight:900;
font-size:2rem;
`;


const Marg = styled.div`
margin-top : 300px;
text-align:center;
border: 3px dotted green;
border-radius: 20px;
width:95%;
margin-left:50px;
`;






    
  return (
    <>
       <Marg>
        <h1>Our Services</h1>
      <hr></hr>
      <Cont>
      <Carousel breakPoints={breakPoints} isRTL={false} enableMouseSwipe={true}   itemsToScroll={1}  enableAutoPlay={true} autoPlaySpeed={2000} easing="ease" transitionMs={1000}  enableSwipe={true} pagination={false} preventDefaultTouchmoveEvent={true}>
          {duplicatedItems.map((item, index) => (
              <Item key={index}>
                <CardHeader>{duplicatedtitles[index]}</CardHeader>
                {item}
              </Item>
            ))}
          
        </Carousel>
      </Cont>

      </Marg>
    </>
  )
}

export default Cards
