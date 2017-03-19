import $ from 'jquery';


const showMessage = () => {
    var app = $('#app');
    var newElem = $('<h1/>',{ "id": 'message', "class": 'message' });
    newElem.text('you received secret message from aliens');

    newElem.appendTo(app);
}

const showImage = (img) => {
    var app = $('#app');
    var imgCont = $('<div/>', { "class":"imgCont" } );
    imgCont.appendTo(app);
    var imgElem = $('<img/>', { "class": "imgElem", "src":img } );
    imgElem.appendTo(imgCont);
};

const showSvg = (src) => {
    var app = $('#app');
    var svgCont = $('<div/>', { "class":"svgCont" } );
    svgCont.appendTo(app);
    var svgElem = $('<img />', { "class": "svgElem", "src":src } );
    //var svgElem = $(src);
    svgElem.appendTo(svgCont);
};


export {
    showMessage,
    showImage,
    showSvg,
}
