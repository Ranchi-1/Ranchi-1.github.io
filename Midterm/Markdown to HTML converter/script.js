function convertMarkdown(text) {
  const markdownInput = document.getElementById("markdown-input");
  const markdown = text !== undefined ? text : (markdownInput ? markdownInput.value : "");

  return markdown

    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
  
    .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")

    .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')

    .replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>")

    .replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");
}

const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

if (markdownInput) {
  markdownInput.addEventListener("input", () => {
    const converted = convertMarkdown(markdownInput.value);
    if (htmlOutput) htmlOutput.textContent = converted;
    if (preview) preview.innerHTML = converted;
  });
}
