/**
 * Created by Administrator on 2015/5/21.
 */
function Director()
{
    this.ctx = null;//canvas的渲染上下文
    this.player = null;//玩家
    this.enimes = [];//敌人集合
    this.back = null;//背景
    this.bullets = [];//子弹
    this.backAudio = null;//背景音乐
    this.fireAudio = null;//子弹音效
    this.enemyExplodeAudio = null;//敌人爆炸音乐
    this.playerExplodeAudio = null;//玩家爆炸音乐

    this.animID = null;//刷帧ID
}
//游戏
Director.prototype.play = function(){
    var FPS = 60;
    var temp = this;
//    this.animID =setInterval(this.gameLoop,1000/FPS);
    this.animID =setInterval(function(){
        temp.gameLoop();
    },1000/FPS);
    this.backAudio.play();
};
//暂停
Director.prototype.pause = function(){
    clearInterval(this.animID);
};
//刷帧
Director.prototype.gameLoop = function(){
    //1.清屏
    this.ctx.clearRect(0,0,600,450);
    //2.画背景
    this.back.draw();
    //3.画飞机
    this.player.draw();
    //4.画敌人
    for(var i=0;i<this.enimes.length;i++)
    {
        this.enimes[i].draw();
    }

    console.log(this.bullets.length);
    //5.画子弹
    for(var i=0;i<this.bullets.length;i++)
    {
        this.bullets[i].draw();
    }
    //6.碰撞检测
    for(var i=0; i<this.enimes.length; i++)
    {
        for(var j=0; j<this.bullets.length; j++)
        {
            if(!this.enimes[i].exploded) {
                if (IsCollided(this.enimes[i], this.bullets[j]))
                {
                    console.log("hit");
                    this.enimes[i].exploded = true;
                }
            }
        }
    }

    //7.画分数
};