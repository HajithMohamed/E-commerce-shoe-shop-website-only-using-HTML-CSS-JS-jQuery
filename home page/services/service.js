
  $(document).ready(function() {
    function setupImageHover(imageId, divId, paraId) {
        $(imageId).on("click", function() {
            $(imageId).css("width", "20%");
            $(divId).animate({width: "80%"});
            $(paraId).fadeIn();
        });
        
       
    }

    setupImageHover("#image1", "#div1", "#para1");
    setupImageHover("#image2", "#div2", "#para2");
    setupImageHover("#image3", "#div3", "#para3");
});
  