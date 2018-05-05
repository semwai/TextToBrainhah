function decode() {
	var code = document.getElementById('code').value;
	document.getElementById('output').value = '';
	var memory=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var stack = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var sp = -1;
	var ip = 0;
	var bp = 0;

	for (;ip<code.length;)
	{
		switch (code[ip])
		{
			default:ip++;
			break;
			case '+':
				memory[bp]++;
					if (memory[bp]>255)
						memory[bp]=0;
					ip++;
			break;
			case '-':
				memory[bp]--;
					if (memory[bp]<0)
						memory[bp]=255;
					ip++;
			break;
			case '>':
				bp++;
				ip++;
			break;
			case '<':
				bp--;
				ip++;
			break;
			case '.':
				document.getElementById('output').value += String.fromCharCode(memory[bp]);
				ip++
			break;
			case ',':
				var result = prompt('Input value', '');
				memory[bp] = parseInt(result.charCodeAt(0));
				ip++;
			break;
			case '[':
				sp++;
				stack[sp]=ip;
				
				ip++;
			break;
			case ']':
				if (memory[bp]!=0)
				ip=stack[sp]+1;
				else
				ip++;
			break;


		}
	 	 
	}
}

function main() {
    var str = document.getElementById("text").value,
        ascii = [],
        brainfUse = [],
        prevNumb = [],
        PrevINDEX = 1,
        INDEX = 0;
    for (var i = 0; i < str.length; i++) {
        ascii[parseInt(str.charCodeAt(i) / 16)] = 1
    }
    for (var i = 0, j = 0; i < 8; i++) {
        {
            brainfUse[i - 1] = 16 * i;
            j++
        }
    }
    document.getElementById("output_code").value = '';
    for (var i = 0; i < brainfUse[i] != 0; i++) {
        if (ascii[i + 1]) {
            document.getElementById("output_code").value += "++++++++";
            document.getElementById("output_code").value += "[";
            for (var j = 0; j < i; j++) document.getElementById("output_code").value += ">";
            for (var j = 0; j < brainfUse[i] / 8; j++) document.getElementById("output_code").value += '+';
            for (var j = 0; j < i; j++) document.getElementById("output_code").value += "<";
            document.getElementById("output_code").value += "";
            document.getElementById("output_code").value += "-]"
        }
    }
    document.getElementById("output_code").value += "";
    INDEX = parseInt(str.charCodeAt(0) / 16);
    if (INDEX - PrevINDEX > 0) for (var j = 0; j < INDEX - PrevINDEX; j++) document.getElementById("output_code").value += ">";
    else for (var j = 0; j < PrevINDEX - INDEX; j++) document.getElementById("codeoutput_code").value += "<";
    for (var j = 0; j < parseInt(str.charCodeAt(0)) - brainfUse[INDEX - 1]; j++) document.getElementById("output_code").value += "+";
    document.getElementById("output_code").value += ".";
    brainfUse[INDEX - 1] += parseInt(str.charCodeAt(0)) - brainfUse[INDEX - 1];
    for (var i = 1; i < str.length; i++) {
        PrevINDEX = INDEX;
        INDEX = parseInt(str.charCodeAt(i) / 16);
        if (INDEX - PrevINDEX > 0) for (var j = 0; j < INDEX - PrevINDEX; j++) document.getElementById("output_code").value += ">";
        else for (var j = 0; j < PrevINDEX - INDEX; j++) document.getElementById("output_code").value += "<";
        if (parseInt(str.charCodeAt(i)) - brainfUse[INDEX - 1] >= 0) {
            for (var j = 0; j < parseInt(str.charCodeAt(i)) - brainfUse[INDEX - 1]; j++) document.getElementById("output_code").value += '+'
        } else {
            for (var j = 0; j < brainfUse[INDEX - 1] - parseInt(str.charCodeAt(i)); j++) document.getElementById("output_code").value += '-'
        }
        document.getElementById("output_code").value += '.';
        brainfUse[INDEX - 1] += parseInt(str.charCodeAt(i)) - brainfUse[INDEX - 1]
    }
}