"use client";
import { useState } from "react";
import { Tooltip } from "@/components/motion/tooltip";
import { MorphingModal } from "@/components/motion/morphing-modal";
import { rssFeeds } from "@/lib/rss-feeds.mjs";

type Story={title:string;originalTitle?:string;summary?:string;note?:string;url:string;publisher:string;date:string;dateLabel:string};
type SourceStatus={name:string;status:string;count:number};
const sources=[
 ...Array.from(new Map(rssFeeds.map(feed=>[feed.publisher,{name:feed.publisher,url:new URL(feed.url).origin,feeds:rssFeeds.filter(item=>item.publisher===feed.publisher)}])).values()),
 {name:'GDELT',url:'https://www.gdeltproject.org',feeds:[{id:'GDELT',category:'Indonesia',url:'https://www.gdeltproject.org'}]},
];
const dateLabels:Record<string,string>={Indexed:'Terindeks',Published:'Diterbitkan'};
function tanggal(value:string){return new Intl.DateTimeFormat('id-ID',{dateStyle:'medium',timeZone:'UTC'}).format(new Date(value));}

function Favicon({url,name}: {url:string;name:string}) {
 const [failed,setFailed]=useState(false);
 return <span className="source-favicon" aria-hidden="true">{failed?name[0]:<img src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(new URL(url).hostname)}&sz=64`} width="24" height="24" alt="" loading="lazy" referrerPolicy="no-referrer" onError={()=>setFailed(true)}/>}</span>;
}

export function StoryInfo({article,cached}: {article:Story;cached:boolean}) {
 return <Tooltip label={`Berita di balik "${article.title}"`}>
  <div className="story-publisher"><Favicon url={article.url} name={article.publisher}/><span>{article.publisher}</span>{cached&&<span>Cache</span>}</div>
  <h3>{article.originalTitle??article.title}</h3>
  <p>{article.summary||article.note||'Sumber ini hanya memberi judul. Buka pemberitaan aslinya untuk cerita lengkap.'}</p>
  <footer><span>{dateLabels[article.dateLabel] ?? article.dateLabel} {tanggal(article.date)}</span><a href={article.url} target="_blank" rel="noreferrer">Baca berita asli <span aria-hidden="true">↗</span></a></footer>
 </Tooltip>;
}

export function Sources({statuses=[]}: {statuses?:SourceStatus[]}) {
 const [view,setView]=useState<string|null>(null);
 const selected=sources.find(source=>source.name===view);
 return <div className="sources-footer"><MorphingModal viewId={view} onClose={()=>setView(null)} title={selected?.name??'Di balik patch notes'} trigger={
  <button type="button" className="sources-trigger" onClick={()=>setView('all')}><span className="favicon-stack">{sources.slice(0,5).map(source=><Favicon key={source.name} {...source}/>)}</span><span><strong>{sources.length} sumber</strong></span><span className="sources-open" aria-hidden="true">↗</span></button>
 }>
  {selected?<div className="source-detail"><button className="sources-back" onClick={()=>setView('all')}>← Semua sumber</button><div className="source-detail-heading"><Favicon {...selected}/><a href={selected.url} target="_blank" rel="noreferrer">Kunjungi {selected.name} ↗</a></div><ul>{selected.feeds.map(feed=>{const status=statuses.find(item=>item.name===feed.id);return <li key={feed.id}><a href={feed.url} target="_blank" rel="noreferrer">{feed.category} ↗</a><span>{status?.status==='available'?`${status.count} berita terbaru`:status?.status==='cached'?'Berita dari cache':status?'Sementara tidak tersedia':'Belum diperiksa'}</span></li>;})}</ul></div>:<><p className="sources-intro">{1+rssFeeds.length} feed yang kami periksa untuk merakit changelog kecil ini.</p><div className="sources-list">{sources.map(source=><button type="button" key={source.name} onClick={()=>setView(source.name)}><Favicon {...source}/><span>{source.name}<small>{source.feeds.length} feed</small></span><span aria-hidden="true">›</span></button>)}</div></>}
 </MorphingModal></div>;
}
