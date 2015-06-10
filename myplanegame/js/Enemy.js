/**
 * Created by Administrator on 2015/5/26.
 */
function Enemy(ctx)
{
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/Rock.png";
    this.x = 200;
    this.y = 150;

    this.width=66;
    this.height=70;

    this.exploded=false;

    this.explodeImage=new Image();
    this.explodeImage.src="images/explosionEnemy.png";
    this.explodeIndex=0;
}
Enemy.prototype.draw = function(){
    if(!this.exploded)
    {
        this.ctx.drawImage(this.img, this.x, this.y);
    }
    else
    {
        this.ctx.drawImage(this.explodeImage,
                            this.explodeIndex*44,0,44,49,
                            this.x,this.y,44,49);
        this.explodeIndex++;
    }

}

Enemy.prototype.getCenter=function(){
    return new Point(this.x+this.width/2, this.y+this.height/2);
};