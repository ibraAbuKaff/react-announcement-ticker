import React from "react";
import "./styles/index.css";

class NewsTicker extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            tickerBorderColor: props.tickerBorderColor || "#C0C0C0",

            title: props.title || "Latest News",
            titleBackground: props.titleBackground || "#990000",

            newsList: props.newsList || [],

        };
    }

    render = () => {

        return (

            <div id="tickr-box" style={{background: this.state.tickerBorderColor}}>
                <div className="tickr-title" style={{background: this.state.titleBackground}}>{this.state.title}</div>
                <div id="tickr-scroll">
                    <ul>

                        {
                            this.state.newsList.map((newsListItem, newsListItemKey) => {

                                if (newsListItem.link.length !== 0) {
                                    return (

                                        <li key={newsListItemKey}><a href={newsListItem.link.length}>{newsListItem.text || ""}</a></li>
                                    )

                                } else {
                                    return (

                                        <li key={newsListItemKey}>{newsListItem.text || ""}</li>
                                    )

                                }


                            })
                        }


                    </ul>
                </div>
            </div>

        );

    }

}

export {NewsTicker};

