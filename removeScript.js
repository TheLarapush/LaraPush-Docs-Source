// removeScript.js

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const cheerio = require('cheerio');

// Go through all HTML files
const htmlFiles = glob.sync(path.join('./build', '**/*.html'));

htmlFiles.forEach((htmlFile) => {
  // Read and parse the file
  const fileContent = fs.readFileSync(htmlFile, 'utf-8');
  const $ = cheerio.load(fileContent);

  // Remove specific script tags
  $('script').each(function () {
    let src = $(this).attr('src');

    // If the src starts with certain paths, remove the script tag
    if (
      src &&
      (src.startsWith('/guide/assets/js/runtime~main') ||
        src.startsWith('/guide/assets/js/main'))
    ) {
      $(this).remove();
    }
  });

  // Write the modified HTML back to the file
  fs.writeFileSync(htmlFile, $.html());
});
