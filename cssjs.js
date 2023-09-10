// script.js
const cssjs =  `
:root {
  --maincolor: #ff0000;
}

.tomato_color {
  fill: var(--maincolor);
}

.timer{
    width:60px;
    margin-right: 10px
;
}

.tpl {
    height:50px;
    display: flex;
    align-items: center; 
    padding: 10px; 
    border-top: 1px solid var(--main-border-color);
    align-content: center;
    justify-content: center;
}

.tomato {
    width: 25px;
    height: 25px;
    margin: 0px 30px 10px 10px;
}

.seed {
    width: 25px;
    height: 25px;
    margin: 0px 30px 10px 10px;
    cursor:pointer;
}

.stop {
    width: 25px;
    height: 25px;
    margin: 0px 30px 10px 10px;
    cursor:pointer;
}

.start-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 10px
}

.stop-button {
    background-color: #f04c0b;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

`;

module.exports = cssjs;