/**
 * Created by Administrator on 2015/5/26.
 */
function Player(ctx,buls,fireAudio)
{
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/Player.png";
    this.x = 250;
    this.y = 350;

    this.buls=buls;
    this.fireAudio=fireAudio;
}

Player.prototype.draw = function()
{
    if(keyStatus.keyLeftStatus)
    {
        this.x = this.x - 5;
        if(this.x < 0)
        {
            this.x = 0;
        }
    }
    if(keyStatus.keyRightStatus)
    {
        this.x = this.x + 5;
        if(this.x > 500)
        {
            this.x = 500;
        }
    }
    if(keyStatus.keyUpStatus)
    {
        this.y = this.y - 5;
        if(this.y < 0)
        {
            this.y = 0;
        }
    }
    if(keyStatus.keyDownStatus)
    {
        this.y = this.y + 5;
        if(this.y > 350)
        {
            this.y = 350;
        }
    }
    if(keyStatus.keySpaceStatus)
    {
        this.fire();
        keyStatus.keySpaceStatus=false;     //每次按一次只生成一次
    }
    this.ctx.drawImage(this.img,this.x,this.y);
}

Player.prototype.fire = function(){
    var buls = new Bullets(this.ctx,this.x,this.y,this.buls);
    this.buls.push(buls);
    this.fireAudio.play();
}