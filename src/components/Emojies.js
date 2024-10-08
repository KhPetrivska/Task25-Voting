import React from "react";
import reactDom from "react-dom";

import angryEm from "../img/angry.png";
import elatedEm from "../img/elated.png";
import frenchEm from "../img/french.png";
import happyEm from "../img/happy.png";
import sherlockEm from "../img/sherlock.png";
import "./emojiesStyles.css";

export default class Emojies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:
      {
        angry: 0,
        elated: 0,
        french: 0,
        happy: 0,
        sherlock: 0,
      } 
    };

  }

  componentDidMount() {
    const savedCounts = localStorage.getItem("emojiCounter");
    if (savedCounts) {
      this.setState({ count: JSON.parse(savedCounts) });
    }
  }

  onClick = (emoji) => {
    this.setState((prevState) => ({
        count: {...prevState.count,[emoji]: prevState.count[emoji] + 1,
        },
      }),
      () => {
        localStorage.setItem("emojiCounter", JSON.stringify(this.state.count));
      }
    );
  };
  clearResults = () => {
    this.state = {
      count:
      {
        angry: 0,
        elated: 0,
        french: 0,
        happy: 0,
        sherlock:0
      }
    }
    localStorage.setItem("emojiCounter", JSON.stringify(this.state.count));
    this.componentDidMount()
    
  };


  render() {
    return (
      <>
      <div className="em-container">
        <div className="em-counter-img">
          <img onClick={()=>this.onClick('angry')} className="em-img" src={angryEm} />
          <span className="em-counter">
            <p>{this.state.count.angry}</p>
          </span>
        </div>
        <div className="em-counter-img">
          <img onClick={()=>this.onClick('elated')} className="em-img" src={elatedEm} />
          <span className="em-counter">
          <p>{this.state.count.elated}</p>
          </span>
        </div>
        <div className="em-counter-img">
          <img onClick={()=>this.onClick('french')}  className="em-img" src={frenchEm} />
          <span className="em-counter">
          <p>{this.state.count.french}</p>
          </span>
        </div>
        <div className="em-counter-img">
          <img onClick={()=>this.onClick('happy')}  className="em-img" src={happyEm} />
          <span className="em-counter">
          <p>{this.state.count.happy}</p>
          </span>
        </div>
        <div className="em-counter-img">
          <img onClick={()=>this.onClick('sherlock')}  className="em-img" src={sherlockEm} />
          <span className="em-counter">
          <p>{this.state.count.sherlock}</p>
          </span>
        </div>
        </div>
        <div className='secondary-button-container'>
    <button className='secondary button' onClick={this.clearResults}>Clear results</button>
    </div>
      </>
    );
  }
}
