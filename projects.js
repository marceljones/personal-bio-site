const myProjects = {
  [
    {
      title: "Cool Project", 
      screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
      description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
      technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
      available: true,
      url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
      githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux" 
    }
  ]
}


//Create two functions:
// printToDom: This function should accept 2 arguments: the ID of the element to print it in and a string to print.
// createProjectCards: This function should loop through the projects array and build up a 'dom string' (a complex HTML structure represented by a string) that includes all the information on the project. It should call the printToDom function for each project (hint: For this one, you'll be printing to the div with the ID projectsPage).
// Only print 'available' projects. In your createProjectCards function, add logic to only show the project on the page if it has a value of true in the available property.
// Call the createProjectCards(); function in an init function that runs when the project loads.//
