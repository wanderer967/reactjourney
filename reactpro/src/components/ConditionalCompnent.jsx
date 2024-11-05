import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
    let message;
    const display = false;
    if (display ){
        message = <h1>Message one</h1>
    } else {
    message = <h1>Message Two</h1>
    }
    return message;
}