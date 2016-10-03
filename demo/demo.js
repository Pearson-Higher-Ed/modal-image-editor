function init() {

  // Demo eventing API
  document.body.dispatchEvent(new CustomEvent('o.InitModalImageEditor', {
    detail: {
      elementId            : 'app',
      contentTemplateLarge : true,
      footerVisible        : true
    }
  }));

}



window.onload = init;
