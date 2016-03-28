var Ui =
{
	nw: undefined,
	window: undefined,
	logo: undefined,

	init: function()
	{
		this.nw = require("nw.gui");
		this.window = nw.Window.get();
		this.logo = document.getElementById("logo");

		document.getElementById("minimize").onclick = function()
		{
			Ui.window.minimize();
		}

		document.getElementById("close").onclick = function()
		{
			Ui.window.close();
		}

		this.update_logo_color(1);
		this.show_window();
	},

	show_window: function()
	{
		this.window.show();
	},

	update_logo_color: function(c)
	{
		if (c == 1)
		{
			setTimeout(function()
			{
				Ui.logo.style.fill = "#55c";
				Ui.update_logo_color(2);
			}, 5000);
		}
		else if (c == 2)
		{
			setTimeout(function()
			{
				Ui.logo.style.fill = "#5c5";
				Ui.update_logo_color(3);
			}, 5000);
		}
		else if (c == 3)
		{
			setTimeout(function()
			{
				Ui.logo.style.fill = "#c55";
				Ui.update_logo_color(1);
			}, 5000);
		}
	}
}
