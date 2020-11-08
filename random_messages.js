const adj = () => {
    const words = ['greatest', 'smallest', 'fastest', 'rarest'];
    let random = Math.floor(Math.random() * (words.length -1));
    let result = words[random];
    return result;
};

const noun = () => {
    const words = ['rabbit', 'train', 'helicopter', 'dinosaur', 'whale', 'jewel', 'actor', 'strawberry', 'spoon'];
    let random = Math.floor(Math.random() * (words.length -1));
    let result = words[random];
    return result;
};

const place = () => {
    const words = ['China', 'the world', 'India', 'Wisconsin', 'the sea', 'outer space', 'reality'];
    let random = Math.floor(Math.random() * (words.length -1));
    let result = words[random];
    return result;
};

const always = () => {
    let flip = Math.round(Math.random());
    if (flip === 0) {
        return 'always';
    } else {
        return 'never';
    }
};

const verb = () => {
    const words = ['shines', 'speaks true', 'sinks', 'causes pandemoneum'];
    let random = Math.floor(Math.random() * (words.length -1));
    let result = words[random];
    return result;
};

let string = `The ${adj()} ${noun()} in ${place()} ${always()} ${verb()}`;

console.log(string);