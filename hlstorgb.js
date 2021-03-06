function ConverterHSLToRGB(h, s, l){
    
    var h = h/360;
    var s = s/100;
    var l = l/100;

    var r = l;
    var g = l;
    var b = l;
    var v = (l <= 0.5) ? (l * (1.0 + s)) : (l + s - l * s);

    if(v > 0){

        var m;
        var sv;
        var sextant;
        var fract;
        var vsf;
        var mid1;
        var mid2;

        m = l + l - v;
        sv = (v - m) / v;
        h = h * 6.0;
        sextant = Math.floor(h);
        fract = h - sextant;
        vsf = v * sv * fract;
        mid1 = m + vsf;
        mid2 = v - vsf;

        switch(sextant){

            case 0:
                r = v;
                g = mid1;
                b = m;
            break;

            case 1:
                r = mid2;
                g = v;
                b = m;
            break;

            case 2:
                r = m;
                g = v;
                b = mid1;
            break;

            case 3:
                r = m;
                g = mid2;
                b = v;
            break;

            case 4:
                r = mid1;
                g = m;
                b = v;
            break;

            case 5:
                r = v;
                g = m;
                b = mid2;
            break;
        }
    }

    return parseInt(r * 255.0)+','+parseInt(g * 255.0)+','+parseInt(b * 255.0);
}
