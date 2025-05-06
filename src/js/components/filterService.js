export const useFilterServices = () => {
  const filterControls = document.querySelector('.services__filter-list');
  const items = document.querySelectorAll('.services__item');

  if (!filterControls) return;

  const handleFilterClick = (event) => {
    const filterLink = event.target.closest('.services__filter-link');
    if (!filterLink) return;
    event.preventDefault();

    const filterLinkActive = document.querySelector('.services__filter-link--active');

    if (filterLinkActive) {
      filterLinkActive.classList.remove('services__filter-link--active');
    }

    filterLink.classList.add('services__filter-link--active');

    const filterValue = filterLink.textContent.trim();
    filterItems(filterValue);
  };

  const filterItems = (filterValue) => {
    items.forEach((item) => {
      const itemFilter = item.dataset.filter;

      if (filterValue === 'Все' || itemFilter === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  };

  const init = () => {
    filterControls.addEventListener('click', handleFilterClick);

    const defaultFilter = filterControls.querySelector('.services__filter-link--active');
    if (defaultFilter) {
      const defaultFilterValue = defaultFilter.textContent.trim();
      filterItems(defaultFilterValue);
    }
  };

  init();
};
