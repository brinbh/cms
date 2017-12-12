import {Document} from './document.model';

export const MOCKDOCUMENTS: any[] = [
  {
    docId: '1',
    docName: 'CIT 425 - Data Warehousing',
    docUrl: 'https://rkjdatawarehousing.wordpress.com/',
    children: [
      {
        docId: '2',
        docName: 'Project 1 – The Kimball Method',
        docUrl: 'https://rkjdatawarehousing.wordpress.com/projects/project-1-the-kimball-method/'
      },
      {
        docId: '3',
        docName: 'Project 2 – Data warehouses vs. marts',
        docUrl: 'https://rkjdatawarehousing.wordpress.com/projects/project-2-data-warehouses-vs-marts/'
      },
      {
        docId: '4',
        docName: 'Project 3 – The ETL Process',
        docUrl: 'https://rkjdatawarehousing.wordpress.com/projects/project-3-the-etl-process/'
      },
      {
        docId: '5',
        docName: 'Project 4 – Modify the OLTP design',
        docUrl: 'https://rkjdatawarehousing.wordpress.com/projects/project-4-oltp-modifications-to-erp-design/'
      },
      {
        docId: '6',
        docName: 'Project 5 – The OLAP design',
        docUrl: 'https://rkjdatawarehousing.wordpress.com/projects/project-4/'
      },
      {
        docId: '7',
        docName: 'Project 6 – Transforming data',
        docUrl: 'https://rkjdatawarehousing.wordpress.com/projects/transforming-data/'
      },
      {
        docId: '8',
        docName: 'Project 7 – MarkLogic',
        docUrl: 'https://rkjdatawarehousing.wordpress.com/projects/project-7-marklogic/'
      },
      {
        docId: '9',
        docName: 'Project 8 – Build a web application',
        docUrl: 'https://rkjdatawarehousing.wordpress.com/projects/project-8/'
      }
    ]
  },
  {
    docId: '10',
    docName: 'CIT 460 - Enterprise Development',
    docUrl: 'https://rkjackson.wordpress.com/',
    children: [
      {docId: '12', docName: 'Case 1 – Defining the requirements', docUrl: 'https://rkjackson.wordpress.com/cases/case-1/'},
      {docId: '13', docName: 'Case 2 – User Interface design', docUrl: 'https://rkjackson.wordpress.com/cases/case-2/'},
      {
        docId: '14', docName: 'Case 3 – Implementing Model Layer', docUrl: 'https://rkjackson.wordpress.com/cases/case-3/',
        children: [
          {'id': '36', docName: 'Team Assignment', 'description': 'Create your first JavaBean class'}
          , {'id': '37', docName: 'Individual Assignment', 'description': 'Create remaining JavaBean classes'}
        ]
      },
      {docId: '15', docName: 'Case 4 – Enterprise Java Session Beans', docUrl: 'https://rkjackson.wordpress.com/cases/case-4/'},
      {docId: '16', docName: 'Case 5 – Implementing the View', docUrl: 'https://rkjackson.wordpress.com/cases/case-5/'},
      {docId: '17', docName: 'Case 6 – A Framework for the View Layer', docUrl: 'https://rkjackson.wordpress.com/cases/case-6/'}
    ]
  },
  {
    docId: '20',
    docName: 'CIT 366 - Full Web Stack Development',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
    children: [
      {
        'docId': '21',
        'docName': 'Lesson 1 - JavaScript Best Practices',
        'docUrl': 'https://content.byui.edu/file/f0594919-9524-47eb-9f4d-5c7239c3c002/1/Lesson1Introduction.pdf'
      },
      {
        'docId': '22',
        'docName': 'Lesson 2 - The DOM and JQuery',
        'docUrl': 'https://content.byui.edu/file/c67e59fd-990c-4adc-9232-8027f847c8b9/1/Lesson2Introduction.pdf'
      },
      {
        'docId': '23',
        'docName': 'Lesson 3 - Angular 2 Framework 1',
        'docUrl': 'https://content.byui.edu/file/aa9b6af5-b882-48f5-8321-caca980e5ec9/1/Lesson3Introduction.pdf'
      },
      {
        'docId': '24',
        'docName': 'Lesson 4 - Angular 2 Framework 2',
        'docUrl': 'https://content.byui.edu/file/2c4ddd6c-dce4-408d-b581-f254a13e4d10/1/Lesson4Introduction.pdf'
      },
      {
        'docId': '25',
        'docName': 'Lesson 5 - Angular 2 Framework 3',
        'docUrl': 'https://content.byui.edu/file/66dc0765-22a7-4cd8-a184-942c607636fb/1/Lesson5Introduction.pdf'
      }
    ]
  },
  {
    docId: '40',
    docName: 'CIT 366 - Full Web Stack Development',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    docId: '41',
    docName: 'CIT 240 - Introduction to Networking',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    docId: '42',
    docName: 'CIT 370 - Computer Security I',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    docId: '43',
    docName: 'CIT 360 - Object Oriented Programming II',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    docId: '44',
    docName: 'CIT 470 - Computer Security II',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    docId: '45',
    docName: 'CIT 262 - Mobile Development',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    docId: '46',
    docName: 'CIT 230 - Web Page Development',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    docId: '47',
    docName: 'CIT 236 - Web Development',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    docId: '48',
    docName: 'CIT 340 - Networking II',
    docUrl: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
];
