jQuery(function() {
    $.getJSON("data/desk/data.json", function (data) {
        console.log(data);
        for(var key of Object.keys(data)) {
            $('#selector').append("<h3 class='title'>"+key+"</h3>");
            for (var model of data[key]['images']){
                $('#selector').append("<img src='data/desk/"+model+"' data-z-index='"+data[key]['z-index']+"'/>");
            }
            $('#selector').append("<br/>");
            $("#preview").append("<img src='data/desk/" + data[key]["images"][0] + "' style='z-index:" + data[key]["z-index"] + "' id='layer-" + data[key]["z-index"] + "' />");    
        }
        $('#selector img').click(function(){
            $("#layer-" + $(this).data("z-index")).attr("src", $(this).attr("src"));
        });
    });
});