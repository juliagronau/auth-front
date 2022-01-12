const Home = () => {
    return (
      <div>
        <h1>Willkommen bei meiner Auth App</h1>
        <h2>
          Bitte logge dich ein, um cute Meerschweinchen-Pics
          runterzuladen
        </h2>
        <h6>Ansonsten ist die App nutzlos, sorry</h6>
        <div style={{textAlign: "center"}} className="mt-4">
          <iframe
            src="https://giphy.com/embed/pNiDRNtb9yWdi"
            width="480"
            height="393"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="guineapig-gif"
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/lol-eating-humor-pNiDRNtb9yWdi">
              via GIPHY
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Home;
  