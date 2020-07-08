console.log(2+1)
i = 2;
console.log(i)
for(i=1;i<10;i++){
    console.log(i);
}
name = 'Viet Nam';
console.log('vi tri thu 2: ' + name.charAt(2));
console.log('Name co '  +name.length + " ki tu!");
console.log(`name co ${name.length} ky tu!`);
// endswith()
// var str = "Hello world, welcome to the universe.";
// var n = str.endsWith("universe.");
//console.log(n);
function chuvi(a,b){
    console.log("chu vi cua 2 so la: ",(a+b)/2);
}
chuvi(2,3);
function binhphuong(n){
    console.log("binh phuong cua so la: ", n*n);
}
binhphuong(5);

function cuuchuong(x){
    console.log("Bang cuu chuong ",x)
    for(i=1;i<=10;i++){
        console.log(x + " x " + i +  " = " + x * i )
    }
}
cuuchuong(6);
function cach2(z){
    const arr = [1,2,3,4,5,6,7,8,9,10];
    arr.forEach(number =>{
        console.log(z + " x " + number +  " = " + z * number);
    })
}
cach2(4);