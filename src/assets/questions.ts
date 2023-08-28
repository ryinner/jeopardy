enum Values {
    One_hundred = 100,
    Two_hundred = 200,
    Three_hundred = 300,
    Five_hundred = 500,
}

export interface Question {
    question: string;
    answer: string;
}

export interface Category {
    name: string;
    questions: Record<Values, Question>
}

type Categories = Category[];


export const ValuesForPrint = [Values.One_hundred, Values.Two_hundred, Values.Three_hundred, Values.Five_hundred];

export const categories: Categories = [
    {
        name: 'VtM',
        questions: {
            100: {
                question: 'Name of stealth discipline?',
                answer: 'Obfuscate'
            },
            200: {
                question: 'What 2?',
                answer: 'Yes 2'
            },
            300: {
                question: 'What 2?',
                answer: 'Yes 2'
            }, 
            500: {
                question: 'What 2?',
                answer: 'Yes 2'
            },
        },
    },
    {
        name: 'Dnd',
        questions: {
            100: {
                question: 'Test long long long long long long long long long long long long long long long long',
                answer: 'long'
            },
            200: {
                question: 'What 2?',
                answer: 'Yes 2'
            },
            300: {
                question: 'What 2?',
                answer: 'Yes 2'
            }, 
            500: {
                question: 'What 2?',
                answer: 'Yes 2'
            },
        },
    },
    {
        name: 'Cthulhu',
        questions: {
            100: {
                question: 'Do you love Lovecraft?',
                answer: 'Yes'
            },
            200: {
                question: 'What 2?',
                answer: 'Yes 2'
            },
            300: {
                question: 'What 2?',
                answer: 'Yes 2'
            }, 
            500: {
                question: 'What 2?',
                answer: 'Yes 2'
            },
        },
    },
    {
        name: 'Pathfinder',
        questions: {
            100: {
                question: 'Wow last category for you',
                answer: 'Yes'
            },
            200: {
                question: 'What 2?',
                answer: 'Yes 2'
            },
            300: {
                question: 'What 2?',
                answer: 'Yes 2'
            }, 
            500: {
                question: 'What 2?',
                answer: 'Yes 2'
            },
        },
    }
]