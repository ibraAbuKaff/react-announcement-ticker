# react-announcement-ticker
React JS Announcement/News Ticker

<h2>How to install ?</h2> 
<pre>
yarn add react-announcement-ticker
</pre>

<h2>Example:</h2>

![http://g.recordit.co/3CUoW9WPly.gif](http://g.recordit.co/3CUoW9WPly.gif)

<h1>How to use it ? </h1>

```
import React, {Component} from "react";
import {NewsTicker} from "react-announcement-ticker";


class App extends Component {
    render() {
        return (
            <div className="App">

                    <NewsTicker
                        tickerBorderColor="#A7BFE8"

                        title={"Latest News Here"}
                        titleBackground={"linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"}
                        
                        newsList={[
                            {
                                text: "Facebook is making its biggest executive shuffle in company",
                                link: "http://fb.com"
                            },
                            {
                                text: "The Best Views of NASA's InSight Mars Lander Launch?",
                                link: "http://google.com"
                            },
                            {
                                text: "Are Jupiter and Venus Messing With Earth's Climate?",
                                link: "http://cnn.com"
                            }
                        ]}
                    />
            </div>
        );
    }
}

export default App;


```
