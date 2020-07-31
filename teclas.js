document.addEventListener("keyup",dibujoTeclas);
var tablero=document.getElementById("tablero");
tablero.addEventListener("mousedown",dibujoMause1)
tablero.addEventListener("mouseup",dibujoMause2)
var hoja=tablero.getContext("2d");
var color="green";
var avance=10;
var xi=249;
var yi=249;
var xf=249;
var yf=251;
var flechas ={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39,
};
function dibujoMause1(evento)
{	
	xi=evento.pageX;
	yi=evento.pageY;
	variables(xi,yi,0,0);

}
function dibujoMause2(evento)
{
	xf=evento.pageX;
	yf=evento.pageY;
	variables(0,0,xf,yf);
}

function variables(xi,yi,xf,yf)
{
	if(xi!=0)
	{
		x1=xi;
		y1=yi;
	}
	else
	{
		x2=xf;
		y2=yf;
	}
	dibujar(color,x1,y1,x2,y2)
}

function dibujar(color,xi,yi,xf,yf)
{
	hoja.beginPath();
	hoja.strokeStyle=color;
	hoja.lineWidth=5;
	hoja.moveTo(xi,yi);
	hoja.lineTo(xf,yf);
	hoja.stroke();
	hoja.closePath();
}
function dibujoTeclas(evento)
{
	dibujar(color,249,249,249,251);
	switch(evento.keyCode)
	{
		case flechas.UP:
		dibujar(color,xi,yi,xf,yf-10);
		yi=yf-10;
		yf=yi;
		break;
		case flechas.DOWN:
		dibujar(color,xi,yi,xf,yf+10);
		yi=yf+10;
		yf=yi;
		break;
		case flechas.LEFT:
		dibujar(color,xi,yi,xf-10,yf);
		xi=xf-10;
		xf=xi;
		break;
		case flechas.RIGHT:
		dibujar(color,xi,yi,xf+10,yf);
		xi=xf+10;
		xf=xi;
		break;
		default:
		alert("no es una flecha");
		break;


	}
}
