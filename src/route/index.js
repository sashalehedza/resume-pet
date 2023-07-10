// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: { firstname: 'Sasha', lastname: 'Lehedza' },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Lviv, Ukraine',
}
var footer = {
  social: {
    twitter: {
      text: 'twitter',
      href: 'https://twitter.com/lifetose',
    },
    linkedin: {
      text: 'linkedin',
      href: 'https://www.linkedin.com/in/sasha-lehedza-b895641b9/',
    },
  },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: { title: 'Resume | Summary' },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Pet project for parsing sport betting data from
      different platforms ( odds ) and sport statistics
      ( tournament position, goals etc), analyzing by
      simple mathematics models and preparing
      probability for such events like: money line -
      first win / draw / second win, totals etc.`,
      },
      experience: {
        title: 'Other experience',
        text: `  Pet project for parsing sport betting data from
    different platforms ( odds ) and sport statistics
    ( tournament position, goals etc), analyzing by
    simple mathematics models and preparing
    probability for such events like: money line -
    first win / draw / second win, totals etc.`,
      },
    },
    footer,
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: { title: 'Resume | Skills' },
    header,
    main: {
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        { name: 'CSS', point: 0, isTop: false },
        { name: 'JS', point: 8, isTop: true },
        { name: 'React.js', point: null, isTop: false },
      ],
      hobbies: [
        { name: 'Hobbie 1', isMain: true },
        { name: 'Hobbie 2', isMain: false },
        { name: 'Hobbie 3', isMain: true },
      ],
    },
    footer,

    // ↙ сюди вводимо JSON дані
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: { title: 'Resume: Education' },
    header,
    main: {
      educations: [
        { name: 'LNU', isEnd: true },
        { name: 'KPU', isEnd: false },
        { name: 'PTU', isEnd: true },
      ],
      certificates: [
        { id: 1, name: 'Certificate 1' },
        { id: 2, name: 'Certificate 2' },
        { id: 3, name: 'Certificate 3' },
      ],
    },
    footer,

    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: { title: 'Resume: Work' },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: '22.03.2023',
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',
              about:
                'Airbnb competitor. High- load application for searching apartments',
              stacks: [
                { name: 'React.js' },
                { name: 'HTML / CSS' },
                { name: 'Nodejs' },
              ],
              awards: [
                { name: 'Award 1' },
                { name: 'Award 2' },
              ],
              stackAmount: 3,
              awardAmount: 2,
            },
          ],
        },
      ],
    },
    footer,
    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
