var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.jsonstorage.net/v1/json/f36b3a28-7fac-49c1-93f5-19b1ce4c7833', true);
  xhr.setRequestHeader('Content-type', 'application/json')
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
              console.log(xhr.status);
				var listhero = JSON.parse(xhr.responseText);
              console.log(listhero.data);
        let container = document.querySelector('.HeroGallery');
    let strArticles = '';
				for(let i = 0; i < listhero.data.length; i++) {
        var resItem = listhero.data[i];
        var heroid = resItem.heroid;
    var heroname = resItem.name;
    var heronamelink = heroname.replace("'", '_').replace(' ', '-');
    var cryptodata = aesCrypto.encrypt(convertstr(heroname),convertstr("root"));
    var heroicon = resItem.icon;

        strArticles += '<a href="/p/hero-mobile-legends-bang-bang.html?id='+heroid+'&amp;name='+heronamelink+'&amp;data='+cryptodata+'" title="'+heroname+'"><div id="'+heroid+'" class="HeroList" style="background-color:#005CAC;border-color:#005CAC;background-image:url('+heroicon+');"><span class="HeroName">'+heroname+'</span></div>';
    }
    container.innerHTML = strArticles;
		}
          }
		xhr.send();
