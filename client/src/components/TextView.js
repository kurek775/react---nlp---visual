import {useContext} from "react";
import {DataContext} from "../DataContext";
import DOMParserReact, {parse} from 'dom-parser-react'

function TextView() {
    const {text, setText} = useContext(DataContext);
    const {data, setData} = useContext(DataContext);

    let matchedText = data !== "" ? [...new Set(data.map(entity => entity.matchedText))] : null
    const textArr = text.split("\r\n");


    function MatchText(line) {
        for (let t in matchedText) {

            if (line.includes(" " + matchedText[t] + "/") || line.includes(" " + matchedText[t] + ",") || line.includes(" " + matchedText[t] + "'") || line.includes( "(" + matchedText[t] + ")") || line.includes( " " + matchedText[t] + ".") || line.includes( " " + matchedText[t] + " ")) {

                line = line.replace(matchedText[t], "<strong>" + matchedText[t] + "</strong>");


            }

        }

        return "<span>" + line + "</span>"
    }


    return (<div>
            {textArr.map(line => <p>{
                <DOMParserReact source={MatchText(line)}/>
            }</p>)}
        </div>

    )
}

export default TextView;