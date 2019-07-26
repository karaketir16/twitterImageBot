let y =833;
document.getElementsByTagName("html")[0].innerHTML= "";
win1 = window.open("https://twitter.com/search?q=%22Berceste%20Beyitler%20-%20"+y+"%22&src=typed_query");
let fnc =function()
{
    console.log("yeni sayfa");
    win1.location.href="https://twitter.com/search?q=%22Berceste%20Beyitler%20-%20"+y+"%22&src=typed_query";
    let deneme = 1;
    let fndlnk = function()
    {
      if(win1.document.querySelector("#react-root > div > div > div > main > div >"+
        "div.css-1dbjc4n.r-aqfbo4.r-1niwhzg.r-16y2uox > div > div > div > div > "+
        "div:nth-child(2) > div > section > div > div > div > div:nth-child(1) > "+
        "div > div > article > div > div.css-1dbjc4n.r-1iusvr4.r-46vdb2.r-5f2r5o."+
        "r-bcqeeo > div.css-1dbjc4n.r-19i43ro > div.css-1dbjc4n.r-156q2ks > div."+
        "css-1dbjc4n.r-1udh08x > div > div > a > div > div > div.r-1p0dtai.r-1pi"+
        "2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img"))
        {
          link = win1.document.querySelector("#react-root > div > div > div > main > div >"+
            "div.css-1dbjc4n.r-aqfbo4.r-1niwhzg.r-16y2uox > div > div > div > div > "+
            "div:nth-child(2) > div > section > div > div > div > div:nth-child(1) > "+
            "div > div > article > div > div.css-1dbjc4n.r-1iusvr4.r-46vdb2.r-5f2r5o."+
            "r-bcqeeo > div.css-1dbjc4n.r-19i43ro > div.css-1dbjc4n.r-156q2ks > div."+
            "css-1dbjc4n.r-1udh08x > div > div > a > div > div > div.r-1p0dtai.r-1pi"+
            "2tsx.r-1d2f490.r-u8s1d.r-ipm5af.r-13qz1uu > div > img").src.slice(0, -5)+"4096x4096";
            document.getElementsByTagName("html")[0].innerHTML += ("wget -O "+y+".jpg "+"'"+link+"'");
            document.getElementsByTagName("html")[0].innerHTML +="<br>";
            console.log("bulundu: ", y);
            y++;
            if(y== 848) return;
            setTimeout(fnc, 0);
        }
        else
        {
          console.log("bulunamadi");
          if(deneme == 10)
          {
            document.getElementsByTagName("html")[0].innerHTML +="<br>";
            y++;
            setTimeout(fnc, 0);
            return;
          }
          deneme++
          setTimeout(fndlnk, 1000);
        }
    };

    setTimeout(fndlnk, 1000);

};
timer1 = setTimeout(fnc,1000);
