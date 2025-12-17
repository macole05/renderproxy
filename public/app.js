function setCloak(type) {
  if (type === "docs") {
    document.title = "Google Docs";
    setIcon("https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico");
  }
  if (type === "drive") {
    document.title = "Google Drive";
    setIcon("https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png");
  }
  if (type === "classroom") {
    document.title = "Google Classroom";
    setIcon("https://ssl.gstatic.com/classroom/favicon.png");
  }
  if (type === "blank") {
    document.title = "";
    setIcon("");
  }
}

function setIcon(url) {
  let link = document.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = url;
}

function go() {
  const urlInput = document.getElementById("url").value.trim();
  const cloak = document.getElementById("cloak").value;

  setCloak(cloak);

  let url = urlInput;
  if (!url.includes(".")) {
    url = "https://www.google.com/search?q=" + encodeURIComponent(url);
  } else if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  const encoded = btoa(url);

  const win = window.open();
  win.document.body.innerHTML = "<iframe style='border:none;width:100%;height:100vh' src='/rammerhead/" + encoded + "'></iframe>";
}
