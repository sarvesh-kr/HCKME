

let historyPanelButtons = () => {

    var historyPanelButtons = document.createElement('div');
    historyPanelButtons.id = 'historyPanelButtonsId';

    var historyButton1 = document.createElement('button');
    historyButton1.className = 'historyButton1';
    historyButton1.innerHTML = 'Button-1';

    document.querySelector('#historyPanelButtons').appendChild(historyButton1);
    document.querySelector('#post2').appendChild(historyPanelButtons);
}