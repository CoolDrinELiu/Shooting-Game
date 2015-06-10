/**
 * Created by Administrator on 2015/5/28.
 */

Array.prototype.remove=function(obj){
    for(i=0; i<this.length;i++)
    {
        if(this[i]==obj)
        {
            this.splice(i,1)  //delete from array
            return this;
        }
    }
};

//所有数组自动有remove方法


function Point(x,y)
{
    this.x=x;
    this.y=y;
}

function IsCollided(obj1,obj2)
{
  if(obj1&&obj2)
  {
      var cen1=obj1.getCenter();
      var cen2=obj2.getCenter();

      if(Math.abs(cen1.x-cen2.x)<(obj1.width+obj2.width)/2
          &&Math.abs(cen1.y-cen2.y)<(obj1.height+obj2.height)/2)
      {
          return true;
      }
  }
    return false;
};