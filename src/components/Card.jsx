import Icon from "./Icon";

function Card(props) {
    return (
        <div className="card" onClick={() => props.handleClick(props)}>
            <div className="icon-container" style={{ backgroundColor: props.bgColor, display: props.display ? 'flex' : 'none' }}>
                <Icon svgNo={props.svgNo}/>
            </div>
        </div>
    )
}

export default Card;