var App =
{
	rgb_r_range: document.getElementById("rgb_r_range"),
	rgb_g_range: document.getElementById("rgb_g_range"),
	rgb_b_range: document.getElementById("rgb_b_range"),
	rgb_r_text: document.getElementById("rgb_r_text"),
	rgb_g_text: document.getElementById("rgb_g_text"),
	rgb_b_text: document.getElementById("rgb_b_text"),
	rgb_result: document.getElementById("rgb_result"),
	rgb_clipboard: document.getElementById("rgb_clipboard"),

	hex_r_range: document.getElementById("hex_r_range"),
	hex_g_range: document.getElementById("hex_g_range"),
	hex_b_range: document.getElementById("hex_b_range"),
	hex_r_text: document.getElementById("hex_r_text"),
	hex_g_text: document.getElementById("hex_g_text"),
	hex_b_text: document.getElementById("hex_b_text"),
	hex_result: document.getElementById("hex_result"),
	hex_clipboard: document.getElementById("hex_clipboard"),

	hsl_h_range: document.getElementById("hsl_h_range"),
	hsl_s_range: document.getElementById("hsl_s_range"),
	hsl_l_range: document.getElementById("hsl_l_range"),
	hsl_h_text: document.getElementById("hsl_h_text"),
	hsl_s_text: document.getElementById("hsl_s_text"),
	hsl_l_text: document.getElementById("hsl_l_text"),
	hsl_result: document.getElementById("hsl_result"),
	hsl_clipboard: document.getElementById("hsl_clipboard"),

	init: function()
	{
		this.rgb_clipboard.onclick = this.clipboard(this.rgb_result);
		this.hex_clipboard.onclick = this.clipboard(this.hex_result);
		this.hsl_clipboard.onclick = this.clipboard(this.hsl_result);
	},

	clipboard: function(result)
	{
		result.focus();
		result.select();
		document.execCommand("copy");
	}
}
