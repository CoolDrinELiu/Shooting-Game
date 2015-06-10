/**
 * Created by Administrator on 2015/5/26.
 */
function Bullets(ctx,x,y,buls)
{
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/projectile.png";
    this.x = x+42;
    this.y = y;

    this.buls=buls;

    this.width=16;
    this.height=28;
}
Bullets.prototype.draw=function(){
    this.ctx.drawImage(this.img,this.x,this.y);
//    this.ctx.drawImage(this.img,this.x,this.y);  //每次绘2次 X一个+10 一个-10
    this.y-=5;
    if(this.y<-10)
    {
        this.buls.remove(this);
    }
}

Bullets.prototype.getCenter=function(){
    return new Point(this.x+this.width/2, this.y+this.height/2);
};