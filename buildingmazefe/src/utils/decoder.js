


function decoder(code) {
    let decode = "";
    let len = code.length;
    let i = 0;
    let re = /.\(\d\)/g;
    let reg = /.\(\d\d\)/g;
    let regu = /.\(\d\d\d\)/g;

    while (i < len) {
        let p = "";

        if ((i + 4) < len) {
            for (let x = 0; x < 4; x++) {
                p += code.charAt(i + x);
            }
            if (p != "" && p.match(re) != null) {
                let num = parseInt(p.slice(2, -1), 10);
                for (let j = 0; j < num; j++) decode += p.charAt(0);
                i += 4;
                continue;
            }
            
        }
        p = ""
        if ((i + 5) < len) {
            for (let x = 0; x < 5; x++) {
                p += code.charAt(i + x);
            }
            if (p != "" && p.match(reg) != null) {
                let num = parseInt(p.slice(2, -1), 10) ;
                for (let j = 0; j < num; j++) decode += p.charAt(0);
                i += 5;
                continue;
            }
        } 
        p = ""
        if ((i + 6) < len) {
            for (let x = 0; x < 6; x++) {
                p += code.charAt(i + x);
            }
            if (p != "" && p.match(regu) != null) {
                let num = parseInt(p.slice(2, -1), 10);
                for (let j = 0; j < num; j++) decode += p.charAt(0);
                i += 6;
                continue
            }
        }
        decode += code.charAt(i);
        i++;
        
    }
    return decode;
}

export { decoder as default }