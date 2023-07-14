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
        const ogUrl = $('head > meta[property="og:url"]');

        // Update href and og:url if necessary
        [canonicalLink, ogUrl].forEach((element) => {
          if (element.length > 0) {
            element.each(function () {
              let href = $(this).attr('href') || $(this).attr('content');
              if (!href.endsWith('/')) {
                href = `${href}/`;
                $(this).is('[href]')
                  ? $(this).attr('href', href)
                  : $(this).attr('content', href);
              }
            });
          }
        });

        // Update hreflang links
        const hrefLangLinks = $('head > link[hreflang]');
        hrefLangLinks.each(function () {
          let href = $(this).attr('href');
          if (!href.endsWith('/')) {
            $(this).attr('href', `${href}/`);
          }
        });

        // Update internal links starting with /guide
        $('a[href^="/guide"]').each(function () {
          let href = $(this).attr('href');
          if (!href.endsWith('/')) {
            $(this).attr('href', `${href}/`);
          }
        });

        // If no canonical link is found, add your own
        if (canonicalLink.length === 0) {
          $('head').append(
            `<link rel="canonical" href="${context.siteConfig.url}${context.baseUrl}" />`
          );
        }

        // Write the modified HTML back to the file
        fs.writeFileSync(htmlFile, $.html());
      });
    },
  };
};
