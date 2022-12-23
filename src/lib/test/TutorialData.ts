import description from './short_description.txt?raw';
const data : TutorialData = {
    campaign_code: "abc",
    name: "Robot Lobotomy",
    description,
    slides: [{
        title: "Welcome to Robot Lobotomy!",
        body: "Before we begin, we strongly recommend you have both the intro information and character sheets handy."
    }, {
        title: "Another example slide",
        body: "Lorem ipsum text"
    }, {
        title: "Another example slide",
        body: "Lorem ipsum text"
    }]
}

export default data;