// adjustSitemap.js

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');

// Go through the sitemap file
const sitemapFiles = glob.sync(path.join('./build', 'sitemap*.xml'));

sitemapFiles.forEach((sitemapFile) => {
  // Read and parse the file
  const sitemapContent = fs.readFileSync(sitemapFile);
  const $ = cheerio.load(sitemapContent, { xmlMode: true });

  // Select all <loc> elements
  $('urlset > url > loc').each(function () {
    let url = $(this).text();
    if (!url.endsWith('/')) {
      $(this).text(`${url}/`);
    }
  });

  // Write the modified XML back to the file
  fs.writeFileSync(sitemapFile, $.xml());
});
