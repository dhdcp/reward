function loadMainForm() {
  const htmlserv = HtmlService.createTemplateFromFile('main');
  const html = htmlserv.evaluate();
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html,"reWard Patient Management");
}

function createMenu(){
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('Enter Information');
  menu.addItem("Open Form", "loadMainForm");
  menu.addToUi();
}

function onOpen(){
  createMenu();
  
}
