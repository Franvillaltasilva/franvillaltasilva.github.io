import React, { Component } from 'react'
import Lottie from 'react-lottie'

class Animation extends Component {

  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: this.props.src,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={this.props.height}
              width={this.props.width}
        />
      </div>
    )
  }
}

export default Animation;