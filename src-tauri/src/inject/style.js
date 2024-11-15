window.addEventListener('DOMContentLoaded', _event => {
  // Customize and transform existing functions
  const contentCSS = `
    .wr_horizontalReader .wr_horizontalReader_app_content .readerTopBar {
      max-width: calc(100vw - 50px);
      width: 100%;
    }
    .wr_horizontalReader .readerChapterContent {
      border-radius: 0px;
      width: 100%;
      max-width: none;
      height: calc(100%);
    }
    .wr_horizontalReader .readerControls {
      right: 10px;
      opacity: 0;
    }
    .wr_horizontalReader .readerControls:hover {
      opacity: 1;
    }
    .isHorizontalReader {
      display: none;
    }
    .wr_horizontalReader .readerCatalog, .wr_horizontalReader .readerNotePanel {
      width: 360px;
    }
    .readerCatalog {
      top: 0;
      bottom: 0;
    }
    .reader-font-control-panel-wrapper .font-panel-content {
      width: 360px;
      height: 100vh;
      max-height: none;
    }
  const contentStyleElement = document.createElement('style');
  contentStyleElement.innerHTML = contentCSS;
  document.head.appendChild(contentStyleElement);
});
