// import TextModal from '../main'; // to demo direct API usage

function init() {

  // Demo eventing API
  document.body.dispatchEvent(new CustomEvent('o.InitModalImageEditor', {
    detail: {
      elementId            : 'app',
      contentTemplateLarge : true,
      footerVisible        : true
    }
  }));

  // Demo direct API
  // new ModalImageEditor({
  //   detail: {
//     elementId            : 'app',
//     contentTemplateLarge : true,
//     footerVisible        : true
//   }
// }));

}



window.onload = init;
