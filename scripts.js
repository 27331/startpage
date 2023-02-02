/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"classroom":"https://classroom.google.com/u/1/a/not-turned-in/all","cristalweb":"https://cristalweb.farnborough.ac.uk/CristalWeb/Students","maths":"https://sites.google.com/farnborough.ac.uk/asfurthermaths?pli=1&authuser=1","computing":"https://sites.google.com/farnborough.ac.uk/computerscience?pli=1&authuser=1","geography":"https://sites.google.com/farnborough.ac.uk/alevelgeography?pli=1&authuser=1","youtube":"https://www.youtube.com/","github":"https://github.com/","drive":"https://drive.google.com/drive/u/1/my-drive","docs":"https://docs.google.com/document/u/1/","mail":"https://mail.google.com/mail/u/1/","sheets":"https://docs.google.com/spreadsheets/u/1/?tgif=d"}
const engine = "duckduckgo"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"PV6hTQjtLkvBCUol","label":"school","bookmarks":[{"id":"0lVtn4jfBLc6JHMQ","label":"classroom","url":"https://classroom.google.com/u/1/a/not-turned-in/all"},{"id":"8DQuoxPD0xzzgu0L","label":"maths","url":"https://sites.google.com/farnborough.ac.uk/asfurthermaths?pli=1&authuser=1"},{"id":"CO5wzznZZLbUEJiB","label":"computing","url":"https://sites.google.com/farnborough.ac.uk/computerscience?pli=1&authuser=1"},{"id":"2JXHrpZvN3EtW9K2","label":"geography","url":"https://sites.google.com/farnborough.ac.uk/alevelgeography?pli=1&authuser=1"}]},{"id":"3am5W38ltVRq6S3R","label":"google","bookmarks":[{"id":"lpAKWXGZoUebTa6I","label":"drive","url":"https://drive.google.com/drive/u/1/my-drive"},{"id":"N0UrZA907gkEMSlD","label":"mail","url":"https://mail.google.com/mail/u/1/"},{"id":"6FNmozlyD61cXCqH","label":"docs","url":"https://docs.google.com/document/u/1/"},{"id":"J0F9uFZFVUmav2nE","label":"sheets","url":"https://docs.google.com/spreadsheets/u/1/?tgif=d"}]},{"id":"IJYBvf6bTsaOU5st","label":"media","bookmarks":[{"id":"LqgqYjXXf2lPwoS7","label":"youtube","url":"https://www.youtube.com/"},{"id":"EmJGO5kpRcOxYL0j","label":"reddit","url":"https://www.reddit.com/"},{"id":"y4lIvPOa3L7OzAhV","label":"movies","url":"https://soap2day.mn/home"},{"id":"nwTyHXvjgsj6ldxT","label":"books","url":"https://forum.mobilism.me/"}]},{"id":"3RdKPt3xkZsBit0y","label":"coding","bookmarks":[{"id":"DdWYcasE95bsnDtS","label":"github","url":"https://github.com/"},{"id":"pW4WSFr2xZuyVRjG","label":"freecodecamp","url":"https://www.freecodecamp.org/"},{"id":"8YDEABYFJqvUsj4z","label":"odin project","url":"https://www.theodinproject.com/"},{"id":"TgBmsJEWoW9QC2ZA","label":"ossu","url":"https://github.com/ossu/computer-science"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
