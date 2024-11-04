function Hello(props) {
    return (
        <div>
            <h1>{props.message} {props.emoji} {props.name}</h1>
        </div>
    );
}
export default Hello;