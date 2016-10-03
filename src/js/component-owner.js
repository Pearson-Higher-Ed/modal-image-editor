import React, { PropTypes, Component } from 'react';
import { intlShape, injectIntl }       from 'react-intl';
import { messages }                    from './defaultMessages';
import Modal                           from 'react-modal';
import AvatarEditor                    from 'react-avatar-editor';


class ComponentOwner extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.shape({
      elementId            : PropTypes.string.isRequired,
      locale               : PropTypes.string,
      contentTemplateLarge : PropTypes.bool,
      footerVisible        : PropTypes.bool
    })
  };

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen  : false,
      customStyles :{
        overlay : {
          backgroundColor : 'rgba(0, 0, 0, 0.7)',
          maxHeight       : '100%',
          overflow        : 'auto',
          paddingTop      : '20%'
        }
      }
    };

    this.toggleModal         = _toggleModal.bind(this);
    this.renderFooter        = _renderFooter.bind(this);
    this.toggleTemplate      = _toggleTemplate.bind(this);
    this.trapFocus           = _trapFocus.bind(this);
    this.afterOpen           = _afterOpen.bind(this);
    this.toggleModalKeyPress = _toggleModalKeyPress.bind(this);

  };

  componentWillMount() {

    const { intl, data } = this.props;

    this.setState({
      contentTemplateLarge  : data.contentTemplateLarge,
      footerVisible         : data.footerVisible,
      initiatingButtonText  : intl.formatMessage(messages.initiatingButtonText),
      headerTitle           : intl.formatMessage(messages.headerTitle),
      bodyText              : intl.formatMessage(messages.bodyText),
      toggleTemplate        : this.toggleTemplate(data.contentTemplateLarge),
      renderFooter          : this.renderFooter(data.footerVisible,
                                                intl.formatMessage(messages.modalSaveButtonText),
                                                intl.formatMessage(messages.modalCancelButtonText)
                                               )
    });

  };


  render() {

    const { modalIsOpen,
            toggleTemplate,
            renderFooter,
            customStyles,
            initiatingButtonText,
            headerTitle,
            bodyText
          } = this.state;

    return (
      <div>

        <button onClick={this.toggleModal} tabIndex={this.trapFocus(modalIsOpen)} >{initiatingButtonText}</button>

        <Modal
          onRequestClose = {this.toggleModal}
          className      = {toggleTemplate}
          onAfterOpen    = {this.afterOpen}
          isOpen         = {modalIsOpen}
          style          = {customStyles}
        >

          <div className="modalContent">

            <div className="modalHeader">
              <i className="pe-icon--times close" tabIndex="0" onClick={this.toggleModal} onKeyDown={e => this.toggleModalKeyPress(e)}></i>
              <span className="pe-sr-only">Close</span>
              <h2 className="heading pe-title">{headerTitle}</h2>
            </div>

            <div className="modalBody">
              <p>{bodyText}</p>
                <AvatarEditor
                  ref    = "editor"
                  image  = "test.jpg"
                  width  = {250}
                  height = {150}
                  border = {15}
                  color  = {[0, 0, 0, 0.5]} // RGBA
                  scale  = {1.2} />
            </div>

            {renderFooter}

          </div>

        </Modal>
      </div>
    )

  };

};


export default injectIntl(ComponentOwner);




function _toggleModal() { this.setState({modalIsOpen: !this.state.modalIsOpen}); };

function _toggleModalKeyPress(e) {
  if (e.keyCode === 32) {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }
};

function _trapFocus(modalIsOpen) {
  return (modalIsOpen) ? '-1' : '0';
};

function _afterOpen() {
  return document.getElementsByClassName('pe-icon--times')[0].focus();
};

function _toggleTemplate(contentTemplateLarge) {
  return (contentTemplateLarge) ? 'pe-template__static-large' : 'pe-template__static-small';
};

function _renderFooter(footerVisible, modalSaveButtonText, modalCancelButtonText) {

  if (footerVisible) {
    return(
      <div className="modalFooter">
        <button onClick={console.log('¡Do Something!')} className="modalSave pe-btn pe-btn--primary">{modalSaveButtonText}</button>
        <button onClick={this.toggleModal} className="modalCancel pe-btn">{modalCancelButtonText}</button>
      </div>
    )
  };

};
