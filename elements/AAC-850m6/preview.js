function(instance, properties) {

    let box = $(`<div></div>`);
    instance.canvas.append(box);
    box.css('background-color', 'blue');
    box.height('height', properties.bubble.height);
    box.width('width', properties.bubble.width);

}
