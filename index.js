(() => {
  const sleep = async (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const main = async () => {
    while (true) {
      document.querySelector("#mcq_plugin_holder > label").click();
      document.querySelector("#next").click();
      await sleep(5000);
    }
  };

  main();
})();
