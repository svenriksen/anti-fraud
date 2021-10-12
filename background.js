var xhr = new XMLHttpRequest();

xhr.open("GET", "https://raw.githubusercontent.com/svenriksen/anti-fraud/main/scam_website.txt", true);

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var resp = JSON.parse(xhr.responseText);

  }
}
xhr.send();


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
  
      // do your things
        //console.log(tabId)
        //console.log(changeInfo)
        console.log(tab.url)

        let domain = (new URL(tab.url)).hostname.replace('www.','');
        console.log(domain)
        console.log(resp)
    }
  })
