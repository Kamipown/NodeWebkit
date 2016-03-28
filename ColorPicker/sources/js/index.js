var nw = require("nw.gui");
var win = nw.Window.get();

var logo;

document.getElementById("minimize").onclick = function()
{
	win.minimize();
}

document.getElementById("close").onclick = function()
{
	win.close();
}

function init()
{
	logo = document.getElementById("logo");
	update_logo_color();
}

var c = 1;
function update_logo_color()
{
	if (c == 1)
	{
		c = 2;
		setTimeout(function()
		{
			logo.style.fill = "#55c";
			update_logo_color();
		}, 5000);
	}
	else if (c == 2)
	{
		c = 3;
		setTimeout(function()
		{
			logo.style.fill = "#5c5";
			update_logo_color();
		}, 5000);
	}
	else
	{
		c = 1;
		setTimeout(function()
		{
			logo.style.fill = "#c55";
			update_logo_color();
		}, 5000);
	}
}