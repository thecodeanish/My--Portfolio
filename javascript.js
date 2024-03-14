// Script for Auto typing animation in head 
document.addEventListener("DOMContentLoaded", function() {
    const profile = ["Web Developer", "UI/UX Designer","Freelancer"];
    const typing = new AutoTyping('.auto-type', profile, {
        typeSpeed: 50,
        deleteSpeed: 50,
        waitBeforeDelete: 2000,
        waitBetweenWords: 500,
    });
    typing.start()
});
