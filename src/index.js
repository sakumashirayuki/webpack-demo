import React from "react";
import ReactDom from "react-dom";
import _ from "lodash";

function App(){
    return (
        <div>
            <div>{_.join(['This', 'is', 'App'], ' ')}</div>
        </div>
    );
};

ReactDom.render(<App />, document.getElementById('root'));