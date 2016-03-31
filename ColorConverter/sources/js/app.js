var App =
{
	rgb_r_range: document.getElementById("rgb_r_range"),
	rgb_g_range: document.getElementById("rgb_g_range"),
	rgb_b_range: document.getElementById("rgb_b_range"),
	rgb_r_text: document.getElementById("rgb_r_text"),
	rgb_g_text: document.getElementById("rgb_g_text"),
	rgb_b_text: document.getElementById("rgb_b_text"),
	rgb_result: document.getElementById("rgb_result"),

	hex_r_range: document.getElementById("hex_r_range"),
	hex_g_range: document.getElementById("hex_g_range"),
	hex_b_range: document.getElementById("hex_b_range"),
	hex_r_text: document.getElementById("hex_r_text"),
	hex_g_text: document.getElementById("hex_g_text"),
	hex_b_text: document.getElementById("hex_b_text"),
	hex_result: document.getElementById("hex_result"),

	hsl_h_range: document.getElementById("hsl_h_range"),
	hsl_s_range: document.getElementById("hsl_s_range"),
	hsl_l_range: document.getElementById("hsl_l_range"),
	hsl_h_text: document.getElementById("hsl_h_text"),
	hsl_s_text: document.getElementById("hsl_s_text"),
	hsl_l_text: document.getElementById("hsl_l_text"),
	hsl_result: document.getElementById("hsl_result"),

	init: function()
	{
		this.rgb_r_range.value = 204;
		this.rgb_g_range.value = 85;
		this.rgb_b_range.value = 85;
		this.rgb_r_text.value = 204;
		this.rgb_g_text.value = 85;
		this.rgb_b_text.value = 85;

		this.update_rgb();
	},

	rgb_r_range_change: function()
	{
		this.rgb_r_text.value = this.rgb_r_range.value;
		this.rgb_r_text.className = "";
		this.update_rgb();
	},

	rgb_g_range_change: function()
	{
		this.rgb_g_text.value = this.rgb_g_range.value;
		this.rgb_g_text.className = "";
		this.update_rgb();
	},

	rgb_b_range_change: function()
	{
		this.rgb_b_text.value = this.rgb_b_range.value;
		this.rgb_b_text.className = "";
		this.update_rgb();
	},

	rgb_r_text_change: function()
	{
		var n = Number(this.rgb_r_text.value);
		if (n >= 0 && n <= 255 && this.rgb_r_text.value != "")
		{
			this.rgb_r_text.className = "";
			this.rgb_r_range.value = n;
			this.update_rgb();
		}
		else
			this.rgb_r_text.className = "incorrect";
	},

	rgb_g_text_change: function()
	{
		var n = Number(this.rgb_g_text.value);
		if (n >= 0 && n <= 255 && this.rgb_g_text.value != "")
		{
			this.rgb_g_text.className = "";
			this.rgb_g_range.value = n;
			this.update_rgb();
		}
		else
			this.rgb_g_text.className = "incorrect";
	},

	rgb_b_text_change: function()
	{
		var n = Number(this.rgb_b_text.value);
		if (n >= 0 && n <= 255 && this.rgb_b_text.value != "")
		{
			this.rgb_b_text.className = "";
			this.rgb_b_range.value = n;
			this.update_rgb();
		}
		else
			this.rgb_b_text.className = "incorrect";
	},

	hex_r_range_change: function()
	{
		this.hex_r_text.value = this.to_hex(this.hex_r_range.value);
		this.hex_r_text.className = "";
		this.update_hex();
	},

	hex_g_range_change: function()
	{
		this.hex_g_text.value = this.to_hex(this.hex_g_range.value);
		this.hex_g_text.className = "";
		this.update_hex();
	},

	hex_b_range_change: function()
	{
		this.hex_b_text.value = this.to_hex(this.hex_b_range.value);
		this.hex_b_text.className = "";
		this.update_hex();
	},

	hex_r_text_change: function()
	{

	},

	hex_g_text_change: function()
	{

	},

	hex_b_text_change: function()
	{

	},

	update_rgb: function()
	{
		if (document.querySelectorAll("#rgb_section .incorrect").length == 0)
		{
			this.update_hex_from_rgb();
			this.update_hsl_from_rgb();
			this.update_results();
		}
	},

	update_hex: function()
	{
		if (document.querySelectorAll("#hex_section .incorrect").length == 0)
		{
			this.update_rgb_from_hex();
			this.update_hsl_from_rgb();
			this.update_results();
		}
	},

	update_hex_from_rgb: function()
	{
		this.hex_r_range.value = this.rgb_r_range.value;
		this.hex_g_range.value = this.rgb_g_range.value;
		this.hex_b_range.value = this.rgb_b_range.value;

		this.hex_r_text.value = this.to_hex(this.rgb_r_range.value);
		this.hex_g_text.value = this.to_hex(this.rgb_g_range.value);
		this.hex_b_text.value = this.to_hex(this.rgb_b_range.value);
	},

	update_hsl_from_rgb: function()
	{
		var r = parseInt(this.rgb_r_range.value) / 255;
		var g = parseInt(this.rgb_g_range.value) / 255;
		var b = parseInt(this.rgb_b_range.value) / 255;

		var min = r; if (g < min) min = g; if (b < min) min = b;
		var max = r; if (g > max) max = g; if (b > max) max = b;

		var l = (min + max) / 2 * 100;
		if (l % 1 < 0.5)
			l = Math.floor(l);
		else
			l = l = Math.floor(l) + 1;

		var s = h = 0;
		if (min != max)
		{
			if (l < 50)
				s = (max - min) / (max + min) * 100;
			else
				s = (max - min) / (2 - max - min) * 100;

			if (s % 1 < 0.5)
				s = Math.floor(s);
			else
				s = s = Math.floor(s) + 1;

			if (r >= g && r >= b)
				h = (g - b) / (max - min) * 60;
			else if (g >= r && g >= b)
				h = (2 + (b - r) / (max - min)) * 60;
			else
				h = (4 + (r - g) / (max - min)) * 60;

			if (h % 1 < 0.5)
				h = Math.floor(h);
			else
				h = h = Math.floor(h) + 1;
			if (h < 0)
				h += 360;
		}

		this.hsl_h_text.value = this.hsl_h_range.value = h;
		this.hsl_s_text.value = this.hsl_s_range.value = s;
		this.hsl_l_text.value = this.hsl_l_range.value = l;
	},

	update_rgb_from_hex: function()
	{
		this.rgb_r_range.value = this.hex_r_range.value;
		this.rgb_g_range.value = this.hex_g_range.value;
		this.rgb_b_range.value = this.hex_b_range.value;

		this.rgb_r_text.value = this.hex_r_range.value;
		this.rgb_g_text.value = this.hex_g_range.value;
		this.rgb_b_text.value = this.hex_b_range.value;
	},

	update_results: function()
	{
		this.rgb_result.value = "rgb(" + this.rgb_r_text.value + ", " + this.rgb_g_text.value + ", " + this.rgb_b_text.value + ")";
		this.hex_result.value = "#" + this.hex_r_text.value + this.hex_g_text.value + this.hex_b_text.value;
		this.hsl_result.value = "hsl(" + this.hsl_h_text.value + ", " + this.hsl_s_text.value + ", " + this.hsl_l_text.value + ")";
		document.getElementById("main_div").style.backgroundColor = this.hex_result.value;
	},

	to_hex: function(n)
	{
		var ret = Number(n).toString(16);
		if (ret.length == 1)
			ret = "0" + ret;
		return (ret);
	},

	select_elem: function(elem)
	{
		elem.select();
	},

	clipboard: function(result)
	{
		var clipboard_span = document.getElementById("clipboard_span");

		this.select_elem(result);
		document.execCommand("copy");

		if (Number(this.rgb_r_text.value) + Number(this.rgb_g_text.value) + Number(this.rgb_b_text.value) > 500)
		{
			clipboard_span.style.color = "#000";
			clipboard_span.style.textShadow = "none";
		}
		else
		{
			clipboard_span.style.color = "#fff";
			clipboard_span.style.textShadow = "1px 1px 1px #000";
		}
		clipboard_span.style.bottom = "16px";
		setTimeout(function(){clipboard_span.style.bottom = "-32px";}, 1000);
	}
}
