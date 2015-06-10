/**
 * Created by Administrator on 2015/5/21.
 */
function Background(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/stars.png";
    this.x = 0;
    this.y = 0;
}

Background.prototype.draw = function(){
    this.ctx.drawImage(this.img,this.x,this.y);
    this.ctx.drawImage(this.img,this.x,this.y-450);
    this.y++;
    if(this.y > 450)
    {
        this.y = 0;
    }
}