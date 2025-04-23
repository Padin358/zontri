//  CHANGE LANG FUN
const changeLang = (lang) => {
  console.log(lang)
  if(lang == "en") {
    localStorage.setItem("curLang", "en")
    setTimeout(() => {
      location.href = "../en/"
    }, 100);
  } else if (lang == "-") {
    return
  } else if (lang == "cs") {
    localStorage.setItem("curLang", "cs")
    setTimeout(() => {
      location.href = "../cs/"
    }, 100);
  }
}

//  DEFAULT LANG
const defLang = () => {
  if(localStorage.getItem("curLang") === "en") {
    location.href = "./en/"
  } else if (localStorage.getItem("curLang") === "cs") {
    location.href = "./cs/"
  }
}
