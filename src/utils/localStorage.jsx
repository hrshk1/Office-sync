const employees = [
    {
        "ID": 1,
        "firstname": "Kumar",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Fix Bug",
                "description": "Fix a critical bug in the system.",
                "date": "2025-04-02",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Design Logo",
                "description": "Design a new logo for the client.",
                "date": "2025-04-02",
                "category": "Design",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Write Content",
                "description": "Write blog content for the website.",
                "date": "2025-04-02",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "ID": 2,
        "firstname": "Harsh",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Optimize SEO",
                "description": "Improve search engine optimization.",
                "date": "2025-04-02",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "User Testing",
                "description": "Conduct user testing for new feature.",
                "date": "2025-04-02",
                "category": "Research",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Deploy App",
                "description": "Deploy the application to production.",
                "date": "2025-04-02",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "ID": 3,
        "firstname": "Shubham",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Create Mockup",
                "description": "Create a new UI mockup for the dashboard.",
                "date": "2025-04-02",
                "category": "Design",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Code Review",
                "description": "Review recent code changes.",
                "date": "2025-04-02",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Customer Support",
                "description": "Respond to customer inquiries.",
                "date": "2025-04-02",
                "category": "Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "ID": 4,
        "firstname": "Yash",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Data Analysis",
                "description": "Analyze recent sales data.",
                "date": "2025-04-02",
                "category": "Research",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Fix Bug",
                "description": "Fix a critical bug in the system.",
                "date": "2025-04-02",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Design Logo",
                "description": "Design a new logo for the client.",
                "date": "2025-04-02",
                "category": "Design",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "ID": 5,
        "firstname": "Anshum",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Write Content",
                "description": "Write blog content for the website.",
                "date": "2025-04-02",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Optimize SEO",
                "description": "Improve search engine optimization.",
                "date": "2025-04-02",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "User Testing",
                "description": "Conduct user testing for new feature.",
                "date": "2025-04-02",
                "category": "Research",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];


const admin = [{
    "ID": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
};
