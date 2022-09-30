const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsPane = document.querySelectorAll('.tabs__pane');


const showContentTab = () => {
  tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('tabs__nav-btn-active')) {
        tabsBtn.forEach(function (nav) {
          nav.classList.remove('tabs__nav-btn-active');
        });
        tabsPane.forEach(function (pane) {
          pane.classList.remove('tabs__pane-show');
        });
        currentBtn.classList.add('tabs__nav-btn-active');
        currentTab.classList.add('tabs__pane-show');
      }
    });
  });
  document.querySelector('.tabs__nav-btn').click();
};

export {showContentTab};
