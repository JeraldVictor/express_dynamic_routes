const path = require("path");
const glob = require("glob");

module.exports = async (app, roure_dir) => {
  let list = await glob.sync(roure_dir + "/**/*.js");
  list.forEach(async (file) => {
    // console.log(file);
    let parent_dr = path.dirname(file);
    if (parent_dr == roure_dir) {
      await app.use(
        path.basename(file, ".js") == "index"
          ? "/"
          : "/" + path.basename(file, ".js"),
        require(file)
      );
    } else {
      await app.use(
        path.dirname(file).substr(roure_dir.length) +
          (path.basename(file, ".js") != "index"
            ? "/" + path.basename(file, ".js")
            : "/"),
        require(file)
      );
    }
  });
};
