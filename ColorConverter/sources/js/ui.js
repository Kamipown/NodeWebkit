var Ui =
{
	mode: undefined,
	nw: undefined,
	window: undefined,
	logo: undefined,

	init: function()
	{
		var self = this;
		this.mode = 1;
		try
		{
			this.nw = require("nw.gui");
			this.window = nw.Window.get();
			document.getElementById("minimize").onclick = function()
			{
				self.window.minimize();
			}

			document.getElementById("close").onclick = function()
			{
				self.window.close();
			}
		}
		catch (e)
		{
			this.mode = 0;
		}
		this.init_ui();
	},

	init_ui: function()
	{
		this.logo = document.getElementById("logo");
		this.update_logo_color(1);
		if (!this.mode)
		{
			document.getElementById("window").style.borderRadius = "0px";
			document.getElementById("main_header").style.display = "none";
			document.getElementById("main_div").style.height = "100%";
		}
	},

	update_logo_color: function(c)
	{
		var self = this;
		if (c == 1)
		{
			setTimeout(function()
			{
				self.logo.style.fill = "#55c";
				self.update_logo_color(2);
			}, 5000);
		}
		else if (c == 2)
		{
			setTimeout(function()
			{
				self.logo.style.fill = "#5c5";
				self.update_logo_color(3);
			}, 5000);
		}
		else if (c == 3)
		{
			setTimeout(function()
			{
				self.logo.style.fill = "#c55";
				self.update_logo_color(1);
			}, 5000);
		}
	}
}
