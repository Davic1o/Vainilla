const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/"> <img src="https://static.wikia.nocookie.net/wiki-de-rick-morty/images/e/e6/Site-logo.png/revision/latest?cb=20210720140758&path-prefix=es" alt="">
            
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
  `;
  return view;
};

export default Header;