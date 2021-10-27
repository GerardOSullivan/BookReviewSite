/* GET 'home' page */
const homepage = function(req, res){
res.render('index', { 
    title: 'Book Reviews',
    pageHeader:{
        title: 'Book Reviews',
        strapline: 'Find accurate reviews on your favourite books'
    },
    reviews: [{
        name:'Clean Code',
        description: 'What Is Clean Code? The code can be measured with either "good" or "bad" in the code review or by how ...',
        image: '/images/cleancode.jpg'
    },{
        name:'Software Testing',
        description: 'To learn about software-testing job opportunities and practice with sample scripts on how to automate software ...',
        image: '/images/softwaretesting.jpg'
    },{
        name:'Data Structures and Algorithms',
        description: 'In data science, algorithms and data structures make up the function and storage of data collecting. While coding  ...',
        image: '/images/DataStructures.jpg'
    },{
        name:'Data Structures in Python',
        description: 'The book explains how computers use algorithms to solve problems, creating many of the technology tasks we ...',
        image: '/images/DataStructures2.jpg'
    },{
        name:'Object Oriented Software Engineering',
        description: 'Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can ...',
        image: '/images/OOAD.jpg'
    },{
        name:'Object Oriented Analysis',
        description: 'Object-oriented analysis and design (OOAD) is a technical approach for analyzing and designing an ...',
        image: '/images/OOAD2.jpg'
    }] 
    });
};

module.exports = {
homepage
};