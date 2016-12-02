import React, { Component } from 'react';
import ModalContent from './ModalContent';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      modal: false,
      message: ""
    }

    this.handleClickButton = this.handleClickButton.bind( this )
    this.handleCloseModal = this.handleCloseModal.bind( this )
  }
  handleClickButton( message ) {
    this.setState({
      modal: true,
      message: message
    })
  }
  handleCloseModal( event ) {
    if ( event.target.nodeName === 'BUTTON' || event.target.attributes.class.nodeValue.includes('modal-container') ) {
      this.setState({
        modal: false,
        message: ""
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Quick Beer Facts</h2>
          <p>Click a button to learn a quick fact about the topic</p>
        </div>

        <button
          onClick={
            () => this.handleClickButton( "In 1516, the Reinheitsgebot (German Beer Purity Law) was put in to effect. This law helped to standardize brewing in Germany, only allowing malt, hops and water to be included in beer. Yeast, which at the time was not discovered, would later be added to the law." )
          }
        >
          German Beer Law
        </button>

        <button
          onClick={
            () => this.handleClickButton( "Lambic is a sour style that is ingrained in Belgian beer history. To be truly lambic, the beer must be brewed in the traditional Payottenland region in Belgium and make use of wild-fermentation techniques. As it has been done since the brew's inception, lambic is fermented strictly with airbone microbes in the region, truly giving this style its own sense of terrior." )
          }
        >
          Belgian Beer
        </button>

        <div onClick={ this.handleCloseModal } className={ (this.state.modal ? "modal-show " : "modal-hide ") + "modal-container" }>
          <ModalContent
            message={ this.state.message }
            onCloseModal={ this.handleCloseModal } />
        </div>

      </div>
    );
  }
}

export default App;
