"use strict";
/*
Mitzi
October 16 2018
CISC131

Passing the mouse over a color in the drawing color palette selects
that color as the one to be used for drawing. Each time you click
in the drawing area, the color is being used.
*/

window.onload =function ()
{
var numberLittleBox; /*this declares the numbers of boxes*/
document.getElementById("currentColor").style.backgroundColor=null;
createColorChoice('colorPicker','color','aquamarine;plum;antiqueWhite;pink;lavender;slateblue',';');
document.getElementById("drawingArea").innerHTML=createCanvas("littleBox",23,24,"canvas","newRow");
numberLittleBox=(countElementWithIdPrefixOf("littleBox")-1); /*this actually gets the number of boxes*/
drawCanvas(numberLittleBox);
};
function countElementWithIdPrefixOf(idPrefix)
{
/*counts how many id there is */
var count;
var elementReference;
count=0;
elementReference=document.getElementById(idPrefix+count);
while(elementReference!==null)
{
count=count+1;
elementReference=(document.getElementById(idPrefix+count));
}
return count;
}
function createDivText(x,classInfo)
{
/*creates a new div to use later in html*/
var  id;
var tag;
id= x;
tag="<div class =\""+classInfo+"\" id=\"" +id+ "\"></div>";
return tag;
}
function count(data,delimiter)
{
/*counts the amount of color there is*/
var result;
var start;
var x;
start=0;
x=0;
result="";
data=data+delimiter;
while(start<data.length)
{
result=result+data.substring(start, data.indexOf(delimiter));
data=data.substring(data.indexOf(delimiter)+1)
x=x+1;
}
return x;
}
function getPart(data, delimiter,x)
{
/*it takes the delimiter away from the information that is being passed*/
var result;
var start;
start=0;
x=x+1
result="";
data=data+delimiter;
while(start<x)
{
result=data.substring(start, data.indexOf(delimiter));
data=data.substring(data.indexOf(delimiter)+1)
x=x-1;
}
return result;
}
function createColorChoice(id,color,string,delimiter)
{
/*counts the number of color and then creates the boxes, depending in the color*/
var boxDiv;
var elementReference;
var numberColor;
var x;
x=0;
boxDiv="";
numberColor=count(string,delimiter);
while (numberColor>0)
{
boxDiv=boxDiv+createDivText(id+x,"colorChoice");
x=x+1;
numberColor=numberColor-1;
}
elementReference=document.getElementById("colorPicker");
elementReference.innerHTML=boxDiv;
numberColor=count(string,delimiter);
x=x-1;
while(numberColor>0)
{
elementReference=document.getElementById("colorPicker"+x);
elementReference.style.backgroundColor=getPart(string,delimiter,x);
elementReference.onmouseover=updateCurrentColor;
x=x-1;
numberColor=numberColor-1;
}
}
function updateCurrentColor()
{
/*it makes it able to update the little box to the to the colors that are being hover over*/
document.getElementById("currentColor").style.backgroundColor=this.style.backgroundColor;
}
function createCanvas(prefix,rows,columns,canvas,newRow)
{
/*creates the canvas in which litlle boxes goes inside*/
var count;
var classInfo;
var html;
var i;
var j;
count=0;
i=0;
html="";
while (i<rows)
{
classInfo=canvas+" "+newRow;
j=0;
while (j<columns)
{
html=html+createDivText(prefix+count, classInfo);
classInfo=canvas;
count=count+1;
j=j+1;
}
i=i+1;
}
return html;
}
function colorTheBox(color)
{
/*this background color style the background of current color */
this.style.backgroundColor=document.getElementById("currentColor").style.backgroundColor;
}
function drawCanvas (numberLittleBox)
{
/* makes it able for the drawingArea to be clicked with the current color*/
var boxId;
while(numberLittleBox>0)
{
boxId="littleBox"+numberLittleBox;
document.getElementById(boxId).onclick=colorTheBox;
numberLittleBox=numberLittleBox-1;
}
}