/**
 * Created by Administrator on 2015/5/21.
 */
$(function(){
    $(document).keydown(function(e){
        switch(e.which)
        {
            case  keyCode.keyLeft:
                keyStatus.keyLeftStatus = true;
                break;
            case  keyCode.keyRight:
                keyStatus.keyRightStatus = true;
                break;
            case  keyCode.keyUp:
                keyStatus.keyUpStatus = true;
                break;
            case keyCode.keyDown:
                keyStatus.keyDownStatus = true;
                break;
            case  keyCode.keySpace:
                keyStatus.keySpaceStatus = true;
                break;
        }
    }).keyup(function(e){
        switch(e.which)
        {
            case  keyCode.keyLeft:
                keyStatus.keyLeftStatus = false;
                break;
            case  keyCode.keyRight:
                keyStatus.keyRightStatus = false;
                break;
            case  keyCode.keyUp:
                keyStatus.keyUpStatus = false;
                break;
            case  keyCode.keyDown:
                keyStatus.keyDownStatus = false;
                break;
            case  keyCode.keySpace:
                keyStatus.keySpaceStatus = false;
                break;
        }
    });



    var director = new Director();
    director.ctx = $("#game_canvas")[0].getContext("2d");
    director.back = new Background(director.ctx);

    director.backAudio = $("#backAudio")[0];
    director.fireAudio=$("#fireAudio")[0];
    director.player = new Player(director.ctx, director.bullets, director.fireAudio);
    director.enimes.push(new Enemy(director.ctx));
    director.play();
});