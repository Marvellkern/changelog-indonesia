export const rssFeeds = [
 ['Google Berita · Indonesia','Google Berita','Top stories','https://news.google.com/rss?hl=id&gl=ID&ceid=ID:id'],
 ['Google Berita · Sains/Tekno/Lingkungan','Google Berita','Science & tech','https://news.google.com/rss/search?q=sains+OR+teknologi+OR+lingkungan+OR+konservasi+when:7d&hl=id&gl=ID&ceid=ID:id'],
 ['Tempo · Nasional','Tempo','Nasional','https://rss.tempo.co/nasional'],
 ['Tempo · Dunia','Tempo','Dunia','https://rss.tempo.co/dunia'],
 ['Media Indonesia','Media Indonesia','Nasional','https://mediaindonesia.com/feed'],
].map(([id,publisher,category,url])=>({id,publisher,category,url}));
