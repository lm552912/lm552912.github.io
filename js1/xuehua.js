/**
 * Created by Administrator on 2016/11/23 0023.
 */

var width = document.documentElement.clientWidth;
console.log(width);
var height = document.documentElement.clientHeight;
// console.log(height);
function createFlake(index){
    var aImg = document.createElement('img');
    document.body.appendChild(aImg);
    var pos_x =  Math.random() * width;
    var pos_y = Math.random() * height;
    aImg.src = 'img/flake.png';
    aImg.style.position = 'absolute';
    aImg.style.left = pos_x + 'px';
    aImg.style.top = pos_y + 'px';
    aImg.opacity =Math.random()  ;
    // aImg.style.width = Math.random() * 50 + 'px';
    aImg.style.transform = 'scale(' + Math.random() / 5 +')';
    aImg.style.webkitTransform = 'scale(' + Math.random() / 5 +')';
    aImg.style.mozTransform = 'scale(' + Math.random() / 5 +')';
    aImg.style.oTransform = 'scale(' + Math.random() / 5 +')';
    aImg.style.msTransform= 'scale(' + Math.random() / 5 +')';
    function flakeDown(){
        // console.log('>>>>>>');

        pos_y += 10;
        pos_x += 3;

        // 让编号是偶数的雪花往左，奇数往右
        if (index % 2 == 0){

            aImg.style.right =  pos_x + 'px';
        }
        else{
            aImg.style.left = pos_x + 'px';
            console.log('--------');
        }

        aImg.style.top = pos_y + 'px';



        if (pos_y >= height){

             pos_y = Math.random() * 100 * -1;
            //pos_y=-50;
        }
        if (pos_x >= width){
            pos_x = Math.random() * 100 * -1;
           // pos_x=-50
        }


    }
    // 设置一个定时器,单位是毫秒
    setInterval(flakeDown ,50);
}
for (var i = 0 ; i < 20 ; i++){

    createFlake(i);

}



