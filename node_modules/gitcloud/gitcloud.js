const axios = require('axios');
const cheerio = require('cheerio');

function gitCloud(pageUrl) {
  return axios.get(pageUrl)
  .then(function (response) {
    const $ = cheerio.load(response.data);

    const fileIndex = $('#file-index').find('a').map((index, element) => {
      const elementJq = $(element);
      return {
        name: elementJq.text(),
        url: elementJq.attr('href')
      };
    }).get();

    return fileIndex;
  });
}

module.exports = gitCloud;
