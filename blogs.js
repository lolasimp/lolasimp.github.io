var blogs = [
    {
        id: "Starting the Journey",
        date: "2/26/2018",
        entry: "My journey into coding truly began two weeks ago. I came in the classroom not knowing what to expect, but knowing that I plan to finish. So far github branches have been a pain in the YOU_KNOW_WHAT! I have no error with it on a normal occasion github. I must admit after doing the repo assignment I  really had no choice but to get the understanding(insert emoji of yellow girl and the shoulder shrug). Although this journey has just began I feel that I am learning the things needed to have a successful career. For those who dont know about github...Become a Developer and you shall find out. Just kidding, let me explain.Github, starts with a understanding of Git, which is a open source version control where developers create i.e. apps by making several changes before releasing as an active app. The version control allows for storing updates. It makes public your code allowing other members to contribute to your work as well. Now that we know what github is let me share a few cool things you can do. At the start of each project you create a repository. This is also known as a repo and its where all files for your one project can be stored. This makes your work easily accessible for you and others if sharing. You also have the ability to contribute to other projects. You simply request to contribute and based off you repo the owner can allow you to make changes in their projects. It's also a smart way to connect with fellow developers. There is a follow feature that allows for additional communication. You are able to create a profile."
    },
    {
        id: "Eyes Wide Open...",
        date: "3/5/2018",
        entry: 'Let\'s just say JavaScrpit got "REAL" this week. I have a Love/Hate relationship with it currently. We learn one thing thinking life is good until we get the daily challenges and life throws us handgrenades. This is how it\'s been this week. I was told this would happen so Im not completely shedding tears. Now, that Im done with the emotions lets get to the meat of it all. I absolutely struggled with Arrays. I understand the concept but once the for loop comes into play I felt like a IDIOT! I honestly had no clue how to take what I know to be true and make sense and place in a for loop. I was fortunate enough to have the time to sit down with an instructor and talk it out. Im hoping to gain a better understanding in the next few days by doing more challenges. All is Well!!'
    },
    {
        id:"It's Getting Interesting!",
        date: "3/12/2018",
        entry: "I'm feeling much better this week. I feel that I'm getting a better understanding of what is going on. Now its just me thinking more logically in my for loops. This is truly my only problem. I will look a bit more at functions and for loops to get a better understanding."
    },
    {
        id: "Moving from VAR to LET and CONST",
        date: "3/27/2018",
        entry: "I definitely hate the feeling of uncertainty. When introduced at first glance you wonder why we didnt learn this way in the beginning. I do understand why we learn 'Vanilla' JavaScript, but it still sucks. Anywho, I can grasps the meaning when creating a for loop but I still don't grasp all the elements needed toadd in the for loop to produce the answer I want. I'm working on this concept one day at a time. Once I discover I need to add a 'forEach' or a 'join()/split()' I feel like I just need to learn more rules for things to work in the ways the should. In our last group project I chose to work on the page needing loops because I wanted to better my understanding. I feel like Im taking the neccessary steps needed to better my understanding but sometimes I feel lost."
    }
];

// console.log(blogs)


function printToDom (stringToPrint, divId){
    var thingToPrint = document.getElementById(divId);
    if(thingToPrint){
        thingToPrint.innerHTML += stringToPrint;
    }
};


function linkBlogs (blogsArray){
    for (var i = 0; i < blogsArray.length; i++){
    var blogId = blogsArray[i].id;
    var blogDate = blogsArray[i].date;
    var blogEntry = blogsArray[i].entry;
    var blogString = "";
     blogString += '<div class = "blogs">';
     blogString += '<h1>' + blogId + '</h1>';
     blogString += '<h3>' + blogDate + '</h3>';
     blogString += '<p>' + blogEntry + '<p>'; 
     blogString += '</div>';

       printToDom(blogString, "blog-main-container");
    };
}

linkBlogs(blogs);