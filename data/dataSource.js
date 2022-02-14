const TasksJson = [
    {
        id: 1, priority: 3, description: "Learn Css Basics", completed: false, subTasks: [
            { id: 11, priority: 2, description: "Read article from [https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics]", completed: false },
            { id: 12, priority: 3, description: "Do samples on your own!", completed: false },
        ]
    },
    {
        id: 2, priority: 2, description: "Learn advanced Css", completed: false, subTasks: [
            { id: 21, priority: 2, description: "Read article from [https://web.dev/learn/css/?gclid=Cj0KCQiAmKiQBhClARIsAKtSj-mFsIGhyl5sf4VFOrv5jtO15_T-Ewa7A2pHjv9jBrdba6mGJxRBzj0aAhpDEALw_wcB]", completed: false },
            { id: 22, priority: 3, description: "Do samples on your own!", completed: false },
        ]
    },
    {
        id: 3, priority: 3, description: "Learn HMTL basics", completed: false, subTasks: [
            { id: 31, priority: 2, description: "Read article from [https://www.w3schools.com/html/html_basic.asp]", completed: false },
        ]
    },
    {
        id: 4, priority: 1, description: "Learn Semantic HMTL", completed: false, subTasks: [
            { id: 41, priority: 2, description: "Read article from [https://www.w3schools.com/html/html5_semantic_elements.asp]", completed: false },
        ]
    },
    {
        id: 5, priority: 2, description: "Learn Bootstrap CSS Framework for React", completed: false, subTasks: [
            { id: 51, priority: 2, description: "Read article from [https://react-bootstrap.github.io/layout/grid/]", completed: false },
            { id: 52, priority: 2, description: "Do exersized on your own.", completed: false },
            { id: 53, priority: 2, description: "Create a responsive design.", completed: true },
        ]
    },
    {
        id: 6, priority: 3, description: "Learn Basics Of Javsacript", completed: false, subTasks: [
            { id: 61, priority: 3, description: "Take courses from [https://www.freecodecamp.org/news/learn-javascript-free-js-courses-for-beginners/]", completed: false },
            { id: 62, priority: 3, description: "Do exersized on your own.", completed: false },
        ]
    },
    { id: 7, priority: 3, description: "Learn NPM Package Manager Basics", completed: true },
    { id: 7, priority: 1, description: "Learn Yarn Package Manager Basics", completed: false },
];


const PRIORITY = [
    "None",
    "Low",
    "Medium",
    "High"
];
Object.freeze(PRIORITY);



export { TasksJson, PRIORITY };

