const searchForm = document.querySelector("#product-search-form");
const searchInput = document.querySelector("#q");
const searchStatus = document.querySelector("#search-status");

if (!searchForm || !searchInput || !searchStatus) {
  throw new Error("Không tìm thấy các thành phần cần thiết cho chức năng tìm kiếm.");
}

const productSections = Array.from(document.querySelectorAll(".product-section"));

if (productSections.length === 0) {
  throw new Error("Không tìm thấy danh mục sản phẩm để tìm kiếm.");
}

function normalizeText(value) {
  return value
    .toLocaleLowerCase("vi")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim()
    .replace(/\s+/g, " ");
}

function showSuggestions() {
  searchForm.classList.remove("search-submitted");
}

searchInput.addEventListener("focus", showSuggestions);
searchInput.addEventListener("input", showSuggestions);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchForm.classList.add("search-submitted");

  const query = normalizeText(searchInput.value);
  let matchCount = 0;

  productSections.forEach((section) => {
    const categoryName = section.querySelector(".section-heading h2");
    const products = Array.from(section.querySelectorAll(".product-card"));
    let sectionMatchCount = 0;

    products.forEach((product) => {
      const searchableFields = [
        product.querySelector(".product-info h3"),
        product.querySelector(".product-author"),
        product.querySelector(".product-type"),
        categoryName,
      ];

      const matches = !query || searchableFields.some((field) => (
        field && normalizeText(field.textContent).includes(query)
      ));

      product.hidden = !matches;
      if (matches) {
        sectionMatchCount += 1;
      }
    });

    section.hidden = sectionMatchCount === 0;
    matchCount += sectionMatchCount;
  });

  if (matchCount === 0) {
    searchStatus.textContent = "Không tìm thấy sản phẩm phù hợp.";
  } else if (query) {
    searchStatus.textContent = `Tìm thấy ${matchCount} sản phẩm phù hợp.`;
  } else {
    searchStatus.textContent = `Hiển thị tất cả ${matchCount} sản phẩm.`;
  }

  searchStatus.hidden = false;
});
