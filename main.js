console.log("----------expression-----------")
var a=10;
var b=10;
var c=20;
console.log(a+b/c);
console.log(a*b+c);
console.log(a-b/c);
console.log(a+b*c);
console.log(a%b/c);
console.log(a+b%c);
console.log(a-b%c);
console.log(a*b%c); 
console.log(a+b-c);
console.log(a-b*c);
console.log("---------logical----------")
console.log(a==b&&c==b);
console.log(a==b||c==b);
console.log(a==b!=c==b);

console.log("----------ifelse-----------");
	if(a>52)
	{
		console.log("a is big");
	}
	else
	{
		console.log("a is not big");
	}
	console.log("----------ternery operator-------------");
	let f=b>23?"b is big":"b is not big";
	console.log(f);

console.log("----------assignment operator-------------");
let e;
console.log(e=b);
console.log(e-=b);
console.log(e+=b);
console.log(e*=b);
console.log(e/=b);
console.log(e%=b);
console.log("-------------------------arithmetic operators------------------------");
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log("-------------post increment-----------------");
console.log(a++);
console.log(a--);
console.log("-------------pre increment-----------------");
console.log(++a);
console.log(--a);
console.log("----------------comparison operators--------------------");
console.log(a<b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a===b);
console.log(a==b);
console.log(a!=b);
console.log(a!==b);