//#parameters
//#NB script assumes:
//#*banner file names will be of format <n>.jpg
//#*there will be a banner for every number between 1 and numBanners
//#*all banners share same dimensions
var numBanners = 7;
var dirBanners = 'https://www.dit.ie/ditfoundation/media/ditfoundation/images/homepage/banners/';
var width = 927;
var height = 292;
//#id of parent element banner image html should be added to
var containerBanner = 'banner-bg';

//#activate random banner on page load
addEventOn(window, 'load', showRandomBanner, false);

function showRandomBanner()
{
	//#check script supported
	if(!document.images || !document.getElementById)
	{
		return;
	}
	//#check banner container element exists
	var container = document.getElementById(containerBanner);
	if(!container)
	{
		return;	
	}
	//#get a random banner number
	var rand = Math.ceil(Math.random()*numBanners);
	//#create the banner image element
	var randBanner = document.createElement('img'); 
	randBanner.src = dirBanners + rand + '.jpg'; 
	randBanner.width = width; 
	randBanner.height = height; 
	randBanner.alt = ''; 
	container.appendChild(randBanner);	
}

//#Cross-browser event handling. credit: Scott Andrew, scottandrew.com
function addEventOn(element, eventType, lamdaFunction, useCapture) {
    if (element.addEventListener) {
        element.addEventListener(eventType, lamdaFunction, useCapture);
        return true;
    } else if (element.attachEvent) {
        var r = element.attachEvent('on' + eventType, lamdaFunction);
        return r;
    } else {
        return false;
    }
}