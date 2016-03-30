var App =
{
	rgb: {r: 10, g: 20, b: 30},
	hex: {r: 0, g: 0, b: 0},
	hsl: {h: 0, s: 0, l: 0},

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
		this.rgb_r_range.value = this.rgb.r;
		this.rgb_g_range.value = this.rgb.g;
		this.rgb_b_range.value = this.rgb.b;
		this.rgb_r_text.value = this.rgb.r;
		this.rgb_g_text.value = this.rgb.g;
		this.rgb_b_text.value = this.rgb.b;
	},

	rgb_r_range_change: function()
	{
		this.rgb_r_text.value = this.rgb_r_range.value;
		this.rgb_r_text.style.border = "1px solid #ccc";
		this.update_hex_from_rgb();
		this.update_hsl_from_rgb();
		this.update_results();
	},

	rgb_g_range_change: function()
	{
		this.rgb_g_text.value = this.rgb_g_range.value;
		this.rgb_g_text.style.border = "1px solid #ccc";
		this.update_hex_from_rgb();
		this.update_hsl_from_rgb();
		this.update_results();
	},

	rgb_b_range_change: function()
	{
		this.rgb_b_text.value = this.rgb_b_range.value;
		this.rgb_b_text.style.border = "1px solid #ccc";
		this.update_hex_from_rgb();
		this.update_hsl_from_rgb();
		this.update_results();
	},

	rgb_r_text_change: function()
	{
		var n = Number(this.rgb_r_text.value);
		if (n >= 0 && n <= 255 && this.rgb_r_text.value != "")
		{
			this.rgb_r_text.style.border = "1px solid #ccc";
			this.rgb_r_range.value = n;
			this.update_hex_from_rgb();
			this.update_hsl_from_rgb();
			this.update_results();
		}
		else
		{
			this.rgb_r_text.style.border = "1px solid #c55";
		}
	},

	rgb_g_text_change: function()
	{
		var n = Number(this.rgb_g_text.value);
		if (n >= 0 && n <= 255 && this.rgb_g_text.value != "")
		{
			this.rgb_g_text.style.border = "1px solid #ccc";
			this.rgb_g_range.value = n;
			this.update_hex_from_rgb();
			this.update_hsl_from_rgb();
			this.update_results();
		}
		else
		{
			this.rgb_g_text.style.border = "1px solid #c55";
		}
	},

	rgb_b_text_change: function()
	{
		var n = Number(this.rgb_b_text.value);
		if (n >= 0 && n <= 255 && this.rgb_b_text.value != "")
		{
			this.rgb_b_text.style.border = "1px solid #ccc";
			this.rgb_b_range.value = n;
			this.update_hex_from_rgb();
			this.update_hsl_from_rgb();
			this.update_results();
		}
		else
		{
			this.rgb_b_text.style.border = "1px solid #c55";
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
		
	},

	update_results: function()
	{
		this.rgb_result.value = "rgb(" + this.rgb_r_text.value + ", " + this.rgb_g_text.value + ", " + this.rgb_b_text.value + ")";
		this.hex_result.value = "#" + this.hex_r_text.value + this.hex_g_text.value + this.hex_b_text.value;
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
		this.select_elem(result);
		document.execCommand("copy");
	}
}
