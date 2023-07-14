const fs = require('fs');
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');

module.exports = function (context, options) {
  return {
    name: 'unique-canonical-plugin',
    async postBuild({ outDir, routesPaths }) {
      // Go through each generated HTML file
      const htmlFiles = glob.sync(path.join(outDir, '**/*.html'));

      htmlFiles.forEach((htmlFile) => {
        // Read and parse the file
        const htmlContent = fs.readFileSync(htmlFile);
        const $ = cheerio.load(htmlContent);

        // Select any existing canonical links
        const canonicalLink = $('head > link[rel="canonical"]');

        canonicalLink.each(function () {
          let href = $(this).attr('href');
          if (!href.endsWith('/')) {
            $(this).attr('href', `${href}/`);
          }
        });

        // Write the modified HTML back to the file
        fs.writeFileSync(htmlFile, $.html());
      });
    },
  };
};
