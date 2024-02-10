const searchInput = document.getElementById("search-bar");
const searchSuggestions = document.getElementById("search-suggestions");

searchInput.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const suggestions = getSuggestions(searchTerm);

  displaySuggestions(suggestions);
});

function getSuggestions(searchTerm) {
  const hardCodedSuggestions = ["채팅", "알림", "검색", "당근페이"];

  return hardCodedSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().startsWith(searchTerm)
  );
}

function displaySuggestions(suggestions) {
  searchSuggestions.innerHTML = "";
  if (suggestions.length > 0) {
    suggestions.forEach((suggestion) => {
      const li = document.createElement("li");
      li.textContent = suggestion;
      li.addEventListener("click", () => {
        searchInput.value = suggestion;
        searchSuggestions.style.display = "none";
      });
      searchSuggestions.appendChild(li);
    });
    searchSuggestions.style.display = "flex";
  } else {
    searchSuggestions.style.display = "none";
  }
}