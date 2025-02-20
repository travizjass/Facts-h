import React from 'react';
import './publication.css'
import Heading from '../../components/Heading/Heading';

const papers = [
    {
        "authors": ["Ashly Ann Jo", "Caina Rose Paul", "S. Arundhathi Nair", "Jeena Thomas", "Ebin Deni Raj"],
        "title": "Tabular Data Interpretation on COVID-19 Through Explainable Machine Learning.",
        "conference": "International Conference on Emerging Trends and Technologies on Intelligent Systems",
        "pages": "pp. 653-666",
        "publisher": "Springer Nature Singapore",
        "year": 2023
      },
      {
        "authors": ["J Bhagya", "Jeena Thomas", "Ebin Deni Raj"],
        "title": "Exploring Explainability and Transparency in Deep Neural Networks: A Comparative Approach.",
        "conference": "2023 7th International Conference on Intelligent Computing and Control Systems (ICICCS)",
        "pages": "pp. 664-669",
        "publisher": "IEEE",
        "year": 2023
      },
      {
        "authors": ["Ashly Ann Jo", "Ebin Deni Raj"],
        "title": "Post hoc Interpretability: Review on New Frontiers of Interpretable AI.",
        "conference": "Advances in Distributed Computing and Machine Learning: Proceedings of ICADCML 2023",
        "pages": "261-276",
        "publisher": "Springer",
        "year": 2023
      },
      {
        "authors": ["Sai Tejashwin Eswarapu", "S. Sesharhri", "Yashwanth Deshaboina", "P. Bhargawa", "Ashly Ann Jo", "Ebin Deni Raj"],
        "title": "Integrated Customer Analytics using Explainability and AutoML for Telecommunications.",
        "conference": "2023 2nd International Conference on Applied Artificial Intelligence and Computing (ICAAIC)",
        "pages": "pp. 228-235",
        "publisher": "IEEE",
        "year": 2023
      },
      {
        "authors": ["Thiruthuvaraj Rajasekhar", "Ashly Ann Jo", "Ebin Deni Raj"],
        "title": "Explainability to Business: Demystify Transformer Models with Attention-based Explanations.",
        "conference": "2023 2nd International Conference on Applied Artificial Intelligence and Computing (ICAAIC)",
        "pages": "pp. 680-686",
        "publisher": "IEEE",
        "year": 2023
      }
];

const Table = ({ papers }) => {
  return (
    <table className="papers-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Conference</th>
          <th>Pages</th>
          <th>Publisher</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {papers.map((paper, index) => (
          <tr key={index}>
            <td>{paper.title}</td>
            <td>{paper.authors.join(", ")}</td>
            <td>{paper.conference}</td>
            <td>{paper.pages}</td>
            <td>{paper.publisher}</td>
            <td>{paper.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Publication = () => {
  return (
      <div className='app'>
        <Heading  content="Publication"/>
      <Table papers={papers} />
    </div>
  );
};

export default Publication;

